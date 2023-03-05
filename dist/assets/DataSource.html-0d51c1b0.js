import{_ as r,V as s,W as l,X as t,Y as e,$ as o,Z as a,D as i}from"./framework-13182686.js";const c={},p=t("h1",{id:"数据源-datasource",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数据源-datasource","aria-hidden":"true"},"#"),e(" 数据源(DataSource)")],-1),h={href:"https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html",target:"_blank",rel:"noopener noreferrer"},d=t("code",null,"EntityCollection",-1),_=a('<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p><strong><a href="">changedEvent : Event</a></strong></p><p>获取将在基础数据更改时引发的事件。</p><p><strong><a href="">clock : DataSourceClock</a></strong></p><p>获取此数据源的首选时钟设置。</p><p><strong><a href="">clustering : EntityCluster</a></strong></p><p>获取或设置此数据源的聚类选项。该对象可以在多个数据源之间共享。</p><p><strong><a href="">entities : EntityCollection</a></strong></p>',8),u={href:"https://www.vvpstk.com/public/Cesium/Documentation/Entity.html",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"Entity",-1),f=a('<p><strong><a href="">errorEvent : Event</a></strong></p><p>获取在处理过程中遇到错误时将引发的事件。</p><p><strong><a href="">isLoading : Boolean</a></strong></p><p>获取一个值，该值指示数据源当前是否正在加载数据。</p><p><strong><a href="">loadingEvent : Event</a></strong></p><p>获取isLoading的值更改时将引发的事件。</p><p><strong><a href="">name : String</a></strong></p><p>获取此实例的可读名称。</p><p><strong><a href="">show : Boolean</a></strong></p><p>获取是否应显示此数据源。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p><strong><a href="">update(time): Boolean</a></strong></p>',12),m={href:"https://www.vvpstk.com/public/Cesium/Documentation/DataSourceDisplay.html",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"DataSourceDisplay",-1),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),D=t("td",{style:{"text-align":"left"}},[t("code",null,"time")],-1),x={style:{"text-align":"left"}},E={href:"https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html",target:"_blank",rel:"noopener noreferrer"},k=t("td",{style:{"text-align":"left"}},"模拟时间。",-1),b=t("p",null,"返回值: 如果此数据源准备在提供的时间显示，则为true，否则为false。",-1);function w(C,S){const n=i("ExternalLinkIcon");return s(),l("div",null,[p,t("p",null,[e("定义数据源的接口，它将任意数据转换为"),t("a",h,[d,o(n)]),e("供通用使用。 此对象是用于文档目的的接口，不打算直接实例化。")]),_,t("p",null,[e("获取"),t("a",u,[g,o(n)]),e("实例的集合。")]),f,t("p",null,[e("将数据源更新为提供的时间。此功能是可选的，不需要实现。 它提供用于根据当前动画时间或场景状态检索数据的数据源。 如果实现了，"),t("a",m,[v,o(n)]),e("将在每帧中调用一次更新。")]),t("table",null,[y,t("tbody",null,[t("tr",null,[D,t("td",x,[t("a",E,[e("JulianDate"),o(n)])]),k])])]),b])}const N=r(c,[["render",w],["__file","DataSource.html.vue"]]);export{N as default};
