import{u as a,_ as i}from"./WrapperPost.vue_vue_type_script_setup_true_lang-BaqXopiT.js";import{o as s,c as p,w as u,a as l,b as n}from"./app-C1qZYo9e.js";const r="/images/20240310214516948RBW.png",o="/images/20240310214534AyGWUp.png",c=l("div",{class:"prose m-auto slide-enter-content"},[l("h4",{id:"http简介",tabindex:"-1"},[n("http简介 "),l("a",{class:"header-anchor",href:"#http简介","aria-hidden":"true"},"#")]),l("p",null,"超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP）。 通常，由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器则在那个端口监听客户端发送过来的请求。一旦收到请求，服务器（向客户端）发回一个状态行，比如”HTTP/1.1 200 OK”，和（响应的）消息，消息的消息体可能是请求的文件、错误消息、或者其它一些信息。"),l("h4",{id:"http协议的主要特点",tabindex:"-1"},[n("http协议的主要特点 "),l("a",{class:"header-anchor",href:"#http协议的主要特点","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,[l("p",null,"简单快速 ：HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接，URL是一种特殊类型的URI。访问某个资源只要输入URI即可。")]),l("li",null,[l("p",null,"灵活：每个http协议中。有一个头部分，有个数据类型，通过一个http协议的就可以完成不同数据类型的传输。")]),l("li",null,[l("p",null,"无连接：连接一次就会断开，不会保持连接。")]),l("li",null,[l("p",null,"无状态：客户端和服务端通信，客户端向服务端发送请求，http建立连接、传输结束后，连接断开，下次客户端再请求数据，服务端是无法区分上次连接和这次连接是否是同一身份，因为服务端没有记住你的状态，从http协议上是无法区分两次连接者的身份。")])]),l("h4",{id:"http报文的组成部分",tabindex:"-1"},[n("http报文的组成部分 "),l("a",{class:"header-anchor",href:"#http报文的组成部分","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,"请求报文：请求行、请求头、空行、请求体"),l("li",null,"响应报文：状态行、响应头、空行、响应体")]),l("p",null,[l("img",{src:r,alt:"图片"})]),l("p",null,"请求报文格式"),l("p",null,[l("img",{src:o,alt:"图片"})]),l("h5",{id:"请求报文示例",tabindex:"-1"},[n("请求报文示例 "),l("a",{class:"header-anchor",href:"#请求报文示例","aria-hidden":"true"},"#")]),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[l("code",{class:"language-text"},[l("span",{class:"line"},[l("span",null,"GET /build/music/ HTTP/1.1")]),n(`
`),l("span",{class:"line"},[l("span",null,"Host: www.ajiu9.com")]),n(`
`),l("span",{class:"line"},[l("span",null,"Connection: keep-alive")]),n(`
`),l("span",{class:"line"},[l("span",null,"Cache-Control: max-age=0")]),n(`
`),l("span",{class:"line"},[l("span",null,"Upgrade-Insecure-Requests: 1")]),n(`
`),l("span",{class:"line"},[l("span",null,"User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36")]),n(`
`),l("span",{class:"line"},[l("span",null,"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")]),n(`
`),l("span",{class:"line"},[l("span",null,"Accept-Encoding: gzip, deflate")]),n(`
`),l("span",{class:"line"},[l("span",null,"Accept-Language: zh-CN,zh;q=0.9")]),n(`
`),l("span",{class:"line"},[l("span",null,'If-None-Match: W/"5ba9f717-234"')]),n(`
`),l("span",{class:"line"},[l("span",null,"If-Modified-Since: Tue, 25 Sep 2018 08:51:35 GMT")])])]),l("ul",null,[l("li",null,[l("p",null,"第一部分：请求行，用来说明请求类型,要访问的资源以及所使用协议和版本。")]),l("li",null,[l("p",null,"第二部分：求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息。")]),l("li",null,[l("p",null,"第三部分：空行，请求头部后面的空行是必须的。")]),l("li",null,[l("p",null,"第四部分：请求数据也叫主体，可以添加任意的其他数据（这个例子的请求数据为空）。")])]),l("h5",{id:"响应报文示例",tabindex:"-1"},[n("响应报文示例 "),l("a",{class:"header-anchor",href:"#响应报文示例","aria-hidden":"true"},"#")]),l("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--s-light":"#24292e","--s-dark":"#e1e4e8","--s-light-bg":"#fff","--s-dark-bg":"#24292e"},tabindex:"0"},[l("code",{class:"language-text"},[l("span",{class:"line"},[l("span",null,"HTTP/1.1 304 Not Modified")]),n(`
`),l("span",{class:"line"},[l("span",null,"Date: Tue, 25 Sep 2018 08:53:14 GMT")]),n(`
`),l("span",{class:"line"},[l("span",null,"Via: 1.1 varnish")]),n(`
`),l("span",{class:"line"},[l("span",null,"Cache-Control: max-age=600")]),n(`
`),l("span",{class:"line"},[l("span",null,'ETag: W/"5ba9f717-234"')]),n(`
`),l("span",{class:"line"},[l("span",null,"Expires: Tue, 25 Sep 2018 09:03:04 GMT")]),n(`
`),l("span",{class:"line"},[l("span",null,"Age: 10")]),n(`
`),l("span",{class:"line"},[l("span",null,"Connection: keep-alive")]),n(`
`),l("span",{class:"line"},[l("span",null,"X-Served-By: cache-tyo19932-TYO")]),n(`
`),l("span",{class:"line"},[l("span",null,"X-Cache: HIT")]),n(`
`),l("span",{class:"line"},[l("span",null,"X-Cache-Hits: 1")]),n(`
`),l("span",{class:"line"},[l("span",null,"X-Timer: S1537865594.266742,VS0,VE0")]),n(`
`),l("span",{class:"line"},[l("span",null,"Vary: Accept-Encoding")]),n(`
`),l("span",{class:"line"},[l("span",null,"X-Fastly-Request-ID: d33e186dc5ff53c01d8128c32ff8a0f1092c9832")])])]),l("ul",null,[l("li",null,[l("p",null,"第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。")]),l("li",null,[l("p",null,"第二部分：消息报头，用来说明客户端要使用的一些附加信息")]),l("li",null,[l("p",null,"第三部分：空行，消息报头后面的空行是必须的。")]),l("li",null,[l("p",null,"第四部分：响应正文，服务器返回给客户端的文本信息。")])]),l("h4",{id:"http请求方法",tabindex:"-1"},[n("http请求方法 "),l("a",{class:"header-anchor",href:"#http请求方法","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,"get ———— 获取资源"),l("li",null,"post ———— 传输资源"),l("li",null,"put ———— 更新资源"),l("li",null,"delete ———— 删除资源"),l("li",null,"head ———— 获得报文首部")]),l("h4",{id:"get和post的区别",tabindex:"-1"},[n("get和post的区别 "),l("a",{class:"header-anchor",href:"#get和post的区别","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,[l("p",null,[l("code",null,"get在浏览器回退是无害的，而post会再次提交请求")])]),l("li",null,[l("p",null,[l("code",null,"get请求会被浏览器主动缓存，而post不会，除非手动设置")])]),l("li",null,[l("p",null,[l("code",null,"get请求参数会被完整保留在浏览器的历史记录里，而post中的参数不会被保留")])]),l("li",null,[l("p",null,[l("code",null,"get请求中传送的参数是有长度限制的（一般是2kb，不同浏览器不一样），post没有长度限制")])]),l("li",null,[l("p",null,[l("code",null,"get参数通过URL传递，post放在Request body中")])]),l("li",null,[l("p",null,"get产生的URL地址可以被收藏，而get不可以")]),l("li",null,[l("p",null,"get请求只能进行url编码，而post支持多种编码方式")]),l("li",null,[l("p",null,"对参数的数据类型，get只接受ASCLL字符，而post没有限制")]),l("li",null,[l("p",null,"get比post更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息")])]),l("h4",{id:"http状态码",tabindex:"-1"},[n("http状态码 "),l("a",{class:"header-anchor",href:"#http状态码","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,[l("p",null,"1xx：指示信息 ——表示请求已接收，继续处理")]),l("li",null,[l("p",null,"2xx：成功——表示请求已被成功接收")]),l("li",null,[l("p",null,"3xx：重定向——要完成请求必须进行更进一步的操作")]),l("li",null,[l("p",null,"4xx：客户端错误——请求有语法错误或请求无法实现")]),l("li",null,[l("p",null,"5xx：服务端错误——服务器未能实现合法的请求")]),l("li",null,[l("p",null,"200 OK：客户端请求成功")]),l("li",null,[l("p",null,"206 Partial Content: 客户发送了一个带Range头的GET请求，服务器完成了它")]),l("li",null,[l("p",null,"301 Move Parmanently：所请求的页面已经转移到新的url")]),l("li",null,[l("p",null,"302 Found：所请求的页面已经临时转移至新的url")]),l("li",null,[l("p",null,"304 Not Modified：客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用")]),l("li",null,[l("p",null,"400 Bad Request：客户端请求有语法错误，不能被服务端所理解")]),l("li",null,[l("p",null,"401 Unauthorized：请求未经授权,这个状态代码必须和WWW-Authenticate报头域一起使用")]),l("li",null,[l("p",null,"403 Forboidden：对被请求页面的访问被禁止")]),l("li",null,[l("p",null,"404 NOt Found：请求资源不存在")]),l("li",null,[l("p",null,"500 Internal Server Error：服务器发送不可预期的错误原来缓冲文档还可以继续使用")]),l("li",null,[l("p",null,"503 Server Unavailable：请求未完成，服务器临时过载或当机，一段时间后可能恢复正常")])]),l("h4",{id:"持久连接",tabindex:"-1"},[n("持久连接 "),l("a",{class:"header-anchor",href:"#持久连接","aria-hidden":"true"},"#")]),l("p",null,"HTTP协议采用“请求-应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成 之后立即断开连接（HTTP协议为无连接的协议）； 当使用Keep-Alive模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服 务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。"),l("p",null,"http 1.0中默认是关闭的，需要在http头加入”Connection: Keep-Alive”，才能启用Keep-Alive； http 1.1中默认启用Keep-Alive，如果加入”Connection: close “，才关闭。"),l("p",null,"目前大部分浏览器都是用http1.1协议，也就是说默认都会发起Keep-Alive的连接请求了，所以是否能完成一个完整的Keep-Alive连接就看服务器设置情况。"),l("h4",{id:"管线化",tabindex:"-1"},[n("管线化 "),l("a",{class:"header-anchor",href:"#管线化","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,[l("p",null,"1.在使用持久连接的情况下，某个连接上消息的传递类似于，请求一次响应一次并且不断开 请求1-> 响应1->请求2->响应2->请求3->响应3")]),l("li",null,[l("p",null,"2.管线化通道是持久建立的，把所有请求打包一次传输，所有响应打包一次传输 请求1->请求2->请求3->响应1->响应2->响应3")])]),l("h4",{id:"管线化特点",tabindex:"-1"},[n("管线化特点 "),l("a",{class:"header-anchor",href:"#管线化特点","aria-hidden":"true"},"#")]),l("ul",null,[l("li",null,[l("p",null,"管线化机制通过持久连接完成，仅HTTP/1.1支持此技术")]),l("li",null,[l("p",null,"只有get和head请求可以进行管线化，而post则有所限制")]),l("li",null,[l("p",null,"初次创建连接是不应启动管线机制，因为对方(服务器)不一定支持HTTP/1.1版本的协议")]),l("li",null,[l("p",null,"管线化不会影响响应到来的顺序，如上面的例子所示，响应返还的顺序并未改变")]),l("li",null,[l("p",null,"HTTP/1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可")]),l("li",null,[l("p",null,"由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如Chrome和Firefox默认并未开启管线化支持")])])],-1),x={__name:"http-protocol-class",setup(h){const e={title:"HTTP协议类",lang:"zh",type:"note",date:"2018-09-25T00:00:00.000Z",image:"https://ajiu9.cn/og/http-protocol-class.png",meta:[{property:"og:title",content:"HTTP协议类"},{name:"twitter:title",content:"HTTP协议类"},{property:"og:image",content:"https://ajiu9.cn/og/http-protocol-class.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/http-protocol-class.png"},{name:"twitter:card",content:"summary_large_image"}]};return a({title:"HTTP协议类",meta:[{property:"og:title",content:"HTTP协议类"},{name:"twitter:title",content:"HTTP协议类"},{property:"og:image",content:"https://ajiu9.cn/og/http-protocol-class.png"},{name:"twitter:image",content:"https://ajiu9.cn/og/http-protocol-class.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,T)=>{const t=i;return s(),p(t,{frontmatter:e},{default:u(()=>[c]),_:1})}}};export{x as default};
