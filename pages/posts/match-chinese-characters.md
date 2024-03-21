---
title: 匹配中文字符
lang: zh
type: note
date: 2024-03-21T00:00:00Z
---

当需要检查是否包含中文字符时，需要使用正则匹配，网上搜索的[结果](https://stackoverflow.com/a/21113538):

```ts
/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]/
```

这个方案可以，但是太难用，还有一个[简单的解决方案](https://stackoverflow.com/a/61151122) :

```ts
/\p{Script=Han}/u
```

```ts
!!'九州'.match(/\p{Script=Han}/u) // true
```

这是[Unicode 属性转义](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
浏览器兼容性 [Chrome 64, Firefox 79, Safari 11.1 and Node.js 10](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#browser_compatibility).

[所有可用的支持](https://www.regular-expressions.info/unicode.html).
