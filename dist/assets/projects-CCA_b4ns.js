import{e as j,o as s,f as r,a as t,F as i,r as l,n as g,t as m,g as u,h,p as f,i as v,j as w,u as x,c as y,w as L,_ as b,d as I}from"./app-BL_gWGCQ.js";const P=c=>(f("data-v-6235e163"),c=c(),v(),c),C={class:"max-w-300 mx-auto"},A=["id"],k=["href","title"],S={key:0,class:"pt-2 pr-5"},B={class:"flex-auto"},F={class:"text-normal"},H=["innerHTML"],N={class:"table-of-contents"},V=P(()=>t("div",{class:"table-of-contents-anchor"},[t("div",{class:"i-ri-menu-2-fill"})],-1)),$=["href"],z=j({__name:"ListProjects",props:{projects:{}},setup(c){function a(n){return n.toLowerCase().replace(/[\s\\\/]+/g,"-")}return(n,d)=>(s(),r(i,null,[t("div",C,[(s(!0),r(i,null,l(Object.keys(n.projects),(e,p)=>(s(),r("div",{key:e,"slide-enter":"",style:g({"--enter-stage":p+1})},[t("h4",{id:a(e),class:"mt-15 mb-2 font-bold text-center op75"},m(e),9,A),t("div",{class:u(["project-grid py-2 max-w-500 w-max mx-auto",n.projects[e].length===1?"flex":n.projects[e].length>2?"lg:grid-cols-3":""]),grid:"~ cols-1 md:cols-2 gap-4"},[(s(!0),r(i,null,l(n.projects[e],(o,_)=>(s(),r("a",{key:_,class:u(["item relative flex items-center",o.link?"":"opacity-0 pointer-events-none h-0 -mt-8 -mb-4"]),href:o.link,target:"_blank",title:o.name},[o.icon?(s(),r("div",S,[t("div",{class:u(["text-3xl opacity-50",o.icon||"i-carbon-unknown"])},null,2)])):h("",!0),t("div",B,[t("div",F,m(o.name),1),t("div",{class:"desc text-sm opacity-50 font-normal",innerHTML:o.desc},null,8,H)])],10,k))),128))],2)],4))),128))]),t("div",null,[t("div",N,[V,t("ul",null,[(s(!0),r(i,null,l(Object.keys(n.projects),e=>(s(),r("li",{key:e},[t("a",{href:`#${a(e)}`},m(e),9,$)]))),128))])])])],64))}}),M=w(z,[["__scopeId","data-v-6235e163"]]),T={__name:"projects",setup(c){const a={title:"Projects - Ajiu9",display:"Projects",description:"List of projects that I am proud of",plum:!0,wrapperClass:"text-center",projects:{"Current Focus":[{name:"commonuse",link:"https://github.com/ajiu9/commonuse",desc:"the common use for js",icon:"i-logos-github saturate-0"}]},image:"https://ajiu9.cn/og/projects.png",meta:[{property:"og:title",content:"Projects - Ajiu9"},{name:"twitter:title",content:"Projects - Ajiu9"},{name:"description",content:"List of projects that I am proud of"},{property:"og:description",content:"List of projects that I am proud of"},{name:"twitter:description",content:"List of projects that I am proud of"},{property:"og:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:card",content:"summary_large_image"}]};return x({title:"Projects - Ajiu9",meta:[{property:"og:title",content:"Projects - Ajiu9"},{name:"twitter:title",content:"Projects - Ajiu9"},{name:"description",content:"List of projects that I am proud of"},{property:"og:description",content:"List of projects that I am proud of"},{name:"twitter:description",content:"List of projects that I am proud of"},{property:"og:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,e)=>{const p=M,o=b;return s(),y(o,{frontmatter:a},{default:L(()=>[t("div",null,[I(p,{projects:a.projects},null,8,["projects"])])]),_:1})}}};export{T as default};