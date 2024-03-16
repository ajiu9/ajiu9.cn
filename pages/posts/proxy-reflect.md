---
title: Proxy和Reflect
date: 2018-10-31
lang: zh
type: note
---

计算机中代理模式的定义：为其他对象提供一种代理以控制这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介作用。

#### Proxy和Reflect

- Proxy对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

- Reflect是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

#### Proxy的方法

```js
let obj = {
time: '2018-10-31',
name: 'vender',
_r: 123

}
let monitor = new Proxy(obj, {
    //拦截对象读取属性值
    get(target, key) {
        return obj[key].replace(/-/g, ':')
    },
    //拦截对象设置属性值
    set(target, key, value) {
        if (key === 'name') {
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截 key in object 操作
    has(target, key) {
    if (key === 'name') {
        return true
      } else {
        return false
    }
    // 拦截delete
    deleteProperty(target, key) {
        if (key === '_r') {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截 Object.getOwnPropertyNames(),Object.getOwnProptySymbols(), Object.keys(), Reflect.ownKeys()
    ownKeys(target) {
        return Object.keys(target).filter(item => item !== 'time')
    }

})
```

上面定义了一个对象`obj`, 同时使用了Proxy代理分别拦截了`get`,`set`,`has`,`deleteProperty`,`ownKeys`五种比较常用的方法。

```js
console.log('get', monitor.time) // get 2018:10:31
```

代理`get`方法拦截对象读取属性值。

```js
monitor.time = '2019'
monitor.name = 'apple'
console.log('set', monitor.name, monitor) // set apple Proxy {time: "2018-10-31", name: "apple", _r: 123}
```

代理`set`方法拦截对象设置属性值。

```js
console.log('has', 'name' in monitor, 'time' in monitor) // has true false
```

代理`has`方法拦截 key in object 操作。

```js
delete monitor.name
console.log('delete', monitor) // delete Proxy {time: "2018-10-31", name: "apple", _r: 123}
delete monitor._r
console.log('delete', monitor) // delete Proxy {time: "2018-10-31", name: "apple"}
```

代理`deleteProperty`方法拦截delete。

```js
console.log('ownKeys', Object.keys(monitor)) // ownKeys ["name"]
```

代理`ownKeys`方法拦截`Object.getOwnPropertyNames()`,`Object.getOwnProptoSymbols()`,`Object.keys()`,`Reflect.ownKeys()`。

#### Reflect的方法

如前面所说，Reflect的方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。
一下简单举例：

```js
const obj = {
  time: '2018-10-31',
  name: 'vender',
  _r: 123
}
console.log('Reflect get:', Reflect.get(obj, 'time')) // Reflect get: 2018-10-31Reflect.set(obj, 'name', 'banana')
console.log('Reflect set:', obj) // Reflect set: {time: "2018-10-31", name: "banana", _r: 123}
console.log('Reflect has:', Reflect.has(obj, 'time')) // Reflect has: trueReflect.deleteProperty(obj, '_r')
console.log('Reflect delete:', obj) // Reflect delete: {time: "2018-10-31", name: "banana"}
console.log('Reflect ownKeys:', Reflect.ownKeys(obj)) // Reflect ownKeys: ["time", "name"]
```

#### 简单应用

在开发中通常会对数据进行校验，提交数据的时候会判断数据是否符合，利用`Proxy`和`Reflect`来实现一个简单的验证，实现数据和业务解耦，功能：1.对用户填写的原始数据进行验证。2.数据和业务解耦

思路：

- 1.通过定义一个函数，这个函数的功能就是接收俩个参数(`target`原始对象和`validator`验证规则)返回一个代理对象，拦截原始对象的设置属性值，也就是`set`方法。
- 2.定义一个类`Person`,在`constructor`中重写`this`（`return validator(this, personValidator)`这里返回的是代理对象）从而达到对这个对象实例的代理。
- 3.定义第二步这个类`Person`所需要的验证规则定义`personValidator`，在这个对象里，实现对数据的具体验证。
- 4.使用时，实例化第二步定义的类`Person`。

```js
// 定义一个验证函数，这个函数返回一个代理对象。它的功能就是验证
function validator(target, validator) {
  return new Proxy(target, {
    _validator: validator, // 保存原始校验对象
    set(target, key, value, proxy) {
      // 拦截target设置属性
      if (target.hasOwnProperty(key)) { // target属性key存在就继续下一步，不存在抛出错误
        const va = this._validator[key]
        if (va(value)) { // 校验规则是否通过
          return Reflect.set(target, key, value, proxy) // 拦截target设置属性，验证通过
        }
        else {
          throw new Error(`${key}不能设置为${value}`)
        }
      }
      else {
        throw new Error(`${key} 不存在`)
      }
    }
  })
}

// 定义验证规则
const personValidator = {
  name(val) {
    return typeof val === 'string'
  },
  age(val) {
    return typeof val === 'number' && val > 18
  }
}
// 定义类

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    return validator(this, personValidator)
  }
}

// 实例
const person = new Person('wu', 20)
person.name = 'zhuli'
console.info(person) // Proxy {name: "hell", age: 20}

person.age = 'year' // Uncaught Error: age不能设置为year
```
