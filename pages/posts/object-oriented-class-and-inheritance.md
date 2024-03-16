---
title: 面向对象-类与继承
date: 2018-09-29
type: note
lang: zh
---

#### 概念

- 对象：对象是人们要进行研究的任何事物，从最简单的整数到复杂的飞机等均可看作对象，它不仅能表示具体的事物，还能表示抽象的规则、计划或事件。
- 对象的状态和行为：对象具有状态，一个对象用数据值来描述它的状态；对象还有操作，用于改变对象的状态，对象及其操作就是对象的行为；对象实现了数据和操作的结合，使数据和操作封装于对象的统一体中。
- 类：具有相同特性（数据元素）和行为（功能）的对象的抽象就是类。因此，对象的抽象是类，类的具体化就是对象，也可以说类的实例是对象，类实际上就是一种数据类型。类具有属性，它是对象的状态的抽象，用数据结构来描述类的属性。类具有操作，它是对象的行为的抽象，用操作名和实现该操作的方法来描述。
- javascript是面向对象的编程语言，是通过原型实现继承的。

#### 类与实例

类的声明:

```js
/*
* 类的声明
*/
function Animal() {
  this.name = 'name'
}

/*
* ES6中class声明
*/
class Animal2 {
  constructor() {
    this.name = name
  }

  walk() {
    console.log(this.name)
  }
}
/*
* 实例化
*/
const o1 = new Animal(); const o2 = new Animal2()
```

#### 类与继承

类的继承本质上是通过原型链实现继承。
**借助构造函数实现继承**

```js
/*
* 借助构造函数实现继承
*/
function Parent1() {
  this.name = 'parent1'
}
Parent1.prototype.say = function () {
  console.log('say')
}
function Child1() {
  Parent1.call(this); this.type = 'child1'
}
console.log(new Child1())
// {name: "parent1", type: "child1"}
// `Parent1`函数原型上的方法没有继承，报错console.log(new Child1().say())
// Uncaught TypeError: (intermediate value).say is not a function
```

借助构造函数实现继承是通过`call()`或者`apply()`指定`this`来实现改变`Parent1`函数上下文来实现继承。但是不能继承`Parent1`函数原型上的方法。

**借助原型链实现继承**

```js
/*
 * 借助原型链实现继承
 */
function Parent2() {
  this.name = 'parent2'; this.list = [1, 2, 3]
}
Parent2.prototype.say = function () {
  console.log('say2')
}; function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
const s1 = new Child2()
const s2 = new Child2()
console.log(s1.list, s2.list)
// [1,2,3],[1,2,3]s2.list.push(4);console.log(s1.list,s2.list);
// [1, 2, 3, 4], [1, 2, 3, 4]console.log(s1.say()); // say2
```

这种方式是通过`prototype`来实现继承的，函数的原型指向`new Parent2()`。所以这种方法的缺点是继承的属性都是原型链上的，只要一个实例上继承的属性改变，就是改变原型链上的属性，导致所有实例属性都变了。

**组合方式**

```js
/*
* 组合方式
*/
function Parent3() {
  this.name = 'parent3'; this.list = [1, 2, 3]
}
Parent3.prototype.say = function () {
  console.log('say3')
}
function Child3() {
  Parent3.call(this); this.type = 'child3'
}
Child3.prototype = new Parent3()
const s3 = new Child3()
const s4 = new Child3()
console.log(s3.list, s4.list)
// [1,2,3],[1,2,3]s4.list.push(4);console.log(s3.list,s4.list);
// [1, 2, 3], [1, 2, 3, 4]console.log(s3.say());
// say3
```

通过上面两种组合方式实现继承，结合了他们的优点，但这里`Parent3.call(this)`,`Child3.prototype = new Parent3()`构造函数执行了俩次。

**组合继承优化方式1**

```js
/*
* 组合继承优化方式1
*/
function Parent4() {
  this.name = 'parent4'; this.list = [1, 2, 3]
}
Parent4.prototype.say = function () {
  console.log('say4')
}
function Child4() {
  Parent4.call(this); this.type = 'child4'
}
Child4.prototype = Parent4.prototype
const s5 = new Child4()
const s6 = new Child4()
console.log(s5.list, s6.list)
// [1,2,3],[1,2,3]s5.list.push(4);console.log(s5.list,s6.list);
// [1, 2, 3], [1, 2, 3, 4]console.log(s5.say()); //say4
```

这里通过`Child4.prototype = Parent4.prototype`把函数的原型指向构造函数的原型，通过简单的引用来实现继承。

**组合继承优化方式2**

```js
/*
 * 组合继承优化方式2
 */
function Parent5() {
  this.name = 'parent5'; this.list = [1, 2, 3]
}
Parent5.prototype.say = function () {
  console.log('say5')
}
function Child5() {
  Parent5.call(this); this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5
const s7 = new Child5()
const s8 = new Child5()
console.log(s7.list, s8.list)
// [1,2,3],[1,2,3]s7.list.push(4);console.log(s7.list,s8.list);
// [1, 2, 3], [1, 2, 3, 4]console.log(s7.say());
// say5console.log(s7.constructor); // Child5
```

这是组合继承的完美写法，通过`call()`或者`apply()`方法执行构造函数，通过改变this上下文实现属性继承；然后通过对子类函数的原型采用Object.create(Parent.prototype)，实现子类函数继承构造函数的原型上的方法；最后重新指定子类函数原型的`constructor`，从而完美实现类的继承。
