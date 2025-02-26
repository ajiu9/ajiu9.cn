import{u as t,_ as n}from"./WrapperPost.vue_vue_type_script_setup_true_lang-CQr6nnoT.js";import{o as i,c as r,w as d,a as s,b as a}from"./app-Bi-v8j2l.js";const p=s("div",{class:"prose m-auto slide-enter-content"},[s("h2",{id:"esm-cjs",tabindex:"-1"},[a("ESM & CJS "),s("a",{class:"header-anchor",href:"#esm-cjs","aria-hidden":"true"},"#")]),s("p",null,"[[commonjs和esm]]"),s("ul",null,[s("li",null,[a("ESM - "),s("a",{href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener"},"ECMAScript Modules")]),s("li",null,[a("CJS - "),s("a",{href:"https://nodejs.org/api/modules.html#modules_commonjs_modules",target:"_blank",rel:"noopener"},"CommonJS")])]),s("p",null,"在过去的十年中，由于缺乏标准的 JavaScript 模块系统，CommonJS（又名“require(‘xxx’)”和“module.exports”语法）一直是 Node.js 和 NPM 包的工作方式。直到 2015 年，当 ECMAScript 模块最终作为标准解决方案出现时，社区开始逐渐迁移到原生 ESM。"),s("p",null,"CJS"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// addTwo.js")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," addTwo"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"num"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," num "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"+"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"module"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"."),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"exports"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," addTwo")])])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// app.js")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," addTwo"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," require"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'./addTwo.js'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// Prints: 6")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"addTwo"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"4"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"))")])])]),s("p",null,"ESM"),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// addTwo.mjs")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," addTwo"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"num"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," num "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"+"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"export"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { addTwo }")])])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// app.mjs")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { addTwo } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," './addTwo.mjs'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// Prints: 6")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"addTwo"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"4"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"))")])])]),s("p",null,"ESM 支持命名导出、更好的静态分析、tree-shaking、浏览器原生支持；最重要的是，作为一个标准，它基本上是 JavaScript 的未来。Node.js v12 中引入了对 ESM 的实验性支持，并在 v12.22.0 和 v14.17.0 中稳定下来。"),s("p",null,"截至 2024，很多软件包都提供 ESM 格式或者 CJS 和 ESM 两种格式支持。毕竟nodejs生态庞大，迁移到 ESM 生态是一个长期过程。"),s("p",null,"所以对于项目的作者来说，提供两种格式的兼容性，是必要的。在这篇文章中，我将提供一个简单的示例，以解释如何使用 CJS 和 ESM 在同一个项目中同时工作。"),s("h2",{id:"兼容性",tabindex:"-1"},[a("兼容性 "),s("a",{class:"header-anchor",href:"#兼容性","aria-hidden":"true"},"#")]),s("p",null,[a("如果 ESM 更好，代表未来，为何不全面转向ESM？尽管Node.js能够兼容CJS和ESM包，但主要障碍在于"),s("strong",null,"CJS无法使用ESM包"),a("。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// app.cjs")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," pkg"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," require"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'./addTwo-only-esm.mjs'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")])])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"Error"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," [ERR_REQUIRE_ESM]: Must use import to load ES Module: /private/tmp/ajiu9-MiETrR/addTwo-only-esm.mjs")])])]),s("p",null,[a("根本原因是 ESM 本质上是异步的，你无法在“require”所在的同步上下文中导入异步模块。这通常意味着如果想使用 ESM 软件包，则也必须使用 ESM。 唯一的例外是，可以使用 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports",target:"_blank",rel:"noopener"},"dynamic 'import()'"),a(" 在 CJS 中使用 ESM 包：")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// app.mjs")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"async"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," awaitFunction"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"() {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  const"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"default"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"pkg"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," await"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'./addTwo-only-esm.mjs'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(pkg)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"awaitFunction"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")])])]),s("p",null,"由于动态导入将返回 Promise，这意味着所有后续被调用者也需要异步。在某些情况下它可能会起作用，但通常这对用户来说不是一个简单易用的解决方案。"),s("p",null,[a("如果你能够直接使用ESM，那会容易得多，因为"),s("code",null,"import"),a("同时支持ESM和CJS。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// in ESM")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { foo } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'esm-package'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," cjs "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'cjs-package'")])])]),s("p",null,"一些软件包现在提供纯ESM版本，倡导从CJS转向ESM。尽管这是趋势，但由于大多数项目仍在使用CJS且迁移不易，我选择同时发布CJS和ESM版本，以使过渡更加平滑。"),s("h3",{id:"package-json",tabindex:"-1"},[s("code",null,"package.json"),a(),s("a",{class:"header-anchor",href:"#package-json","aria-hidden":"true"},"#")]),s("p",null,[a("幸运的是，Node 允许你在同一个软件包中同时使用这两种格式。通过 "),s("code",null,"package.json"),a(" 中的新 "),s("a",{href:"https://nodejs.org/api/packages.html#conditional-exports",target:"_blank",rel:"noopener"},[s("code",null,"exports")]),a(" 字段，提供了一种根据特定条件映射到不同路径的方法。它们支持 CommonJS 和 ES 模块导入。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'  "exports"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'    "node"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'      "import"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./feature-node.mjs"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// EMS")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'      "require"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./feature-node.cjs"'),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}}," // CJS")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    },")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'    "default"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./feature.mjs"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])]),s("h2",{id:"打包",tabindex:"-1"},[a("打包 "),s("a",{class:"header-anchor",href:"#打包","aria-hidden":"true"},"#")]),s("p",null,[a("如果需要支持两种模块方式，复制两份代码肯定不是一个好的解决方案。此时，我们需要考虑引入一些构建工具或打包工具。比如 "),s("a",{href:"https://rollupjs.org/",target:"_blank",rel:"noopener"},"Rollup"),a(" 和 "),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"Webpack"),a("。将你的代码构建成多种格式。但是它们的配置很复杂，需要花很多时间去学习。这里有两个非常棒的工具，它们只需要简单的配置就可以工作。")]),s("ul",null,[s("li",null,[s("a",{href:"#tsup"},[s("code",null,"tsup")])]),s("li",null,[s("a",{href:"#unbuild"},[s("code",null,"unbuild")])])]),s("h3",{id:"tsup",tabindex:"-1"},[a("tsup "),s("a",{class:"header-anchor",href:"#tsup","aria-hidden":"true"},"#")]),s("p",null,[s("a",{href:"https://github.com/egoist/tsup",target:"_blank",rel:"noopener"},[s("code",null,"tsup")]),a("它具有零配置构建 TypeScript 项目的特点。使用方法如下：")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"tsup"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," src/index.ts")])])]),s("p",null,[a("它将输出一个 "),s("code",null,"dist/index.js"),a(" 文件。")]),s("p",null,"若要支持双格式，只需添加一个标志即可："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"$"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," tsup"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," src/index.ts"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," --format"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," cjs,esm")])])]),s("p",null,[a("使用该工具会生成两个文件 "),s("code",null,"dist/index.js"),a(" 和 "),s("code",null,"dist/index.mjs"),a("，之后你就可以直接使用了。由于采用了 "),s("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener"},[s("code",null,"esbuild")]),a("，"),s("code",null,"tsup"),a(" 不仅非常易用，而且速度惊人。")]),s("p",null,[a("这是一个使用"),s("code",null,"tsup"),a("的"),s("code",null,"package.json"),a("模版配置。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-json"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "name"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"pakage-name"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "main"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.js"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "module"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.mjs"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "types"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.d.ts"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "exports"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'    "."'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'      "require"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.js"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'      "import"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.mjs"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'      "types"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"./dist/index.d.ts"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  },")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'  "scripts"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'    "build"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"tsup src/index.ts --format cjs,esm --dts --clean"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'    "watch"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"npm run build -- --watch src"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},'    "prepublishOnly"'),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},": "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},'"npm run build"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")])])]),s("h3",{id:"unbuild",tabindex:"-1"},[a("unbuild "),s("a",{class:"header-anchor",href:"#unbuild","aria-hidden":"true"},"#")]),s("p",null,[s("code",null,"tsup"),a(" 是一个轻量级的 TypeScript 打包工具，而"),s("a",{href:"https://github.com/unjs/unbuild",target:"_blank",rel:"noopener"},[s("code",null,"unbuild")]),a(" 则更加通用、可定制且功能强大。")]),s("p",null,[a("要使用它，我们需要在根目录下创建 "),s("code",null,"build.config.ts"),a(" 文件。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// build.config.ts")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { defineBuildConfig } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'unbuild'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"export"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," default"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," defineBuildConfig"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  entries: [")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"    './src/index'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  ],")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  declaration: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"true"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 生成 .d.ts files")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")])])]),s("p",null,"然后运行构建命令："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"$"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," unbuild")])])]),s("p",null,"默认情况下，“unbuild”将生成ESM和CJS！"),s("h2",{id:"上下文差异",tabindex:"-1"},[a("上下文差异 "),s("a",{class:"header-anchor",href:"#上下文差异","aria-hidden":"true"},"#")]),s("p",null,"使用上述工具，我们现在能够将 TypeScript 作为唯一的代码源，同时生成 CJS 和 ESM 模块，使整体代码库更容易维护，但仍然有一些需要注意的细节。"),s("p",null,[s("strong",null,[a("在 ESM 中，没有 "),s("code",null,"__dirname"),a(", "),s("code",null,"__filename"),a(", "),s("code",null,"require"),a(", "),s("code",null,"require.resolve")]),a("。需要使用 "),s("code",null,"import.meta.url"),a(" 并做一些转换来获取文件路径字符串。")]),s("p",null,"由于我们的代码将被编译为 CJS 和 ESM，尽量避免使用这些特定于环境的上下文。如果确实需要，可以参考以下代码："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { dirname } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'node:path'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { fileURLToPath } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'node:url'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," _dirname"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," typeof"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," __dirname "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"!=="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'undefined'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  ?"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," __dirname")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  :"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," dirname"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"fileURLToPath"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"."),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"meta"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},".url))")])])]),s("p",null,"关于 require 和 require.resolve，你可以使用："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { createRequire } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'node:module'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," require"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," createRequire"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"."),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"meta"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},".url)")])])]),s("p",null,[s("code",null,"如果你使用"),a("unbuild"),s("code",null,"，可以开启 "),a("cjsBridge"),s("code",null," 标志，"),a("unbuild` 会自动为你在 ESM 中模拟这些 CJS 上下文！")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"import"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { defineBuildConfig } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"from"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'unbuild'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"export"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," default"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," defineBuildConfig"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  cjsBridge: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"true"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// <--")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")])])]),s("p",null,[a("另外，如果你使用 "),s("code",null,"tsup"),a("，它会在 CJS 中为你模拟 ESM 的 "),s("code",null,"import.meta.url"),a("。")]),s("h2",{id:"验证你的包",tabindex:"-1"},[a("验证你的包 "),s("a",{class:"header-anchor",href:"#验证你的包","aria-hidden":"true"},"#")]),s("p",null,[a("一旦你发布了你的包，可以使用 "),s("a",{href:"https://publint.dev/",target:"_blank",rel:"noopener"},"publint.dev"),a("（由 "),s("a",{href:"https://github.com/bluwy",target:"_blank",rel:"noopener"},"@bluwy"),a(" 制作）来验证它是否遵循最佳实践。它还会给你一些如何进一步改进的建议。")]),s("h2",{id:"最后",tabindex:"-1"},[a("最后 "),s("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#")]),s("p",null,[a("这篇文章很大部分是参考了"),s("a",{href:"https://antfu.me/posts/publish-esm-and-cjs",target:"_blank",rel:"noopener"},"publish-esm-and-cjs"),a("。同时这两种工具的使用也只是一部分，请查看它们的文档以获取更多详细信息。希望这些设置对你构建自己的库有所帮助，祝你编程愉快！")])],-1),y={__name:"publish-esm-and-cjs",setup(h){const l={title:"在一个项目中同时使用ESM和CJS",date:"2024-09-02T00:00:00.000Z",lang:"zh",duration:"15min",description:"在单项目中运行ESM和CJS的简单介绍","date created":"2024-09-02T00:00:00.000Z","date modified":"2024-09-02T00:00:00.000Z",image:"https://ajiu9.cn/og/publish-esm-and-cjs.png",meta:[{property:"og:title",content:"在一个项目中同时使用ESM和CJS"},{name:"twitter:title",content:"在一个项目中同时使用ESM和CJS"},{name:"description",content:"在单项目中运行ESM和CJS的简单介绍"},{property:"og:description",content:"在单项目中运行ESM和CJS的简单介绍"},{name:"twitter:description",content:"在单项目中运行ESM和CJS的简单介绍"},{property:"og:image",content:"https://ajiu9.cn/og/publish-esm-and-cjs.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/publish-esm-and-cjs.png"},{name:"twitter:card",content:"summary_large_image"}]};return t({title:"在一个项目中同时使用ESM和CJS",meta:[{property:"og:title",content:"在一个项目中同时使用ESM和CJS"},{name:"twitter:title",content:"在一个项目中同时使用ESM和CJS"},{name:"description",content:"在单项目中运行ESM和CJS的简单介绍"},{property:"og:description",content:"在单项目中运行ESM和CJS的简单介绍"},{name:"twitter:description",content:"在单项目中运行ESM和CJS的简单介绍"},{property:"og:image",content:"https://ajiu9.cn/og/publish-esm-and-cjs.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/publish-esm-and-cjs.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,k)=>{const e=n;return i(),r(e,{frontmatter:l},{default:d(()=>[p]),_:1})}}};export{y as default};
