---
title: Develop Todo Service
---

## Introduction for Todo app

The proposed todo-app we are about to develop has a relatively simple interface, roughly as shown below:

![todo-app](/img/todo-app.png)

It contains the following functions:

- Enter the new todo content and press enter to add it
- For each todo item
  - You can toggle the `completed/active` status
  - You can delete
  - You can double-click to start editing
- All todo items with `completed` status can be made clear.

We need to implement a set of server-side `api`'s and that support:

- `getTodos` to get the current `todos`
- `addTodo` adds a new `todo`
- `removeTodo` Remove `todo`
- `updateTodo` update `todo`
- `clearCompleted` to clear all completed `todos`

Then the frontend reuses the server-side type and interface call code via `farrow-api` to develop the interface based on `react`.

## Todo Service

Create `server/api/todo.ts` file and import the depended modules。

```typescript
import { Api } from 'farrow-api';
import { ApiService } from 'farrow-api-server';
import {
  Int,
  List,
  Literal,
  Nullable,
  ObjectType,
  Type,
  TypeOf,
  Union,
} from 'farrow-schema';
```

Then the `Todo Schema` is defined and the types contained in the `Todo Schema` are extracted by `TypeOf`. Then, we construct the `Todos Schema` using the `List` function of `farrow-schema`.

```typescript
export class Todo extends ObjectType {
  id = {
    description: 'todo id',
    [Type]: Int,
  };
  content = {
    description: 'todo content',
    [Type]: String,
  };
  completed = {
    description: 'todo status',
    [Type]: Boolean,
  };
}

export type TodoType = TypeOf<Todo>;

export const Todos = List(Todo);
```

Note that the above looks a bit redundant, but each part has its role, for example, `description` becomes an annotation after `codegen` to the front-end and is a way to document the api.

The types obtained by the front-end are shown below.

```typescript
/**
 * {@label Todo}
 */
export type Todo = {
  /**
   * @remarks todo id
   */
  id: number;
  /**
   * @remarks todo content
   */
  content: string;
  /**
   * @remarks todo status
   */
  completed: boolean;
};
```

### getTodos

Next, we can define the first interface `getTodos`.

```ts
let uid = 0;

let todos: TodoType[] = [];

export const getTodos = Api(
  {
    description: 'get todos',
    input: {},
    output: {
      todos: {
        description: 'all todos',
        [Type]: Todos,
      },
    },
  },
  () => {
    return {
      todos,
    };
  }
);
```

Although `getTodos` does not require parameters, the `input schema` still needs to be set to `{}`, because `farrow-api` does not currently support setting interface contracts without parameters.

The `output schema` of `getTodos` is `{ todos }`, then we use the in-memory `todos` array to emulate the database and return `{ todos }` directly within the function body of the `getTodos` interface.

A simple interface is implemented.

### addTodo

Next, let's define the `addTodo` interface.

The `addTodo` interface, which contains a non-empty `input schema` and a non-empty `output schema`, is a bit more complex than the implementation of the `getTodos` interface.

```ts
export class AddTodoInput extends ObjectType {
  content = {
    description: 'todo content to add',
    [Type]: String,
  };
}

export class InvalidAddTodoInput extends ObjectType {
  type = Literal('InvalidAddTodoInput');
  message = String;
}

export class AddTodoSuccess extends ObjectType {
  type = Literal('AddTodoSuccess');
  todo = {
    description: 'a new todo',
    [Type]: Todo,
  };
}

const AddTodoOutput = Union(InvalidAddTodoInput, AddTodoSuccess);

AddTodoOutput.displayName = 'AddTodoOutput';

export const addTodo = Api(
  {
    description: 'add todo',
    input: AddTodoInput,
    output: AddTodoOutput,
  },
  (input) => {
    if (input.content.length === 0) {
      return InvalidAddTodoInput.create({
        type: 'InvalidAddTodoInput',
        message: 'todo content is empty',
      });
    }

    const todo: TodoType = {
      id: uid++,
      content: input.content,
      completed: false,
    };

    todos.push(todo);

    return AddTodoSuccess.create({
      type: 'AddTodoSuccess',
      todo,
    });
  }
);
```

When declaring the Todo Schema via `class Todo extends ObjectType`, we used the `Todo.name` that comes with the `class` to access the `class name`.

However, the `AddTodoOutput` of `const AddTodoOutput = Union(InvalidAddTodoInput, AddTodoSuccess);` is a normal variable name and requires the `displayName` property to be configured.

This property is not required and will work without it. However, `AddTodoOutput` is inlined at `codegen` time everywhere it is used, and it is difficult for the front-end to index it directly by type name.

After configuring `displayName`, the code is generated as follows.

```typescript
/**
 * {@label AddTodoOutput}
 */
export type AddTodoOutput = InvalidAddTodoInput | AddTodoSuccess;
```

Another thing worth emphasizing is that we have used `Discriminated Unions` or `Tagged Unions` to express the `Success/Failure` mutually exclusive relationship instead of using the `Http status code`.

We can consume the data as follows:

```ts
let result = await api.addTodo({
  content: 'some text',
});

if (result.type === 'InvalidAddTodoInput') {
  // handle invalid input
  return handleInvalidInput(result.message);
} else if (result.type === 'AddTodoSuccess') {
  // handle success
  return handleAddTodoSuccess(result.todo);
}
```

