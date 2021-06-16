---
title: 快速开始
---

- [How to install](#how-to-install)
- [How to setup a development environment](#how-to-setup-a-development-environment)
- [How to setup a server](#how-to-setup-a-server)
- [How to setup a https server](#how-to-setup-a-https-server)
- [How to serve static assets](#how-to-serve-static-assets)
- [How to respond text or json or html or file](#how-to-respond-text-or-json-or-html-or-file)
- [How to access request info](#how-to-access-request-info)
- [How to match specific request](#how-to-match-specific-request)
- [How to pass new request info for downstream middleware](#how-to-pass-new-request-info-for-downstream-middleware)
- [How to filter and manipulate response in upstream middleware](#how-to-filter-and-manipulate-response-in-upstream-middleware)
- [How to set response headers](#how-to-set-response-headers)
- [How to set response cookies](#how-to-set-response-cookies)
- [How to set response status](#how-to-set-response-status)
- [How to redirect](#how-to-redirect)
- [How to merge responses](#how-to-merge-responses)
- [How to add router](#how-to-add-router)
- [How to add view-engine](#how-to-add-view-engine)
- [How to write a farrow hooks](#how-to-write-a-farrow-hooks)

## How to install

```shell
# via npm
npm install --save farrow farrow-pipeline farrow-schema farrow-http

# via yarn
yarn add farrow farrow-pipeline farrow-schema farrow-http
```

## How to setup a development environment

add `scripts` to your `package.json`

```json
{
  "scripts": {
    "dev": "farrow dev",
    "build": "farrow build",
    "start": "farrow start"
  }
}
```

and then:

- `npm run dev` for developing
- `npm run build` for bundling the source code
- `npm run start` for runing the output code of bundler

`farrow` assumes that your source code is in `src` folder, and the output code is in `dist` folder.

You can use `farrow.config.js` to change the default configuration, see the [documentation](./) for more detail.

## How to setup a server

```typescript
import { Http, Response } from 'farrow-http'

const http = Http()

// add http middleware
http.use(() => {
  // returning response in middleware
  return Response.text(`Hello Farrow`)
})

http.listen(3000)
```

## How to setup a https server

```ts
import { Https, Response } from 'farrow-http'

const CERT = fs.readFileSync(path.join(__dirname, './keys/https-cert.pem'))
const KEY = fs.readFileSync(path.join(__dirname, './keys/https-key.pem'))
const CA = fs.readFileSync(path.join(__dirname, 'keys/https-csr.pem'))

const https = Https({
  tsl: {
    cert: CERT,
    ca: CA,
    key: KEY,
  },
})

// add http middleware
https.use(() => {
  // returning response in middleware
  return Response.text(`Hello Farrow`)
})

https.listen(3000)
```

## How to serve static assets

```typescript
http.serve('/static', dirname)
```

## How to respond text or json or html or file

```typescript
// respond text
http.use(() => {
  return Response.text(`Farrow`)
})

// respond json
http.use(() => {
  return Response.json({
    farrow: true,
    data: {},
  })
})

// respond html
http.use(() => {
  return Response.html(`<h1>Farrow</h1>`)
})

// respond file
http.use(() => {
  return Response.file(filename)
})
```

## How to access request info

```typescript
http.use((request) => {
  // access request pathname
  console.log('pathname', request.pathname)

  // access request method
  console.log('method', request.method)

  // access request query
  console.log('query', request.query)

  // access request body
  console.log('body', request.body)

  // access request headers
  console.log('headers', request.headers)

  // access request cookies
  console.log('cookies', request.cookies)
})
```

## How to match specific request

Click [Router-Url-Schema](./api/03-farrow-http.md#router-url-schema) to read more

```typescript
// http.match(schema).use(...middlewares)
// farrow will validate request info and extract the data for middlewares
// schema has the similar shape like request info: { pathname, method, query, body, headers, cookies, params }
// the params is readed from path-to-regexp if you config schema.pathname to be /product/:id, and params is equal to { id }
// learn more about pathname: https://github.com/pillarjs/path-to-regexp#usage
http
  .match({
    pathname: '/product',
    // if method was not given, the default value wounld be `GET`.
    query: {
      productId: Number,
    },
  })
  .use((request) => {
    // productId is a number
    console.log('productId', request.query.productId)
  })

// or using routing-methods
http.get('/get0/<arg0:int>?<arg1:int>').use((request) => {
  return Response.json({
    type: 'get',
    request,
  })
})
```

## How to pass new request info for downstream middleware

```typescript
http.use((request, next) => {
  // no need to modify the request, just calling next(new_request) with a new request info
  return next({
    ...request,
    pathname: '/fixed',
  })
})

http.use((request) => {
  // request pathname will be '/fixed'
  console.log('pathname', request.pathname)
})
```

## How to filter and manipulate response in upstream middleware

```typescript
http.use(async (request, next) => {
  // next() returning response received from downstream
  let response = await next()
  let headers = {
    'header-key': 'header-value',
  }
  // filter or merge response and return
  return Response.headers(headers).merge(response)
})

http.use(async (request) => {
  return Response.json(request)
})
```

## How to set response headers

```typescript
http.use(() => {
  return Response.header('a', '1').header('b', '2').text('ok')
})

// or

http.use(() => {
  return Response.headers({
    a: '1',
    b: '2',
  }).text('ok')
})
```

## How to set response cookies

```typescript
http.use(() => {
  return Response.cookie('a', '1').cookie('b', '2').text('ok')
})

// or

http.use(() => {
  return Response.cookies({
    a: '1',
    b: '2',
  }).text('ok')
})
```

## How to set response status

```typescript
http.use(() => {
  return Response.status(404, 'Not Found').html('some text')
})
```

## How to redirect

```typescript
http.use(() => {
  return Response.redirect(targetUrl)
})
```

## How to merge responses

```typescript
let response0 = Response.status(200)
let response1 = Response.header('a', '1')
let response2 = Response.header('b', '2')
let response3 = Response.cookie('c', '3')

let response = Response.merge(response0, response1, response2, response3)
// or
let response = response0.merge(response1, response2, response3)
```

## How to add router

`Router()` has the same methods like `Http()` except `http.listen(...)` and `http.server()`

```typescript
import { Http, Router, Response } from 'farrow-http'

// create http
const http = Http()

// create product router
const product = Router()

// create user router
const user = Router()

// add sub route for product
http.route('/product').use(product)

// add sub route for user
http.route('/user').use(user)

http.listen(3000)

// handle product router
// this will match /product/:id
product.get('/<id:int>').use(async (request) => {
  return Response.json({
    productId: request.params.id,
  })
})

// this will match /product/info
product.get('/info').use(async (request) => {
  return Response.json({
    productInfo: {},
  })
})

// handle user router
// this will match /user/:id
user.get('/<id:int>').use(async (request) => {
  return Response.json({
    userId: request.params.id,
  })
})

// this will match /user/info
user.get('/info').use(async (request) => {
  return Response.json({
    userInfo: {},
  })
})
```

## How to add view-engine

`Farrow` provide an official server-side rendering library based on `React`, but you can implement your own via `Response.html(...)` or `Response.stream(...)`.

```shell
# via npm
npm install --save react react-dom farrow-react

# via yarn
yarn add react react-dom farrow-react
```

```tsx
import React from 'react'
import { useReactView } from 'farrow-react'
// use Link to auto prefix basename came from http.route(name, ...) or router.route(name, ...)
import { Link } from 'farrow-react/Link'

http.use(() => {
  let ReactView = useReactView({
    docType: '<!doctype html>', // optional, specify the doctype in html response
    useStream: true, // optional, if ture it will use ReactDOMServer.renderToNodeStream internally
  })

  return ReactView.render(
    <>
      <h1>Hello Farrow-React</h1>
      <Link href="/">Home</Link>
    </>,
  )
})
```

## How to write a farrow hooks

[Click here to learn more.](./api/05-farrow-pipeline.md#createcontextdefaultvalue-t-context)

```tsx
import { createContext } from 'farrow-pipeline'
import { Http, HttpMiddleware } from 'farrow-http'
import { useReactView } from 'farrow-react'

// define an interface
interface User {
  id: string
  name: string
  email: string
}

// define a farrow context via interface
const UserContext = createContext<User | null>(null)

// define a provider
const UserProvider = (): HttpMiddleware => {
  return async (request, next) => {
    let session = SessionContext.get()
    let db = DbContext.get()

    if (!request?.cookies?.token) {
      return next()
    }

    let userId = await session.read(request?.cookies?.token)

    let user = await db.query({
      User: {
        token,
      },
    })

    UserContext.set(user)

    return next()
  }
}

const http = Http()

http.use(UserProvider())

http
  .match({
    pathname: '/userinfo',
  })
  .use(async (request, next) => {
    let ReactView = useReactView()
    // assert context value is not null or undefined and return context value
    let user = UserContext.assert()

    return ReactView.render(<div>{JSON.stringify(user)}</div>)
  })
```
