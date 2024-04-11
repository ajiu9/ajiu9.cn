---
title: Lodash Webpack Plugin Problem
date: 2024-04-11T00:00:00Z
type: blog
lang: zh
---

I have a problem in work today

when i use deepClone in lodash

```js
import { cloneDeep } from 'lodash'
const test1 = [{ id: 1, name: '测试1' }]
const deep = cloneDeep(test1)
console.log(deep[0] === test1[0]) // true
```

![image](https://static.ajiu9.cn/images/20240411170613.png)
[link](https://github.com/lodash/lodash-webpack-plugin)

Create smaller Lodash builds by replacing feature sets of modules with noop, identity, or simpler alternatives.

This plugin complements babel-plugin-lodash by shrinking its cherry-picked builds even further!

DISCLAIMER: Using this plugin without enabling the proper feature sets may cause lodash functions to behave in unexpected ways. Methods may appear to work, however they might return incorrect results.

opts!

cloning Support “clone” methods & cloning source objects.

[link](https://zhuanlan.zhihu.com/p/349260482)
