---
title: farrow-pipeline
---

Type-Friendly middleware library.

A tool to manage functions which allows middleware(function) to process data and control if pass data to next middleware.

## Installation

```shell
# via npm
npm install farrow-pipeline

# via yarn
yarn add farrow-pipeline
```

## Usage

There are two things in this manager: **data** and **middlewares(which process the data)**.

### Middleware

It has tool functions: `createPipeline` and `createAsyncPipeline` to create a **pipeline** which manage all middleware.

#### Simple

```ts
import { createPipeline } from 'farrow-pipeline'

const pipeline = createPipeline<number, number>()

pipeline.use((count) => {
  return count + 1
})

pipeline.run(1) // 2
pipeline.run(5) // 6
```

In this case, data is number which passed to `pipeline.run`, and middleware is which passed to `pipeline.use`. When you creating a pipeline you should give the type of data which it can accept.

#### Pass data to next middleware

Call the second middleware by calling the `next` function in the first middleware.

```ts
import { createPipeline } from 'farrow-pipeline'

const pipeline = createPipeline<number, number>()

pipeline.use((count, next) => {
  return next(count + 1)
})

pipeline.use((count, next) => {
  return count * 2
})

pipeline.run(1) // 4
pipeline.run(5) // 12
```

#### More middlewares

Attach more middlewares by `pipeline.use`.

```ts
import { createPipeline } from 'farrow-pipeline'

const pipeline = createPipeline<number, number>()

pipeline.use((count, next) => {
  return next(count + 1)
})

pipeline.use((count, next) => {
  return next(count * 2)
})

pipeline.use((count, next) => {
  return count -1
})

pipeline.run(1) // 3
pipeline.run(5) // 11
```

#### Compose pipeline

Compose pipeline by `pipeline.use`, pipeline also can be a middleware.

```ts
import { createPipeline } from 'farrow-pipeline'

const pipeline1 = createPipeline<number, number>()

pipeline1.use((count, next) => {
  return next(count + 1)
})

const pipeline2 = createPipeline<number, number>()

// pipeline also can be a middleware
pipeline2.use(pipeline1)

pipeline2.use((count, next) => {
  return next(count * 2)
})

pipeline.run(1) // 3
pipeline.run(5) // 11

```

#### Call next in condition

```ts
...

pipeline.use((count, next) => {
  if (count < 5) {
    return next(count * 2)
  } else {
    return next(count)
  }
})

...

pipeline.run(1) // 3
pipeline.run(5) // 5
```

#### Default middleware

Call `run` with a `onLast` option which will call after all middlewares. That all middleware could not care if i am the latest one(call the next will throw error because there is no next middleware).

```ts
pipeline.run(1, { onLast: (count) => count }) // 4
pipeline.run(5, { onLast: (count) => count }) // 12
```

#### Async Pipeline

Create async pipeline to manage async functions.

```ts
import { createAsyncPipeline } from 'farrow-pipeline'

const pipeline = createAsyncPipeline<number, number>()

pipeline.use(async (count, next) => {
  await i++
  return next(count + 1)
})

pipeline.use(async (count, next) => {
  return next(count * 2)
})

pipeline.run(1, { onLast: (count) => count }) // 4
pipeline.run(5, { onLast: (count) => count }) // 12
```

### Context

In addition to basic data, also can set the shared data with context.

#### Simple Context

Frist, create a context.

```ts
import { createPipeline, createContext, createContainer } from 'farrow-pipeline

const limitContext = createContext(5)
const useLimit = () => {
  return limitContext.use().value
}
```

Create a pipeline which will use the context value.

```ts
const pipeline = createPipeline<number, number>()

pipeline.use((count) => {
  // get the limit context value
  const limit = useLimit()

  if (count < limit) {
    return count * 2
  } else {
    return count
  }
})
```

Create a container which contain the context created before and run pipeline with this container.

```ts
const conainter = createContainer({
  limit: limitContext
})

pipeline.run(1, { container }) // 2
pipeline.run(3, { container }) // 6
pipeline.run(5, { container }) // 5
```

#### Set new context value when running pipeline

```ts
const conainter = createContainer({
  limit: limitContext.create(3)
})

pipeline.run(1, { container }) // 2
pipeline.run(3, { container }) // 3
pipeline.run(5, { container }) // 5
```

```ts
pipeline.run(1) // 2
pipeline.run(3) // 6
pipeline.run(5) // 5
```

## API

### createPipeline

create a sync pipeline which manage sync middlewares.

