(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(112)),p={title:"\u524d\u7aef\u5f00\u53d1"},i={unversionedId:"tutorial/03-develop-front-end",id:"tutorial/03-develop-front-end",isDocsHomePage:!1,title:"\u524d\u7aef\u5f00\u53d1",description:"\u5728 farrow-vite-react \u9879\u76ee\u6a21\u677f\u4e2d\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u89e3\u8bfb\u4e00\u4e0b\u524d\u7aef\u90e8\u5206\u3002",source:"@site/docs/tutorial/03-develop-front-end.md",slug:"/tutorial/03-develop-front-end",permalink:"/farrow-docs/docs/tutorial/03-develop-front-end",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/tutorial/03-develop-front-end.md",version:"current",sidebar:"docs",previous:{title:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/farrow-docs/docs/tutorial/02-develop-server"},next:{title:"\u5f00\u53d1 todo service",permalink:"/farrow-docs/docs/tutorial/04-develop-todo-service"}},c=[],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"farrow-vite-react")," \u9879\u76ee\u6a21\u677f\u4e2d\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u89e3\u8bfb\u4e00\u4e0b\u524d\u7aef\u90e8\u5206\u3002"),Object(o.b)("p",null,"\u5728\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"npm run dev")," \u547d\u4ee4\u542f\u52a8\u5e94\u7528\u4e4b\u540e\uff0c\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u6587\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"src/api/greet.ts"),"\uff0c\u91cc\u9762\u7684\u4ee3\u7801\u5927\u6982\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"/**\n * This file was generated by farrow-api\n * Don't modify it manually\n */\n\nimport { createApiPipelineWithUrl, ApiInvokeOptions } from 'farrow-api-client';\n\n/**\n * {@label GreetInput}\n */\nexport type GreetInput = {\n  /**\n   * @remarks The name for greeting\n   */\n  name: string;\n};\n\n/**\n * {@label GreetOutput}\n */\nexport type GreetOutput = {\n  /**\n   * @remarks The greeting came from server\n   */\n  greet: string;\n};\n\nexport const url = 'http://localhost:3003/api/greet';\n\nexport const apiPipeline = createApiPipelineWithUrl(url);\n\nexport const api = {\n  /**\n   * @remarks Greeting\n   */\n  greet: (input: GreetInput, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['greet'], input },\n      options\n    ) as Promise<GreetOutput>,\n};\n")),Object(o.b)("p",null,"\u6b63\u5982\u5f00\u5934\u7684\u6ce8\u91ca\u90e8\u5206\u6240\u8bf4\u7684\uff0c\u8fd9\u4e2a\u6587\u4ef6\u662f\u7531 ",Object(o.b)("inlineCode",{parentName:"p"},"farrow-api")," \u81ea\u52a8\u751f\u6210\u7684\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u5e94\u8be5\u88ab\u624b\u52a8\u4fee\u6539\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"farrow-api")," \u4f1a\u5c06\u670d\u52a1\u7aef\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"input schema")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"output schema")," \u7f16\u8bd1\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," \u7c7b\u578b\uff0c\u5e76\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"api service")," \u7f16\u8bd1\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"http-client")," \u7684\u63a5\u53e3\u8c03\u7528\u4ee3\u7801\u3002"),Object(o.b)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u524d\u7aef\u76f8\u5f53\u4e8e\u7ee7\u627f\u4e86\u670d\u52a1\u7aef\u7684\u7c7b\u578b\u5b9a\u4e49\u548c\u65b9\u6cd5\u8c03\u7528\u7684\u4ee3\u7801\u3002"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"src/app.tsx")," \u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf ",Object(o.b)("inlineCode",{parentName:"p"},"import")," \u666e\u901a\u6a21\u5757\u4e00\u6837\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"import")," \u670d\u52a1\u7aef\u751f\u6210\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"greet.ts")," \u6587\u4ef6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState, useEffect } from 'react';\nimport logo from './logo.svg';\nimport './App.css';\nimport { api as GreetApi } from './api/greet';\n")),Object(o.b)("p",null,"\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"api as GreetApi")," \u8d77\u522b\u540d\uff0c\u6211\u4eec\u53ef\u4ee5\u5f15\u5165\u591a\u4e2a\u751f\u6210\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"client.ts"),"\uff0c\u907f\u514d\u547d\u540d\u51b2\u7a81\u3002"),Object(o.b)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u8c03\u7528\u666e\u901a\u65b9\u6cd5\u4e00\u6837\uff0c\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"GreetApi.greet(input)"),"\uff0c\u5b83\u5728\u5185\u90e8\u4f1a\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"http")," \u534f\u8bae\u8bf7\u6c42\u670d\u52a1\u7aef\u63a5\u53e3\uff0c\u83b7\u53d6\u5e76\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b\u7684\u6570\u636e\u3002"),Object(o.b)("p",null,"\u4e0d\u9700\u8981\u5f00\u53d1\u8005 ",Object(o.b)("inlineCode",{parentName:"p"},"as MyType")," \u7684\u65b9\u5f0f\u53bb\u4e3b\u52a8\u6807\u8bb0\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const [greet, setGreet] = useState(\'\');\n\n  useEffect(() => {\n    const task = async () => {\n      const result = await GreetApi.greet({\n        name: `Farrow + React + Vite`,\n      });\n      setGreet(result.greet);\n    };\n    task().catch((error) => {\n      console.log(\'error\', error);\n    });\n  }, []);\n\n  if (!greet) return null;\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo" />\n        <p>{greet}</p>\n        <p>\n          Edit <code>App.tsx</code> and save to test HMR updates.\n        </p>\n        <p>\n          <a\n            className="App-link"\n            href="https://reactjs.org"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn React\n          </a>\n          {\' | \'}\n          <a\n            className="App-link"\n            href="https://github.com/Lucifier129/farrow"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn Farrow\n          </a>\n          {\' | \'}\n          <a\n            className="App-link"\n            href="https://vitejs.dev/guide/features.html"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn Vite\n          </a>\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(o.b)("p",null,"\u6bcf\u5f53\u670d\u52a1\u7aef\u65b0\u589e\u63a5\u53e3\u65f6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"farrow")," \u90fd\u4f1a\u68c0\u6d4b\u5230\u53d8\u5316\uff0c\u5e76\u91cd\u65b0\u751f\u6210\u6700\u65b0\u7684\u7c7b\u578b\u5b9a\u4e49\u548c\u63a5\u53e3\u8c03\u7528\u7684\u4ee3\u7801\u3002"),Object(o.b)("p",null,"\u524d\u7aef\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u53ca\u65f6\u5730\u770b\u5230\u670d\u52a1\u7aef\u63d0\u4f9b\u7684\u7c7b\u578b\u662f\u5426\u4e0e\u4e4b\u524d\u7248\u672c\u7684\u517c\u5bb9\uff0c\u51cf\u5c11\u524d\u540e\u7aef\u7c7b\u578b\u4e0d\u540c\u6b65\u5bfc\u81f4 runtime \u62a5\u9519\u7684\u60c5\u51b5\u3002"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c1d\u8bd5\u5728\u670d\u52a1\u7aef\u5f00\u53d1\u4e00\u4e2a\u5305\u542b\u589e\u5220\u6539\u67e5\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"todo service"),"\u3002"))}s.isMDXComponent=!0}}]);