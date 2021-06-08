---
title: 开发 todo service
---

## Todo app 功能介绍

我们即将开发的建议 `todo-app` ，界面相对简陋，大概如下图所示：

![todo-app](/img/todo-app.png)

它包含如下功能：

- 输入新的 todo content，并按回车添加
- 对于每个 todo 项
  - 可以切换 `completed/active` 状态
  - 可以删除
  - 可以双击启动编辑
- 可以清楚所有 `completed` 状态的 todo 项。

我们需要实现一组服务端 `api`，支持：

- `getTodos` 获取当前的 `todos`
- `addTodo` 添加新的 `todo`
- `removeTodo` 删除 `todo`
- `updateTodo` 更新 `todo`
- `clearCompleted` 清楚所有已完成的 `todo`

然后在前端通过 `farrow-api` 复用服务端的类型和接口调用代码，基于 `react` 开发界面。

## Todo Service

新建 `server/api/todo.ts` 文件，引入相关模块。

```typescript
import { Api } from 'farrow-api';
import { ApiService } from 'farrow-api-server';
import {
  Int,
  List,
  Literal,
  Nullable,
  ObjectType,
  Type,
  TypeOf,
  Union,
} from 'farrow-schema';
```

然后定义 `Todo Schema`，并通过 `TypeOf` 提取 `Todo Schema` 包含的类型。然后，我们用 `farrow-schema` 的 `List` 函数，构造 `Todos Schema`。

```typescript
export class Todo extends ObjectType {
  id = {
    description: 'todo id',
    [Type]: Int,
  };
  content = {
    description: 'todo content',
    [Type]: String,
  };
  completed = {
    description: 'todo status',
    [Type]: Boolean,
  };
}

export type TodoType = TypeOf<Todo>;

export const Todos = List(Todo);
```

请注意，上面看起来虽然有点冗余，但每一部分都有它的作用，比如 `description` 在 `codegen` 到前端之后，变成了注释，是 api 文档化的一个途径。

前端获取到的类型如下所示：

```typescript
/**
 * {@label Todo}
 */
export type Todo = {
  /**
   * @remarks todo id
   */
  id: number;
  /**
   * @remarks todo content
   */
  content: string;
  /**
   * @remarks todo status
   */
  completed: boolean;
};
```

### getTodos

接下来，我们可以定义第一个接口 `getTodos`。

```ts
let uid = 0;

let todos: TodoType[] = [];

export const getTodos = Api(
  {
    description: 'get todos',
    input: {},
    output: {
      todos: {
        description: 'all todos',
        [Type]: Todos,
      },
    },
  },
  () => {
    return {
      todos,
    };
  }
);
```

`getTodos` 虽然不需要参数，但 `input schema` 还是需要设置 `{}`，因为目前 `farrow-api` 还不支持设置不带参数的接口契约。

`getTodos` 的 `output schema` 为 `{ todos }`，然后我们用内存里 `todos` 数组模拟数据库，在 `getTodos` 接口的函数体内直接返回 `{ todos }`。

一个简单的接口就实现了。



前面通过 `class Todo extends ObjectType` 声明 `Todo Schema` 时，我们利用了 `class` 自带的 `Todo.name` 可以访问到 `class name`。

然而，`let Todos = List(Todo)` 的 `Todos` 是普通变量名，在 `List(Todo)` 这个值里难以获取到，因此需要配置 `displayName` 属性。

这个属性不是必要的，不配置它也能工作。但 `List(Todo)` 在 `codegen` 时会被内联到每一处使用它的地方，前端也难以直接通过类型名称索引到它。

配置 `displayName` 之后，代码生成结果如下：

```typescript

```
