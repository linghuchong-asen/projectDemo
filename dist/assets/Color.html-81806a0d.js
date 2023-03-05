import{_ as c,V as l,W as i,X as e,Y as n,$ as a,a0 as r,Z as d,D as t}from"./framework-13182686.js";const h={},p=d(`<h1 id="颜色-color" tabindex="-1"><a class="header-anchor" href="#颜色-color" aria-hidden="true">#</a> 颜色（Color）</h1><p>表示一个颜色。</p><p>对 Color 实例进行遍历将按相应的顺序生成它的分量 (r, g, b)。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>颜色可以用以下任意一种方式初始化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//empty constructor - will default white</span>
<span class="token keyword">const</span> color1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//RGB string</span>
<span class="token keyword">const</span> color3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造器-constructor" tabindex="-1"><a class="header-anchor" href="#构造器-constructor" aria-hidden="true">#</a> 构造器（Constructor）</h2><h3 id="color-r-number-g-number-b-number" tabindex="-1"><a class="header-anchor" href="#color-r-number-g-number-b-number" aria-hidden="true">#</a> Color( r : number, g : number, b : number)</h3><p>r - (可选参数) 如果被定义，表示颜色中的红色分量。 g - (可选参数) 如果被定义，表示颜色中的绿色分量。 b - (可选参数) 如果被定义，表示颜色中的蓝色分量。</p><h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性（Properties）</h2>`,10),u={id:"iscolor-boolean",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#iscolor-boolean","aria-hidden":"true"},"#",-1),m={href:"https://threejs.org/docs/index.html#api/zh/math/Color.isColor",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"🚩",-1),k=e("p",null,[e("code",null,"readonly ")],-1),f=e("p",null,"判断一个对象是否是Color实例的标志。",-1),g={id:"r-number",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#r-number","aria-hidden":"true"},"#",-1),v={href:"https://threejs.org/docs/index.html#api/zh/math/Color.r",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"🚩",-1),y=e("p",null,"红色通道的值在0到255之间。默认值为255。",-1),w={id:"g-number",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#g-number","aria-hidden":"true"},"#",-1),E={href:"https://threejs.org/docs/index.html#api/zh/math/Color.g",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"🚩",-1),z=e("p",null,"绿色通道的值在0到255之间。默认值为255。",-1),B={id:"b-number",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#b-number","aria-hidden":"true"},"#",-1),R={href:"https://threejs.org/docs/index.html#api/zh/math/Color.b",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"🚩",-1),H=e("p",null,"蓝色通道的值在0到255之间。默认值为255。",-1),I=e("h2",{id:"方法-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方法-methods","aria-hidden":"true"},"#"),n(" 方法（Methods）")],-1);function L(D,G){const s=t("ExternalLinkIcon"),o=t("font");return l(),i("div",null,[p,e("h3",u,[_,n(" ."),e("a",m,[n("isColor"),a(s)]),n(" : "),a(o,{color:"gray"},{default:r(()=>[n("boolean")]),_:1})]),b,k,f,e("h3",g,[x,n(" ."),e("a",v,[n("r"),a(s)]),n(" : "),a(o,{color:"gray"},{default:r(()=>[n("number")]),_:1})]),C,y,e("h3",w,[j,n(" ."),e("a",E,[n("g"),a(s)]),n(" : "),a(o,{color:"gray"},{default:r(()=>[n("number")]),_:1})]),V,z,e("h3",B,[N,n(" ."),e("a",R,[n("b"),a(s)]),n(" : "),a(o,{color:"gray"},{default:r(()=>[n("number")]),_:1})]),T,H,I])}const P=c(h,[["render",L],["__file","Color.html.vue"]]);export{P as default};
