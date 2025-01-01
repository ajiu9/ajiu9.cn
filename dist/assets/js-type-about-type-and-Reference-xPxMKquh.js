import{u as a,_ as p}from"./WrapperPost.vue_vue_type_script_setup_true_lang-DHmjs6dj.js";import{o as r,c as o,w as l,a as t}from"./app-C5KGTpbs.js";const c="/images/202403102118517qwJD2.png",s="/images/20240310211733UOVZPP.png",i="/images/20240310211540NpJlfl.png",m=t("div",{class:"prose m-auto slide-enter-content"},[t("p",null,"CMAScript的变量可能包含两种不同数据类型的值：基本类型值和引用类型值。基本类型的值是简单的数据段，引用类型的值是多个值构成的对象。"),t("p",null,"把一个值赋值给变量时，解析器首先确定这个值是基本类型的值还是引用类型的值。基本数据类型有5种：Undefined、Null、Boolean、Number、String。这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际值。引用类型的值是按照引用访问的，因为javaScript不允许访问内存中的位置，不能直接操作对象的内存空间。（为对象添加属性操作的是实际对象）"),t("p",null,[t("strong",null,"动态属性")]),t("p",null,"首先我们来定义一个引用类型的值："),t("p",null,[t("img",{src:c,alt:"图片"})]),t("p",null,"以上代码创建了一个对象并将其保存在person变量中，然后为变量添加了一个名为name的属性，并将字符串“江月夜”赋给了这个属性。之后通过函数alert（）访问了这个新属性。如果对象不被销毁或者这个属性不被删除，则各属性将一直存在。"),t("p",null,"但是，不能给基本类型的值添加属性（不会导致错误）"),t("p",null,[t("img",{src:s,alt:"图片"})]),t("p",null,[t("strong",null,"赋值变量值")]),t("p",null,"除了保存方式不一样，变量复制也有区别。"),t("p",null,"基本类型复制后的俩个变量彼此独立，此后，这俩个变量可以参与任何操作而不会互相影响。"),t("p",null,"引用类型的变量复制其实是一个指针，而这个指针指向存储在堆中的一个对象。复制结束后，俩个对象实际上引用同一个对象。改变其中一个变量，就会影响另一个变量。"),t("p",null,[t("img",{src:i,alt:"图片"})]),t("p",null,[t("strong",null,"传递参数")]),t("p",null,"函数的参数是按值传递的，基本类型的传递会把值复制给arguments对象中的一个元素（局部变量），引用类型的传递会把这个值在内存中的地址复制给一个局部变量，所以会反应在函数的外部。")],-1),j={__name:"js-type-about-type-and-Reference",setup(u){const e={title:"JavaScript基本类型和引用类型",lang:"zh",date:"2017-12-01T00:00:00.000Z",type:"note",image:"https://ajiu9.cn/og/js-type-about-type-and-Reference.png",meta:[{property:"og:title",content:"JavaScript基本类型和引用类型"},{name:"twitter:title",content:"JavaScript基本类型和引用类型"},{property:"og:image",content:"https://ajiu9.cn/og/js-type-about-type-and-Reference.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/js-type-about-type-and-Reference.png"},{name:"twitter:card",content:"summary_large_image"}]};return a({title:"JavaScript基本类型和引用类型",meta:[{property:"og:title",content:"JavaScript基本类型和引用类型"},{name:"twitter:title",content:"JavaScript基本类型和引用类型"},{property:"og:image",content:"https://ajiu9.cn/og/js-type-about-type-and-Reference.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/js-type-about-type-and-Reference.png"},{name:"twitter:card",content:"summary_large_image"}]}),(_,d)=>{const n=p;return r(),o(n,{frontmatter:e},{default:l(()=>[m]),_:1})}}};export{j as default};
