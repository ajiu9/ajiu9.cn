const __vite__fileDeps=["assets/ArtPlum-DuU-O_ys.js","assets/app-rlG6GUYn.js","assets/app-CFHMu-J6.css","assets/ArtDots-CBXcmxeO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as E,A as v,B as j,C as B,D as T,E as $,G as O,H as P,I as V,e as H,p as K,v as N,j as _,J as S,K as C,L as R,x as I,o as n,f as a,u,c as x,w as z,m as q,g as c,y as L,a as s,t as f,b as F,h as M,r as G,F as U,d as J,_ as A}from"./app-rlG6GUYn.js";function ht(t,d={}){const i=d.head||E();if(i)return i.ssr?i.push(t,d):W(i,t,d)}function W(t,d,i={}){const l=v(!1),m=v({});j(()=>{m.value=l.value?{}:P(d)});const h=t.push(m.value,i);return B(m,p=>{h.patch(p)}),V()&&(T(()=>{h.dispose()}),$(()=>{l.value=!0}),O(()=>{l.value=!1})),h}const Y={class:"mb-0 slide-enter-50"},Q={key:0,class:"opacity-50 !-mt-6 slide-enter-50"},X={key:0},Z={key:1,class:"mt--4!"},tt=s("span",{op50:""},"at ",-1),et=["href"],nt={key:1,"font-bold":""},ot={key:2,class:"opacity-50 !-mt-6 italic slide-enter"},at={key:3,class:"slide-enter","bg-orange-4:10":"","text-orange-4":"",border:"l-3 orange-4",px4:"",py2:""},st={key:2,class:"prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden"},rt=s("span",{"font-mono":"",op50:""},"> ",-1),ct=s("span",{op50:""},"comment on ",-1),it=["href"],lt=s("span",{op25:""}," / ",-1),dt=["href"],ut=s("br",null,null,-1),mt=s("span",{"font-mono":"",op50:""},"> ",-1),D="https://ajiu9.cn",pt=H({__name:"WrapperPost",props:{frontmatter:{type:Object,required:!0}},setup(t){const{frontmatter:d}=t,i=K(),l=N(),m=v(),h=_(()=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Reading @ajiu9's ${D}${l.path}

I think...`)}`),b=_(()=>`https://elk.zone/intent/post?text=${encodeURIComponent(`Reading @ajiu9@m.webtoo.ls's ${D}${l.path}

I think...`)}`);S(()=>{const o=()=>{if(location.hash){const e=document.querySelector(decodeURIComponent(location.hash));if(e){const r=e.getBoundingClientRect(),y=window.scrollY+r.top-40;return window.scrollTo({top:y,behavior:"smooth"}),!0}}},g=e=>{const r=e.target.closest("a");if(!e.defaultPrevented&&r&&e.button===0&&r.target!=="_blank"&&r.rel!=="external"&&!r.download&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){const y=new URL(r.href);if(y.origin!==window.location.origin)return;e.preventDefault();const{pathname:k,hash:w}=y;w&&(!k||k===location.pathname)?(window.history.replaceState({},"",w),o()):i.push({path:k,hash:w})}};C(window,"hashchange",o),C(m.value,"click",g,{passive:!1}),setTimeout(()=>{o()||setTimeout(o,1e3)},1)});const p=_(()=>{let o=d.art;if(o==="random"&&(o=Math.random()>.5?"plum":"dots"),typeof window<"u"){if(o==="plum")return R(()=>A(()=>import("./ArtPlum-DuU-O_ys.js"),__vite__mapDeps([0,1,2])));if(o==="dots")return R(()=>A(()=>import("./ArtDots-CBXcmxeO.js"),__vite__mapDeps([3,1,2])))}});return(o,g)=>{const e=I("ClientOnly"),r=I("RouterLink");return n(),a(U,null,[u(p)?(n(),x(e,{key:0},{default:z(()=>[(n(),x(q(u(p))))]),_:1})):c("",!0),t.frontmatter.display??t.frontmatter.title?(n(),a("div",{key:1,class:L(["prose m-auto mb-8",[t.frontmatter.wrapperClass]])},[s("h1",Y,f(t.frontmatter.display??t.frontmatter.title),1),t.frontmatter.date?(n(),a("p",Q,[F(f(u(M)(t.frontmatter.date,!1))+" ",1),t.frontmatter.duration?(n(),a("span",X,"· "+f(t.frontmatter.duration),1)):c("",!0)])):c("",!0),t.frontmatter.place?(n(),a("p",Z,[tt,t.frontmatter.placeLink?(n(),a("a",{key:0,href:t.frontmatter.placeLink,target:"_blank"},f(t.frontmatter.place),9,et)):(n(),a("span",nt,f(t.frontmatter.place),1))])):c("",!0),t.frontmatter.subtitle?(n(),a("p",ot,f(t.frontmatter.subtitle),1)):c("",!0),t.frontmatter.draft?(n(),a("p",at," This is a draft post, the content may be incomplete. Please check back later. ")):c("",!0)],2)):c("",!0),s("article",{ref_key:"content",ref:m,class:L([t.frontmatter.tocAlwaysOn?"toc-always-on":"",t.frontmatter.class])},[G(o.$slots,"default")],2),u(l).path!=="/"?(n(),a("div",st,[t.frontmatter.duration?(n(),a(U,{key:0},[rt,ct,s("a",{href:u(b),target:"_blank",op50:""},"mastodon",8,it),lt,s("a",{href:u(h),target:"_blank",op50:""},"twitter",8,dt)],64)):c("",!0),ut,mt,J(r,{to:u(l).path.split("/").slice(0,-1).join("/")||"/",class:"font-mono op50 hover:op75",textContent:"cd .."},null,8,["to"])])):c("",!0)],64)}}});export{pt as _,ht as u};
