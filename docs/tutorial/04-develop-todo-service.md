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

### addTodo

接下来，我们来定义 `addTodo` 接口。

`addTodo` 接口，包含非空的 `input schema` 和非空的 `output schema`，比 `getTodos` 接口的实现更复杂一些。

```ts
export class AddTodoInput extends ObjectType {
  content = {
    description: 'todo content to add',
    [Type]: String,
  };
}

export class InvalidAddTodoInput extends ObjectType {
  type = Literal('InvalidAddTodoInput');
  message = String;
}

export class AddTodoSuccess extends ObjectType {
  type = Literal('AddTodoSuccess');
  todo = {
    description: 'a new todo',
    [Type]: Todo,
  };
}

const AddTodoOutput = Union(InvalidAddTodoInput, AddTodoSuccess);

AddTodoOutput.displayName = 'AddTodoOutput';

export const addTodo = Api(
  {
    description: 'add todo',
    input: AddTodoInput,
    output: AddTodoOutput,
  },
  (input) => {
    if (input.content.length === 0) {
      return InvalidAddTodoInput.create({
        type: 'InvalidAddTodoInput',
        message: 'todo content is empty',
      });
    }

    const todo: TodoType = {
      id: uid++,
      content: input.content,
      completed: false,
    };

    todos.push(todo);

    return AddTodoSuccess.create({
      type: 'AddTodoSuccess',
      todo,
    });
  }
);
```

前面通过 `class Todo extends ObjectType` 声明 `Todo Schema` 时，我们利用了 `class` 自带的 `Todo.name` 可以访问到 `class name`。

然而，`const AddTodoOutput = Union(InvalidAddTodoInput, AddTodoSuccess);` 的 `AddTodoOutput` 是普通变量名，需要配置 `displayName` 属性。

这个属性不是必要的，不配置它也能工作。但 `AddTodoOutput` 在 `codegen` 时会被内联到每一处使用它的地方，前端也难以直接通过类型名称索引到它。

配置 `displayName` 之后，代码生成结果如下：

```typescript
/**
 * {@label AddTodoOutput}
 */
export type AddTodoOutput = InvalidAddTodoInput | AddTodoSuccess;
```

另一个值得强调的是，我们采用了 `Discriminated Unions` 或者说 `Tagged Unions` 去表达 `Success/Failure` 的互斥关系，而非使用 `Http status code`。

我们可以像下面那样消费数据。

```ts
let result = await api.addTodo({
  content: 'some text',
});

if (result.type === 'InvalidAddTodoInput') {
  // handle invalid input
  return handleInvalidInput(result.message);
} else if (result.type === 'AddTodoSuccess') {
  // handle success
  return handleAddTodoSuccess(result.todo);
}
```

通过 `Tagged Unions`，后端接口可以强制让前端处理不同的 `case`, `TypeScript` 会通过类型检查，约束前端对数据的消费方式。

### removeTodo

接下来，我们添加 `removeTodo` 接口，跟 `addTodo` 接口差不多。

- 定义 `input schema`，此处是 `RemoveTodoInput`
- 定义 `output schemas`，通过 `Tagged Unions` 合并成 `output schema`
- 用 `input schema` + `output schema` 去定义 `api schema`
- 实现这个接口

```ts
export class RemoveTodoInput extends ObjectType {
  todoId = {
    description: 'todo id wait for removing',
    [Type]: Int,
  };
}

export class TodoIdNotFound extends ObjectType {
  type = Literal('TodoIdNotFound');
  todoId = {
    description: 'invalid todo id',
    [Type]: Int,
  };
}

export class RemoveTodoSuccess extends ObjectType {
  type = Literal('RemoveTodoSuccess');
  todoId = {
    description: 'todo id that removed',
    [Type]: Int,
  };
  todos = {
    description: 'current todos',
    [Type]: Todos,
  };
}

export const RemoveTodoOutput = Union(TodoIdNotFound, RemoveTodoSuccess);

export const removeTodo = Api(
  {
    description: 'remove todo',
    input: RemoveTodoInput,
    output: RemoveTodoOutput,
  },
  (input) => {
    const index = todos.findIndex((todo) => todo.id === input.todoId);

    if (index === -1) {
      return TodoIdNotFound.create({
        type: 'TodoIdNotFound',
        todoId: input.todoId,
      });
    }

    todos.splice(index, 1);

    return RemoveTodoSuccess.create({
      type: 'RemoveTodoSuccess',
      todoId: input.todoId,
      todos,
    });
  }
);
```

