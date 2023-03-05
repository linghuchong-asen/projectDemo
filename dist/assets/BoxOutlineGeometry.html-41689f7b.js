import{_ as o,V as p,W as l,Y as n,Z as s,$ as t,X as e,D as i}from"./framework-34e2585c.js";const c={},r=n("h1",{id:"仅有轮廓立方体-boxoutlinegeometry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#仅有轮廓立方体-boxoutlinegeometry","aria-hidden":"true"},"#"),s(" 仅有轮廓立方体(BoxOutlineGeometry)")],-1),u=n("p",null,"以原点为中心的立方体轮廓的描述。",-1),d=n("h2",{id:"构造器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),s(" 构造器")],-1),k=n("p",null,[n("strong",null,"BoxOutlineGeometry(options)")],-1),m=n("p",null,"options对象，具有以下属性：",-1),h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Description")])],-1),x=n("td",{style:{"text-align":"left"}},[n("code",null,"minimum")],-1),_={style:{"text-align":"left"}},b={href:"https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html",target:"_blank",rel:"noopener noreferrer"},g=n("td",{style:{"text-align":"left"}},"盒子的最小x, y, z坐标。",-1),v=n("td",{style:{"text-align":"left"}},[n("code",null,"maximum")],-1),y={style:{"text-align":"left"}},f={href:"https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"left"}},"盒子的最大x, y, z坐标。",-1),w=e(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>BoxOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">maximum</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token number">250000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimum</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">250000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>BoxOutlineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p><strong><a href="">fromAxisAlignedBoundingBox(boundingBox): BoxGeometry</a></strong></p><p>从AxisAlignedBoundingBox的尺寸创建一个立方体。</p>`,6),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Description")])],-1),A=n("td",{style:{"text-align":"left"}},[n("code",null,"boundingBox")],-1),D={style:{"text-align":"left"}},G={href:"https://www.vvpstk.com/public/Cesium/Documentation/AxisAlignedBoundingBox.html",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"left"}},"AxisAlignedBoundingBox的描述。",-1),N=e(`<p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> aabb <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>AxisAlignedBoundingBox<span class="token punctuation">.</span><span class="token function">fromPoints</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
     <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> box <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">fromAxisAlignedBoundingBox</span><span class="token punctuation">(</span>aabb<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="">fromDimensions(options) → BoxGeometry</a></strong></p><p>创建一个以给定尺寸的原点为中心的立方体。</p><p>options对象，具有以下属性：</p>`,5),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),V=n("td",{style:{"text-align":"left"}},[n("code",null,"dimensions")],-1),F={style:{"text-align":"left"}},W={href:"https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html",target:"_blank",rel:"noopener noreferrer"},E=n("td",{style:{"text-align":"left"}},null,-1),T=n("td",{style:{"text-align":"left"}},[s("分别存储在"),n("code",null,"Cartesian3"),s("的x、y和z坐标中的盒子的宽度、深度和高度。")],-1),I=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),L={style:{"text-align":"left"}},z={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),S=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),s("要计算的顶点属性。")],-1),Y=e(`<p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">fromDimensions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dimensions</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoxGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function U(X,Z){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,u,d,k,m,n("table",null,[h,n("tbody",null,[n("tr",null,[x,n("td",_,[n("a",b,[s("Cartesian3"),t(a)])]),g]),n("tr",null,[v,n("td",y,[n("a",f,[s("Cartesian3"),t(a)])]),B])])]),w,n("table",null,[C,n("tbody",null,[n("tr",null,[A,n("td",D,[n("a",G,[s("AxisAlignedBoundingBox"),t(a)])]),j])])]),N,n("table",null,[O,n("tbody",null,[n("tr",null,[V,n("td",F,[n("a",W,[s("Cartesian3"),t(a)])]),E,T]),n("tr",null,[I,n("td",L,[n("a",z,[s("VertexFormat"),t(a)])]),P,S])])]),Y])}const q=o(c,[["render",U],["__file","BoxOutlineGeometry.html.vue"]]);export{q as default};