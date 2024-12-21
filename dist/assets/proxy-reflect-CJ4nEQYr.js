import{u as e,_ as n}from"./WrapperPost.vue_vue_type_script_setup_true_lang-B8hOmlFs.js";import{o as E,c as i,w as r,a as s,b as l}from"./app-tsylX9jC.js";const p=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,"计算机中代理模式的定义：为其他对象提供一种代理以控制这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介作用。"),s("h4",{id:"proxy和reflect",tabindex:"-1"},[l("Proxy和Reflect "),s("a",{class:"header-anchor",href:"#proxy和reflect","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,[s("p",null,"Proxy对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。")]),s("li",null,[s("p",null,"Reflect是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。")])]),s("h4",{id:"proxy的方法",tabindex:"-1"},[l("Proxy的方法 "),s("a",{class:"header-anchor",href:"#proxy的方法","aria-hidden":"true"},"#")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"let"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"time: "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'2018-10-31'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"name: "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'vender'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"_r: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"123")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"let"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," monitor "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Proxy"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(obj, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"    //拦截对象读取属性值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    get"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"target"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"key"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," obj[key]."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"replace"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"/"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#DBEDFF"}},"-"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"/"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"g"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"':'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"    //拦截对象设置属性值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"target"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"key"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"value"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," (key "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"==="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'name'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," target[key] "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"else"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," target[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"    // 拦截 key in object 操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"target"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"key"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"    if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," (key "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"==="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'name'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"else"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"    // 拦截delete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    deleteProperty"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(target, key) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," (key "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"==="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," '_r'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," target[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      } "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"else"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," target[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"    // 拦截 Object.getOwnPropertyNames(),Object.getOwnProptySymbols(), Object.keys(), Reflect.ownKeys()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    ownKeys"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(target) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," Object."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"keys"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(target)."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"filter"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"!=="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'time'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")])])]),s("p",null,[l("上面定义了一个对象"),s("code",null,"obj"),l(", 同时使用了Proxy代理分别拦截了"),s("code",null,"get"),l(","),s("code",null,"set"),l(","),s("code",null,"has"),l(","),s("code",null,"deleteProperty"),l(","),s("code",null,"ownKeys"),l("五种比较常用的方法。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'get'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", monitor.time) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// get 2018:10:31")])])]),s("p",null,[l("代理"),s("code",null,"get"),l("方法拦截对象读取属性值。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"monitor.time "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," '2019'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"monitor.name "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'apple'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'set'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", monitor.name, monitor) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// set apple Proxy {time: "2018-10-31", name: "apple", _r: 123}')])])]),s("p",null,[l("代理"),s("code",null,"set"),l("方法拦截对象设置属性值。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'has'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'name'"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," in"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," monitor, "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'time'"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," in"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," monitor) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// has true false")])])]),s("p",null,[l("代理"),s("code",null,"has"),l("方法拦截 key in object 操作。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," monitor.name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'delete'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", monitor) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// delete Proxy {time: "2018-10-31", name: "apple", _r: 123}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," monitor._r")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'delete'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", monitor) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// delete Proxy {time: "2018-10-31", name: "apple"}')])])]),s("p",null,[l("代理"),s("code",null,"deleteProperty"),l("方法拦截delete。")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'ownKeys'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", Object."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"keys"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(monitor)) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// ownKeys ["name"]')])])]),s("p",null,[l("代理"),s("code",null,"ownKeys"),l("方法拦截"),s("code",null,"Object.getOwnPropertyNames()"),l(","),s("code",null,"Object.getOwnProptoSymbols()"),l(","),s("code",null,"Object.keys()"),l(","),s("code",null,"Reflect.ownKeys()"),l("。")]),s("h4",{id:"reflect的方法",tabindex:"-1"},[l("Reflect的方法 "),s("a",{class:"header-anchor",href:"#reflect的方法","aria-hidden":"true"},"#")]),s("p",null,"如前面所说，Reflect的方法与处理器对象的方法相同。Reflect不是一个函数对象，因此它是不可构造的。 一下简单举例："),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," obj"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  time: "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'2018-10-31'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  name: "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'vender'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  _r: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"123")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'Reflect get:'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", Reflect."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"get"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(obj, "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'time'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// Reflect get: 2018-10-31Reflect.set(obj, 'name', 'banana')")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'Reflect set:'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", obj) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// Reflect set: {time: "2018-10-31", name: "banana", _r: 123}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'Reflect has:'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", Reflect."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(obj, "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'time'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// Reflect has: trueReflect.deleteProperty(obj, '_r')")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'Reflect delete:'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", obj) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// Reflect delete: {time: "2018-10-31", name: "banana"}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'Reflect ownKeys:'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", Reflect."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"ownKeys"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(obj)) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// Reflect ownKeys: ["time", "name"]')])])]),s("h4",{id:"简单应用",tabindex:"-1"},[l("简单应用 "),s("a",{class:"header-anchor",href:"#简单应用","aria-hidden":"true"},"#")]),s("p",null,[l("在开发中通常会对数据进行校验，提交数据的时候会判断数据是否符合，利用"),s("code",null,"Proxy"),l("和"),s("code",null,"Reflect"),l("来实现一个简单的验证，实现数据和业务解耦，功能：1.对用户填写的原始数据进行验证。2.数据和业务解耦")]),s("p",null,"思路："),s("ul",null,[s("li",null,[l("1.通过定义一个函数，这个函数的功能就是接收俩个参数("),s("code",null,"target"),l("原始对象和"),s("code",null,"validator"),l("验证规则)返回一个代理对象，拦截原始对象的设置属性值，也就是"),s("code",null,"set"),l("方法。")]),s("li",null,[l("2.定义一个类"),s("code",null,"Person"),l(",在"),s("code",null,"constructor"),l("中重写"),s("code",null,"this"),l("（"),s("code",null,"return validator(this, personValidator)"),l("这里返回的是代理对象）从而达到对这个对象实例的代理。")]),s("li",null,[l("3.定义第二步这个类"),s("code",null,"Person"),l("所需要的验证规则定义"),s("code",null,"personValidator"),l("，在这个对象里，实现对数据的具体验证。")]),s("li",null,[l("4.使用时，实例化第二步定义的类"),s("code",null,"Person"),l("。")])]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 定义一个验证函数，这个函数返回一个代理对象。它的功能就是验证")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"function"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," validator"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"target"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"validator"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  return"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Proxy"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(target, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    _validator: validator, "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 保存原始校验对象")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"    set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"target"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"key"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"value"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"proxy"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"      // 拦截target设置属性")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"      if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," (target."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"hasOwnProperty"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(key)) { "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// target属性key存在就继续下一步，不存在抛出错误")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," va"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," this"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"._validator[key]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        if"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," ("),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"va"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(value)) { "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 校验规则是否通过")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"          return"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," Reflect."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(target, key, value, proxy) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 拦截target设置属性，验证通过")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        else"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"          throw"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Error"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"`${"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"key"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"}不能设置为${"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"value"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"}`"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"      else"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"        throw"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Error"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"`${"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"key"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"} 不存在`"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 定义验证规则")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," personValidator"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  name"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"val"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"    return"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," typeof"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," val "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"==="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'string'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"  age"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"val"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"    return"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," typeof"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," val "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"==="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'number'"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," &&"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," val "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},">"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 定义类")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"class"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Person"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"  constructor"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"name"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"age"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"    this"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},".name "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"    this"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},".age "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," age")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"    return"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," validator"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"this"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", personValidator)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// 实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," person"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Person"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'wu'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"20"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"person.name "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'zhuli'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"info"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(person) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// Proxy {name: "hell", age: 20}')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"person.age "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," 'year'"),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}}," // Uncaught Error: age不能设置为year")])])])],-1),c={__name:"proxy-reflect",setup(g){const a={title:"Proxy和Reflect",date:"2018-10-31T00:00:00.000Z",lang:"zh",type:"note",image:"https://ajiu9.cn/og/proxy-reflect.png",meta:[{property:"og:title",content:"Proxy和Reflect"},{name:"twitter:title",content:"Proxy和Reflect"},{property:"og:image",content:"https://ajiu9.cn/og/proxy-reflect.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/proxy-reflect.png"},{name:"twitter:card",content:"summary_large_image"}]};return e({title:"Proxy和Reflect",meta:[{property:"og:title",content:"Proxy和Reflect"},{name:"twitter:title",content:"Proxy和Reflect"},{property:"og:image",content:"https://ajiu9.cn/og/proxy-reflect.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/proxy-reflect.png"},{name:"twitter:card",content:"summary_large_image"}]}),(h,y)=>{const t=n;return E(),i(t,{frontmatter:a},{default:r(()=>[p]),_:1})}}};export{c as default};
