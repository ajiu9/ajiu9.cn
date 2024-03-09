---
title: 在浏览器中实现页面打印
lang: zh
date: 2024-03-09
type: note
---

如何在浏览器中打印页面内容？

一个比较实用的方法时通过iframe调用window.print打印
1. 创建一个隐藏的iframe
2. 通过iframe的contentWindow属性获取iframe的window对象，然后调用window.print()方法

iframe 通过设置style为display:none，position:absolute，width:0px，height:0px，left:-500px，top:-500px，这样可以隐藏iframe，但是不影响页面的布局。

注意： 如果有写入图片，因为是异步，需要在下一个宏任务中执行。

下面是一段代码：

```js
 function print(content) {
	let iframe = document.body.querySelector('#window-print');
	if (!iframe) {
		iframe = document.createElement('iframe');
		iframe.id = 'window-print';
		iframe.setAttribute('style', 'display:none;position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
		document.body.appendChild(iframe);
	}
	const printDocument = iframe.contentWindow.document;
	printDocument.write(content);
	printDocument.close();
	iframe.contentWindow.focus();
	setTimeout(() => {
		iframe.contentWindow.print();
	}, 0);
}
```
