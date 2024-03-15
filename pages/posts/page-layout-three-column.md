---
title: 页面布局-三栏布局解决方案
lang: zh
date: 2018-09-21
type: node
date created: 2024-03-14
date modified: 2024-03-14
---

### 问题

假设高度固定，请写出三栏布局，其中左栏、右栏宽度搁置200px,中间自适应。

![图片](https://static.ajiu9.cn/images/20240314230158hA5bJW.png)

解决方案

写在前面，共用样式

```html
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .layout .content > div {
    min-height: 100px;
    color: #fff;
  }
  .left {
    width: 200px;
    background: #facd89;
  }
  .center {
    background: #f19149;
  }
  .right {
    width: 200px;
    background: #88abda;
  }
</style>
```

#### 1.float布局

```html
<section class="layout float">
  <style>
    .layout.float .left {
      float: left;
    }
    .layout.float .right {
      float: right;
    }
  </style>

  <article class="content">
    <div class="left"></div>

    <div class="right"></div>

    <div class="center">
      <h1>这是浮动布局解决方案</h1>
    </div>
  </article>
</section>
```

- 优点：布局简单，兼容性好。
- 缺点：脱离了文档流，需要清除浮动。

#### 2.绝对定位

```html
<section class="layout absolute">
  <style>
    .layout.absolute .content > div {
      position: absolute;
    }
    .layout.absolute .left {
      left: 0;
    }
    .layout.absolute .center {
      left: 200px;
      right: 200px;
    }
    .layout.absolute .right {
      right: 0;
    }
  </style>
  <article class="content">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"><h1>这是绝对定位布局解决方案</h1></div>
  </article>
  /section>
</section>
```

- 优点：布局简单，兼容性好,不容易出问题。
- 缺点：脱离了文档流，下面的所有子元素也会脱离文档流，导致很多时候的可使用性差。

#### 3.flex布局

```html
<section class="layout absolute">
  <style>
    .layout.absolute .content {
      display: flex;
    }
    .layout.absolute .center {
      flex: 1;
    }
  </style>
  <article class="content">
    <div class="left"></div>
    <div class="center"><h1>这是flex布局解决方案</h1></div>
    <div class="right"></div>
  </article>
</section>
```

- 优点：css3新出的属性，比较完美的解决方式，移动端布局常用。
- 缺点：不兼容ie8以下的浏览器

#### 4.table表格布局

```html
<section class="layout table">
  <style>
    .layout.table .content {
      width: 100%;
      display: table;
      min-height: 100px;
    }
    .layout.table .content > div {
      display: table-cell;
    }
  </style>
  <article class="content">
    <div class="left"></div>
    <div class="center"><h1>这是table表格解决方案</h1></div>
    <div class="right"></div>
  </article>
</section>
```

- 优点：兼容性好。

- 缺点：单元格的高度都是一样的，有时候这种效果并不是我们想要的，当然这在高度自适应的情况下是一种比较好的解决方案。

#### 5.grid栅格布局

```html
<section class="layout gird">
  <style>
    .layout.gird .content {
      display: grid;
      grid-template-rows: 100px;
      grid-template-columns: 200px auto 200px;
    }
  </style>
  <article class="content">
    <div class="left"></div>
    <div class="center"><h1>这是grid栅格布局解决方案</h1></div>
    <div class="right"></div>
  </article>
</section>
```

- 优点：将页面分割成数个主要区域，或者用来定义组件内部元素间大小、位置和图层之间的关系。

- 缺点：兼容性差。

#### 6.双飞翼布局

```html
<section class="layout fly">
  <style>
    .layout.fly .main {
      float: left;
      width: 100%;
    }
    .layout.fly .main .center {
      margin: 0 200px;
      min-height: 100px;
    }
    .layout.fly .left {
      float: left;
      margin-left: -100%;
    }
    .layout.fly .right {
      float: right;
      margin-left: -200px;
    }
  </style>
  <article class="content">
    <div class="main">
      <div class="center"><h1>这是双飞翼布局解决方案</h1></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </article>
</section>
```

- 优点：main主体部分能优先加载。
- 缺点：脱离文档流，布局和样式复杂一些。

#### 7.圣杯布局

```html
<section class="layout grail">
  <style>
    .layout.grail .content {
      margin: 0 200px;
    }
    .layout.grail .center {
      float: left;
      width: 100%;
    }
    .layout.grail .left {
      float: left;
      margin-left: -100%;
      position: relative;
      left: -200px;
    }
    .layout.grail .right {
      float: right;
      margin-left: -200px;
      position: relative;
      right: -200px;
    }
  </style>
  <article class="content">
    <div class="center"><h1>这是圣杯布局解决方案</h1></div>
    <div class="left"></div>
    <div class="right"></div>
  </article>
</section>
```

- 优点：main主体部分能优先加载,布局简单。
- 缺点：脱离文档流，样式复杂。

### 清除浮动

第六种双飞翼布局和第七种圣杯布局，是在浮动布局的基础上的演变。浮动布局需要清除浮动，它又有哪些清除浮动的方法呢？

### 其他类似布局

- 三栏布局同上，高度也自适应？
- 中间和右侧固定，左侧自适应？
- 左侧和中间固定， 右侧自适应？
- 上下固定，中间自适应？
- 两栏布局？
