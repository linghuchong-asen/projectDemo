import{_ as l,V as o,W as p,Y as n,Z as t,$ as e,X as a,D as i}from"./framework-34e2585c.js";const c={},u=n("h1",{id:"墙-wallgeometry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#墙-wallgeometry","aria-hidden":"true"},"#"),t(" 墙(WallGeometry)")],-1),r=n("p",null,"一种对墙的描述，类似于KML行字符串。墙是由一系列的点构成的，这些点向下延伸到地面。可选地，它们可以向下挤压到指定的高度。",-1),d=n("h2",{id:"构造器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),t(" 构造器")],-1),m=n("p",null,[n("strong",null,"WallGeometry(options)")],-1),k=n("p",null,"options对象，具有以下属性：",-1),h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),_=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"positions")]),n("td",{style:{"text-align":"left"}},"Vector3[ ]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"笛卡尔对象数组，它们是墙的点。")],-1),g=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"granularity")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},[n("code",null,"CesiumMath.RADIANS_PER_DEGREE")]),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。")])],-1),y=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"maximumHeights")]),n("td",{style:{"text-align":"left"}},"number[ ]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("与"),n("code",null,"positions"),t("并行的数组，给出了在"),n("code",null,"positions"),t("处墙的最大高度。如果未定义，则使用每个位置的高度。")])],-1),f=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"minimumHeights")]),n("td",{style:{"text-align":"left"}},"number[ ]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("与"),n("code",null,"positions"),t("并行的数组，给出了在"),n("code",null,"positions"),t("处墙的最小高度。如果未定义，则每个位置的高度为0.0。")])],-1),b=n("td",{style:{"text-align":"left"}},[n("code",null,"ellipsoid")],-1),v={style:{"text-align":"left"}},x={href:"https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},w=n("td",{style:{"text-align":"left"}},[n("code",null,"Ellipsoid.WGS84")],-1),W=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("用于坐标操作的椭球体")],-1),E=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),D={style:{"text-align":"left"}},G={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),C=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("要计算的顶点属性。")],-1),F=a(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建一堵从地面到10000米的墙</span>
<span class="token keyword">var</span> wall <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>WallGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">10000.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>wall<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p><code>static</code> <strong><a href="">fromConstantHeights(options): WallGeometry</a></strong></p><p>一种对墙的描述，类似于KML行字符串。墙是由一系列的点构成的，这些点向下延伸到地面。可选地，它们可以向下挤压到指定的高度。</p><p>options对象，具有以下属性：</p>`,7),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),H=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"positions")]),n("td",{style:{"text-align":"left"}},"Vector3[ ]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"笛卡尔对象数组，它们是墙的点。")],-1),j=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"maximumHeight")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[t("optional定义在"),n("code",null,"positions"),t("处的墙的最大高度的常量。如果未定义，则使用每个位置的高度。")])],-1),A=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"minimumHeight")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[t("optional定义在"),n("code",null,"positions"),t("处的墙的最小高度的常量。如果未定义，则每个位置的高度为0.0。")])],-1),L=n("td",{style:{"text-align":"left"}},[n("code",null,"ellipsoid")],-1),T={style:{"text-align":"left"}},S={href:"https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"left"}},[n("code",null,"Ellipsoid.WGS84")],-1),I=n("td",{style:{"text-align":"left"}},"optional用于坐标操作的椭球体",-1),M=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),R={style:{"text-align":"left"}},K={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),P=n("td",{style:{"text-align":"left"}},"optional要计算的顶点属性。",-1),X=a(`<p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建造一堵从10000米到20000米的墙</span>
<span class="token keyword">var</span> wall <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">fromConstantHeights</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">48.0</span><span class="token punctuation">,</span>
    <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
    <span class="token number">19.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimumHeight</span> <span class="token operator">:</span> <span class="token number">20000.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumHeight</span> <span class="token operator">:</span> <span class="token number">10000.0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>WallGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>wall<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Y(Z,$){const s=i("ExternalLinkIcon");return o(),p("div",null,[u,r,d,m,k,n("table",null,[h,n("tbody",null,[_,g,y,f,n("tr",null,[b,n("td",v,[n("a",x,[t("Ellipsoid"),e(s)])]),w,W]),n("tr",null,[E,n("td",D,[n("a",G,[t("VertexFormat"),e(s)])]),V,C])])]),F,n("table",null,[N,n("tbody",null,[H,j,A,n("tr",null,[L,n("td",T,[n("a",S,[t("Ellipsoid"),e(s)])]),B,I]),n("tr",null,[M,n("td",R,[n("a",K,[t("VertexFormat"),e(s)])]),U,P])])]),X])}const z=l(c,[["render",Y],["__file","WallGeometry.html.vue"]]);export{z as default};
