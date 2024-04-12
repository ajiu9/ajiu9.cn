---
title: Lodash Webpack Plugin Problem
date: 2024-04-11T00:00:00Z
type: blog
lang: zh
---

> 今天同事在开发环境运行时候，发现lodash的cloneDeep方法返回的数组对象是同一个对象，没有进行深拷贝，这种反直觉的行为必然是发生了什么。

首先我想到的是是否是全局参数配置引起的，我看了[deepClone](https://lodash.com/docs/4.17.15#cloneDeep)的文档,发现只有一个入参。

然后我看了下[源码](https://github.com/lodash/lodash/blob/main/src/cloneDeep.ts)，也没有可以配置的参数。

```js
import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

/**
 * This method is like `clone` except that it recursively clones `value`.
 * Object inheritance is preserved.
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see clone
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const deep = cloneDeep(objects)
 * console.log(deep[0] === objects[0])
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
}

export default cloneDeep
```

没找到问题所在，我调试了下面这段代码

```js
import { cloneDeep } from 'lodash'
const test1 = [{ id: 1, name: '测试1' }]
const deep = cloneDeep(test1)
console.log(deep[0] === test1[0]) // true
```

![image](https://static.ajiu9.cn/images/20240411170613.png)

发现原本`cloneDeep`依赖了`baseClone`函数，但是却变成了[identity](https://lodash.com/docs/4.17.15#identity)这个函数就是返回函数的第一个参数。

```js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value
}
```

原因找到了，是怎么引起的呢？

网上搜到了这篇文章[为什么你应该立即停止使用 lodash-webpack-plugin](https://zhuanlan.zhihu.com/p/349260482)

原来是[lodash-webpack-plugin](https://github.com/lodash/lodash-webpack-plugin)插件搞出来的。

通过用 noop、identity 或更简单的替代方案替换模块的功能集来创建更小的 Lodash 构建。该插件通过进一步缩小精选的构建来补充 babel-plugin-lodash！
在未启用适当功能集的情况下使用此插件可能会导致 lodash 函数以意想不到的方式运行。方法可能看起来有效，但它们可能返回不正确的结果，其中就包括克隆函数。

最后看了下生产构建，生产没有引用到这个插件，所以没发现影响。开发环境去掉这个插件。
