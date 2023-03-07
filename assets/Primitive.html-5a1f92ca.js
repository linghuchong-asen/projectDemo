import{_ as n,V as a,W as t,X as s}from"./framework-34e2585c.js";const e={},p=s(`<h1 id="图元" tabindex="-1"><a class="header-anchor" href="#图元" aria-hidden="true">#</a> 图元()</h1><p>图元（Primitive）表示场景中的几何图形。这个几何图形可以来自单个的<code>GeometryInstance</code>。</p><p>图元将几何图形实例和外观（<code>Appearance</code>）结合在一起。 大致上几何图形实例定义了结构和位置， 外观定义了视觉效果。解耦几何和外观允许我们混合和匹配它们中的大多数，并彼此独立地添加一个新的几何或外观。</p><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2><p><strong>Primitive()</strong></p><p>optional具有以下属性的对象：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>geometryInstances</code></td><td style="text-align:left;">GeometryInstance|<br>GeometryInstance[]</td><td style="text-align:left;"><a href="">GeometryInstance</a></td><td style="text-align:left;">optional要渲染的几何实例数组或者单个的几何实例。</td></tr><tr><td style="text-align:left;"><code>appearance</code></td><td style="text-align:left;"><a href="">Appearance</a></td><td style="text-align:left;"></td><td style="text-align:left;">optional用于渲染图元的外观。</td></tr><tr><td style="text-align:left;"><code>show</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">optional图元是否被显示。</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;">string</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"><code>optional</code>图元id。</td></tr><tr><td style="text-align:left;">select</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;"><code>optional</code>图元是否可以被选中。</td></tr></tbody></table><p>示例代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">geometry</span><span class="token operator">:</span> labelGeometry<span class="token punctuation">,</span>
      <span class="token literal-property property">translate</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>MaterialAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">material</span><span class="token operator">:</span> labelMaterial<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;labelId&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,11),l=[p];function o(c,i){return a(),t("div",null,l)}const d=n(e,[["render",o],["__file","Primitive.html.vue"]]);export{d as default};