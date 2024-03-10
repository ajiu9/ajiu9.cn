---
title: 前端通信类以及跨域的几种方法
lang: zh
type: note
date: 2018-09-27
---

#### 什么是同源策略及限制

同源策略，它是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。
所谓同源是指，域名，协议，端口（http协议的默认端口是80）相同。
例如一个浏览器的两个tab页中分别打开来百度和谷歌的页面，当浏览器的百度tab页执行一个脚本的时候会检查这个脚本是属于哪个页面的，即检查是否同源，只有和百度同源的脚本才会被执行。如果非同源，那么在请求数据时，浏览器会在控制台中报一个异常，提示拒绝访问。

限制：

- Cookie、LocalStorage和IndexDB无法获取。

- 无法获取和操作DOM。

- 不能发送Ajax请求。

#### 前后端如何通信

- Ajax：同源下的通信方式。

- WebSocket：不受同源策略的限制，支持跨域。

- CORS： CORS是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是W3C标准，是跨源AJAX请求的根本解决方法。相比JSONP只能发GET请求，CORS允许任何类型的请求。

#### 如何创建Ajax

需要知道以下几点：

- XMLHttpRequest的工作原理

- 兼容性处理（XMLHttpRequest只在高版本的浏览器支持）

- 事件的触发条件

- 事件的触发顺序

```js
util.ajax = function (options) {
  const opt = Object.assin({
    url: '',
    ype: 'get',
    data: {},
    success() {},
    error() {},
  }, options)

  if (opt.url) {
    // 兼容性处理
    const xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP')
    const data = opt.data
    let url = opt.url
    const type = opt.type.toUpperCase()
    const dataArr = []
    for (const k in data)
      dataArr.push(`${k}=${data[k]}`)

    if (type === 'GET') {
      url = `${url}?${dataArr.join('&')}`
      xhr.open(type, url.replace(/\?$/g, ''), true)
      xhr.send()
    }
    if (type === 'POST') {
      xhr.open(type, url, true)
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send(dataArr.join('&'))
    }
    xhr.onload = function () {
      if (xhr.status === 200 || xhr === 304) {
        var res
        if (opt.success && opt.success instanceof Function) {
          res = xhr.responseText
          if (typeof res === 'string') {
            res = JSON.parse(res)
            opt.success.call(xhr, res)
          }
        }
      }
      else {
        if (opt.error && opt.error instanceof Function)
          opt.error.call(xhr, res)
      }
    }
  }
}
```

#### 跨域通信的几种方式

- jsonp
- Hash
- webSocket
- postMessage
- CORS

**1.jsonp**
jsonp原理： 通过`<script>`标签的异步加载来实现。例如在`<head>`标签中通过`<script>`中的url加载的js。

```javascript
/**
* [function 拼接url]
* @param  {[Object]]} data [description]
* @return {[value=key&value1=key1]} [description]
*/var util = {}
util.param = function (data) {
  var url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
/**
  * [function 判断是否为函数]
  * @param  {[type]} source [description]
  * @return {[type]}        [description]
  */
util.isFunction = function (source) {
  return '[object Function]' === Object.prototype.toString.call(source);
};
/**
  * [function 获取一个随机的5位字符串]
  * @param  {[type]} prefix [description]
  * @return {[type]}        [description]
  */
 util.getName = function (prefix) {
    return prefix + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  };
/**
  * [function 在页面中注入js脚本]
  * @param  {[type]} url     [description]
  * @param  {[type]} charset [description]
  * @return {[type]}         [description]
  */
 util.createScript = function (url, charset) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  charset && script.setAttribute('charset', charset);
  script.setAttribute('src', url);
  script.async = true;return script;
};
// jsop实现
util.jsonp = function(url, data, onsuccess, onerror, charset) {
  // 第一步，全局注册一个callback回调函数
  var callbackName = util.getName(_callback);
  window[callbackName] = function() {
    if (onsuccess && onsuccess.util.isFunction) {
       onsuccess(arguments[0]);
    }
  }
  // 第二步 动态创建Script标签
  url += (url.indexOf('?') < 0 ? '?' : '&') + util.param(data);
  var script = util.createScript(url + '&callback=' + callbackName, charset);
  // 第三步 发送script请求
  document.getElementsByTagName('head')[0].appendChild(script);
  // 第四步 监听函数
  script.onload = script.onreadystatechange = function () {
    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
      script.onload = script.onreadystatechange = null;// 移除该script的 DOM 对象
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    // 删除函数或变量
    window[callbackName] = null;
  }
};
script.onerror = function () {
  if (onerror && util.isFunction(onerror)) {
    onerror();
  }
};
}
```

实例：

```js
util.jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
  platform: ' h5',
  uin: 0,
  needNewCode: 1
}, function () {
  console.log(arguments)
})
```

**2.Hash（片段识别符）**
url的`#`后面的内容就叫Hash。Hash的改变，页面不会刷新。这就是用 Hash 做跨域通信的基本原理(url的?后面的内容叫Search。Search的改变，会导致页面刷新)。
实例：
页面A通过iframe或frame嵌入了跨域页面B。
窗口可以把信息，写入子窗口的片段标识符。

```
var src = originURL + '#' + data;document.getElementById('myIFrame').src = src;
```

子窗口通过监听hashchange事件得到通知。

```
window.onhashchange = checkMessage;function checkMessage() {var message = window.location.hash;// ...}
```

同样的，子窗口也可以改变父窗口的片段标识符。

```
parent.location.href= target + "#" + hash;
```

**3.postMessage**
HTML5引入了一个全新的API：跨文档通信 API（Cross-document messaging）。这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。

```
// postMessage// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息Bwindow.postMessage('data', 'http://B.com');// 在窗口B中监听Awindow.addEventListener('message', function (event) {console.log(event.origin);// 发送消息的窗口console.log(event.source); // 消息发向的网址console.log(event.data); // 消息内容}, false);
```

**4.webSocket**
WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

```
var ws = new webSocket("wss://echo.websocket.org");
ws.onopen = function(evt) {console.log("Connection open ...");
ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {console.log( "Received Message: " + evt.data);
ws.close();
};

ws.onclose = function(evt) {console.log("Connection closed.");
};
```

> Websocket【参考资料】http://www.ruanyifeng.com/blog/2017/05/websocket.html

**4.CORS**
CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
跨域时，浏览器会拦截Ajax请求，并在http头中加Origin。

```
// estfetch('/some/url/', {
method: 'get',
}).then(function (response) {// 请求成功后执行操作}).catch(function (err) {// 请求失败后执行操作});
```

[CORS【参考资料】](http://www.ruanyifeng.com/blog/2016/04/cors.html)

