---
title: Install and Creating project
---

## Required Environment

Farrow uses the latest TypeScript and Node.js features, so make sure we have the correct version installed before we start!

- `Node.js v14.0.0` or higher (check current version via `node -v`)
- `TypeScript v4.3.0` or higher（Can be installed with scaffolding if farrow is not introduced in an existing project）

## Creating project

We create the project template with create-farrow-app.

Run the following code when using `npm`：

```shell
npm init farrow-app
```

Run the following code when using `yarn`:

```shell
yarn create farrow-app
```

Then follow the prompts given on the command line, enter the project name `todo-app`, and select scaffolding `farrow-vite-react`.

It will create a full-stack scaffold containing `farrow`, `vite` and `react`.

Execute the following commands in sequence to switch to the project folder, install the dependencies, and start.

```sh
cd todo-app
npm install
npm run dev
```

## Project directory

After the installation is complete, the project directory is roughly as follows:

![project structure](/img/project-structure.png)

In the picture above:

- The `server` directory is the `farrow` server-side development directory, where the back-end interface is developed.

- The `src` directory is the source code directory of the `next.js` page, where the front-end pages are developed.

- The `farrow-config.js` file is the farrow configuration file, which can configure `server` or `api`-related compilation behavior.

- The `vite.config.ts` file is a `vite` configuration file that allows you to configure `vite` related behavior

Next, let's unpack the code for developing and using the greet api interface that is already built into the project.
