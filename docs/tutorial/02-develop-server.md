---
title: Develop Server
---

Simple sample code has been included in the `farrow-vite-react` project template, now let's unpack the server-side part.

Look at the server/api/greet.ts file first

- import farrow-api to define an api
- import farrow-api-server to contain a set of api for a service router
- import farrow-schema to define the schema structure of api

```typescript
// server/api.greet.ts
import { Api } from 'farrow-api';
import { ApiService } from 'farrow-api-server';
import { ObjectType, Type } from 'farrow-schema';
```

Then, define the input schema of the greet api by ObjectType. the simplest way is demonstrated here, without the description of the fields

```typescript
export class GreetInput extends ObjectType {
  name = String;
}
```

And then define the output schema of the greet api by ObjectType. Here a structure with a description field is used, and the type of the field needs to be configured at the `[Type]` property.

```typescript
export class GreetOutput extends ObjectType {
  greet = {
    description: 'The greeting came from server',
    [Type]: String,
  };
}
```

Define an api function with input schema and output schema, `Api({ description, input, output }, fn)` ，implement this api in function `fn`.

```typescript
export const greet = Api(
  {
    description: 'Greeting',
    input: GreetInput,
    output: GreetOutput,
  },
  (input) => {
    let greet = `Hello ${input.name}!`;
    return { greet };
  }
);
```

`greet` is a normal function that is not yet associated with any `server`. We can package multiple `api`'s into `entries` using the `ApiService` function of the `farrow-api-server` module.

`ApiServer(options)` return a `router` object of `farrow-http` which can be mount on the specified route.

```typescript
export const service = ApiService({
  entries: {
    greet,
  },
});
```

再来看看`server/api/index.ts`文件。

它导入了 `farrow-http` 的 `Router`，导入了前面定义的 `greet service`，然后创建 `Router`，将 `greet service` 挂在到路径 `/api/greet` 上。

在 `server/api/index.ts` 模块中，我们可以按需把各个 `api service` 都整合起来，对外部暴露一个独立的 `router` 对象即可。

```typescript
// server/api/index.ts
import { Router } from 'farrow-http';
import { service as GreetService } from './greet';

export const services = Router();

// attach greet service
services.route('/api/greet').use(GreetService);
```

然后在 `server/index.ts` 中，创建 `http` 并挂在 `router` 上去，然后 `listen(port)` 启动一个 `http server`。

```typescript
// server/index.ts
import path from 'path';
import { Http } from 'farrow-http';
import { vite } from 'farrow-vite';

import { services } from './api';

// create http server
const http = Http();

// attach service for api
http.use(services);

// attach vite or assets for page
if (process.env.NODE_ENV === 'development') {
  // enable vite-dev-server when development
  http.use(vite());
} else {
  // enable vite-bundle-output when production
  http.serve('/', path.join(__dirname, '../dist/client'));
}

// start listening
http.listen(3003, () => {
  console.log('server started at http://localhost:3003');
});
```

在 `server/index.ts` 中，我们启用了 `services` 和 `vite`，分别处理 `api` 和 `page`。

接下来，我们来看看前端开发的情况，执行命令 `npm run dev` 可以启动应用。
