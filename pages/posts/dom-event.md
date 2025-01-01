---
title: DOM事件
lang: zh
type: note
date: 2018-09-26
date created: 2024-03-10
date modified: 2024-03-10
---

#### 事件级别

- DOM0
  `element.onclick = function(){}`
- DOM2
  `element.addEventListener('click', function(){}, false)`
- DOM3
  `element.addEventListener('keyup', function(){}, false`
  在DOM2事件后新增了UI事件、鼠标事件、键盘事件等事件类型

#### 事件模型

- 事件捕获
- 事件冒泡

#### DOM事件流

DOM(文档对象模型)结构是一个树型结构，当一个HTML元素产生一个事件时，该事件会在元素节点与根结点之间的路径传播，路径所经过的结点都会收到该事件，这个传播过程可称为DOM事件流。

#### DOM事件流的具体流程

在DOM兼容浏览器中，事件流中分三个级段：

- 捕获阶段（Capture Phase）：事件从window自上而下向目标节点传播的阶段；
- 目标阶段（Target Phase）：正的目标节点正在处理事件的阶段；
- 冒泡阶段（Bubbling Phase）：事件从目标节点自上而下向window传播的阶段。
  ![图片](/images/20240310220404oy7dPw.png)

#### Event对象的常见应用

- event.preventDefault() 阻止默认事件
- event.stopPropagation() 阻止捕获和冒泡阶段中当前事件的进一步传播
- event.stopImmediatePropagation() 阻止事件冒泡并且阻止相同事件的其他侦听器被调用
- event.currentTarget 当事件遍历DOM时，标识事件的当前目标。它总是引用事件处理程序附加到的元素(当前绑定的事件元素)
- event.target 标识事件发生的元素（当前被点击的元素）

#### 自定义事件

> 语法`event = new Event(typeArg, eventInit);`
> typeArg 是DOMString 类型，表示所创建事件的名称。
> eventInit可选,是 EventInit 类型的字典，接受以下字段:
>
> - “bubbles”，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
> - “cancelable”，可选，Boolean类型，默认值为 false， 表示该事件能否被取消。
> - “composed”，可选，Boolean类型，默认值为 false，指示事件是否会在影子DOM根节点之外触发侦听器。

```
// 创建一个支持冒泡且不能被取消的attach事件var ev = new Event("attach", {"bubbles":true, "cancelable":false});document.dispatchEvent(ev);// 事件可以在任何元素触发，不仅仅是documentmyDiv.dispatchEvent(ev);
```

`customEvent`事件是由程序创建的，可以有任意自定义功能的事件。

```
// 添加一个适当的事件监听器obj.addEventListener("cat", function(e) { process(e.detail) })// 创建并分发事件var event = new CustomEvent("cat", {"bubbles": true, "cancelable": false, "detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)
```
