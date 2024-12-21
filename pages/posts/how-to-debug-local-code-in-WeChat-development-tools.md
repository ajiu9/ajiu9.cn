---
title: 如何在微信开发工具中调试本地web代码
lang: zh-CN
date: 2024-05-17T00:00:00Z
type: 'blog'
---

> 在开发微信公众号的代码时，会用到微信提供的[jsapi](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62),只有在公众号后台中绑定域名才能访问到。本地ip无法授权。

1. 使用代理工具把本地端口映射到微信公众号绑定的域名。
   安装[whistle](https://github.com/avwo/whistle)

启动whistle代理

```
w2 start
```

启动成功后会在控制台输出以下信息：
![image](/images/20240517095140.png)

然后在浏览器中打开里面的地址

2. 配置whistle代理
   ![image](/images/20240517095452.png)

`请使用http代理`

3. 开启系统代理，或者在李立群插件中安装[Proxy SwitchyOmega](chrome://extensions/?id=padekgcemlokbadohgkifijomclgjgif)

![image](/images/20240517095833.png)

4. 微信开发者工具打开代理设置：设置 > 代理设置
   ![image](/images/20240517100019.png)

完成这些后，访问微信配置的域名会代理到本地ip，就可以在微信开发者工具中调试本地代码了。
