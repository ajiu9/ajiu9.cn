---
title: 图床，uPic和阿里oss搭建和使用
date: 2023-09-16
lang: zh
type: blog
tags:
  - Cli
---

> 对于经常写笔记的人来说，图片是必然不可少的。为了更好地管理和展示图片，可以搭建自己的图床。这是一篇总结如何使用uPic和阿里OSS来搭建和使用个人图床，轻松使用图片

### 图床使用uPic

```cmd
brew install bigwig-club/brew/upic --cask
```

### 阿里OSS申请购买

> OSS使阿里云的对象存储服务，需要付费使用，但是对于平常的博客文章而言，很便宜，我现在是申请的3个月免费使用，实际付费也不贵，一个月就2.16元，（资源包关联的按量付费实例不停机，按使用量收费），就平常的访问量而言，估计是很难超过使用量的。

<<<<<<< HEAD
<<<<<<< HEAD
![每月价格](https://static.ajiu9.cn/Notes/IITkfA.png)
=======
![每月价格](/images/IITkfA.png)
>>>>>>> release
=======
![每月价格](/images/IITkfA.png)
>>>>>>> release

### 配置OSS

有了OSS后，需要简单配置下，阿里云有官方教程，一步一步几分钟搞定。

<<<<<<< HEAD
<<<<<<< HEAD
- 1. 创建bucket ![bucket](https://static.ajiu9.cn/Notes/5eGHP4.png)
- 2. 击立即创建，勾选配置![配置](https://static.ajiu9.cn/Notes/nKvi0c.png)
- 3. 配置完成，如果有自己的域名的话可以配置好自己的域名，~~我现在用的是阿里云的默认域名，还没买，下次再申请~~

1.  在 AccessKey管理中找到对应的key填写到uPic中![AccessKey](https://static.ajiu9.cn/Notes/20230917112327.png)
=======
=======
>>>>>>> release
- 1. 创建bucket ![bucket](/images/5eGHP4.png)
- 2. 击立即创建，勾选配置![配置](/images/nKvi0c.png)
- 3. 配置完成，如果有自己的域名的话可以配置好自己的域名，~~我现在用的是阿里云的默认域名，还没买，下次再申请~~

1.  在 AccessKey管理中找到对应的key填写到uPic中![AccessKey](/images/20230917112327.png)
<<<<<<< HEAD
>>>>>>> release
=======
>>>>>>> release

### uPic图床配置

在uPic偏好设置中，设置好图床！
<<<<<<< HEAD
<<<<<<< HEAD
![图床配置](https://static.ajiu9.cn/Notes/20230917162239169493895916949389595970bFTu6.png)

### 完成

配置完成后就可以愉快的引用图片到文章中了，最后可以设置下图床的快捷键![快捷键](https://static.ajiu9.cn/Notes/2023091716261416949391741694939174953lwT8Qv.png)
=======
=======
>>>>>>> release
![图床配置](/images/20230917162239169493895916949389595970bFTu6.png)

### 完成

配置完成后就可以愉快的引用图片到文章中了，最后可以设置下图床的快捷键![快捷键](/images/2023091716261416949391741694939174953lwT8Qv.png)
<<<<<<< HEAD
>>>>>>> release
=======
>>>>>>> release
