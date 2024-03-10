---
title: JavaScript基本类型和引用类型
lang: zh
date: 2017-12-01
type: note
---

CMAScript的变量可能包含两种不同数据类型的值：基本类型值和引用类型值。基本类型的值是简单的数据段，引用类型的值是多个值构成的对象。

把一个值赋值给变量时，解析器首先确定这个值是基本类型的值还是引用类型的值。基本数据类型有5种：Undefined、Null、Boolean、Number、String。这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际值。引用类型的值是按照引用访问的，因为javaScript不允许访问内存中的位置，不能直接操作对象的内存空间。（为对象添加属性操作的是实际对象）

**动态属性**

首先我们来定义一个引用类型的值：

![图片](https://mmbiz.qpic.cn/mmbiz_png/E8J408djnGzmDPkOvW6KeldKiaYNLtZVwcbGYoAWEyGPbLWsATrn8tpatMTAzuCs0leB66Mf2mknLjdDVXrTfSg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

以上代码创建了一个对象并将其保存在person变量中，然后为变量添加了一个名为name的属性，并将字符串“江月夜”赋给了这个属性。之后通过函数alert（）访问了这个新属性。如果对象不被销毁或者这个属性不被删除，则各属性将一直存在。

但是，不能给基本类型的值添加属性（不会导致错误）

![图片](https://mmbiz.qpic.cn/mmbiz_png/E8J408djnGzmDPkOvW6KeldKiaYNLtZVwRwFb3krQyqHm78J7Eicacic9RHgcoklaMn6r9H2CZsgzX5HLPoM8bPpw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**赋值变量值**

除了保存方式不一样，变量复制也有区别。

基本类型复制后的俩个变量彼此独立，此后，这俩个变量可以参与任何操作而不会互相影响。

引用类型的变量复制其实是一个指针，而这个指针指向存储在堆中的一个对象。复制结束后，俩个对象实际上引用同一个对象。改变其中一个变量，就会影响另一个变量。

![图片](https://mmbiz.qpic.cn/mmbiz_png/E8J408djnGzmDPkOvW6KeldKiaYNLtZVwPxhAnOEDFu1clevviaytEejdWy2LxwoHaibdQXhQ9KiamRRI680bsoJDg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

**传递参数**

函数的参数是按值传递的，基本类型的传递会把值复制给arguments对象中的一个元素（局部变量），引用类型的传递会把这个值在内存中的地址复制给一个局部变量，所以会反应在函数的外部。
