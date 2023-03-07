import{_ as l,V as o,W as c,Y as t,$ as e,a0 as a,Z as n,X as p,D as i}from"./framework-34e2585c.js";const r={},d=t("h1",{id:"几何实例-geometryinstance",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#几何实例-geometryinstance","aria-hidden":"true"},"#"),n(" 几何实例(GeometryInstance)")],-1),u=t("p",null,"几何图形实例，具有几何体通用的方法和属性。",-1),h=t("h2",{id:"构造器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),n(" 构造器")],-1),_=t("p",null,[t("strong",null,"GeometryInstance(options)")],-1),k=t("p",null,"options对象，具有以下属性：",-1),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Default"),t("th",{style:{"text-align":"left"}},"Description")])],-1),m=t("tr",null,[t("td",{style:{"text-align":"left"}},"geometry"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"实例化的几何体。")],-1),f=t("td",{style:{"text-align":"left"}},"translate",-1),g={style:{"text-align":"left"}},x=t("td",{style:{"text-align":"left"}},[t("code",null,"Vector3(0,0,0)")],-1),b=t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("几何体平移。")],-1),v=t("td",{style:{"text-align":"left"}},"scale",-1),V={style:{"text-align":"left"}},w=t("td",{style:{"text-align":"left"}},[t("code",null,"Vector3(1,1,1)")],-1),I=t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("几何体缩放。")],-1),G=t("td",{style:{"text-align":"left"}},"rotation",-1),N={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"left"}},[t("code",null,"Vector3(0,0,0)")],-1),P=t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("几何体旋转。")],-1),j=t("tr",null,[t("td",{style:{"text-align":"left"}},"heading"),t("td",{style:{"text-align":"left"}},"number"),t("td",{style:{"text-align":"left"}},[t("code",null,"0")]),t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("偏航角")])],-1),A=t("tr",null,[t("td",{style:{"text-align":"left"}},"pitch"),t("td",{style:{"text-align":"left"}},"number"),t("td",{style:{"text-align":"left"}},[t("code",null,"0")]),t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("俯仰角")])],-1),B=t("tr",null,[t("td",{style:{"text-align":"left"}},"roll"),t("td",{style:{"text-align":"left"}},"number"),t("td",{style:{"text-align":"left"}},[t("code",null,"0")]),t("td",{style:{"text-align":"left"}},[t("code",null,"optional"),n("翻滚角")])],-1),D=p(`<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">geometry</span><span class="token operator">:</span> polygonGeometry<span class="token punctuation">,</span>
      <span class="token literal-property property">tanslate</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,3);function C(L,R){const s=i("RouterLink");return o(),c("div",null,[d,u,h,_,k,t("table",null,[y,t("tbody",null,[m,t("tr",null,[f,t("td",g,[e(s,{to:"/APIdocs/math/Vector3.html"},{default:a(()=>[n("Vector3")]),_:1})]),x,b]),t("tr",null,[v,t("td",V,[e(s,{to:"/APIdocs/math/Vector3.html"},{default:a(()=>[n("Vector3")]),_:1})]),w,I]),t("tr",null,[G,t("td",N,[e(s,{to:"/APIdocs/math/Vector3.html"},{default:a(()=>[n("Vector3")]),_:1})]),W,P]),j,A,B])]),D])}const E=l(r,[["render",C],["__file","GeometryInstance.html.vue"]]);export{E as default};
