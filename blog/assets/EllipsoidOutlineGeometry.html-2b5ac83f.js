import{_ as t,V as e,W as n,X as a}from"./framework-34e2585c.js";const s={},l=a(`<h1 id="仅有轮廓椭球-ellipsoidoutlinegeometry" tabindex="-1"><a class="header-anchor" href="#仅有轮廓椭球-ellipsoidoutlinegeometry" aria-hidden="true">#</a> 仅有轮廓椭球(EllipsoidOutlineGeometry)</h1><p>以原点为中心的仅有轮廓线的椭球几何体。</p><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2><p><strong>EllipsoidOutlineGeometry(options)</strong></p><p>options对象，具有以下属性：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>radii</code></td><td style="text-align:left;">Vector3</td><td style="text-align:left;"><code>Cartesian3(1.0, 1.0, 1.0)</code></td><td style="text-align:left;"><code>optional</code>椭球体在x、y和z方向上的半径。</td></tr><tr><td style="text-align:left;"><code>innerRadii</code></td><td style="text-align:left;">Vector3</td><td style="text-align:left;"><code>options.radii</code></td><td style="text-align:left;"><code>optional</code>椭球体在x、y和z方向上的内半径。</td></tr><tr><td style="text-align:left;"><code>minimumClock</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0.0</code></td><td style="text-align:left;"><code>optional</code>从正x轴向正y轴测得的在xy平面上的最小角度。</td></tr><tr><td style="text-align:left;"><code>maximumClock</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>2*PI</code></td><td style="text-align:left;"><code>optional</code>从正x轴到正y轴所测得的在xy平面上的最大角度。</td></tr><tr><td style="text-align:left;"><code>minimumCone</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0.0</code></td><td style="text-align:left;"><code>optional</code>从正z轴到负z轴的测得的最小角度。</td></tr><tr><td style="text-align:left;"><code>maximumCone</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>PI</code></td><td style="text-align:left;"><code>optional</code>从正z轴到负z轴的测得的最大角度。</td></tr><tr><td style="text-align:left;"><code>stackPartitions</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>10</code></td><td style="text-align:left;"><code>optional</code>椭球面的堆栈（stacks）数（比平行线的数目大1）。</td></tr><tr><td style="text-align:left;"><code>slicePartitions</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>8</code></td><td style="text-align:left;"><code>optional</code>椭球面的切片数（等于径向线的数目）。</td></tr><tr><td style="text-align:left;"><code>subdivisions</code></td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>128</code></td><td style="text-align:left;"><code>optional</code>每条线的点数，决定了曲率的粒度（granularity）。</td></tr></tbody></table><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ellipsoid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>EllipsoidOutlineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">radii</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">1000000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stackPartitions</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">slicePartitions</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> Webgis<span class="token punctuation">.</span>EllipsoidOutlineGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>ellipsoid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>`,10),o=[l];function d(i,c){return e(),n("div",null,o)}const r=t(s,[["render",d],["__file","EllipsoidOutlineGeometry.html.vue"]]);export{r as default};