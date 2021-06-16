---
title: Introduction
slug: /
---

## Why we need Farrow？

Before fully embracing `TypeScript`, the backend frameworks our team had been using were `Express.js` and `Koa.js`. After fully embracing `TypeScript`, our team's requirement dimension increased - type-safety/type-friendliness.

We found that a `JavaScript`-oriented backend framework could not be fully type-safe simply by adding `*.d.ts`.

Other upper-level `TypeScript` backend frameworks that are wrapped in `Express.js` or `Koa.js` still sometimes struggle to circumvent the type issues of the underlying framework.

We thought it might be useful to implement a new backend framework that is more type-safe, using a `TypeScript`-oriented design approach.

That's how Farrow was born. We hope you like our design approach as well.

## Farrow's design philosophy

- Type-safe: provide `runtime-validation` in all input/output or `JSON.parse` parsing data where possible; ensure that the request parameters accepted by the server must meet the type requirements without redundancy or fragmentation; ensure that the data fetched by the client meets the specified type and no longer requires the developer to manually `as MyData` pretends that the data is of the type we expect.

Functional: We prioritize the `immutable` and `pure` philosophy of functional programming wherever possible, preferring plain `functions`.

- End-to-end type synchronization: We work to improve the tedious type synchronization nuisance between the front and back ends, pursuing to automate as much as possible the reuse of server-defined contract types on the front end, and providing the code for data types and interface calls to the front end by way of `codegen` code generation. In projects paired with `Farrow-API`, front-end projects no longer start from 0, but from inheriting back-end type definitions.

- Progressive: `Farrow` officially maintains a series of `packages` from front-end development to back-end development, which can be introduced on demand or with different mainstream technology stacks or tool chains (e.g. `react`, `vite`, `next.js`, etc.) according to project requirements.

## About tutorial

This tutorial will lead you to build and implement an end-to-end type-safe full-stack development project.
