---
title: 服务端开发
---

在 `farrow-vite-react` 项目模板中，已经包含了简单的示例代码，现在让我们来解读一下服务端部分。

首先来看 `server/api/greet.ts` 文件

- 引入 farrow-api 去定义一个个 api
- 引入 farrow-api-server 去包含一组 api 为一个 service router
- 引入 farrow-schema 去定义 api 的 schema 结构

```typescript
// server/api.greet.ts
import { Api } from 'farrow-api';
import { ApiService } from 'farrow-api-server';
import { ObjectType, Type } from 'farrow-schema';
```

然后，通过 ObjectType 定义 greet api 的 input schema。此处演示了最简单的方式，不包含字段的描述

```typescript
export class GreetInput extends ObjectType {
  name = String;
}
```

再通过 ObjectType 定义 greet api 的 output schema。此处采用了带 description 字段描述的结构，此时字段的类型需要配置在 `[Type]` 属性中。

```typescript
export class GreetOutput extends ObjectType {
  greet = {
    description: 'The greeting came from server',
    [Type]: String,
  };
}
```

用 input schema 和 output schema 定义一个 api 函数，`Api({ description, input, output }, fn)` ，在 `fn` 函数中编写这个 api 的实现。

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

`greet` 是一个普通的函数，还未跟任何 `server` 关联起来，我们可以通过 `farrow-api-server` 模块的 `ApiService` 函数，将多个 api 打包成 `entries` 对象。

`ApiServer(options)` 返回一个 `farrow-http` 的 `router` 对象，可以挂载到指定的 path 上。

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
