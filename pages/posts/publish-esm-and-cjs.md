---
title: 在一个项目中同时使用ESM和CJS
date: 2024-09-02T00:00:00Z
lang: zh
duration: 15min
description: 在单项目中运行ESM和CJS的简单介绍
date created: 2024-09-02
date modified: 2024-09-02
---

## ESM & CJS

[[commonjs和esm]]

- ESM - [ECMAScript Modules](https://nodejs.org/api/esm.html)
- CJS - [CommonJS](https://nodejs.org/api/modules.html#modules_commonjs_modules)

在过去的十年中，由于缺乏标准的 JavaScript 模块系统，CommonJS（又名“require(‘xxx’)”和“module.exports”语法）一直是 Node.js 和 NPM 包的工作方式。直到 2015 年，当 ECMAScript 模块最终作为标准解决方案出现时，社区开始逐渐迁移到原生 ESM。

CJS
```js
// addTwo.js
function addTwo(num) {
  return num + 2
}

module.exports = addTwo
```

```js
// app.js
const addTwo = require('./addTwo.js')

// Prints: 6
console.log(addTwo(4))
```

ESM
```js
// addTwo.mjs
function addTwo(num) {
  return num + 2
}

export { addTwo }
```

```js
// app.mjs
import { addTwo } from './addTwo.mjs'

// Prints: 6
console.log(addTwo(4))
```

ESM 支持命名导出、更好的静态分析、tree-shaking、浏览器原生支持；最重要的是，作为一个标准，它基本上是 JavaScript 的未来。Node.js v12 中引入了对 ESM 的实验性支持，并在 v12.22.0 和 v14.17.0 中稳定下来。

截至 2024，很多软件包都提供 ESM 格式或者 CJS 和 ESM 两种格式支持。毕竟nodejs生态庞大，迁移到 ESM 生态是一个长期过程。

所以对于项目的作者来说，提供两种格式的兼容性，是必要的。在这篇文章中，我将提供一个简单的示例，以解释如何使用 CJS 和 ESM 在同一个项目中同时工作。

## 兼容性

如果 ESM 更好，代表未来，为何不全面转向ESM？尽管Node.js能够兼容CJS和ESM包，但主要障碍在于**CJS无法使用ESM包**。

```js
// app.cjs
const pkg = require('./addTwo-only-esm.mjs')
```

```bash
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /private/tmp/ajiu9-MiETrR/addTwo-only-esm.mjs
```

根本原因是 ESM 本质上是异步的，你无法在“require”所在的同步上下文中导入异步模块。这通常意味着如果想使用 ESM 软件包，则也必须使用 ESM。
唯一的例外是，可以使用 [dynamic 'import()'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) 在 CJS 中使用 ESM 包：

```js
// app.mjs
async function awaitFunction() {
  const { default: pkg } = await import('./addTwo-only-esm.mjs')
  console.log(pkg)
}
awaitFunction()
```

由于动态导入将返回 Promise，这意味着所有后续被调用者也需要异步。在某些情况下它可能会起作用，但通常这对用户来说不是一个简单易用的解决方案。

如果你能够直接使用ESM，那会容易得多，因为`import`同时支持ESM和CJS。

```js
// in ESM
import { foo } from 'esm-package'
import cjs from 'cjs-package'
```

一些软件包现在提供纯ESM版本，倡导从CJS转向ESM。尽管这是趋势，但由于大多数项目仍在使用CJS且迁移不易，我选择同时发布CJS和ESM版本，以使过渡更加平滑。

### `package.json`

幸运的是，Node 允许你在同一个软件包中同时使用这两种格式。通过 `package.json` 中的新 [`exports`](https://nodejs.org/api/packages.html#conditional-exports) 字段，提供了一种根据特定条件映射到不同路径的方法。它们支持 CommonJS 和 ES 模块导入。

```js
{
  "exports": {
    "node": {
      "import": "./feature-node.mjs", // EMS
      "require": "./feature-node.cjs" // CJS
    },
    "default": "./feature.mjs"
  }
}
```

## 打包
如果需要支持两种模块方式，复制两份代码肯定不是一个好的解决方案。此时，我们需要考虑引入一些构建工具或打包工具。比如 [Rollup](https://rollupjs.org/) 和 [Webpack](https://webpack.js.org/)。将你的代码构建成多种格式。但是它们的配置很复杂，需要花很多时间去学习。这里有两个非常棒的工具，它们只需要简单的配置就可以工作。

- [`tsup`](#tsup)
- [`unbuild`](#unbuild)

### tsup
[`tsup`](https://github.com/egoist/tsup)它具有零配置构建 TypeScript 项目的特点。使用方法如下：

```bash
tsup src/index.ts
```

它将输出一个 `dist/index.js` 文件。

若要支持双格式，只需添加一个标志即可：
```bash
$ tsup src/index.ts --format cjs,esm
```
使用该工具会生成两个文件 `dist/index.js` 和 `dist/index.mjs`，之后你就可以直接使用了。由于采用了 [`esbuild`](https://github.com/evanw/esbuild)，`tsup` 不仅非常易用，而且速度惊人。

这是一个使用`tsup`的`package.json`模版配置。

```json
{
  "name": "pakage-name",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts --clean",
    "watch": "npm run build -- --watch src",
    "prepublishOnly": "npm run build"
  }
}
```

### unbuild

 `tsup` 是一个轻量级的 TypeScript 打包工具，而[`unbuild`](https://github.com/unjs/unbuild) 则更加通用、可定制且功能强大。

要使用它，我们需要在根目录下创建 `build.config.ts` 文件。

```ts
// build.config.ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index'
  ],
  declaration: true, // 生成 .d.ts files
})
```

然后运行构建命令：

```bash
$ unbuild
```

默认情况下，“unbuild”将生成ESM和CJS！

## 上下文差异

使用上述工具，我们现在能够将 TypeScript 作为唯一的代码源，同时生成 CJS 和 ESM 模块，使整体代码库更容易维护，但仍然有一些需要注意的细节。

**在 ESM 中，没有 `__dirname`, `__filename`, `require`, `require.resolve`**。需要使用 `import.meta.url` 并做一些转换来获取文件路径字符串。

由于我们的代码将被编译为 CJS 和 ESM，尽量避免使用这些特定于环境的上下文。如果确实需要，可以参考以下代码：


```ts
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))
```

关于 require 和 require.resolve，你可以使用：

```ts
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
```
`
如果你使用 `unbuild`，可以开启 `cjsBridge` 标志，`unbuild` 会自动为你在 ESM 中模拟这些 CJS 上下文！

```ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  cjsBridge: true, // <--
})
```
另外，如果你使用 `tsup`，它会在 CJS 中为你模拟 ESM 的 `import.meta.url`。

## 验证你的包

一旦你发布了你的包，可以使用 [publint.dev](https://publint.dev/)（由 [@bluwy](https://github.com/bluwy) 制作）来验证它是否遵循最佳实践。它还会给你一些如何进一步改进的建议。

## 最后

这篇文章很大部分是参考了[publish-esm-and-cjs](https://antfu.me/posts/publish-esm-and-cjs)。同时这两种工具的使用也只是一部分，请查看它们的文档以获取更多详细信息。希望这些设置对你构建自己的库有所帮助，祝你编程愉快！
