import{u as e,_ as n}from"./WrapperPost.vue_vue_type_script_setup_true_lang-z5U8fOjC.js";import{o as E,c as i,w as p,a as s,b as a}from"./app-DZVM_xCB.js";const r=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,"在es6中常用的数据集合有这几种，Object、Array、Map、Set。他们之间有什么区别？在什么情况下选用哪种数据集合类型？下来看这几种数据集合的使用比较。"),s("ul",null,[s("li",null,"Object：Object构造函数创建一个对象包装器。"),s("li",null,"Array：Array对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。"),s("li",null,[a("Map：Map 对象保存键值对。"),s("code",null,"任何值"),a("(对象或者原始值) 都可以作为一个键或一个值。")]),s("li",null,[a("Set：Set 对象允许你存储任何类型的"),s("code",null,"唯一值"),a("，无论是原始值或者是对象引用。")])]),s("h4",{id:"map与数组比较",tabindex:"-1"},[a("Map与数组比较 "),s("a",{class:"header-anchor",href:"#map与数组比较","aria-hidden":"true"},"#")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," map"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Map"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," arr"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," []")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// add")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"push"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({ a: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," })")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, arr)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// map-array Map(1) {"a" => 1} [{…}]')]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// exist")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," map_exist"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," arr_exist"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"find"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map_exist, arr_exist)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// map-array true {a: 1}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// modify")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"2"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"forEach"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"?"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," :"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," ''"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, arr)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// map-array Map(1) {"a" => 2} [{…}]')]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// delete")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," index"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"findIndex"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"splice"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(arr."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"findIndex"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.b), "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, arr)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// map-array Map(0) {} []")])])]),s("h4",{id:"set与数组比较",tabindex:"-1"},[a("Set与数组比较 "),s("a",{class:"header-anchor",href:"#set与数组比较","aria-hidden":"true"},"#")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," set"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," array"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," []")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// add")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," a1"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  a: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"11")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"add"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(a1)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"array."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"push"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({ a: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"11"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," })")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'set-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", set, array)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// set-array Set(1) {{…}} [{…}]")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// exist")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," set_exist"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," array_exist"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," array."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"find"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"info"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", set_exist, array_exist)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// map-array false {a: 11}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// modify")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"forEach"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"?"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," :"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," ''"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"array."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"forEach"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"?"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," :"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," ''"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'set-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", set, array)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// set-array Set(1) {{…}} [{…}]")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// delete")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"forEach"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"?"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(item) "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},":"),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}}," ''"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"array."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"splice"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(array."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"findIndex"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#E36209","--s-dark":"#FFAB70"}},"item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," =>"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," item.b), "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-array'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", set, array) "),s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// map-array Set(0) {} []")])])]),s("h4",{id:"map-set与object比较",tabindex:"-1"},[a("Map-Set与Object比较 "),s("a",{class:"header-anchor",href:"#map-set与object比较","aria-hidden":"true"},"#")]),s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," item"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," { a: "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," map"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Map"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," set"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"const"),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," obj"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," ="),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," new"),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}}," Object"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// add")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"1"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"add"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(item)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"obj.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-set-object'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, set, obj)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// map-set-object Map(1) {"a" => 1} Set(1) {{…}} {a: 1}')]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// exist")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"info"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  map_exist: map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"),")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  set_exist: set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"has"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(item),")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"  ibj_exist: "),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}}," in"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," obj")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"})")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// {map_exist: true, set_exist: true, ibj_exist: true}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// modify")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"set"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", "),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}},"2"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"item.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"obj.a "),s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"="),s("span",{style:{"--s-light":"#005CC5","--s-dark":"#79B8FF"}}," 2")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-set-object'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, set, obj)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},'// map-set-object Map(1) {"a" => 2} Set(1) {{…}} {a: 2}')]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// delete")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"map."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'a'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"set."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"(item)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#D73A49","--s-dark":"#F97583"}},"delete"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}}," obj.a")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"console."),s("span",{style:{"--s-light":"#6F42C1","--s-dark":"#B392F0"}},"log"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},"("),s("span",{style:{"--s-light":"#032F62","--s-dark":"#9ECBFF"}},"'map-set-object'"),s("span",{style:{"--s-light":"#24292E","--s-dark":"#E1E4E8"}},", map, set, obj)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-light":"#6A737D","--s-dark":"#6A737D"}},"// map-set-object Map(0) {} Set(0) {} {}")])])]),s("h4",{id:"总结",tabindex:"-1"},[a("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#")]),s("p",null,"从上面对数据结构的增查改删中可以看出，能使用Map不用Array,如果要保证数据的唯一性，可以使用Set。")],-1),c={__name:"map-set-array-object",setup(d){const t={title:"ES6中Map，Set与数组和对象的比较",lang:"zh",date:"2018-10-29T00:00:00.000Z",type:"note",image:"https://ajiu9.cn/og/map-set-array-object.png",meta:[{property:"og:title",content:"ES6中Map，Set与数组和对象的比较"},{name:"twitter:title",content:"ES6中Map，Set与数组和对象的比较"},{property:"og:image",content:"https://ajiu9.cn/og/map-set-array-object.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/map-set-array-object.png"},{name:"twitter:card",content:"summary_large_image"}]};return e({title:"ES6中Map，Set与数组和对象的比较",meta:[{property:"og:title",content:"ES6中Map，Set与数组和对象的比较"},{name:"twitter:title",content:"ES6中Map，Set与数组和对象的比较"},{property:"og:image",content:"https://ajiu9.cn/og/map-set-array-object.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/map-set-array-object.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,y)=>{const l=n;return E(),i(l,{frontmatter:t},{default:p(()=>[r]),_:1})}}};export{c as default};
