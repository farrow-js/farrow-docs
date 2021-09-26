---
title: 介绍
slug: /
---

## 为什么要开发 Farrow？

在全面拥抱 `TypeScript` 之前，我们团队一直使用的后端框架是 `Express.js` 和 `Koa.js`，在全面拥抱 `TypeScript` 之后，我们团队的需求维度增加了——类型安全/类型友好。

我们发现，面向 `JavaScript` 设计的后端框架，并不能简单地通过添加 `*.d.ts` 而得到充分的类型安全保障。

其它基于 `Express.js` 或 `Koa.js` 封装的上层 `TypeScript` 后端框架，有时还是难以规避底层框架的类型问题。

我们认为，或许需要用面向 `TypeScript` 的设计思路，实现一个能更类型安全的新后端框架。

这就是 `Farrow` 诞生的初衷。希望你也能喜欢我们的设计思路。

## Farrow 的设计理念

- `类型安全`：尽可能在所有 input/output 或 `JSON.parse` 解析数据的地方，提供 `runtime-validation`。保证服务端接受的请求参数一定满足类型要求，无冗余，也无残缺；保证客户端 fetch 到的数据满足指定类型，不再需要开发者手动 `as MyData` 假装数据满足我们期望的类型。

- `函数式`: 我们在所有可能的地方，优先使用函数式编程的 `immutable` 和 `pure` 理念，优先使用朴素的 `function`。

- `端到端类型同步`：我们致力于完善前后端之间类型同步繁琐的困扰，追求尽可能自动化地在前端复用服务端定义的契约类型，并通过 `codegen` 代码生成的方式，为前端提供数据类型以及接口调用的代码。在搭配使用 `Farrow-API` 的项目中，前端项目不再从 0 开始，而是从继承后端类型定义开始。

- `渐进式`：`Farrow` 官方维护了一系列从前端开发到后端开发的相关 `package`，可以根据项目需求按需引入或者搭配不同的主流技术栈或工具链（如 `react`, `vite`, `next.js` 等）

## 教程相关

本教程将引领大家搭建和实现一个端到端类型安全的全栈开发项目。