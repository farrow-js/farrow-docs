---
title: 安装与创建项目
---

## 环境依赖

`Farrow` 使用了当前最新的 `TypeScript` 和 `Node.js` 特性，在开始之前，请确保我们安装了正确的版本。

- `Node.js v14.0.0` 以上（通过 `node -v` 检查当前版本）
- `TypeScript v4.3.0` 以上（如非在现有项目中引入 farrow，可随脚手架一起安装）

## 创建项目

我们通过 `create-farrow-app` 来创建项目模板。

使用 `npm` 时运行下列代码：

```shell
npm init farrow-app
```

使用 `yarn` 时运行下列代码：

```shell
yarn create farrow-app
```

然后跟随命令行里给出的提示，输入项目名称`todo-app`，并选择脚手架 `farrow-vite-react`。

它将创建包含 `farrow`，`vite` 和 `react` 的全栈脚手架。

依次执行下列命令，切换到项目文件夹，安装依赖，并启动。

```sh
cd todo-app
npm install
npm run dev
```

## 项目目录

安装完成后，项目目录大致如下：

![project structure](/img/project-structure.png)

其中：

- `server` 目录为 `farrow` 服务端开发目录，在这里开发后端接口

- `src` 目录为 `next.js` 页面源代码目录，在这里开发前端页面

- `farrow-config.js` 文件为 `farrow` 配置文件，可以配置 `server` 或 `api` 相关的编译行为

- `vite.config.ts` 文件为 `vite` 配置文件，可以配置 `vite` 相关的行为

接下来，我们来解读一下项目里已内置的 `greet api` 接口的开发和使用代码。
