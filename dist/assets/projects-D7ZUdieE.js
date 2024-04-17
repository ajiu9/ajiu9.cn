import{e as f,o as s,f as a,a as t,F as c,r as l,n as g,t as m,g as u,h as j,p as _,i as w,j as b,u as v,c as x,w as y,_ as L,d as C}from"./app-DHfSMoEA.js";const I=r=>(_("data-v-6235e163"),r=r(),w(),r),k={class:"max-w-300 mx-auto"},P=["id"],A=["href","title"],S={key:0,class:"pt-2 pr-5"},z={class:"flex-auto"},B={class:"text-normal"},F=["innerHTML"],H={class:"table-of-contents"},N=I(()=>t("div",{class:"table-of-contents-anchor"},[t("div",{class:"i-ri-menu-2-fill"})],-1)),V=["href"],$=f({__name:"ListProjects",props:{projects:{}},setup(r){function i(n){return n.toLowerCase().replace(/[\s\\\/]+/g,"-")}return(n,d)=>(s(),a(c,null,[t("div",k,[(s(!0),a(c,null,l(Object.keys(n.projects),(e,p)=>(s(),a("div",{key:e,"slide-enter":"",style:g({"--enter-stage":p+1})},[t("h4",{id:i(e),class:"mt-15 mb-2 font-bold text-center op75"},m(e),9,P),t("div",{class:u(["project-grid py-2 max-w-500 w-max mx-auto",n.projects[e].length===1?"flex":n.projects[e].length>2?"lg:grid-cols-3":""]),grid:"~ cols-1 md:cols-2 gap-4"},[(s(!0),a(c,null,l(n.projects[e],(o,h)=>(s(),a("a",{key:h,class:u(["item relative flex items-center",o.link?"":"opacity-0 pointer-events-none h-0 -mt-8 -mb-4"]),href:o.link,target:"_blank",title:o.name},[o.icon?(s(),a("div",S,[t("div",{class:u(["text-3xl opacity-50",o.icon||"i-carbon-unknown"])},null,2)])):j("",!0),t("div",z,[t("div",B,m(o.name),1),t("div",{class:"desc text-sm opacity-50 font-normal",innerHTML:o.desc},null,8,F)])],10,A))),128))],2)],4))),128))]),t("div",null,[t("div",H,[N,t("ul",null,[(s(!0),a(c,null,l(Object.keys(n.projects),e=>(s(),a("li",{key:e},[t("a",{href:`#${i(e)}`},m(e),9,V)]))),128))])])])],64))}}),M=b($,[["__scopeId","data-v-6235e163"]]),T={__name:"projects",setup(r){const i={title:"Projects - Ajiu9",display:"Projects",description:"List of projects that I am proud of",plum:!0,wrapperClass:"text-center",projects:{"Current Focus":[{name:"commonuse",link:"https://github.com/ajiu9/commonuse",desc:"the common use for js",icon:"i-carbon:tools-alt h-1em"}],Components:[{name:"carousel",link:"https://github.com/ajiu9/carousel",desc:"A carousel, a group of carousels.",icon:"i-material-symbols-light:view-carousel h-1em"}],CLI:[{name:"obsidian",link:"https://github.com/ajiu9/shell/tree/main/packages/obsidian",desc:"shell script for obsidian",icon:"i-simple-icons:obsidian h-1em"}],Configurations:[{name:"zsh",link:"https://github.com/ajiu9/SoftwareConfiguration/tree/main//zsh",desc:"my software configuration for zsh",icon:"i-fluent-mdl2:configuration-solid h-1em"},{name:"espanso",link:"https://github.com/ajiu9/SoftwareConfiguration/tree/main/espanso",desc:"my software configuration for espanso",icon:"i-bx:text h-1em"}]},image:"https://ajiu9.cn/og/projects.png",meta:[{property:"og:title",content:"Projects - Ajiu9"},{name:"twitter:title",content:"Projects - Ajiu9"},{name:"description",content:"List of projects that I am proud of"},{property:"og:description",content:"List of projects that I am proud of"},{name:"twitter:description",content:"List of projects that I am proud of"},{property:"og:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:card",content:"summary_large_image"}]};return v({title:"Projects - Ajiu9",meta:[{property:"og:title",content:"Projects - Ajiu9"},{name:"twitter:title",content:"Projects - Ajiu9"},{name:"description",content:"List of projects that I am proud of"},{property:"og:description",content:"List of projects that I am proud of"},{name:"twitter:description",content:"List of projects that I am proud of"},{property:"og:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/projects.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,e)=>{const p=M,o=L;return s(),x(o,{frontmatter:i},{default:y(()=>[t("div",null,[C(p,{projects:i.projects},null,8,["projects"])])]),_:1})}}};export{T as default};
