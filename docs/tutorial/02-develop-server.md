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

Then look at the `server/api/index.ts` file。

It imports the `farrow-http` `Router`, imports the `greet service` defined earlier, then creates the `Router` and hooks the `greet service` to the path `/api/greet`.

In the `server/api/index.ts` module, we can compose each `api service` as needed and expose a separate `router` object to the outside.

```typescript
// server/api/index.ts
import { Router } from 'farrow-http';
import { service as GreetService } from './greet';

export const services = Router();

// attach greet service
services.route('/api/greet').use(GreetService);
```

And then, in `server/index.ts`, create the `http` and mount it on the `router`, then `listen(port)` to start an `http server`.

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

In `server/index.ts`, we have enabled `services` and `vite`, which handle `api` and `page` respectively.

Next, let's take a look at the front-end development. Executing the command `npm run dev` will start the application.
