(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,b=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return t?i.a.createElement(b,p(p({ref:n},l),{},{components:t})):i.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(7),a=(t(0),t(112)),o={title:"farrow-api-client"},p={unversionedId:"api/10-farrow-api-client",id:"api/10-farrow-api-client",isDocsHomePage:!1,title:"farrow-api-client",description:"farrow-api-client is an api-client for farrow-api-server",source:"@site/docs/api/10-farrow-api-client.md",slug:"/api/10-farrow-api-client",permalink:"/farrow-docs/docs/api/10-farrow-api-client",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/10-farrow-api-client.md",version:"current",sidebar:"api",previous:{title:"farrow-api-server",permalink:"/farrow-docs/docs/api/09-farrow-api-server"},next:{title:"farrow-vite",permalink:"/farrow-docs/docs/api/11-farrow-vite"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Api",id:"api",children:[]},{value:"apiPipeline",id:"apipipeline",children:[]}]}],l={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"farrow-api-client")," is an api-client for ",Object(a.b)("inlineCode",{parentName:"p"},"farrow-api-server")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-api-client\n\n# via yarn\nyarn add farrow-api-client\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Using ",Object(a.b)("a",{parentName:"p",href:"/farrow-docs/docs/api/02-farrow"},"farrow")," to codegen the ",Object(a.b)("inlineCode",{parentName:"p"},"api-client"),", and config apiPipeline if needed."),Object(a.b)("p",null,"Simply, we can ",Object(a.b)("inlineCode",{parentName:"p"},"import")," the file via codegen directly without modification."),Object(a.b)("p",null,"If we need to touch request/response, there are two ways."),Object(a.b)("p",null,"The first way only affects one url."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// import the apiPipeline from target module\nimport { apiPipeline } from '../api/todo'\n\n/**\n * farrow-api-client is based on farrow-pipeline\n * use pipeline.use(middleware) to do something you want\n */\napiPipeline.use(async (request, next) => {\n  /**\n   * add extra fileds for post requeset body\n   */\n  let body = {\n    ...request.body,\n    token: 'abc',\n  }\n\n  /**\n   * add extra headers for post request\n   */\n  let options: RequestInit = {\n    headers: {\n      'x-access-token': 'abc',\n    },\n  }\n\n  /**\n   * pass new request to next and await for the response\n   */\n  let response = await next({\n    ...request,\n    body,\n    options,\n  })\n\n  // handle the response if needed\n  return response\n})\n")),Object(a.b)("p",null,"The second way only affects all urls."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// import the apiPipeline from farrow-api-client\nimport { apiPipeline } from 'farrow-api-client'\n\n// all request performed via farrow-api-client will come here\n// it should be handled carefully\napiPipeline.use(async (request, next) => {\n  let response = await next(request)\n  return response\n})\n\n/**\n * match(string | regexp, middleware)\n * match the request url and handle it via farrow-pipeline\n * if pass a string, it will be matched by url.endsWith(pattern)\n * if pass a regexp, it will be matched by pattern.test(url)\n */\napiPipeline.match('/todo', async (request, next) => {\n  /**\n   * add extra fileds for post requeset body\n   */\n  let body = {\n    ...request.body,\n    token: 'abc',\n  }\n\n  /**\n   * add extra headers for post request\n   */\n  let options: RequestInit = {\n    headers: {\n      'x-access-token': 'abc',\n    },\n  }\n\n  /**\n   * pass new request to next and await for the response\n   */\n  let response = await next({\n    ...request,\n    body,\n    options,\n  })\n\n  // handle the response if needed\n  return response\n})\n")),Object(a.b)("h3",{id:"api"},"Api"),Object(a.b)("h3",{id:"apipipeline"},"apiPipeline"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export type ApiRequest = {\n  url: string\n  body: {\n    path: string[]\n    input: JsonType\n  }\n  options?: RequestInit\n}\n\nexport type ApiErrorResponse = {\n  error: {\n    message: string\n  }\n}\n\nexport type ApiSuccessResponse = {\n  output: JsonType\n}\n\nexport type ApiResponse = ApiErrorResponse | ApiSuccessResponse\n\nexport type ApiPipeline = AsyncPipeline<ApiRequest, ApiResponse> & {\n  match(pattern: string | RegExp, middleware: Middleware<ApiRequest, MaybeAsync<ApiResponse>>): void\n  invoke(url: string, body: ApiRequest['body']): Promise<JsonType>\n}\n\nexport type ApiPipelineWithUrl = AsyncPipeline<ApiRequest, ApiResponse> & {\n  invoke(body: ApiRequest['body']): Promise<JsonType>\n}\n")))}c.isMDXComponent=!0}}]);