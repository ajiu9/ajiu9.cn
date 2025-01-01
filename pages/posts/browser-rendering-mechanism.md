---
title: 浏览器渲染机制
lang: zh
date: 2018-10-11
type: note
---

#### 什么是DOCTYPE及作用

DOCTYPE标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。

- HTML5：`<!DOCTYPE html>`

- HTML4.01 Strict `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" " http://www.w3.org/TR/html4/strict.dtd">`(该DTD包含所有HTML元素和属性，但是不包括展示性的和弃用的元素如(font))

- HTML4.01 Transitional `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" " http://www.w3.org/TR/html4/loose.dtd" >`(该DTD包含所有HTML元素和属性，包括展示性的和弃用的元素如(font))

#### 浏览器渲染过程

webkit的主要流程：

![图片](/images/20240316130401LakYs1.png)

解析html以构建dom树 -> 构建render树 -> 布局render树 -> 绘制render树

- 浏览器会将HTML解析成一个DOM树，DOM树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。

- 将CSS解析成 CSS Rule Tree 。

- 根据DOM树和CSSDOM来构造 Rendering Tree。注意：Rendering Tree 渲染树并不等同于 DOM 树，因为一些像Header或display:none的东西就没必要放在渲染树中了。

- 有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为layout，顾名思义就是计算出每个节点在屏幕中的位置。

- 再下一步就是绘制，即遍历render树，并使用UI后端层绘制每个节点。

#### reflow（回流）和erepaint（重绘）

- reflow（回流）：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫 reflow。reflow 会从 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。reflow 几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显 示与隐藏）等，都将引起浏览器的 reflow。鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲染。通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。

- repaint（重绘）：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。
