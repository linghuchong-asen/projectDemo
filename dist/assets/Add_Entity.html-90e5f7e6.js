import{_ as n,V as s,W as a,X as t}from"./framework-34e2585c.js";const p="/projectDemo/assets/rectangle-b6dcc187.png",e={},o=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">infoBox</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> entities <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">;</span>
entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rectangle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// height: 0,</span>
    <span class="token literal-property property">coordinates</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">92.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">66.0</span><span class="token punctuation">,</span> <span class="token number">57.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//  从经纬度创建矩形</span>
    <span class="token literal-property property">material</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">ANTIQUEWHITE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否有轮廓线</span>
    <span class="token literal-property property">outLineColor</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outLineWidth</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stRotation</span><span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 旋转角度</span>
    <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="矩形" tabindex="0" loading="lazy"><figcaption>矩形</figcaption></figure>',2),c=[o];function l(i,r){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","Add_Entity.html.vue"]]);export{k as default};