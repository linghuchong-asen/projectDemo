import{_ as e,V as o,W as l,Y as n,Z as s,$ as a,X as p,D as c}from"./framework-34e2585c.js";const i={},r=n("h1",{id:"多段线柱体-polylinevolumegeometry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多段线柱体-polylinevolumegeometry","aria-hidden":"true"},"#"),s(" 多段线柱体(PolylineVolumeGeometry)")],-1),u=n("p",null,"对具有体的折线的描述（沿折线挤压的二维形状）。",-1),d=n("h2",{id:"构造器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),s(" 构造器")],-1),k=n("p",null,[n("strong",null,"PolylineVolumeGeometry(options)")],-1),h=n("p",null,"options对象，具有以下属性：",-1),m=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),_=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"polylinePositions")]),n("td",{style:{"text-align":"left"}},"Vector3[ ]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[s("定义折线体中心的"),n("code",null,"Cartesain3"),s("位置数组。")])],-1),y=n("td",{style:{"text-align":"left"}},[n("code",null,"shapePositions")],-1),f=n("td",{style:{"text-align":"left"}},"Vector3[ ]",-1),v=n("td",{style:{"text-align":"left"}},null,-1),b={style:{"text-align":"left"}},g={href:"https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Cartesian2",-1),w=n("td",{style:{"text-align":"left"}},[n("code",null,"ellipsoid")],-1),V={style:{"text-align":"left"}},C={href:"https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"left"}},[n("code",null,"Ellipsoid.WGS84")],-1),E=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),s("用作参考的椭球体。")],-1),P=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"granularity")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},[n("code",null,"CesiumMath.RADIANS_PER_DEGREE")]),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),s("每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。")])],-1),N=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),T={style:{"text-align":"left"}},F={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),W=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),s("要计算的顶点属性。")],-1),I=n("td",{style:{"text-align":"left"}},[n("code",null,"cornerType")],-1),R={style:{"text-align":"left"}},A={href:"https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"left"}},[n("code",null,"CornerType.ROUNDED")],-1),M=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),s("确定角的样式。")],-1),O=p(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">computeCircle</span><span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> positions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">360</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> radians <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    positions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span>radius <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">,</span> radius <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> positions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> volume <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolylineVolumeGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">polylinePositions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shapePositions</span> <span class="token operator">:</span> <span class="token function">computeCircle</span><span class="token punctuation">(</span><span class="token number">100000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,4);function S(j,B){const t=c("ExternalLinkIcon");return o(),l("div",null,[r,u,d,k,h,n("table",null,[m,n("tbody",null,[_,n("tr",null,[y,f,v,n("td",b,[s("一个"),n("a",g,[x,a(t)]),s("位置数组，定义要沿着折线挤压的形状")])]),n("tr",null,[w,n("td",V,[n("a",C,[s("Ellipsoid"),a(t)])]),D,E]),P,n("tr",null,[N,n("td",T,[n("a",F,[s("VertexFormat"),a(t)])]),G,W]),n("tr",null,[I,n("td",R,[n("a",A,[s("CornerType"),a(t)])]),L,M])])]),O])}const Y=e(i,[["render",S],["__file","PolylineVolumeGeometry.html.vue"]]);export{Y as default};
