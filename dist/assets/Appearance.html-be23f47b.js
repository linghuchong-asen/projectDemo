import{_ as a,V as r,W as s,X as e,Y as t,$ as o,Z as l,D as c}from"./framework-13182686.js";const i={},d=e("h1",{id:"基础外观-appearance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基础外观-appearance","aria-hidden":"true"},"#"),t(" 基础外观(Appearance)")],-1),p={href:"https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"Primitive",-1),_=e("code",null,"Appearance",-1),u=e("h2",{id:"构造器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),t(" 构造器")],-1),f=e("p",null,[e("strong",null,"Appearance(options)")],-1),g=e("p",null,"options具有下列属性的对象：",-1),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default"),e("th",{style:{"text-align":"left"}},"Description")])],-1),x=e("td",{style:{"text-align":"left"}},[e("code",null,"translucent")],-1),S=e("td",{style:{"text-align":"left"}},"Boolean",-1),y=e("td",{style:{"text-align":"left"}},[e("code",null,"true")],-1),w={style:{"text-align":"left"}},b=e("code",null,"true",-1),v={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"Appearance#renderState",-1),A=e("td",{style:{"text-align":"left"}},[e("code",null,"closed")],-1),L=e("td",{style:{"text-align":"left"}},"Boolean",-1),D=e("td",{style:{"text-align":"left"}},[e("code",null,"false")],-1),C={style:{"text-align":"left"}},B=e("code",null,"true",-1),G={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"Appearance#renderState",-1),O=e("td",{style:{"text-align":"left"}},[e("code",null,"material")],-1),T={style:{"text-align":"left"}},N={href:"https://www.vvpstk.com/public/Cesium/Documentation/Material.html",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"left"}},[e("code",null,"Material.ColorType")],-1),E=e("td",{style:{"text-align":"left"}},"optional用于确定片元颜色的材质。",-1),F=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"vertexShaderSource")]),e("td",{style:{"text-align":"left"}},"String"),e("td",{style:{"text-align":"left"}}),e("td",{style:{"text-align":"left"}},"optional可选的GLSL顶点着色器源，用于覆盖默认的顶点着色器。")],-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"fragmentShaderSource")]),e("td",{style:{"text-align":"left"}},"String"),e("td",{style:{"text-align":"left"}}),e("td",{style:{"text-align":"left"}},"optional可选的GLSL片段着色器源，用于覆盖默认的片段着色器。")],-1),I=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"renderState")]),e("td",{style:{"text-align":"left"}},"RenderState"),e("td",{style:{"text-align":"left"}}),e("td",{style:{"text-align":"left"}},"optional可选的渲染状态，用于覆盖默认的渲染状态。")],-1),P=l('<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p><code>readOnly</code> <strong><a href="">closed: boolean</a></strong></p><p>当<code>true</code>时，启用背面剔除。</p><p>默认值：<code>false</code></p><p><code>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p>',6),R={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"Appearance#material",-1),X={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#getFragmentShaderSource",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"Appearance#getFragmentShaderSource",-1),Z=e("p",null,[e("strong",null,[e("a",{href:""},"material : Material")])],-1),$={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"Appearance",-1),z=l('<p><code>readOnly</code> <strong><a href="">renderState : Object</a></strong></p><p>渲染几何图形时的WEBGL状态。</p><p><strong><a href="">translucent : Boolean</a></strong></p><p>当<code>true</code>时，启用了alpha混合。</p><p>默认值：<code>true</code></p><p><code>readOnly</code> <strong><a href="">vertexShaderSource : String</a></strong></p><p>顶点着色器的GLSL源代码。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p><strong><a href=""> getFragmentShaderSource(): String</a></strong></p>',9),H={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#fragmentShaderSource",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"Appearance#fragmentShaderSource",-1),K={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"Appearance#material",-1),U=e("p",null,"返回值：完整的GLSL片段着色器。",-1),ee=e("p",null,[e("strong",null,[e("a",{href:""},"getRenderState(): Object")])],-1),te=e("p",null,"获取渲染状态。",-1),ne=e("p",null,"返回值：渲染状态。",-1),oe=e("p",null,[e("strong",null,[e("a",{href:""},"isTranslucent(): Boolean")])],-1),le={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#translucent",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"Appearance#translucent",-1),re={href:"https://www.vvpstk.com/public/Cesium/Documentation/Material.html#isTranslucent",target:"_blank",rel:"noopener noreferrer"},se=e("code",null,"Material#isTranslucent",-1),ce=e("p",null,[t("返回值：如果外观为半透明，返回"),e("code",null,"true"),t(" 。")],-1);function ie(de,pe){const n=c("ExternalLinkIcon");return r(),s("div",null,[d,e("p",null,[t("Appearance定义了完整的GLSL顶点和片段着色器，以及用于绘制"),e("a",p,[h,o(n)]),t("的渲染状态。 所有的appearances实现都基于这个基础的"),_,t("接口。")]),u,f,g,e("table",null,[m,e("tbody",null,[e("tr",null,[x,S,y,e("td",w,[t("optional当"),b,t("时，几何图形应该显示为半透明，因此"),e("a",v,[k,o(n)]),t("启用了alpha混合。")])]),e("tr",null,[A,L,D,e("td",C,[t("optional当"),B,t("时，几何图形将被关闭，因此"),e("a",G,[M,o(n)]),t("启用了背面剔除。")])]),e("tr",null,[O,e("td",T,[e("a",N,[t("Material"),o(n)])]),V,E]),F,j,I])]),P,e("p",null,[t("片段着色器的GLSL源代码。 完整的片段着色器源代码是根据"),e("a",R,[W,o(n)]),t("构建的，使用"),e("a",X,[Y,o(n)]),t("获取完整的源代码。")]),Z,e("p",null,[t("用于确定片元颜色的材质。与其他"),e("a",$,[q,o(n)]),t("的属性不同，它不是只读的，所以外观的材质可以动态改变。")]),z,e("p",null,[t("获取基于"),e("a",H,[J,o(n)]),t("和"),e("a",K,[Q,o(n)]),t("， 为这个外观创建的完整的GLSL片段着色器源。")]),U,ee,te,ne,oe,e("p",null,[t("根据"),e("a",le,[ae,o(n)]),t("和"),e("a",re,[se,o(n)]),t("}确定几何图形是否为半透明。")]),ce])}const _e=a(i,[["render",ie],["__file","Appearance.html.vue"]]);export{_e as default};
