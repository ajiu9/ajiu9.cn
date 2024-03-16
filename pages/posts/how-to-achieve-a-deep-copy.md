---
title: 如何实现一个深浅拷贝
lang: zh
type: note
date:  2021-01-21
---

在 JavaScript 的编程中经常需要对数据进行复制，什么时候用深拷贝、什么时候用浅拷贝？
拷贝一个很多嵌套的对象怎么实现？
写成什么样的深拷贝代码才能算合格？

### 浅拷贝的原理和实现

对于浅拷贝的定义我们可以初步理解为：

> 自己创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象。

下面总结了一些 JavaScript 提供的浅拷贝方法，一起来看看哪些方法能实现上述定义所描述的过程。

#### 方法一：object.assign

object.assign 是 ES6 中 object 的一个方法，该方法可以用于 JS 对象的合并等多个用途，其中一个用途就是可以进行浅拷贝。该方法的第一个参数是拷贝的目标对象，后面的参数是拷贝的来源对象（也可以是多个来源）。

> `**Object.assign()**`方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
const target = {}
const source = { a: { b: 1 } }
Object.assign(target, source)
console.log(target) // { a: { b: 1 } };
```

从上面的代码中可以看到，通过 object.assign 简单实现了一个浅拷贝，“target”就是新拷贝的对象，下面再看一个和上面不太一样的例子。

```js
const target = {}
const source = { a: { b: 1 } }
Object.assign(target, source)
console.log(target) // { a: { b: 10 } };
source.a.b = 10
console.log(source) // { a: { b: 10 } };
console.log(target) // { a: { b: 10 } };
```

从上面代码中可以看到，首先通过 Object.assign 将 source 拷贝到 target 对象中，然后将 source 对象中的 b 属性由 2 修改为 10。通过控制台可以发现，打印结果中，三个 target 里的 b 属性都变为 10 了，证明 Object.assign 暂时实现了我们想要的拷贝效果。

使用 object.assign 方法有几点需要注意：

- 它不会拷贝对象的继承属性；
- 它不会拷贝对象的不可枚举的属性；
- 可以拷贝 Symbol 类型的属性。

可以简单理解为：Object.assign 循环遍历原对象的属性，通过复制的方式将其赋值给目标对象的相应属性，来看一下这段代码，以验证它可以拷贝 Symbol 类型的对象。

```js
const obj1 = { a: { b: 1 }, sym: Symbol(1) }
Object.defineProperty(obj1, 'innumerable', {
  value: '不可枚举属性',
  enumerable: false
})
const obj2 = {}
Object.assign(obj2, obj1)
obj1.a.b = 2
console.log('obj1', obj1)
console.log('obj2', obj2)
```

我们来看一下控制台打印的结果，如下图所示。

![图片](https://static.ajiu9.cn/images/20240316211739l57kt9.png)

从上面的代码中可以看到，利用 object.assign 也可以拷贝 Symbol 类型的对象，但是如果到了对象的第二层属性 obj1.a.b 这里的时候，前者值的改变也会影响后者的第二层属性的值，说明其中依旧存在着访问共同堆内存的问题，也就是说这种方法还不能进一步复制，而只是完成了浅拷贝的功能。

#### 方法二：扩展运算符方式

利用 JS 的扩展运算符，在构造对象的同时完成浅拷贝的功能。

扩展运算符的语法为：let cloneObj = { …obj };

```js
/* 对象的拷贝 */
const obj = { a: 1, b: { c: 1 } }
const obj2 = { ...obj }
obj.a = 2
console.log(obj) // {a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}
obj.b.c = 2
console.log(obj) // {a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}
/* 数组的拷贝 */
const arr = [1, 2, 3]
const newArr = [...arr] // 跟arr.slice()是一样的效果
```

扩展运算符 和 object.assign 有同样的缺陷，也就是实现的浅拷贝的功能差不多，但是如果属性都是基本类型的值，使用扩展运算符进行浅拷贝会更加方便。

#### 方法三：concat 拷贝数组

数组的 concat 方法其实也是浅拷贝，所以连接一个含有引用类型的数组时，需要注意修改原数组中的元素的属性，因为它会影响拷贝之后连接的数组。不过 concat 只能用于数组的浅拷贝，使用场景比较局限。代码如下所示。

```js
const arr = [1, 2, 3]
const newArr = arr.concat()
newArr[1] = 100
console.log(arr) // [ 1, 2, 3 ]
console.log(newArr) // [ 1, 100, 3 ]
```

#### 方法四：slice 拷贝数组

slice 方法也比较有局限性，因为它仅仅针对数组类型。slice 方法会返回一个新的数组对象，这一对象由该方法的前两个参数来决定原数组截取的开始和结束时间，是不会影响和改变原始数组的。

> slice 的语法为：arr.slice(begin, end);

```js
const arr = [1, 2, { val: 4 }]
const newArr = arr.slice()
newArr[2].val = 1000
console.log(arr) // [ 1, 2, { val: 1000 } ]
```

浅拷贝——它只能拷贝一层对象。如果存在对象的嵌套，那么浅拷贝将无能为力。因此深拷贝就是为了解决这个问题而生的，它能解决多层对象嵌套问题，彻底实现拷贝。

### 手工实现一个浅拷贝

1. 对基础类型做一个最基本的一个拷贝；
2. 对引用类型开辟一个新的存储，并且拷贝一层对象属性。

```js
function shallowClone(target) {
  if (typeof target == 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const prop in target) {
      if (target.hasOwnProperty(prop))
        cloneTarget[prop] = target[prop]
    }
    return cloneTarget
  }
  else {
    return target
  }
}
```

### 深拷贝的原理和实现

浅拷贝只是创建了一个新的对象，复制了原有对象的基本类型的值，而引用数据类型只拷贝了一层属性，再深层的还是无法进行拷贝。深拷贝则不同，对于复杂引用数据类型，其在堆内存中完全开辟了一块内存地址，并将原有的对象完全复制过来存放。

这两个对象是相互独立、不受影响的，彻底实现了内存上的分离。总的来说，深拷贝的原理可以总结如下：

将一个对象从内存中完整地拷贝出来一份给目标对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离。

#### 方法一：JSON.stringfly

JSON.stringfly() 是目前开发过程中最简单的深拷贝方法，其实就是把一个对象序列化成为 JSON 的字符串，并将对象里面的内容转换成字符串，最后再用 JSON.parse() 的方法将JSON 字符串生成一个新的对象。示例代码如下所示。

```js
const obj1 = { a: 1, b: [1, 2, 3] }
const str = JSON.stringify(obj1)
const obj2 = JSON.parse(str)
console.log(obj2) // {a:1,b:[1,2,3]}
obj1.a = 2
obj1.b.push(4)
console.log(obj1) // {a:2,b:[1,2,3,4]}
console.log(obj2) // {a:1,b:[1,2,3]}
```

从上面的代码可以看到，通过 JSON.stringfly 可以初步实现一个对象的深拷贝，通过改变 obj1 的 b 属性，其实可以看出 obj2 这个对象也不受影响。
但是使用 JSON.stringfly 实现深拷贝还是有一些地方值得注意，总结下来主要有这几点：

1. 拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
2. 拷贝 Date 引用类型会变成字符串；
3. 无法拷贝不可枚举的属性；
4. 无法拷贝对象的原型链；
5. 拷贝 RegExp 引用类型会变成空对象；
6. 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；

```js
function Obj() {
  this.func = function () { alert(1) }
  this.obj = { a: 1 }
  this.arr = [1, 2, 3]
  this.und = undefined
  this.reg = /123/
  this.date = new Date(0)
  this.NaN = Number.NaN
  this.infinity = Number.POSITIVE_INFINITY
  this.sym = Symbol(1)
}
const obj1 = new Obj()
Object.defineProperty(obj1, 'innumerable', {
  enumerable: false,
  value: 'innumerable'
})
console.log('obj1', obj1)
const str = JSON.stringify(obj1)
const obj2 = JSON.parse(str)
console.log('obj2', obj2)
```

通过上面这段代码可以看到执行结果如下图所示

![图片](https://static.ajiu9.cn/images/20240316211813QB9z6C.png)

使用 JSON.stringify 方法实现深拷贝对象，虽然到目前为止还有很多无法实现的功能，
对于其他的也要实现深拷贝的，JSON.stringify 暂时还是无法满足的，就需要下面的几种方法。

#### 方法二：基础版（手写递归实现）

下面是一个实现 deepClone 函数封装的例子，通过 for in 遍历传入参数的属性值，如果值是引用类型则再次递归调用该函数，如果是基础数据类型就直接复制，代码如下所示。

```js
const obj1 = {
  a: {
    b: 1,
  },
}
function deepClone(obj) {
  const cloneObj = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object' && typeof obj[key] !== null)
      cloneObj[key] = deepClone(obj[key])
    else
      cloneObj[key] = obj[key]
  }
  return cloneObj
}
const obj2 = deepClone(obj1)
obj1.a.b = 2
console.log(obj2) //  {a:{b:1}}
```

虽然利用递归能实现一个深拷贝，但是同上面的 JSON.stringfly 一样，还是有一些问题没有完全解决，例如：

1. 这个深拷贝函数并不能复制不可枚举的属性以及 Symbol 类型；
2. 这种方法只是针对普通的引用类型的值做递归复制，而对于 Array、Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝；
3. 对象的属性里面成环，即循环引用没有解决。

下面一起看看改进的版本。

#### 方法三：改进版（改进后递归实现）

针对上面几个待解决问题，先通过四点相关的理论分析分别应该怎么做。

1. 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys 方法；
2. 当参数为 Date、RegExp 类型，则直接生成一个新的实例返回；
3. 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性，以及对应的特性，顺便结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链；
4. 利用 WeakMap 类型作为 Hash 表，因为 WeakMap 是弱引用类型，可以有效防止内存泄漏（你可以关注一下 Map 和 weakMap 的关键区别，这里要用 weakMap），作为检测循环引用很有帮助，如果存在循环，则引用直接返回 WeakMap 存储的值。

那么针对上面这几个问题，我们来看下改进后的递归实现的深拷贝代码应该是什么样子的，如下所示。

```js
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
const deepClone = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date)
    return new Date(obj) // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp)
    return new RegExp(obj) // 正则对象直接返回一个新的正则对象
  // 如果循环引用了就用 weakMap 来解决
  if (hash.has(obj))
    return hash.get(obj)
  const allDesc = Object.getOwnPropertyDescriptors(obj)
  // 遍历传入参数所有键的特性
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  // 继承原型链
  hash.set(obj, cloneObj)
  for (const key of Reflect.ownKeys(obj))
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]

  return cloneObj
}
// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func() { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
}
Object.defineProperty(obj, 'innumerable', {
  enumerable: false,
  value: '不可枚举属性'
})
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj // 设置loop成循环引用的属性
const cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
```

![图片](https://static.ajiu9.cn/images/202403162118438RZn3P.png)

从这张截图的结果可以看出，改进版的 deepClone 函数已经对基础版的那几个问题进行了改进，也验证了上面提到的那四点理论。

### 总结

其实到最后我们可以看到，自己完整实现一个深拷贝，还是考察了不少的知识点和编程能力，总结下来大致分为这几点。

- 基础编码能力（递归，代码严谨性，抽象能力）。
- js编码能力（Weak Map能力，引用类型的各种API熟练程度，准确判断JS各种数量类型能力。
- 考虑问题的全面性（边界情况，解决循环引用的能力）。
