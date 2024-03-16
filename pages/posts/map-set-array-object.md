---
title: ES6中Map，Set与数组和对象的比较
lang: zh
date: 2018-10-29
type: note
---

在es6中常用的数据集合有这几种，Object、Array、Map、Set。他们之间有什么区别？在什么情况下选用哪种数据集合类型？下来看这几种数据集合的使用比较。

- Object：Object构造函数创建一个对象包装器。
- Array：Array对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
- Map：Map 对象保存键值对。`任何值`(对象或者原始值) 都可以作为一个键或一个值。
- Set：Set 对象允许你存储任何类型的`唯一值`，无论是原始值或者是对象引用。

#### Map与数组比较

```js
const map = new Map()
const arr = []

// add
map.set('a', 1)
arr.push({ a: 1 })
console.log('map-array', map, arr)
// map-array Map(1) {"a" => 1} [{…}]

// exist
const map_exist = map.has('a')
const arr_exist = arr.find(item => item.a)
console.log('map-array', map_exist, arr_exist)
// map-array true {a: 1}

// modify
map.set('a', 2)
arr.forEach(item => item.a ? item.a = 2 : '')
console.log('map-array', map, arr)
// map-array Map(1) {"a" => 2} [{…}]

// delete
map.delete('a')
const index = arr.findIndex(item => item.a)
arr.splice(arr.findIndex(item => item.b), 1)
console.log('map-array', map, arr)
// map-array Map(0) {} []
```

#### Set与数组比较

```js
const set = new Set()
const array = []

// add
const a1 = {
  a: 11
}
set.add(a1)
array.push({ a: 11 })
console.log('set-array', set, array)
// set-array Set(1) {{…}} [{…}]

// exist
const set_exist = set.has('a')
const array_exist = array.find(item => item.a)
console.info('map-array', set_exist, array_exist)
// map-array false {a: 11}

// modify
set.forEach(item => item.a ? item.a = 2 : '')
array.forEach(item => item.a ? item.a = 2 : '')
console.log('set-array', set, array)
// set-array Set(1) {{…}} [{…}]

// delete
set.forEach(item => item.a ? set.delete(item) : '')
array.splice(array.findIndex(item => item.b), 1)
console.log('map-array', set, array) // map-array Set(0) {} []
```

#### Map-Set与Object比较

```js
const item = { a: 1 }
const map = new Map()
const set = new Set()
const obj = new Object()

// add
map.set('a', 1)
set.add(item)
obj.a = 1
console.log('map-set-object', map, set, obj)
// map-set-object Map(1) {"a" => 1} Set(1) {{…}} {a: 1}

// exist
console.info({
  map_exist: map.has('a'),
  set_exist: set.has(item),
  ibj_exist: 'a' in obj
})
// {map_exist: true, set_exist: true, ibj_exist: true}

// modify
map.set('a', 2)
item.a = 2
obj.a = 2
console.log('map-set-object', map, set, obj)
// map-set-object Map(1) {"a" => 2} Set(1) {{…}} {a: 2}

// delete
map.delete('a')
set.delete(item)
delete obj.a
console.log('map-set-object', map, set, obj)
// map-set-object Map(0) {} Set(0) {} {}
```

#### 总结

从上面对数据结构的增查改删中可以看出，能使用Map不用Array,如果要保证数据的唯一性，可以使用Set。