值得一提的是，`Schema.create(value)` 方法，如 `RemoveTodoSuccess.create`，其实内部并没有特殊处理，它仅仅返回 `value`。

`create` 方法的用途是为了让类型推导更准确，当我们采用 `Tagged Unions` 模式时，常常用 `Literal String Type` 作为 `Tag` 字段的类型。直接使用字面量，如`'RemoveTodoSuccess'` ，常常会被推导为 `string` 类型。通过辅助的 `create` 方法，我们可以更准确地推导出 `Literal type`。

### updateTodo

接下来，我们实现 `updateTodo` 接口。

```ts
export class UpdateTodoInput extends ObjectType {
  todoId = {
    description: 'todo id wait for update',
    [Type]: Int,
  };
  content? = {
    description: 'new todo content',
    [Type]: Nullable(String),
  };
  completed? = {
    description: 'new todo status',
    [Type]: Nullable(Boolean),
  };
}

export class UpdateTodoSuccess extends ObjectType {
  type = Literal('UpdateTodoSuccess');
  todoId = {
    description: 'todo id that updated',
    [Type]: Int,
  };
  todos = {
    description: 'current todos',
    [Type]: Todos,
  };
}

export const UpdateTodoOutput = Union(TodoIdNotFound, UpdateTodoSuccess);

UpdateTodoOutput.displayName = 'UpdateTodoOutput';

export const updateTodo = Api(
  {
    description: 'update todo',
    input: UpdateTodoInput,
    output: UpdateTodoOutput,
  },
  (input) => {
    const targetTodo = todos.find((todo) => todo.id === input.todoId);

    if (!targetTodo) {
      return TodoIdNotFound.create({
        type: 'TodoIdNotFound',
        todoId: input.todoId,
      });
    }

    if (typeof input.content === 'string') {
      targetTodo.content = input.content;
    }

    if (typeof input.completed === 'boolean') {
      targetTodo.completed = input.completed;
    }

    return UpdateTodoSuccess.create({
      type: 'UpdateTodoSuccess',
      todoId: input.todoId,
      todos,
    });
  }
);
```

这里有意思的地方是，如何定义一个可选的字段？

```ts
class MyObject extends ObjectType {
  content? = Nullable(String);
}
```

通过 `?=` 配合 `Nullable(X)` 我们可以定义一个可选字段。

### clearCompleted

实现 `clearCompleted` 接口

```ts
export const clearCompleted = Api(
  {
    description: 'clear completed',
    input: {},
    output: {
      todos: {
        description: 'current todos',
        [Type]: Todos,
      },
    },
  },
  () => {
    todos = todos.filter((todo) => todo.completed !== false);

    return {
      todos,
    };
  }
);
```

跟 `getTodos` 一样简单。

### ApiService

其实，上述实现的 `getTodos`, `addTodo`, `removeTodo` 等接口，本质上都是函数，只是通过 `Schema` 定义，我们可以推导出 `TypeScript` 类型，以及在 `runtime` 也能拿到一些 `metadata`。

它们只是函数，我们需要将它绑定到一个 `http server` 上，通过下面的代码来完成。

```ts
export const service = ApiService({
  entries: {
    getTodos,
    addTodo,
    removeTodo,
    updateTodo,
    clearCompleted,
  },
});
```

`ApiService` 可以将一组 `entries` 函数，转化成 `farrow-http` 的 `router` 对象，可以挂在到 `HttpPipeline` 上。

```ts
// attach todo service
services.route('/api/todo').use(TodoService);
```

至此，我们完成了 `TodoService` 的服务端接口部分，接下来，让我们来看看前端消费接口数据的部分。