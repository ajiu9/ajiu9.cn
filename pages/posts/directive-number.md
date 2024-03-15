---
title: vue数字指令
date: 2024-03-15T00:00:00Z
type: blog
tags: [vue, directive]
---

#### 指令功能

1. 能够实现常用数字和金额校验
2. 能够自定义小数位,整数位，是否包含0，负数
3. 对数据边界进行处理
4. 能够处理复制过来的数据（转出收费项目1245租赁保证金余额0.09转入收费项目 => 12450.09）

#### 优势：可以去除代码中校验的正则表达，优化代码，最重要的是提升用户体验，输入的就是正确

#### 指令实现

```js
const MAX_INT_PRECISION = 13 // 最大整数位精度
const MAX_PRECISION = 15 // 最大小数位精度
const IS_IE = !!window.ActiveXObject || 'ActiveXObject' in window
let inputEvent
if (IS_IE) {
  // ie 支持方式
  inputEvent = document.createEvent('Event')
  inputEvent.initEvent('input', true, false)
}
else {
  inputEvent = new Event('input')
}

export default {
  bind(el, binding, vNode) {
    let { minus = false, zero = false } = binding.modifiers // 修饰符的对象 是否为负数，是否包含零
    let elInput = el
    const isComponentInstance = vNode.componentInstance // true 组件， false 原生input
    let effect = true // 原生input是否执行input事件
    let intPrecision = MAX_INT_PRECISION // 整数位精度
    let precision = MAX_PRECISION // 小数位精度
    let max // 最大值
    let min // 最小值
    const bindingValue = binding.value

    if (el.tagName.toLocaleUpperCase() !== 'INPUT')
      elInput = el.getElementsByTagName('input')[0]

    // 指令的绑定值
    if (typeof bindingValue === 'object') {
      const valueMinus = bindingValue.minus || minus
      const valueIntPrecision = Math.floor(bindingValue.intPrecision)
      const valuePrecision = Math.floor(bindingValue.precision)

      minus = !!valueMinus
      intPrecision = Math.min(Number.isNaN(valueIntPrecision) ? MAX_INT_PRECISION : valueIntPrecision, MAX_INT_PRECISION)
      precision = Math.min(Number.isNaN(valuePrecision) ? MAX_PRECISION : valuePrecision, MAX_PRECISION)
      max = bindingValue.max
      min = bindingValue.min
    }
    const setVal = (val) => {
      effect = false
      elInput.value = val
      // 如果是自定义组件就触发自定义组件的input事件
      // 如果是原生组件就触发原生组件的input事件
      isComponentInstance ? vNode.componentInstance.$emit('input', val) : elInput.dispatchEvent(inputEvent)
    }
    const listener = function (e) {
      if (!isComponentInstance && !effect) {
        effect = true
        return
      }
      let elVal = e.target.value
      let hasMinus = false

      if (minus) {
        elVal = elVal.replace(/[^0-9\.\-]/g, '')
        if (elVal && elVal.substring(0, 1) === '-')
          hasMinus = true
      }
      elVal = elVal.replace(/[^0-9\.]/g, '')
      const reg = new RegExp(`^0+(\\d+)|[^0-9\\.]+|^\\.|(^\\d+)(\\.{2,})|(^\\d+\\.{1}\\d{0,${precision}})[0-9\\.]\*|(^[0-9]{${intPrecision}})[0-9]+`, 'g')
      elVal = elVal.replace(reg, (match, p1, p2, p3, p4, p5) => {
        return p1 || p4 || p5 || (p3 ? p2 : '')
      })
      if (minus && hasMinus)
        elVal = `-${elVal}`
      setVal(elVal)
    }
    elInput.addEventListener('input', listener, true)
    // 用来清除监听
    el.unbindEventListener = () => {
      elInput.removeEventListener('input', listener, true)
    }
    elInput.onblur = function (e) {
      let value = e.target.value
      if (zero && value === '0')
        return

      value = value.replace(/(^[0-9]+|^-[0-9]+)\.$/, '$1')
      value = value.replace(/^-$|^0+$|^-0+$|^0\.0*$|^-0\.0*$/, '')
      if (value !== '') {
        if (min)
          value = Math.max(value, min)
        if (max)
          value = Math.min(value, max)
      }
      if (e.target.value !== value)
        setVal(value)
    }
  },
  unbind(el) {
    el.unbindEventListener()
  },
}
```

#### index.js注册指令

```js
import number from './number'

const install = function (Vue) {
  Vue.directive('number', number)
}

if (window.Vue) {
  window.number = number
  Vue.use(install)
}

number.install = install
export default number
```

#### 在vue文件中引用指令

```vue
// 组件中引入
directives: { number }

// v-number

// 整数最多13位，小数15位数
<el-input v-number></el-input>

// 整数数最多3位, 小数2位数
<el-input v-number="{ intPrecision: 3, precision: 2 }"></el-input>

// 最大值100 最小值0
<el-input v-number="{ max: 100, min: 0 }"></el-input>

// 可输入0
<el-input v-number.zero></el-input>

// 可输入负-
<el-input v-number.minus></el-input>
```
