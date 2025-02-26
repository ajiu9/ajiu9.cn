import{u as n,_ as l}from"./WrapperPost.vue_vue_type_script_setup_true_lang-zFY4jwyF.js";import{o as i,c as s,w as c,a as t,b as e}from"./app-DVc1tU0F.js";const r="/images/20240517095140.png",p="/images/20240517095452.png",g="/images/20240517095833.png",m="/images/20240517100019.png",h=t("div",{class:"prose m-auto slide-enter-content"},[t("blockquote",null,[t("p",null,[e("在开发微信公众号的代码时，会用到微信提供的"),t("a",{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62",target:"_blank",rel:"noopener"},"jsapi"),e(",只有在公众号后台中绑定域名才能访问到。本地ip无法授权。")])]),t("ol",null,[t("li",null,[e("使用代理工具把本地端口映射到微信公众号绑定的域名。 安装"),t("a",{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener"},"whistle")])]),t("p",null,"启动whistle代理"),t("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[t("code",{class:"language-text"},[t("span",{class:"line"},[t("span",null,"w2 start")])])]),t("p",null,[e("启动成功后会在控制台输出以下信息： "),t("img",{src:r,alt:"image"})]),t("p",null,"然后在浏览器中打开里面的地址"),t("ol",{start:"2"},[t("li",null,[e("配置whistle代理 "),t("img",{src:p,alt:"image"})])]),t("p",null,[t("code",null,"请使用http代理")]),t("ol",{start:"3"},[t("li",null,[e("开启系统代理，或者在李立群插件中安装"),t("a",{href:"chrome://extensions/?id=padekgcemlokbadohgkifijomclgjgif"},"Proxy SwitchyOmega")])]),t("p",null,[t("img",{src:g,alt:"image"})]),t("ol",{start:"5"},[t("li",null,[e("微信开发者工具打开代理设置：设置 > 代理设置 "),t("img",{src:m,alt:"image"})])]),t("p",null,"完成这些后，访问微信配置的域名会代理到本地ip，就可以在微信开发者工具中调试本地代码了。")],-1),k={__name:"how-to-debug-local-code-in-WeChat-development-tools",setup(d){const o={title:"如何在微信开发工具中调试本地web代码",lang:"zh-CN",date:"2024-05-17T00:00:00.000Z",type:"blog",image:"https://ajiu9.cn/og/how-to-debug-local-code-in-WeChat-development-tools.png",meta:[{property:"og:title",content:"如何在微信开发工具中调试本地web代码"},{name:"twitter:title",content:"如何在微信开发工具中调试本地web代码"},{property:"og:image",content:"https://ajiu9.cn/og/how-to-debug-local-code-in-WeChat-development-tools.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/how-to-debug-local-code-in-WeChat-development-tools.png"},{name:"twitter:card",content:"summary_large_image"}]};return n({title:"如何在微信开发工具中调试本地web代码",meta:[{property:"og:title",content:"如何在微信开发工具中调试本地web代码"},{name:"twitter:title",content:"如何在微信开发工具中调试本地web代码"},{property:"og:image",content:"https://ajiu9.cn/og/how-to-debug-local-code-in-WeChat-development-tools.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/how-to-debug-local-code-in-WeChat-development-tools.png"},{name:"twitter:card",content:"summary_large_image"}]}),(_,w)=>{const a=l;return i(),s(a,{frontmatter:o},{default:c(()=>[h]),_:1})}}};export{k as default};
