import{u as e,_ as l}from"./WrapperPost.vue_vue_type_script_setup_true_lang-B-Ext2VE.js";import{o as i,c as p,w as r,a as s,b as t}from"./app-CoFvkSkv.js";const E=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,"如何在浏览器中打印页面内容？"),s("p",null,"通过iframe调用window.print打印"),s("ol",null,[s("li",null,"创建一个隐藏的iframe"),s("li",null,"通过iframe的contentWindow属性获取iframe的window对象，然后调用window.print()方法")]),s("p",null,"iframe 通过设置style为display:none，position:absolute，width:0px，height:0px，left:-500px，top:-500px，这样可以隐藏iframe，但是不影响页面的布局。"),s("p",null,"注意： 如果有写入图片，因为是异步，需要在下一个宏任务中执行。"),s("p",null,"下面是一段代码："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," print"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"content"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  let"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," iframe "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," document.body."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"querySelector"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'#window-print'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," ("),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"!"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"iframe) {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    iframe "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," document."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"createElement"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'iframe'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    iframe.id "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'window-print'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    iframe."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"setAttribute"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'style'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'display:none;position:absolute;width:0px;height:0px;left:-500px;top:-500px;'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    document.body."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"appendChild"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(iframe)")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," printDocument"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," iframe.contentWindow.document")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  printDocument."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"write"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(content)")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  printDocument."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"close"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  iframe.contentWindow."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"focus"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  setTimeout"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(() "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"=>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    iframe.contentWindow."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"print"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }, "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"0"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])]),s("p",null,[t("打印效果： "),s("img",{src:"https://static.ajiu9.cn/images/20240310203634jdJVNW.png",alt:""})]),s("p",null,"该方法的优点是可以在不离开当前页面的情况下实现打印功能，且可以对打印的页面进行一些自定义设置，比如隐藏一些元素或者设置页面样式等。"),s("p",null,"使用该方法需要注意的是，由于涉及到跨域访问的问题，可能存在一些安全性和兼容性的问题，需要进行适当的测试和处理。")],-1),k={__name:"window-print",setup(d){const a={title:"在浏览器中实现页面打印",lang:"zh",date:"2024-03-09T00:00:00.000Z",type:"note",image:"https://ajiu9.cn/og/window-print.png",meta:[{property:"og:title",content:"在浏览器中实现页面打印"},{name:"twitter:title",content:"在浏览器中实现页面打印"},{property:"og:image",content:"https://ajiu9.cn/og/window-print.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/window-print.png"},{name:"twitter:card",content:"summary_large_image"}]};return e({title:"在浏览器中实现页面打印",meta:[{property:"og:title",content:"在浏览器中实现页面打印"},{name:"twitter:title",content:"在浏览器中实现页面打印"},{property:"og:image",content:"https://ajiu9.cn/og/window-print.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/window-print.png"},{name:"twitter:card",content:"summary_large_image"}]}),(o,h)=>{const n=l;return i(),p(n,{frontmatter:a},{default:r(()=>[E]),_:1})}}};export{k as default};