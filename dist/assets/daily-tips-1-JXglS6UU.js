import{u as e,_ as n}from"./WrapperPost.vue_vue_type_script_setup_true_lang-B8hOmlFs.js";import{o as i,c as p,w as r,a as s,b as l}from"./app-tsylX9jC.js";const g=s("div",{class:"prose m-auto slide-enter-content"},[s("ol",null,[s("li",null,[s("p",null,"使用.gitignore_global忽略.vscode文件夹")]),s("li",null,[s("p",null,"eslint 对 const 和 let 的格式处理有问题，需要再次查看问题项确认")]),s("li",null,[s("p",null,[l("git 快速切换到前一分支 "),s("code",null,"git chekcout -")])]),s("li",null,[s("p",null,"clashx配置代理节点")]),s("li",null,[s("p",null,[l("git回撤代码 "),s("code",null,"git revert {{}}")])]),s("li",null,[s("p",null,[s("code",null,"git commit —amend -m “New commit message”"),l(" 覆盖上次提交")])]),s("li",null,[s("p",null,"setup中 watch 一个数组，这个数组需要解构赋值，重新触发setter函数,watch才能监听到，不然就需要使用deep参数深度监听")])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," pages"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," computed"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(() "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"=>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 解构赋值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," ["),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"..."),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"store.state.pages]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"watch"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(pages, ("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"val"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"=>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  delGuideMapEl"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(val)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")])])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," pages"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," computed"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(() "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"=>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," store.state.pages")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"watch"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(pages, ("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"val"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"=>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  delGuideMapEl"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(val)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"  // 深度监听")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  deep: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")])])]),s("ol",{start:"8"},[s("li",null,[s("p",null,"在vue 中使用setup,需要注意重名问题，比如使用了ref=“form”, 又声明了form = reactive(), 那么一不注意就会出现报错：[Vue warn]: Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option. 此时要把ref=“form”改成 ref=“formRef”，避免隐藏的重名问题")]),s("li",null,[s("p",null,"shallowRef 和 ref 的使用")])]),s("p",null,[s("code",null,"ref")]),s("p",null,"接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。"),s("p",null,"类型"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," ref"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},">("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"value"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Ref"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"UnwrapRef"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},">>")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"interface"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Ref"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"> {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"  value"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," T")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])]),s("p",null,"详细信息"),s("p",null,"ref 对象是可更改的，也就是说你可以为 .value 赋予新的值。它也是响应式的，即所有对 .value 的操作都将被追踪，并且写操作会触发与之相关的副作用。"),s("p",null,"如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。"),s("p",null,"若要避免这种深层次的转换，请使用 shallowRef() 来替代。"),s("p",null,"示例"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," count"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," ref"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"0"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(count.value) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 0")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"count.value "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(count.value) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 1")])])]),s("p",null,[s("code",null,"shallowRef")]),s("p",null,"ref() 的浅层作用形式。"),s("p",null,"类型"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," shallowRef"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},">("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"value"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," ShallowRef"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"interface"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," ShallowRef"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"<"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"T"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"> {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"  value"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," T")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])]),s("p",null,"详细信息"),s("p",null,"和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。"),s("p",null,"shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。"),s("p",null,"示例"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," state"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," shallowRef"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({ count: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," })")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 不会触发更改")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"state.value.count "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 会触发更改")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"state.value "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { count: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"2"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," }")])])]),s("ol",{start:"10"},[s("li",null,"在Mac中查看Finder打开的地址")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," pfd"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  osascript"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," 2>"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"/dev/null"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," <<"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'    tell application "Finder"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"      return POSIX path of (target of window 1 as alias)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"    end tell")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])])],-1),F={__name:"daily-tips-1",setup(E){const a={title:"日常工作小技巧和问题集（1）",lang:"zh",date:"2024-03-15T00:00:00.000Z",type:"blog",image:"https://ajiu9.cn/og/daily-tips-1.png",meta:[{property:"og:title",content:"日常工作小技巧和问题集（1）"},{name:"twitter:title",content:"日常工作小技巧和问题集（1）"},{property:"og:image",content:"https://ajiu9.cn/og/daily-tips-1.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/daily-tips-1.png"},{name:"twitter:card",content:"summary_large_image"}]};return e({title:"日常工作小技巧和问题集（1）",meta:[{property:"og:title",content:"日常工作小技巧和问题集（1）"},{name:"twitter:title",content:"日常工作小技巧和问题集（1）"},{property:"og:image",content:"https://ajiu9.cn/og/daily-tips-1.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/daily-tips-1.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,k)=>{const t=n;return i(),p(t,{frontmatter:a},{default:r(()=>[g]),_:1})}}};export{F as default};