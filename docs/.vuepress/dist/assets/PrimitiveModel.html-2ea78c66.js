import{_ as n,V as s,W as a,X as e}from"./framework-34e2585c.js";const t="/assets/primitiveModel-1a944d59.png",i={},o=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 加载模型 */</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Model</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/housePlayground.glb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="primitive方式加载模型" tabindex="0" loading="lazy"><figcaption>primitive方式加载模型</figcaption></figure>',2),p=[o];function c(l,r){return s(),a("div",null,p)}const d=n(i,[["render",c],["__file","PrimitiveModel.html.vue"]]);export{d as default};