With `Tagged Unions`, the back-end interface can force the front-end to handle different `cases`, and `TypeScript` will constrain how the front-end consumes the data through type checking.

### removeTodo

Next, we add the `removeTodo` interface, which is similar to the `addTodo` interface.

Define the `input schema`, in this case RemoveTodoInput
Define `output schemas`, which are merged into `output schema` by `Tagged Unions`
Use `input schema` + `output schema` to define the api schema
Implement this interface

```ts
export class RemoveTodoInput extends ObjectType {
  todoId = {
    description: 'todo id wait for removing',
    [Type]: Int,
  };
}

export class TodoIdNotFound extends ObjectType {
  type = Literal('TodoIdNotFound');
  todoId = {
    description: 'invalid todo id',
    [Type]: Int,
  };
}

export class RemoveTodoSuccess extends ObjectType {
  type = Literal('RemoveTodoSuccess');
  todoId = {
    description: 'todo id that removed',
    [Type]: Int,
  };
  todos = {
    description: 'current todos',
    [Type]: Todos,
  };
}

export const RemoveTodoOutput = Union(TodoIdNotFound, RemoveTodoSuccess);

export const removeTodo = Api(
  {
    description: 'remove todo',
    input: RemoveTodoInput,
    output: RemoveTodoOutput,
  },
  (input) => {
    const index = todos.findIndex((todo) => todo.id === input.todoId);

    if (index === -1) {
      return TodoIdNotFound.create({
        type: 'TodoIdNotFound',
        todoId: input.todoId,
      });
    }

    todos.splice(index, 1);

    return RemoveTodoSuccess.create({
      type: 'RemoveTodoSuccess',
      todoId: input.todoId,
      todos,
    });
  }
);
```

It is worth mentioning that the `Schema.create(value)` method, such as `RemoveTodoSuccess.create`, does not actually do anything special internally, it just returns `value`.

The purpose of the `create` method is to make the type derivation more accurate, as we often use `Literal String Type` as the type of `Tag` fields when using the `Tagged Unions` pattern. Using a literal directly, such as `RemoveTodoSuccess`, will often be derived as a `string` type. With the help of the `create` method, we can derive the `Literal type` more accurately.

### updateTodo

Next, we implement the `updateTodo` interface.

```ts
export class UpdateTodoInput extends ObjectType {
  todoId = {
    description: 'todo id wait for update',
    [Type]: Int,
  };
  content? = {
    description: 'new todo content',
    [Type]: Nullable(String),
  };
  completed? = {
    description: 'new todo status',
    [Type]: Nullable(Boolean),
  };
}

export class UpdateTodoSuccess extends ObjectType {
  type = Literal('UpdateTodoSuccess');
  todoId = {
    description: 'todo id that updated',
    [Type]: Int,
  };
  todos = {
    description: 'current todos',
    [Type]: Todos,
  };
}

export const UpdateTodoOutput = Union(TodoIdNotFound, UpdateTodoSuccess);

UpdateTodoOutput.displayName = 'UpdateTodoOutput';

export const updateTodo = Api(
  {
    description: 'update todo',
    input: UpdateTodoInput,
    output: UpdateTodoOutput,
  },
  (input) => {
    const targetTodo = todos.find((todo) => todo.id === input.todoId);

    if (!targetTodo) {
      return TodoIdNotFound.create({
        type: 'TodoIdNotFound',
        todoId: input.todoId,
      });
    }

    if (typeof input.content === 'string') {
      targetTodo.content = input.content;
    }

    if (typeof input.completed === 'boolean') {
      targetTodo.completed = input.completed;
    }

    return UpdateTodoSuccess.create({
      type: 'UpdateTodoSuccess',
      todoId: input.todoId,
      todos,
    });
  }
);
```

The interesting part here is how to define an optional field?

```ts
class MyObject extends ObjectType {
  content? = Nullable(String);
}
```

With `?=` together with `Nullable(X)` we can define an optional field.

### clearCompleted

Implement the `clearCompleted` interface.

```ts
export const clearCompleted = Api(
  {
    description: 'clear completed',
    input: {},
    output: {
      todos: {
        description: 'current todos',
        [Type]: Todos,
      },
    },
  },
  () => {
    todos = todos.filter((todo) => todo.completed !== false);

    return {
      todos,
    };
  }
);
```

Ease as `getTodos`。

### ApiService

In fact, the interfaces `getTodos`, `addTodo`, `removeTodo`, etc. implemented above are essentially functions, but through the `Schema` definition, we can derive the `TypeScript` type and get some `metadata` in `runtime` as well.

They are just functions, we need to bind it to an `http server`, which is done by the following code.

```ts
export const service = ApiService({
  entries: {
    getTodos,
    addTodo,
    removeTodo,
    updateTodo,
    clearCompleted,
  },
});
```

`ApiService` can convert a set of `entries` functions into `farrow-http` `router` objects that can be hooked up to an `HttpPipeline`.

```ts
// attach todo service
services.route('/api/todo').use(TodoService);
```

At this point, we have completed the server-side interface part of `TodoService`, so let's take a look at the front-end part of consuming the interface data.
