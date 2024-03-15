---
title: "日常工作小技巧和问题集（1）"
lang: zh
date: 2024-03-15T00:00:00Z
type: blog
---

1. 使用.gitignore_global忽略.vscode文件夹

2. eslint 对 const 和 let 的格式处理有问题，需要再次查看问题项确认

3. git 快速切换到前一分支 `git chekcout -`

4. clashx配置代理节点

5. git回撤代码 `git revert {{}}`

6. `git commit —amend -m “New commit message”` 覆盖上次提交

7. setup中 watch 一个数组，这个数组需要解构赋值，重新触发setter函数,watch才能监听到，不然就需要使用deep参数深度监听

```js
const pages = computed(() => {
// 解构赋值
  return [...store.state.pages]
})
watch(pages, (val) => {
  delGuideMapEl(val)
})
```

```js
const pages = computed(() => {
  return store.state.pages
})
watch(pages, (val) => {
  delGuideMapEl(val)
}, {
  // 深度监听
  deep: true
})
```

8. 在vue 中使用setup,需要注意重名问题，比如使用了ref=“form”, 又声明了form = reactive(), 那么一不注意就会出现报错：[Vue warn]: Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.
   此时要把ref=“form”改成 ref=“formRef”，避免隐藏的重名问题

9. shallowRef 和 ref 的使用

`ref`

接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。

类型

```ts
function ref<T>(value: T): Ref<UnwrapRef<T>>

interface Ref<T> {
  value: T
}
```

详细信息

ref 对象是可更改的，也就是说你可以为 .value 赋予新的值。它也是响应式的，即所有对 .value 的操作都将被追踪，并且写操作会触发与之相关的副作用。

如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。

若要避免这种深层次的转换，请使用 shallowRef() 来替代。

示例

```js
const count = ref(0)
console.log(count.value) // 0

count.value = 1
console.log(count.value) // 1
```

`shallowRef`

ref() 的浅层作用形式。

类型

```ts
function shallowRef<T>(value: T): ShallowRef<T>

interface ShallowRef<T> {
  value: T
}
```

详细信息

和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。

shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。

示例

```js
const state = shallowRef({ count: 1 })

// 不会触发更改
state.value.count = 2

// 会触发更改
state.value = { count: 2 }
```

10. 在Mac中查看Finder打开的地址

```bash
function pfd() {
  osascript 2>/dev/null <<EOF
    tell application "Finder"
      return POSIX path of (target of window 1 as alias)
    end tell
EOF
}
```