#### Type

```ts
<I, O>(options?: PipelineOptions) => Pipeline<I, O>
```

#### Options

```ts
export type PipelineOptions = {
  contexts?: ContextStorage
}
```

* contexts

Contexts for injecting to the pipeline.

```ts
export type ContextStorage = {
  [key: string]: Context
}
```

#### Pipeline

```ts
export type Pipeline<I = unknown, O = unknown> = {
  [PipelineSymbol]: true
  use: (...inputs: MiddlewareInput<I, O>[]) => Pipeline<I, O>
  run: (input: I, options?: RunPipelineOptions<I, O>) => O
  middleware: Middleware<I, O>
}
```

##### `use`

Mount middlewares to this **pipeline**.

Middleware:

```ts
export type Middleware<I = unknown, O = unknown> = (input: I, next: Next<I, O>) => O
export type MiddlewareInput<I = unknown, O = unknown> = Middleware<I, O> | { middleware: Middleware<I, O> }
```

The `Input` and `Output` type is up to type passed to `createPipeline`

It return the origin pipeling, so you can do like this:

```ts
pipeline.use(middleware1).use(middleware2).use(middleware2).run()
```

##### `run`

Run all middleware with a initial data.

```ts
pipeline.run(initialData)
```

Options

```ts
export type RunPipelineOptions<I = unknown, O = unknown> = {
  container?: Container
  onLast?: (input: I) => O
}
```

* `container`: containe all context used in pipeline middleware
* `onLast`: if all middleware called next, then onLast would be called, run after all middlewares

##### `middleware`

`pipeline.middleware` can use in another `pipeline.use(...)` if their type is matched.

It let pipeline can be middleware that pipeline can compose by `pipeline.use`

### createAsyncPipeline

Create async pipeline which manage async middleware.

#### Type

```ts
<I, O>(options?: PipelineOptions | undefined) => AsyncPipeline<I, O>
```

#### Options

It is same to `createPipeline`

```ts
export type PipelineOptions = {
  contexts?: ContextStorage
}
```

#### `AsyncPipeline`

```ts
export type MaybeAsync<T> = T | Promise<T>

export type ThunkMiddlewareInput<I, O> = () => MaybeAsync<MiddlewareInput<I, MaybeAsync<O>>>

export type AsyncPipeline<I = unknown, O = unknown> = Pipeline<I, MaybeAsync<O>> & {
  useLazy: (thunk: ThunkMiddlewareInput<I, O>) => AsyncPipeline<I, O>
}
```

Lazy load the middleware.

### createContext

create a injectable context

createContext is like `React.createContext`, we can use it injecting anything we want, and access `Context` in any middleware or custom-hooks function.

```typescript
type Context<T = any> = {
  id: symbol
  [ContextSymbol]: T
  // create a new context equipped a new value
  create: (value: T) => Context<T>
  // get context ref { value } for accessing context in current container of pipeline
  use: () => {
    value: T
  }
  // get context value
  get: () => T
  // set context value
  set: (value: T) => void
  // assert context value is not null or undefined and return context value
  assert: () => Exclude<T, undefined | null>
}

const Context0 = createContext(0)

const pipeline = createPipeline<number, number>({
  contexts: {
    // inject Context0 equipped 10 into pipeline
    context0: Context0.create(10),
  },
})

pipeline.use((input, next) => {
  return next(input) + Context0.get()
})

pipeline.use((input) => {
  Context0.set(Context0.get() + 1)
  return input
})

let result0 = pipeline.run(10) // return 21
let result1 = pipeline.run(20) // return 31
```

### createContainer

create a container to manage contexts

```typescript
type ContextStorage = {
  [key: string]: Context
}

type Container = {
  // read current value of Context
  read: <V>(Context: Context<V>) => V
  // write current value of Context
  write: <V>(Context: Context<V>, value: V) => void
}

const Context0 = createContext(0)
const Context1 = createContext<number[]>([])

const container = createContainer({
  context0: Context0.create(10),
  context1: Context1.create([10]),
})

container.read(Context0) // 10
container.read(Context1) // [10]

container.write(Context0, 1)
container.write(Context1, [11])

container.read(Context0) // 1
container.read(Context1) // [11]

const pipeline = createPipeline<number, number>()

pipeline.run(10, {
  // use container to replace pipeline's internal container
  container: container,
})

// accessing value of Context0/Context1 after pipeline.run(...)
container.read(Context0) // current value of Context0
container.read(Context1) // current value of Context1
```
