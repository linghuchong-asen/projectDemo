import{_ as n,V as s,W as a,Z as p}from"./framework-13182686.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">infoBox</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// GeometryInstance是geometry的一个容器</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>RectangleGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rectangle</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vertexFormat</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>EllipsoidSurfaceAppearance<span class="token punctuation">.</span><span class="token constant">VERTEX_FORMAT</span><span class="token punctuation">,</span> <span class="token comment">// 所有EllipsoidSurfaceAppearance都兼容的顶点格式，只需要position和st属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用抽象的Primitive而不是RectanglePrimitive</span>
<span class="token keyword">const</span> rectangle <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> instance<span class="token punctuation">,</span>
    <span class="token comment">// 使用该外观，可以使矩形覆盖在地球表面，或者悬浮一定的高度</span>
    <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>MaterialAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">material</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Material<span class="token punctuation">.</span><span class="token function">fromType</span><span class="token punctuation">(</span><span class="token string">&quot;Dot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Add_Primitive.html.vue"]]);export{r as default};
