import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as p,a as n,b as t,e,d as a,r as c}from"./app.5c5af4fe.js";const i={},r=n("h1",{id:"\u5171\u9762\u591A\u8FB9\u5F62-coplanarpolygongeometry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5171\u9762\u591A\u8FB9\u5F62-coplanarpolygongeometry","aria-hidden":"true"},"#"),t(" \u5171\u9762\u591A\u8FB9\u5F62(CoplanarPolygonGeometry)")],-1),u=n("p",null,"\u7531\u4EFB\u610F\u5171\u9762\u4F4D\u7F6E\u7EC4\u6210\u7684\u591A\u8FB9\u5F62",-1),d=n("h2",{id:"\u6784\u9020\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6784\u9020\u5668","aria-hidden":"true"},"#"),t(" \u6784\u9020\u5668")],-1),k=n("p",null,[n("strong",null,"CoplanarPolygonGeometry(options)")],-1),m=n("p",null,"options\u5177\u6709\u4EE5\u4E0B\u5C5E\u6027",-1),h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),_=n("td",{style:{"text-align":"left"}},[n("code",null,"polygonHierarchy")],-1),y={style:{"text-align":"left"}},g={href:"https://cesium.com/learn/cesiumjs/ref-doc/PolygonHierarchy.html",target:"_blank",rel:"noopener noreferrer"},f=n("td",{style:{"text-align":"left"}},null,-1),b=n("td",{style:{"text-align":"left"}},"\u5305\u542B\u5B54\u7684\u591A\u8FB9\u5F62\u5C42\u6B21\u3002",-1),x=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"stRotation")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},[n("code",null,"0.0")]),n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("\u7EB9\u7406\u5750\u6807\u7684\u65CB\u8F6C\uFF0C\u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\u3002\u6B63\u7684\u65CB\u8F6C\u662F\u9006\u65F6\u9488\u7684\u3002")])],-1),v=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),P={style:{"text-align":"left"}},w={href:"https://cesium.com/learn/cesiumjs/ref-doc/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),E=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("\u7EB9\u7406\u5750\u6807\u7684\u65CB\u8F6C\uFF0C\u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\u3002\u6B63\u7684\u65CB\u8F6C\u662F\u9006\u65F6\u9488\u7684\u3002")],-1),G=n("td",{style:{"text-align":"left"}},[n("code",null,"ellipsoid")],-1),C={style:{"text-align":"left"}},j={href:"https://cesium.com/learn/cesiumjs/ref-doc/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"left"}},[n("code",null,"Ellipsoid.WGS84")],-1),F=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("\u8981\u8BA1\u7B97\u7684\u9876\u70B9\u5C5E\u6027\u3002")],-1),H=n("td",{style:{"text-align":"left"}},[n("code",null,"textureCoordinates")],-1),N={style:{"text-align":"left"}},W={href:"https://cesium.com/learn/cesiumjs/ref-doc/PolygonHierarchy.html",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"left"}},null,-1),A=n("td",{style:{"text-align":"left"}},[n("code",null,"optional"),t("\u7528\u4F5C\u53C2\u8003\u7684\u692D\u7403\u4F53\u3002")],-1),L=a(`<h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> polygonGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>CoplanarPolygonGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">polygonHierarchy</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
    Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
     <span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">80.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">,</span>
     <span class="token operator">-</span><span class="token number">80.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><p><strong><a href="">fromPositions(options) \u2192 CoplanarPolygonGeometry</a></strong></p><p>\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u6570\u7EC4\u63CF\u8FF0\u4E00\u4E2A\u5171\u9762\u591A\u8FB9\u5F62\u3002</p><p>options\u5BF9\u8C61\uFF0C\u5177\u6709\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p>`,7),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Default"),n("th",{style:{"text-align":"left"}},"Description")])],-1),S=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"positions")]),n("td",{style:{"text-align":"left"}},"Vector3[]"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"\u5B9A\u4E49\u591A\u8FB9\u5F62\u7684\u89D2\u70B9\u7684\u4F4D\u7F6E\u6570\u7EC4\u3002")],-1),I=n("td",{style:{"text-align":"left"}},[n("code",null,"vertexFormat")],-1),R={style:{"text-align":"left"}},U={href:"https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"left"}},[n("code",null,"VertexFormat.DEFAULT")],-1),z=n("td",{style:{"text-align":"left"}},"optional\u8981\u8BA1\u7B97\u7684\u9876\u70B9\u5C5E\u6027\u3002",-1),J=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"stRotation")]),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},[n("code",null,"0.0")]),n("td",{style:{"text-align":"left"}},"optional\u7EB9\u7406\u5750\u6807\u7684\u65CB\u8F6C\uFF0C\u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\u3002\u6B63\u7684\u65CB\u8F6C\u662F\u9006\u65F6\u9488\u7684\u3002")],-1),K=n("td",{style:{"text-align":"left"}},[n("code",null,"ellipsoid")],-1),M={style:{"text-align":"left"}},O={href:"https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"left"}},[n("code",null,"Ellipsoid.WGS84")],-1),X=n("td",{style:{"text-align":"left"}},"optional\u7528\u4F5C\u53C2\u8003\u7684\u692D\u7403\u4F53\u3002",-1),Y=a(`<p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// create a polygon from points</span>
<span class="token keyword">var</span> polygon <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>CoplanarPolygonGeometry<span class="token punctuation">.</span><span class="token function">fromPositions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">positions</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token operator">-</span><span class="token number">72.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">35.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">70.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token number">68.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Z($,nn){const s=c("ExternalLinkIcon");return l(),p("div",null,[r,u,d,k,m,n("table",null,[h,n("tbody",null,[n("tr",null,[_,n("td",y,[n("a",g,[t("PolygonHierarchy"),e(s)])]),f,b]),x,n("tr",null,[v,n("td",P,[n("a",w,[t("VertexFormat"),e(s)])]),V,E]),n("tr",null,[G,n("td",C,[n("a",j,[t("Ellipsoid"),e(s)])]),D,F]),n("tr",null,[H,n("td",N,[n("a",W,[t("PolygonHierarchy"),e(s)])]),T,A])])]),L,n("table",null,[B,n("tbody",null,[S,n("tr",null,[I,n("td",R,[n("a",U,[t("VertexFormat"),e(s)])]),q,z]),J,n("tr",null,[K,n("td",M,[n("a",O,[t("Ellipsoid"),e(s)])]),Q,X])])]),Y])}var en=o(i,[["render",Z],["__file","CoplanarPolygonGeometry.html.vue"]]);export{en as default};