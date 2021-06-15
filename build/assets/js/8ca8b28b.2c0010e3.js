(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),b=a,m=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return t?r.a.createElement(m,l(l({ref:n},p),{},{components:t})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(112)),o={title:"farrow-module"},l={unversionedId:"api/12-farrow-module",id:"api/12-farrow-module",isDocsHomePage:!1,title:"farrow-module",description:"A module abstraction providing dependencies management",source:"@site/docs/api/12-farrow-module.md",slug:"/api/12-farrow-module",permalink:"/farrow-docs/docs/api/12-farrow-module",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/12-farrow-module.md",version:"current",sidebar:"api",previous:{title:"farrow-vite",permalink:"/farrow-docs/docs/api/11-farrow-vite"},next:{title:"farrow-next",permalink:"/farrow-docs/docs/api/13-farrow-next"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Glossary",id:"glossary",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"Module#use(DepClass)",id:"moduleusedepclass",children:[]},{value:"Module#inject(providerValue)",id:"moduleinjectprovidervalue",children:[]},{value:"Module#new(DepClass, options?)",id:"modulenewdepclass-options",children:[]},{value:"Container.from(Class)",id:"containerfromclass",children:[]},{value:"<code>createProvider&lt;Type&gt;(defaultValue?)</code>",id:"createprovidertypedefaultvalue",children:[]}]}],p={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A module abstraction providing dependencies management"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# from npm\nnpm install --save farrow-module\n\n# from yarn\nyarn add farrow-module\n")),Object(i.b)("h2",{id:"glossary"},"Glossary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Module"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Any ",Object(i.b)("inlineCode",{parentName:"li"},"Class")," which ",Object(i.b)("inlineCode",{parentName:"li"},"extends Module")),Object(i.b)("li",{parentName:"ul"},"it's a basic unit for writing logic code"),Object(i.b)("li",{parentName:"ul"},"it should not define custom constructor parameters"),Object(i.b)("li",{parentName:"ul"},"it should not be instantiated via the ",Object(i.b)("inlineCode",{parentName:"li"},"new")," keyword manually"),Object(i.b)("li",{parentName:"ul"},"everything it needed is via ",Object(i.b)("inlineCode",{parentName:"li"},"this.use(DepClass)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Provider")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"it can be created via ",Object(i.b)("inlineCode",{parentName:"li"},"createProvider<Type>(defaultValue)")),Object(i.b)("li",{parentName:"ul"},"it should be attached to ",Object(i.b)("inlineCode",{parentName:"li"},"Container")," via ",Object(i.b)("inlineCode",{parentName:"li"},"this.inject(Provider.provide(value))")),Object(i.b)("li",{parentName:"ul"},"it should be placed only once for a ",Object(i.b)("inlineCode",{parentName:"li"},"Container"),", duplicated is not allow"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Container")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Any ",Object(i.b)("inlineCode",{parentName:"li"},"Class")," which ",Object(i.b)("inlineCode",{parentName:"li"},"extends Container")),Object(i.b)("li",{parentName:"ul"},"it's the entry of our code of ",Object(i.b)("inlineCode",{parentName:"li"},"modules")),Object(i.b)("li",{parentName:"ul"},"it should be instantiated by the ",Object(i.b)("inlineCode",{parentName:"li"},"new")," keyword")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, Container, createProvider } from 'farrow-module'\n\ntype PageInfo = {\n  url: string\n  env: string\n}\n\n/**\n * create a provider carries extra data\n */\nconst PageInfo = createProvider<PageInfo>()\n\n/**\n * define a module class and inject deps via this.use(Dep)\n */\nclass User extends Module {\n  // inject PageInfo\n  page = this.use(PageInfo)\n  path = `${this.page.url}/user`\n  // supporting circular dependencies via getter\n  get product() {\n    return this.use(Product)\n  }\n}\n\n/**\n * define a module class and inject deps via this.use(Dep)\n */\nclass Product extends Module {\n  // inject PageInfo\n  page = this.use(PageInfo)\n  path = `${this.page.url}/product`\n  // supporting circular dependencies via getter\n  get user() {\n    return this.use(User)\n  }\n}\n\n/**\n * define a module class and inject deps via this.use(Dep)\n */\nclass Root extends Module {\n  // inject PageInfo\n  page = this.use(PageInfo)\n  // inject User\n  user = this.use(User)\n  // inject Product\n  product = this.use(Product)\n\n  // self-injection via getter\n  get self() {\n    return this.use(Root)\n  }\n\n  getInfo() {\n    return {\n      url: this.page.url,\n      env: this.page.env,\n      user: this.user.path,\n      product: this.product.path,\n    }\n  }\n}\n\n/**\n * define a module-container class for entry\n * use [ModuleProviderSymbol] filed for providing Provider\n */\nclass App extends Container {\n  page = this.inject(\n    PageInfo.provide({\n      url: '/path/for/app',\n      env: 'app',\n    }),\n  )\n\n  // app.root is equal to app.root1\n  root = this.use(Root)\n\n  root1 = this.use(Root)\n\n  /**\n   * create a new Root and provide new Provider\n   *  app.root2 is not equal to app.root, it's a new one\n   */\n  root2 = this.new(Root, {\n    providers: [\n      PageInfo.provide({\n        url: '/path/for/new',\n        env: 'new',\n      }),\n    ],\n  })\n}\n\nconst app = new App()\n\napp.root.getInfo()\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"moduleusedepclass"},"Module#use(DepClass)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"module.use(DepClass)")," will read or create a DepClass instance from the ",Object(i.b)("inlineCode",{parentName:"p"},"Container")),Object(i.b)("h3",{id:"moduleinjectprovidervalue"},"Module#inject(providerValue)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"module.inject")," will add ",Object(i.b)("inlineCode",{parentName:"p"},"provider-value")," or ",Object(i.b)("inlineCode",{parentName:"p"},"container")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"Container")),Object(i.b)("h3",{id:"modulenewdepclass-options"},"Module#new(DepClass, options?)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"module.new(DepClass, options)")," will create a new DepClass instance in current container/context"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options.providers"),", an list of values created by ",Object(i.b)("inlineCode",{parentName:"li"},"Provider")," for injecting/reusing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options.modules"),", an list of modules for injecting/resuing.")),Object(i.b)("h3",{id:"containerfromclass"},"Container.from(Class)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Container.from(Class)")," can extends a existed ",Object(i.b)("inlineCode",{parentName:"p"},"Class")," make it become a ",Object(i.b)("inlineCode",{parentName:"p"},"Container")," which supports ",Object(i.b)("inlineCode",{parentName:"p"},"this.use()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"this.new()")),Object(i.b)("h3",{id:"createprovidertypedefaultvalue"},Object(i.b)("inlineCode",{parentName:"h3"},"createProvider<Type>(defaultValue?)")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createProvider<Type>(defaultValue?)")," create a ",Object(i.b)("inlineCode",{parentName:"p"},"Provider")," by given ",Object(i.b)("inlineCode",{parentName:"p"},"Type")," and ",Object(i.b)("inlineCode",{parentName:"p"},"defaultValue")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Provider.provide(value)"),": create a injectable value of ",Object(i.b)("inlineCode",{parentName:"li"},"Provider")," for ",Object(i.b)("inlineCode",{parentName:"li"},"Container")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Provider.defaultValue"),": the ",Object(i.b)("inlineCode",{parentName:"li"},"defaultValue")," of ",Object(i.b)("inlineCode",{parentName:"li"},"Provider"),", it's optional, maybe ",Object(i.b)("inlineCode",{parentName:"li"},"undefined"))))}d.isMDXComponent=!0}}]);