import{e as S,p as b,j as B,q as F,o as n,f as a,u as d,g as o,F as x,k as P,n as y,a as r,t as i,c as V,w as f,h as z,s as Y,m as $,v as E,x as G,d as k,b as v,y as w}from"./app-CdGVtqe3.js";const W={key:0,py2:"",op50:""},j={"text-8em":"","color-transparent":"",absolute:"","left--3rem":"","top--2rem":"","font-bold":"","text-stroke-2":"","text-stroke-hex-aaa":"",op10:""},q={class:"no-underline",flex:"~ col md:row gap-2 md:items-center"},I={class:"title text-lg leading-1.2em",flex:"~ gap-2 wrap"},O={"align-middle":""},T={flex:"~ gap-2 items-center"},U={key:0,"align-middle":"",op50:"","flex-none":"","text-xs":"","ml--1":"","mt--1":"","i-carbon-arrow-up-right":"",title:"External"},A={key:1,"align-middle":"",op50:"","flex-none":"","i-ri:group-2-line":"",title:"In person"},H={key:2,"align-middle":"",op50:"","flex-none":"","i-ri:film-line":"",title:"Provided in video"},J={key:3,"align-middle":"",op50:"","flex-none":"","i-ri:radio-line":"",title:"Provided in radio"},K={"text-sm":"",op50:"","ws-nowrap":""},M={key:4,"text-sm":"",op40:"","ws-nowrap":""},Q={key:5,"text-sm":"",op40:"","ws-nowrap":""},X={key:6,"text-sm":"",op40:"","ws-nowrap":"","md:hidden":""},Z={key:0,op50:"","text-sm":"",hidden:"","mt--2":"","md:block":""},ae=S({__name:"ListPosts",props:{type:{},posts:{},extra:{}},setup(h){const l=h,c=b();console.log(c.getRoutes());const g=c.getRoutes().filter(e=>e.path.startsWith("/posts")&&e.meta.frontmatter.date&&!e.meta.frontmatter.draft).filter(e=>!e.path.endsWith(".html")&&(e.meta.frontmatter.type||"blog").split("+").includes(l.type)).map(e=>({path:e.meta.frontmatter.redirect||e.path,title:e.meta.frontmatter.title,date:e.meta.frontmatter.date,lang:e.meta.frontmatter.lang,duration:e.meta.frontmatter.duration,recording:e.meta.frontmatter.recording,upcoming:e.meta.frontmatter.upcoming,redirect:e.meta.frontmatter.redirect,place:e.meta.frontmatter.place})),p=B(()=>[...l.posts||g,...l.extra||[]].sort((e,s)=>+new Date(s.date)-+new Date(e.date)).filter(e=>!F.value||e.lang!=="zh")),m=e=>new Date(e).getFullYear(),_=e=>e&&new Date(e)>new Date,C=(e,s)=>e&&s&&m(e)===m(s);function N(e,s){return _(e.date)===_(s==null?void 0:s.date)&&C(e.date,s==null?void 0:s.date)}function L(e){return _(e.date)?"Upcoming":m(e.date)}return(e,s)=>(n(),a("ul",null,[d(p).length?o("",!0):(n(),a("div",W," { nothing here yet } ")),(n(!0),a(x,null,P(d(p),(t,u)=>(n(),a(x,{key:t.path},[N(t,d(p)[u-1])?o("",!0):(n(),a("div",{key:0,"select-none":"",relative:"",h20:"","pointer-events-none":"","slide-enter":"",style:y({"--enter-stage":u-2,"--enter-step":"60ms"})},[r("span",j,i(L(t)),1)],4)),r("div",{class:"slide-enter",style:y({"--enter-stage":u,"--enter-step":"60ms"})},[(n(),V($(t.path.includes("://")?"a":"RouterLink"),Y({ref_for:!0},t.path.includes("://")?{href:t.path,target:"_blank",rel:"noopener noreferrer"}:{to:t.path},{class:"item block font-normal mb-6 mt-2 no-underline"}),{default:f(()=>[r("li",q,[r("div",I,[r("span",O,i(t.title),1)]),r("div",T,[t.redirect?(n(),a("span",U)):o("",!0),t.inperson?(n(),a("span",A)):o("",!0),t.recording||t.video?(n(),a("span",H)):o("",!0),t.radio?(n(),a("span",J)):o("",!0),r("span",K,i(d(z)(t.date,!0)),1),t.duration?(n(),a("span",M,"· "+i(t.duration),1)):o("",!0),t.platform?(n(),a("span",Q,"· "+i(t.platform),1)):o("",!0),t.place?(n(),a("span",X,"· "+i(t.place),1)):o("",!0)])]),t.place?(n(),a("div",Z,i(t.place),1)):o("",!0)]),_:2},1040))],4)],64))),128))]))}}),ee={class:"prose m-auto mb-8 select-none animate-none! op100!"},te={"mb-0":"",flex:"~ col gap-1 sm:row sm:gap-3 wrap","text-3xl":""},D="opacity-20 hover:opacity-50",R="opacity-100 underline",se=S({__name:"SubNav",setup(h){const l=E();return(c,g)=>{const p=G("RouterLink");return n(),a("div",ee,[r("div",te,[k(p,{to:"/posts",class:w(["!border-none",d(l).path==="/posts"?R:D])},{default:f(()=>[v(" 博客 ")]),_:1},8,["class"]),k(p,{to:"/notes",class:w(["!border-none",d(l).path==="/notes"?R:D])},{default:f(()=>[v(" 笔记 ")]),_:1},8,["class"])])])}}});export{se as _,ae as a};
