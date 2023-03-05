import{_ as l,V as a,W as o,Y as t,Z as e,$ as s,X as i,D as c}from"./framework-34e2585c.js";const r={},p=t("h1",{id:"多段线-polylinegeometry",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#多段线-polylinegeometry","aria-hidden":"true"},"#"),e(" 多段线(PolylineGeometry)")],-1),d=t("p",null,"以线带（line strip）形式建模的折线的描述；前两个位置定义一个线段， 每个额外的位置和前一个位置的定义一个线段。折线可以用一种材质来显示。",-1),u=t("h2",{id:"构造器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),e(" 构造器")],-1),_=t("p",null,[t("strong",null,"PolylineGeometry(options)")],-1),h=t("p",null,"options对象，具有以下属性：",-1),m=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Default"),t("th",{style:{"text-align":"left"}},"Description")])],-1),y=t("td",{style:{"text-align":"left"}},[t("code",null,"positions")],-1),f=t("td",{style:{"text-align":"left"}},"Vector3[]",-1),k=t("td",{style:{"text-align":"left"}},null,-1),x={style:{"text-align":"left"}},g={href:"https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"Cartesian3",-1),b=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"width")]),t("td",{style:{"text-align":"left"}},"Number"),t("td",{style:{"text-align":"left"}},[t("code",null,"1.0")]),t("td",{style:{"text-align":"left"}},"optional宽度（以像素为单位）。")],-1),w=t("td",{style:{"text-align":"left"}},[t("code",null,"colors")],-1),C=t("td",{style:{"text-align":"left"}},"Color[]",-1),E=t("td",{style:{"text-align":"left"}},null,-1),D={style:{"text-align":"left"}},G={href:"https://www.vvpstk.com/public/Cesium/Documentation/Color.html",target:"_blank",rel:"noopener noreferrer"},N=t("code",null,"Color",-1),V=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"colorsPerVertex")]),t("td",{style:{"text-align":"left"}},"Boolean"),t("td",{style:{"text-align":"left"}},[t("code",null,"false")]),t("td",{style:{"text-align":"left"}},"optional一个布尔值，它决定颜色是在每段直线上是单调的（flat）还是在顶点上是插值的。")],-1),T=t("td",{style:{"text-align":"left"}},[t("code",null,"arcType")],-1),A={style:{"text-align":"left"}},P={href:"https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"left"}},[t("code",null,"ArcType.GEODESIC")],-1),B=t("td",{style:{"text-align":"left"}},"optional折线段必须遵循的线的类型。",-1),I=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"granularity")]),t("td",{style:{"text-align":"left"}},"Number"),t("td",{style:{"text-align":"left"}},[t("code",null,"CesiumMath.RADIANS_PER_DEGREE")]),t("td",{style:{"text-align":"left"}},"optional每个纬度和经度之间的距离（以弧度表示），如果options.arcType不是ArcType.NONE。确定缓冲区中的位置数。")],-1),S=t("td",{style:{"text-align":"left"}},[t("code",null,"vertexFormat")],-1),j={style:{"text-align":"left"}},L={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"left"}},[t("code",null,"VertexFormat.DEFAULT")],-1),O=t("td",{style:{"text-align":"left"}},"optional要计算的顶点属性。",-1),W=t("td",{style:{"text-align":"left"}},[t("code",null,"ellipsoid")],-1),M={style:{"text-align":"left"}},U={href:"https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"left"}},[t("code",null,"Ellipsoid.WGS84")],-1),Y=t("td",{style:{"text-align":"left"}},"optional用作参考的椭球体。",-1),Z=i(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 两条线段相连的折线</span>
<span class="token keyword">var</span> polyline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">10.0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolylineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polyline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,4);function $(q,z){const n=c("ExternalLinkIcon");return a(),o("div",null,[p,d,u,_,h,t("table",null,[m,t("tbody",null,[t("tr",null,[y,f,k,t("td",x,[e("一个"),t("a",g,[v,s(n)]),e("数组，它将折线中的位置定义为一条线带（line strip）。")])]),b,t("tr",null,[w,C,E,t("td",D,[e("optional定义每个顶点或每个段颜色的"),t("a",G,[N,s(n)]),e("数组。")])]),V,t("tr",null,[T,t("td",A,[t("a",P,[e("ArcType"),s(n)])]),F,B]),I,t("tr",null,[S,t("td",j,[t("a",L,[e("VertexFormat"),s(n)])]),R,O]),t("tr",null,[W,t("td",M,[t("a",U,[e("Ellipsoid"),s(n)])]),X,Y])])]),Z])}const J=l(r,[["render",$],["__file","PolylineGeometry.html.vue"]]);export{J as default};