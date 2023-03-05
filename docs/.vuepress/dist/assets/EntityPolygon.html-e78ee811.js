import{_ as n,V as s,W as a,X as p}from"./framework-34e2585c.js";const t="/assets/polygon-317e4b5b.png",e={},o=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* 添加 entity-polygon
* 面实体, 可以在面中挖空
* **/</span>
<span class="token function">addEntityPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> entityPolygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;entityPolygon0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;entityPolygon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">hierarchy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token number">125.0</span><span class="token punctuation">,</span> <span class="token number">47.0</span><span class="token punctuation">,</span> <span class="token number">126.3</span><span class="token punctuation">,</span> <span class="token number">47.3</span><span class="token punctuation">,</span> <span class="token number">127.5</span><span class="token punctuation">,</span> <span class="token number">43.6</span><span class="token punctuation">,</span> <span class="token number">124.8</span><span class="token punctuation">,</span> <span class="token number">40.3</span><span class="token punctuation">,</span> <span class="token number">123.0</span><span class="token punctuation">,</span> <span class="token number">45.0</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">holes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                            <span class="token number">125.0</span><span class="token punctuation">,</span> <span class="token number">46.0</span><span class="token punctuation">,</span> <span class="token number">125.5</span><span class="token punctuation">,</span> <span class="token number">46.5</span><span class="token punctuation">,</span> <span class="token number">126.0</span><span class="token punctuation">,</span> <span class="token number">44.0</span><span class="token punctuation">,</span> <span class="token number">124.0</span><span class="token punctuation">,</span> <span class="token number">45.0</span>
                        <span class="token punctuation">]</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOWGREEN</span><span class="token punctuation">,</span>
            <span class="token literal-property property">extrudedHeight</span><span class="token operator">:</span> <span class="token number">100000</span>
            <span class="token comment">// closeTop: false,</span>
            <span class="token comment">// closeBottom: false,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> polygonGeom <span class="token operator">=</span> window<span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entityPolygon<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>entityPolygon<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="多边形" tabindex="0" loading="lazy"><figcaption>多边形</figcaption></figure>',2),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","EntityPolygon.html.vue"]]);export{k as default};
