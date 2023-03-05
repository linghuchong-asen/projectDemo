import{_ as s,V as a,W as l,X as e,Y as t,$ as o,Z as r,D as i}from"./framework-13182686.js";const c={},p=e("h1",{id:"球体-spheregeometry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#球体-spheregeometry","aria-hidden":"true"},"#"),t(" 球体(SphereGeometry)")],-1),d=e("p",null,"以原点为中心的球体的描述。",-1),u=e("h2",{id:"构造器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构造器","aria-hidden":"true"},"#"),t(" 构造器")],-1),h=e("p",null,[e("strong",null,"SphereGeometry(options)")],-1),_=e("p",null,"options对象，具有以下属性：",-1),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default"),e("th",{style:{"text-align":"left"}},"Description")])],-1),y=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"radius")]),e("td",{style:{"text-align":"left"}},"Number"),e("td",{style:{"text-align":"left"}},[e("code",null,"1.0")]),e("td",{style:{"text-align":"left"}},"optional球体的半径。")],-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"stackPartitions")]),e("td",{style:{"text-align":"left"}},"Number"),e("td",{style:{"text-align":"left"}},[e("code",null,"64")]),e("td",{style:{"text-align":"left"}},"optional将球体分割成堆栈（stacks）的次数。")],-1),x=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"slicePartitions")]),e("td",{style:{"text-align":"left"}},"Number"),e("td",{style:{"text-align":"left"}},[e("code",null,"64")]),e("td",{style:{"text-align":"left"}},"optional将球体分割成径向切片的次数。")],-1),f=e("td",{style:{"text-align":"left"}},[e("code",null,"vertexFormat")],-1),g={style:{"text-align":"left"}},b={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},v=e("td",{style:{"text-align":"left"}},[e("code",null,"VertexFormat.DEFAULT")],-1),N=e("td",{style:{"text-align":"left"}},"optional要计算的顶点属性。",-1),V=r(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> sphere <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>SphereGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vertexFormat</span> <span class="token operator">:</span> WebgisWebgis<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>SphereGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,4);function S(w,F){const n=i("ExternalLinkIcon");return a(),l("div",null,[p,d,u,h,_,e("table",null,[m,e("tbody",null,[y,k,x,e("tr",null,[f,e("td",g,[e("a",b,[t("VertexFormat"),o(n)])]),v,N])])]),V])}const D=s(c,[["render",S],["__file","SphereGeometry.html.vue"]]);export{D as default};
