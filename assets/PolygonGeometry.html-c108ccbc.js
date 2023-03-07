import{_ as l,V as p,W as r,Y as t,$ as a,a0 as e,Z as n,X as o,D as c}from"./framework-34e2585c.js";const i={},d=t("h1",{id:"多边形-polygongeometry",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#多边形-polygongeometry","aria-hidden":"true"},"#"),n(" 多边形(PolygonGeometry)")],-1),h=t("p",null,"多边形几何体，可以拉伸、挖洞。",-1),u=t("h2",{id:"构造器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),n(" 构造器")],-1),k=t("p",null,[t("strong",null,"PolygonGeometry(positionArr)")],-1),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),_=t("td",{style:{"text-align":"left"}},"positionArr",-1),m={style:{"text-align":"left"}},g=t("td",{style:{"text-align":"left"}},"多边形的路径点",-1),b=o(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> positionArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> polygonGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolygonGeometry</span><span class="token punctuation">(</span>positionArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="height-number" tabindex="-1"><a class="header-anchor" href="#height-number" aria-hidden="true">#</a> height: number</h3><p>获取拉伸多边形的高度。</p>`,5),f={id:"positionarr-array-vector2",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#positionarr-array-vector2","aria-hidden":"true"},"#",-1),v=o('<p>获取多边形使用的路径点。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="stretch-height" tabindex="-1"><a class="header-anchor" href="#stretch-height" aria-hidden="true">#</a> stretch(height)</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">height</td><td style="text-align:left;">number</td><td style="text-align:left;">拉伸高度。</td></tr></tbody></table><p>拉伸多边形。</p><h3 id="sethole-positionarr" tabindex="-1"><a class="header-anchor" href="#sethole-positionarr" aria-hidden="true">#</a> setHole(positionArr)</h3>',6),V=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),w=t("td",{style:{"text-align":"left"}},"positionArr",-1),A={style:{"text-align":"left"}},P=t("td",{style:{"text-align":"left"}},"多边形的路径点。",-1),N=t("p",null,"在多边形内挖洞。",-1);function G(W,D){const s=c("RouterLink");return p(),r("div",null,[d,h,u,k,t("table",null,[y,t("tbody",null,[t("tr",null,[_,t("td",m,[a(s,{to:"/APIdocs/math/Vector2.html"},{default:e(()=>[n("<Array>Vector2")]),_:1})]),g])])]),b,t("h3",f,[x,n(" positionArr: "),a(s,{to:"/APIdocs/math/Vector2.html"},{default:e(()=>[n("<Array>Vector2")]),_:1})]),v,t("table",null,[V,t("tbody",null,[t("tr",null,[w,t("td",A,[a(s,{to:"/APIdocs/math/Vector2.html"},{default:e(()=>[n("<Array>Vector2")]),_:1})]),P])])]),N])}const j=l(i,[["render",G],["__file","PolygonGeometry.html.vue"]]);export{j as default};
