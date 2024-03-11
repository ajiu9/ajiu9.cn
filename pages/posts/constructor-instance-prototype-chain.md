---
title: 构造函数、原型、实例、原型链的关系
date: 2018-09-28
lang: zh
type: note
---
#### 创建对象的几种方法
```js
// 1.使用new Object()
var o1 = new Object({name: 'o1'});
// 2.对象字面量 (这种方法其实就是第一种的简写)
var o2 = {name: 'o2'};
// 3.构造函数
var A = function(name) {
this.name = name;
}
var o3 = new A('o3');
// 4.Object.create()
var B = {name: 'o4'};
var o4 = Object.create(B);
```

#### 构造函数、原型、实例、原型链

JavaScript是一门面向对象基于原型继承的语言,那么原型到底是怎么实现继承的？

![图片](https://static.ajiu9.cn/images/20240311231356CGtgQw.png)

prototype原型是一个对象，只有函数才有的属性，这是在创建函数是js引擎自动添加的属性，其他对象可以通过它实现属性继承。  
`__proto__`是每个对象都有的属性，但不是一个规范属性，它指向的是构造函数的原型对象。(`__proto__`通过上面第四种方式`Object.create(O))`指向的是对象O)  

```js
// 1.创建构造函数Animal
var Animal = function(name) {    
  this.name = name
}
// 2.实例化一个对象dog
var dog = new Animal('dog');
// Animal 构造函数的原型的constructor属性指向构造函数本身
Animal.prototype.constructor === Animal // true
// dog实例的__proto__指向构造函数的原型
dog.__proto__ === Animal.prototype // true
```

原型链指由于`__proto__`是对象都有的属性，所以会形成一条由`__proto__`连起来的链条，递归访问`__proto__`最终到终点，最后指向`null`.  
当js查找对象的属性时，先查找对象本身有没有这个属性，如果不存在，就会在原型链上查找，直到找到或者到达终点的`null`。

#### instanceof运算符

`instanceof`运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置

![图片](https://static.ajiu9.cn/images/20240311231424c991rT.png)

用`instanceof`来判断实例对象是否为构造函数直接生成的对象并不严格，因为出现在对象原型链中任何位置都会返回true，这时可以使用对象的`__proto__.constructor`是否严格等于构造函数来判断。  

```js
// 测试构造函数的prototype属性是否出现在对象的原型链中
dog instanceof Animal; // true
dog instanceof Object; // true
// 判断实例对象是否为构造函数直接生成
dog.__proto__.constructor === Animal; // true
```

#### new 运算符

执行new后

- 一个新对象被创建，它继承自构造函数foo.prototype
- 构造函数foo被执行。执行的时候，相应的参数被传入，同时上下文`this`会被指定为这个新实例。 `new foo` 等于 `new foo()`,只能用在不传递任何参数的情况下。
- 如果构造函数返回了一个对象，那么这个对象会整个取代new出来的结果。如果构造函数没有返回对象，那么new出来的结果为第一步创建的对象。

```js
// new 的执行如下
var new1 = function(func) {    
// 第一步:一个新对象被创建，它继承自构造函数func.prototype  
  var o = Object.create(func.prototype);    
 // 第二步：构造函数func被执行。执行的时候，相应的参数被传入，同时上下文`this`会被指定为这个新实例。    
 var k = func.call(o);    
 // 第三步   
  if (typeof k === 'object') {
     return k
   } else {
     return o
   }
}
// 验证new内部原理是否和new1函数的执行过程一样
//构造函数
var A = function(name) {   
   this.name = name;
}
// new运算符
var o3 = new A('o3');
// new1()
var o6 = new1(A);
// 接下来验证通过new1生成的o6对象是否和new生成的o3一样
o6 instanceof A; // true
o6 instanceof Object; // true
o6.__proto__.constructor === A; // true
A.prototype.walk= function(){
  console.log('walk')
}
o6.walk() // walk
o3.walk() // walk
```

通过上面的代码可以看出，new的执行原理了吧。
