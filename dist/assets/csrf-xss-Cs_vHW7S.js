import{u as r,c as a,w as s,_ as o,o as i,a as t,b as e}from"./app-BXS-N9-Q.js";const c=t("div",{class:"prose m-auto slide-enter-content"},[t("h4",{id:"前端安全类",tabindex:"-1"},[e("前端安全类 "),t("a",{class:"header-anchor",href:"#前端安全类","aria-hidden":"true"},"#")]),t("p",null,[t("em",null,"CSRF"),t("em",null,"XSS")]),t("h4",{id:"csrf",tabindex:"-1"},[e("CSRF "),t("a",{class:"header-anchor",href:"#csrf","aria-hidden":"true"},"#")]),t("p",null,[e("CSRF，通常称为跨站请求伪造，英文名为Cross-site request forgery缩写。 "),t("strong",null,"攻击原理："),e(" 攻击通过在授权用户访问的页面中包含链接或者脚本的方式工作。例如：一个网站用户Bob可能正在浏览聊天论坛，而同时另一个用户Alice也在此论坛中，并且后者刚刚发布了一个具有Bob银行链接的图片消息。设想一下，Alice编写了一个在Bob的银行站点上进行取款的form提交的链接，并将此链接作为图片src。如果Bob的银行在cookie中保存他的授权信息，并且此cookie没有过期，那么当Bob的浏览器尝试装载图片时将提交这个取款form和他的cookie，这样在没经Bob同意的情况下便授权了这次事务。 实现CSRF攻击不可缺少的两大因素：")]),t("ul",null,[t("li",null,"这个网站的接口有漏洞。"),t("li",null,"用户在这个注册网站登录过。")]),t("p",null,[t("strong",null,"防御措施")]),t("ul",null,[t("li",null,"token验证"),t("li",null,"Referer验证"),t("li",null,"隐藏令牌")]),t("h4",{id:"xss",tabindex:"-1"},[e("XSS "),t("a",{class:"header-anchor",href:"#xss","aria-hidden":"true"},"#")]),t("p",null,"XSS又叫CSS (Cross Site Script) ，跨站脚本攻击。它指的是恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意用户的特殊目的。"),t("p",null,[t("strong",null,"攻击原理："),e(" 利用合法的渠道向页面注入脚本，运行攻击者自己想做的事情。 攻击方式：")]),t("ul",null,[t("li",null,"反射型：发出请求时，XSS代码出现在URL中，做为输入提交到服务器端，服务器端简析后响应，XSS代码随响应内容一起传回浏览器，最后浏览器解析并执行代码。这个过程像一次反射，故称反射型XSS。"),t("li",null,"存储型：存储型和反射型的差别在于，提交的代码会存储在服务端（数据库、内存、系统文件等），下次请求页面时不用再提交XSS代码。")]),t("p",null,[t("strong",null,"防御措施")]),t("ul",null,[t("li",null,"编码：对用户输入的数据进行HTML Entity编码。"),t("li",null,"过滤：移除用户上传的DOM属性，例如onerror事件等；移除用户上传的style节点、script节点、iframe节点等。"),t("li",null,"校正：避免直接对HTML Entity解码；使用DOM Parse转换，校正不配对的DOM标签。")])],-1),d={__name:"csrf-xss",setup(u){const n={title:"前端安全类CSRF,XSS",lang:"zh",date:"2018-09-29T00:00:00.000Z",type:"note",image:"https://ajiu9.cn/og/csrf-xss.png",meta:[{property:"og:title",content:"前端安全类CSRF,XSS"},{name:"twitter:title",content:"前端安全类CSRF,XSS"},{property:"og:image",content:"https://ajiu9.cn/og/csrf-xss.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/csrf-xss.png"},{name:"twitter:card",content:"summary_large_image"}]};return r({title:"前端安全类CSRF,XSS",meta:[{property:"og:title",content:"前端安全类CSRF,XSS"},{name:"twitter:title",content:"前端安全类CSRF,XSS"},{property:"og:image",content:"https://ajiu9.cn/og/csrf-xss.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/csrf-xss.png"},{name:"twitter:card",content:"summary_large_image"}]}),(p,m)=>{const l=o;return i(),a(l,{frontmatter:n},{default:s(()=>[c]),_:1})}}};export{d as default};
