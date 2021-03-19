---
title: 解读 greet 接口
---

在 `farrow-next-react` 项目模板中，已经包含了简单的示例代码，现在让我们来解读一下它们。

首先来看 `server/api/greet.ts` 文件

```typescript
// server/api.greet.ts

// 引入 farrow-api 去定义一个个 api
import { Api } from "farrow-api";

// 引入 farrow-api-server 去包含一组 api 为一个 serivce router
import { ApiService } from "farrow-api-server";

// 引入 farrow-schema 去定义 api 的类型结构
import { ObjectType, Type } from "farrow-schema";

/**
 * 通过 ObjectType 定义 greet api 的 input 类型
 * 此处演示了最简单的方式，不包含字段的描述
 */
export class GreetInput extends ObjectType {
  name = String;
}

/**
 * 通过 ObjectType 定义 greet api 的 output 类型
 * 此处采用了带 description 字段描述的结构
 * 此时字段的类型需要配置在 [Type] 属性中
 */
export class GreetOutput extends ObjectType {
  greet = {
    description: "The greeting came from server",
    [Type]: String,
  };
}

/**
 * 根据 input schema 和 ouput schema
 * 通过 Api 函数创建 greet api
 * 第二个参数为 greet api 的代码实现
 * farrow-api 会约束 greet api 的 input 和 ouput 必须满足指定类型
 */
export const greet = Api(
  {
    description: "Greeting",
    input: GreetInput,
    output: GreetOutput,
  },
  (input) => {
    let greet = `Hello ${input.name}!`;
    return { greet };
  }
);

/**
 * 将多个 api 放到 entries 对象中
 * 并通过 ApiService 打包成一个 service router
 */
export const service = ApiService({
  entries: {
    greet,
  },
});
```
