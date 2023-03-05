import{_ as o,V as l,W as p,X as n,Y as e,$ as t,Z as a,D as c}from"./framework-13182686.js";const r={},i=n("h1",{id:"perinstancecolorappearance",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#perinstancecolorappearance","aria-hidden":"true"},"#"),e(" PerInstanceColorAppearance")],-1),u={href:"https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"GeometryInstance",-1),k={href:"https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"Primitive",-1),m=n("h2",{id:"构造器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),e(" 构造器")],-1),h=n("p",null,[n("strong",null,"PerInstanceColorAppearance(options)")],-1),v=n("p",null,"options具有下列属性的对象:",-1),b=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),f=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"flat")]),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},[n("code",null,"false")]),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),e("当"),n("code",null,"true"),e("时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。")])],-1),g=n("td",{style:{"text-align":"left"}},[n("code",null,"faceForward")],-1),y=n("td",{style:{"text-align":"left"}},"Boolean",-1),w=n("td",{style:{"text-align":"left"}},[n("code",null,"!options.closed")],-1),C={style:{"text-align":"left"}},x=n("code",null,"optional",-1),I=n("code",null,"true",-1),A={href:"https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"WallGeometry",-1),S=n("td",{style:{"text-align":"left"}},[n("code",null,"translucent")],-1),D=n("td",{style:{"text-align":"left"}},"Boolean",-1),G=n("td",{style:{"text-align":"left"}},[n("code",null,"true")],-1),W={style:{"text-align":"left"}},F=n("code",null,"optional",-1),L=n("code",null,"true",-1),V={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"PerInstanceColorAppearance#renderState",-1),O=n("td",{style:{"text-align":"left"}},[n("code",null,"closed")],-1),R=n("td",{style:{"text-align":"left"}},"Boolean",-1),E=n("td",{style:{"text-align":"left"}},[n("code",null,"false")],-1),T={style:{"text-align":"left"}},j=n("code",null,"optional",-1),N=n("code",null,"true",-1),M={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"PerInstanceColorAppearance#renderState",-1),Y=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"vertexShaderSource")]),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),e("可选的GLSL顶点着色器源覆盖默认的顶点着色器。")])],-1),Z=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"fragmentShaderSource")]),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),e("可选的GLSL片段着色器源覆盖默认的片段着色器。")])],-1),$=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"renderState")]),n("td",{style:{"text-align":"left"}},"RenderState"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),e("可选的渲染状态来覆盖默认的渲染状态。")])],-1),q=a(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一条白色的线段</span>
<span class="token keyword">var</span> primitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>SimplePolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
        <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">flat</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">translucent</span> <span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一个图元中有两个矩形，并且具有不同的颜色。</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> anotherInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>ColorGeometryInstanceAttribute</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> rectanglePrimitive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometryInstances</span> <span class="token operator">:</span> <span class="token punctuation">[</span>instance<span class="token punctuation">,</span> anotherInstance<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appearance</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PerInstanceColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p><code>static</code> <code>constant</code> <strong><a href="">Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT : VertexFormat</a></strong></p>`,4),z={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"PerInstanceColorAppearance#flat",-1),J=n("code",null,"true",-1),K={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"PerInstanceColorAppearance",-1),U={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},nn=n("code",null,"VertexFormat",-1),en=n("code",null,"position",-1),sn=n("p",null,[n("code",null,"static"),e(),n("code",null,"constant"),e(),n("strong",null,[n("a",{href:""},"Cesium.PerInstanceColorAppearance.VERTEX_FORMAT : VertexFormat")])],-1),tn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"PerInstanceColorAppearance",-1),on={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"VertexFormat",-1),pn=n("code",null,"position",-1),cn=n("code",null,"normal",-1),rn=n("p",null,[n("code",null,"readOnly"),e(),n("strong",null,[n("a",{href:""},"closed : Boolean")])],-1),un=n("code",null,"true",-1),dn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},kn=n("code",null,"PerInstanceColorAppearance#renderState",-1),_n=n("p",null,[e("默认值："),n("code",null,"false")],-1),mn=n("p",null,[n("code",null,"readOnly"),e(),n("strong",null,[n("a",{href:""},"faceForward : Boolean")])],-1),hn=n("code",null,"true",-1),vn={href:"https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html",target:"_blank",rel:"noopener noreferrer"},bn=n("code",null,"WallGeometry",-1),fn=a('<p>默认值：<code>true</code></p><p><code>readOnly</code> <strong><a href="">flat : Boolean</a></strong></p><p>当<code>true</code>时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。</p><p>默认值：<code>false</code></p><p><code>readOnly</code> <strong><a href="">fragmentShaderSource : String</a></strong></p><p>片段着色器的GLSL源代码。</p><p><strong><a href="">material : Material</a></strong></p>',7),gn={href:"https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"Appearance",-1),wn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html",target:"_blank",rel:"noopener noreferrer"},Cn=n("code",null,"PerInstanceColorAppearance",-1),xn=n("p",null,[e("默认值："),n("code",null,"undefined")],-1),In=n("p",null,[n("code",null,"readOnly"),e(),n("strong",null,[n("a",{href:""},"renderState : Object")])],-1),An=n("p",null,"渲染几何图形时的WEBGL状态。",-1),Pn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("code",null,"PerInstanceColorAppearance",-1),Dn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent",target:"_blank",rel:"noopener noreferrer"},Gn=n("code",null,"PerInstanceColorAppearance#translucent",-1),Wn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#closed",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"PerInstanceColorAppearance#closed",-1),Ln=n("p",null,[n("strong",null,[n("a",{href:""},"translucent : Boolean")])],-1),Vn=n("code",null,"true",-1),Bn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState",target:"_blank",rel:"noopener noreferrer"},On=n("code",null,"PerInstanceColorAppearance#renderState",-1),Rn=n("p",null,[e("默认值："),n("code",null,"true")],-1),En=n("p",null,[n("code",null,"readOnly"),e(),n("strong",null,[n("a",{href:""},"vertexFormat : VertexFormat")])],-1),Tn={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"VertexFormat",-1),Nn=n("p",null,[n("code",null,"readOnly"),e(),n("strong",null,[n("a",{href:""},"vertexShaderSource : String")])],-1),Mn=n("p",null,"顶点着色器的GLSL源代码。",-1),Xn=n("h2",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),e(" 方法")],-1),Yn=n("p",null,[n("strong",null,[n("a",{href:""},"getFragmentShaderSource(): String")])],-1),Zn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html",target:"_blank",rel:"noopener noreferrer"},$n=n("code",null,"PerInstanceColorAppearance",-1),qn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#fragmentShaderSource",target:"_blank",rel:"noopener noreferrer"},zn=n("code",null,"PerInstanceColorAppearance#fragmentShaderSource",-1),Hn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat",target:"_blank",rel:"noopener noreferrer"},Jn=n("code",null,"PerInstanceColorAppearance#flat",-1),Kn={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#faceForward",target:"_blank",rel:"noopener noreferrer"},Qn=n("code",null,"PerInstanceColorAppearance#faceForward",-1),Un=n("p",null,"返回值：完整的GLSL片段着色器。",-1),ne=n("p",null,[n("strong",null,[n("a",{href:""},"getRenderState() → Object")])],-1),ee=n("p",null,"创建渲染状态。",-1),se=n("p",null,"返回值：渲染状态。",-1),te=n("p",null,[n("strong",null,[n("a",{href:""},"isTranslucent() → Boolean")])],-1),ae={href:"https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent",target:"_blank",rel:"noopener noreferrer"},oe=n("code",null,"PerInstanceColorAppearance#translucent",-1),le=n("p",null,[e("返回值：如果是半透明，返回"),n("code",null,"true"),e("。")],-1);function pe(ce,re){const s=c("ExternalLinkIcon");return l(),p("div",null,[i,n("p",null,[e("带有颜色属性的"),n("a",u,[d,t(s)]),e("实例的外观。 这允许使用相同的"),n("a",k,[_,t(s)]),e("绘制几个几何实例，每个实例使用不同的颜色，如下面的第二个示例所示。")]),m,h,v,n("table",null,[b,n("tbody",null,[f,n("tr",null,[g,y,w,n("td",C,[x,e("当 "),I,e("时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像"),n("a",A,[P,t(s)]),e(" 一样着色时，这很有用。")])]),n("tr",null,[S,D,G,n("td",W,[F,e("当"),L,e("时，几何图形应该是半透明的，因此 "),n("a",V,[B,t(s)]),e("启用了alpha混合。")])]),n("tr",null,[O,R,E,n("td",T,[j,e("当"),N,e("时，几何图形将被关闭，因此"),n("a",M,[X,t(s)]),e("启用了背面剔除。")])]),Y,Z,$])]),q,n("p",null,[e("当"),n("a",z,[H,t(s)]),e("为 "),J,e("时， 所有"),n("a",K,[Q,t(s)]),e("实例都兼容的"),n("a",U,[nn,t(s)]),e("。这只需要一个"),en,e("属性。")]),sn,n("p",null,[e("所有"),n("a",tn,[an,t(s)]),e("实例都兼容的"),n("a",on,[ln,t(s)]),e("。 这只需要"),pn,e(" and "),cn,e(" 属性。")]),rn,n("p",null,[e("当"),un,e("时，几何图形将被关闭，因此"),n("a",dn,[kn,t(s)]),e("启用了后表面剔除。")]),_n,mn,n("p",null,[e("当 "),hn,e("时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像"),n("a",vn,[bn,t(s)]),e(" 一样着色时，这很有用。")]),fn,n("p",null,[e("此属性是"),n("a",gn,[yn,t(s)]),e("接口的一部分，但"),n("a",wn,[Cn,t(s)]),e("不使用此属性，因为使用的是完全自定义的片段着色器。")]),xn,In,An,n("p",null,[e("渲染状态可以在构造一个"),n("a",Pn,[Sn,t(s)]),e("例时显式定义， 也可以通过"),n("a",Dn,[Gn,t(s)]),e("和"),n("a",Wn,[Fn,t(s)]),e("隐式设置。")]),Ln,n("p",null,[e("当"),Vn,e("时，几何图形应该是半透明的，因此"),n("a",Bn,[On,t(s)]),e("启用了alpha混合。")]),Rn,En,n("p",null,[e("与此外观实例兼容的"),n("a",Tn,[jn,t(s)]),e("。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。")]),Nn,Mn,Xn,Yn,n("p",null,[e("创建完整的GLSL片段着色器。 对于"),n("a",Zn,[$n,t(s)]),e("，这是从"),n("a",qn,[zn,t(s)]),e("、"),n("a",Hn,[Jn,t(s)]),e("和"),n("a",Kn,[Qn,t(s)]),e("派生出来的。")]),Un,ne,ee,se,te,n("p",null,[e("确定几何图形是否是半透明 "),n("a",ae,[oe,t(s)]),e(".")]),le])}const ue=o(r,[["render",pe],["__file","PerInstanceColorAppearance.html.vue"]]);export{ue as default};