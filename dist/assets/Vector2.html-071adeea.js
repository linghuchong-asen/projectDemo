import{_ as a,V as n,W as h,X as t,Y as e,$ as o,Z as s,D as i}from"./framework-13182686.js";const d={},c=t("h1",{id:"二维向量-vector2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#二维向量-vector2","aria-hidden":"true"},"#"),e(" 二维向量（Vector2）")],-1),l={href:"https://en.wikipedia.org/wiki/Vector_space",target:"_blank",rel:"noopener noreferrer"},_=t("li",null,"一个位于二维空间中的点（例如一个在平面上的点）。",-1),p={href:"https://en.wikipedia.org/wiki/Euclidean_distance",target:"_blank",rel:"noopener noreferrer"},f=t("li",null,"任意的、有顺序的一对数字。",-1),m=s(`<p>其他的一些事物也可以使用二维向量进行表示，比如说动量矢量、复数等等；但以上这些是它在three.js中的常用用途。</p><p>对 Vector2 实例进行遍历将按相应的顺序生成它的分量 (x, y)。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//no arguments; will be initialised to (0, 0) </span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> d <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">distanceTo</span><span class="token punctuation">(</span> b <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2><h3 id="vector2-x-number-y-number" tabindex="-1"><a class="header-anchor" href="#vector2-x-number-y-number" aria-hidden="true">#</a> Vector2( x : number, y : number)</h3><p>x - 向量的x值，默认为<strong>0</strong>。 y - 向量的y值，默认为<strong>0</strong>。</p><p>创建一个新的Vector2。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,9),g={id:"height-float",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#height-float","aria-hidden":"true"},"#",-1),b={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.height",target:"_blank",rel:"noopener noreferrer"},u={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},k={id:"isvector2-boolean",tabindex:"-1"},V=t("a",{class:"header-anchor",href:"#isvector2-boolean","aria-hidden":"true"},"#",-1),v={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.isVector2",target:"_blank",rel:"noopener noreferrer"},j=t("p",null,"Read-only flag to check if a given object is of type Vector2.",-1),z={id:"width-float",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#width-float","aria-hidden":"true"},"#",-1),F={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.width",target:"_blank",rel:"noopener noreferrer"},w={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},S={id:"x-float",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#x-float","aria-hidden":"true"},"#",-1),T={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},E={id:"y-float",tabindex:"-1"},q=t("a",{class:"header-anchor",href:"#y-float","aria-hidden":"true"},"#",-1),B={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},L=t("h2",{id:"方法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),e(" 方法")],-1),D={id:"addscalar-s-float-this",tabindex:"-1"},I=t("a",{class:"header-anchor",href:"#addscalar-s-float-this","aria-hidden":"true"},"#",-1),C={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.addScalar",target:"_blank",rel:"noopener noreferrer"},M={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},N={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},R={id:"addscaledvector-v-vector2-s-float-this",tabindex:"-1"},X=t("a",{class:"header-anchor",href:"#addscaledvector-v-vector2-s-float-this","aria-hidden":"true"},"#",-1),Y={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.addScaledVector",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},H={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},U={id:"addvectors-a-vector2-b-vector2-this",tabindex:"-1"},W=t("a",{class:"header-anchor",href:"#addvectors-a-vector2-b-vector2-this","aria-hidden":"true"},"#",-1),$={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.addVectors",target:"_blank",rel:"noopener noreferrer"},G={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},J={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},K={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},O={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},P={id:"angle-float",tabindex:"-1"},Q=t("a",{class:"header-anchor",href:"#angle-float","aria-hidden":"true"},"#",-1),ee={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.angle",target:"_blank",rel:"noopener noreferrer"},te=t("p",null,"计算该向量相对于x轴正方向的弧度角度。",-1),re={id:"applymatrix3-m-matrix3-this",tabindex:"-1"},oe=t("a",{class:"header-anchor",href:"#applymatrix3-m-matrix3-this","aria-hidden":"true"},"#",-1),ae={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.applyMatrix3",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://threejs.org/docs/index.html#api/zh/math/Matrix3",target:"_blank",rel:"noopener noreferrer"},he=t("p",null,"将该向量乘以三阶矩阵m（第三个值隐式地为1）。",-1),se={id:"ceil-this",tabindex:"-1"},ie=t("a",{class:"header-anchor",href:"#ceil-this","aria-hidden":"true"},"#",-1),de={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.ceil",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},le={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},_e={id:"clamp-min-vector2-max-vector2-this",tabindex:"-1"},pe=t("a",{class:"header-anchor",href:"#clamp-min-vector2-max-vector2-this","aria-hidden":"true"},"#",-1),fe={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.clamp",target:"_blank",rel:"noopener noreferrer"},me={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},be={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ue=t("p",null,"如果该向量的x值或y值大于限制范围内最大x值或y值，则该值将会被所对应的值取代。",-1),ke=t("p",null,"如果该向量的x值或y值小于限制范围内最小x值或y值，则该值将会被所对应的值取代。",-1),Ve={id:"clamplength-min-float-max-float-this",tabindex:"-1"},ve=t("a",{class:"header-anchor",href:"#clamplength-min-float-max-float-this","aria-hidden":"true"},"#",-1),je={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.clampLength",target:"_blank",rel:"noopener noreferrer"},ze=t("p",null,"min - 长度将被限制为的最小值 max - 长度将被限制为的最大值",-1),ye=t("p",null,"如果向量长度大于最大值，则它将会被最大值所取代。",-1),Fe=t("p",null,"如果向量长度小于最小值，则它将会被最小值所取代。",-1),we={id:"clampscalar-min-float-max-float-this",tabindex:"-1"},Se=t("a",{class:"header-anchor",href:"#clampscalar-min-float-max-float-this","aria-hidden":"true"},"#",-1),Ae={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.clampScalar",target:"_blank",rel:"noopener noreferrer"},Te=t("p",null,"min - 分量将被限制为的最小值 max - 分量将被限制为的最大值",-1),Ee=t("p",null,"如果该向量的x值或y值大于最大值，则它们将被最大值所取代。",-1),qe=t("p",null,"如果该向量的x值或y值小于最小值，则它们将被最小值所取代。",-1),Be={id:"clone-vector2",tabindex:"-1"},Le=t("a",{class:"header-anchor",href:"#clone-vector2","aria-hidden":"true"},"#",-1),De={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.clone",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Ne={id:"copy-v-vector2-this",tabindex:"-1"},Re=t("a",{class:"header-anchor",href:"#copy-v-vector2-this","aria-hidden":"true"},"#",-1),Xe={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.copy",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},He={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Ue={id:"distanceto-v-vector2-float",tabindex:"-1"},We=t("a",{class:"header-anchor",href:"#distanceto-v-vector2-float","aria-hidden":"true"},"#",-1),$e={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.distanceTo",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ke={id:"manhattandistanceto-v-vector2-float",tabindex:"-1"},Oe=t("a",{class:"header-anchor",href:"#manhattandistanceto-v-vector2-float","aria-hidden":"true"},"#",-1),Pe={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.manhattanDistanceTo",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},et={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://en.wikipedia.org/wiki/Taxicab_geometry",target:"_blank",rel:"noopener noreferrer"},rt={id:"distancetosquared-v-vector2-float",tabindex:"-1"},ot=t("a",{class:"header-anchor",href:"#distancetosquared-v-vector2-float","aria-hidden":"true"},"#",-1),at={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.distanceToSquared",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},st={id:"divide-v-vector2-this",tabindex:"-1"},it=t("a",{class:"header-anchor",href:"#divide-v-vector2-this","aria-hidden":"true"},"#",-1),dt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.divide",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},_t={id:"dividescalar-s-float-this",tabindex:"-1"},pt=t("a",{class:"header-anchor",href:"#dividescalar-s-float-this","aria-hidden":"true"},"#",-1),ft={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.divideScalar",target:"_blank",rel:"noopener noreferrer"},mt=t("p",null,"将该向量除以标量s。",-1),gt={id:"dot-v-vector2-float",tabindex:"-1"},xt=t("a",{class:"header-anchor",href:"#dot-v-vector2-float","aria-hidden":"true"},"#",-1),bt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.dot",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Vt={href:"https://en.wikipedia.org/wiki/Dot_product",target:"_blank",rel:"noopener noreferrer"},vt={id:"cross-v-vector2-float",tabindex:"-1"},jt=t("a",{class:"header-anchor",href:"#cross-v-vector2-float","aria-hidden":"true"},"#",-1),zt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.cross",target:"_blank",rel:"noopener noreferrer"},yt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://en.wikipedia.org/wiki/Cross_product",target:"_blank",rel:"noopener noreferrer"},St={id:"equals-v-vector2-boolean",tabindex:"-1"},At=t("a",{class:"header-anchor",href:"#equals-v-vector2-boolean","aria-hidden":"true"},"#",-1),Tt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.equals",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Bt={id:"floor-this",tabindex:"-1"},Lt=t("a",{class:"header-anchor",href:"#floor-this","aria-hidden":"true"},"#",-1),Dt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.floor",target:"_blank",rel:"noopener noreferrer"},It={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Ct={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Mt={id:"fromarray-array-array-offset-integer-this",tabindex:"-1"},Nt=t("a",{class:"header-anchor",href:"#fromarray-array-array-offset-integer-this","aria-hidden":"true"},"#",-1),Rt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.fromArray",target:"_blank",rel:"noopener noreferrer"},Xt=t("p",null,"array - 来源的数组。 offset - （可选）在数组中的元素偏移量，默认值为0。",-1),Yt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Zt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Ht={id:"frombufferattribute-attribute-bufferattribute-index-integer-this",tabindex:"-1"},Ut=t("a",{class:"header-anchor",href:"#frombufferattribute-attribute-bufferattribute-index-integer-this","aria-hidden":"true"},"#",-1),Wt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.fromBufferAttribute",target:"_blank",rel:"noopener noreferrer"},$t={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},Gt={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},Jt={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},Kt={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Pt={id:"getcomponent-index-integer-float",tabindex:"-1"},Qt=t("a",{class:"header-anchor",href:"#getcomponent-index-integer-float","aria-hidden":"true"},"#",-1),er={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.getComponent",target:"_blank",rel:"noopener noreferrer"},tr=t("p",null,"index - 0 或 1",-1),rr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},or={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},ar={id:"length-float",tabindex:"-1"},nr=t("a",{class:"header-anchor",href:"#length-float","aria-hidden":"true"},"#",-1),hr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.length",target:"_blank",rel:"noopener noreferrer"},sr={href:"https://en.wikipedia.org/wiki/Euclidean_distance",target:"_blank",rel:"noopener noreferrer"},ir={id:"manhattanlength-float",tabindex:"-1"},dr=t("a",{class:"header-anchor",href:"#manhattanlength-float","aria-hidden":"true"},"#",-1),cr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.manhattanLength",target:"_blank",rel:"noopener noreferrer"},lr={href:"http://en.wikipedia.org/wiki/Taxicab_geometry",target:"_blank",rel:"noopener noreferrer"},_r={id:"lengthsq-float",tabindex:"-1"},pr=t("a",{class:"header-anchor",href:"#lengthsq-float","aria-hidden":"true"},"#",-1),fr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.lengthSq",target:"_blank",rel:"noopener noreferrer"},mr={href:"https://en.wikipedia.org/wiki/Euclidean_distance",target:"_blank",rel:"noopener noreferrer"},gr={id:"lerp-v-vector2-alpha-float-this",tabindex:"-1"},xr=t("a",{class:"header-anchor",href:"#lerp-v-vector2-alpha-float-this","aria-hidden":"true"},"#",-1),br={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.lerp",target:"_blank",rel:"noopener noreferrer"},ur={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},kr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Vr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},vr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},jr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},zr={id:"lerpvectors-v1-vector2-v2-vector2-alpha-float-this",tabindex:"-1"},yr=t("a",{class:"header-anchor",href:"#lerpvectors-v1-vector2-v2-vector2-alpha-float-this","aria-hidden":"true"},"#",-1),Fr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.lerpVectors",target:"_blank",rel:"noopener noreferrer"},wr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Sr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ar={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Tr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Er={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},qr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Br={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Lr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Dr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Ir={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Cr={id:"negate-this",tabindex:"-1"},Mr=t("a",{class:"header-anchor",href:"#negate-this","aria-hidden":"true"},"#",-1),Nr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.negate",target:"_blank",rel:"noopener noreferrer"},Rr=t("p",null,"向量取反，即： x = -x , y = -y。",-1),Xr={id:"normalize-this",tabindex:"-1"},Yr=t("a",{class:"header-anchor",href:"#normalize-this","aria-hidden":"true"},"#",-1),Zr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.normalize",target:"_blank",rel:"noopener noreferrer"},Hr={href:"https://en.wikipedia.org/wiki/Unit_vector",target:"_blank",rel:"noopener noreferrer"},Ur={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.length",target:"_blank",rel:"noopener noreferrer"},Wr={id:"max-v-vector2-this",tabindex:"-1"},$r=t("a",{class:"header-anchor",href:"#max-v-vector2-this","aria-hidden":"true"},"#",-1),Gr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.max",target:"_blank",rel:"noopener noreferrer"},Jr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Kr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},Or={id:"min-v-vector2-this",tabindex:"-1"},Pr=t("a",{class:"header-anchor",href:"#min-v-vector2-this","aria-hidden":"true"},"#",-1),Qr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.min",target:"_blank",rel:"noopener noreferrer"},eo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},to={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ro={id:"multiply-v-vector2-this",tabindex:"-1"},oo=t("a",{class:"header-anchor",href:"#multiply-v-vector2-this","aria-hidden":"true"},"#",-1),ao={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.multiply",target:"_blank",rel:"noopener noreferrer"},no={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ho={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},so={id:"multiplyscalar-s-float-this",tabindex:"-1"},io=t("a",{class:"header-anchor",href:"#multiplyscalar-s-float-this","aria-hidden":"true"},"#",-1),co={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.multiplyScalar",target:"_blank",rel:"noopener noreferrer"},lo=t("p",null,"将该向量与所传入的标量s进行相乘。",-1),_o={id:"rotatearound-center-vector2-angle-float-this",tabindex:"-1"},po=t("a",{class:"header-anchor",href:"#rotatearound-center-vector2-angle-float-this","aria-hidden":"true"},"#",-1),fo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.rotateAround",target:"_blank",rel:"noopener noreferrer"},mo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},go={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},xo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},bo={id:"round-this",tabindex:"-1"},uo=t("a",{class:"header-anchor",href:"#round-this","aria-hidden":"true"},"#",-1),ko={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.round",target:"_blank",rel:"noopener noreferrer"},Vo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},vo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},jo={id:"roundtozero-this",tabindex:"-1"},zo=t("a",{class:"header-anchor",href:"#roundtozero-this","aria-hidden":"true"},"#",-1),yo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.roundToZero",target:"_blank",rel:"noopener noreferrer"},Fo=t("p",null,"向量中的分量朝向0取整数（若分量为负数则向上取整，若为正数则向下取整）。",-1),wo={id:"set-x-float-y-float-this",tabindex:"-1"},So=t("a",{class:"header-anchor",href:"#set-x-float-y-float-this","aria-hidden":"true"},"#",-1),Ao={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.set",target:"_blank",rel:"noopener noreferrer"},To={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Eo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},qo={id:"setcomponent-index-integer-value-float-this",tabindex:"-1"},Bo=t("a",{class:"header-anchor",href:"#setcomponent-index-integer-value-float-this","aria-hidden":"true"},"#",-1),Lo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.setComponent",target:"_blank",rel:"noopener noreferrer"},Do=t("p",null,"index - 0 或 1 value - Float",-1),Io={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Co={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},Mo={id:"setlength-l-float-this",tabindex:"-1"},No=t("a",{class:"header-anchor",href:"#setlength-l-float-this","aria-hidden":"true"},"#",-1),Ro={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.setLength",target:"_blank",rel:"noopener noreferrer"},Xo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.length",target:"_blank",rel:"noopener noreferrer"},Yo={id:"setscalar-scalar-float-this",tabindex:"-1"},Zo=t("a",{class:"header-anchor",href:"#setscalar-scalar-float-this","aria-hidden":"true"},"#",-1),Ho={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.setScalar",target:"_blank",rel:"noopener noreferrer"},Uo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Wo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},$o={id:"setx-x-float-this",tabindex:"-1"},Go=t("a",{class:"header-anchor",href:"#setx-x-float-this","aria-hidden":"true"},"#",-1),Jo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.setX",target:"_blank",rel:"noopener noreferrer"},Ko={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},Oo={id:"sety-y-float-this",tabindex:"-1"},Po=t("a",{class:"header-anchor",href:"#sety-y-float-this","aria-hidden":"true"},"#",-1),Qo={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.setY",target:"_blank",rel:"noopener noreferrer"},ea={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},ta={id:"sub-v-vector2-this",tabindex:"-1"},ra=t("a",{class:"header-anchor",href:"#sub-v-vector2-this","aria-hidden":"true"},"#",-1),oa={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.sub",target:"_blank",rel:"noopener noreferrer"},aa={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},na={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ha={id:"subscalar-s-float-this",tabindex:"-1"},sa=t("a",{class:"header-anchor",href:"#subscalar-s-float-this","aria-hidden":"true"},"#",-1),ia={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.subScalar",target:"_blank",rel:"noopener noreferrer"},da={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.x",target:"_blank",rel:"noopener noreferrer"},ca={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.y",target:"_blank",rel:"noopener noreferrer"},la={id:"subvectors-a-vector2-b-vector2-this",tabindex:"-1"},_a=t("a",{class:"header-anchor",href:"#subvectors-a-vector2-b-vector2-this","aria-hidden":"true"},"#",-1),pa={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.subVectors",target:"_blank",rel:"noopener noreferrer"},fa={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ma={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ga={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},xa={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2",target:"_blank",rel:"noopener noreferrer"},ba={id:"toarray-array-array-offset-integer-array",tabindex:"-1"},ua=t("a",{class:"header-anchor",href:"#toarray-array-array-offset-integer-array","aria-hidden":"true"},"#",-1),ka={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.toArray",target:"_blank",rel:"noopener noreferrer"},Va=t("p",null,"array - （可选）被用于存储向量的数组。如果这个值没有传入，则将创建一个新的数组。 offset - （可选） 数组中元素的偏移量。",-1),va=t("p",null,"返回一个数组[x, y]，或者将x和y复制到所传入的array中。",-1),ja={id:"random-this",tabindex:"-1"},za=t("a",{class:"header-anchor",href:"#random-this","aria-hidden":"true"},"#",-1),ya={href:"https://threejs.org/docs/index.html#api/zh/math/Vector2.random",target:"_blank",rel:"noopener noreferrer"},Fa=t("p",null,"将该向量的每个分量(x、y)设置为介于 0 和 1 之间的伪随机数，不包括 1。",-1);function wa(Sa,Aa){const r=i("ExternalLinkIcon");return n(),h("div",null,[c,t("p",null,[e("表示2D "),t("a",l,[e("vector"),o(r)]),e("（二维向量）的类。 一个二维向量是一对有顺序的数字（标记为x和y），可用来表示很多事物，例如：")]),t("ul",null,[_,t("li",null,[e("一个在平面上的方向与长度的定义。在three.js中，长度总是从(0, 0)到(x, y)的 "),t("a",p,[e("Euclidean distance"),o(r)]),e("（欧几里德距离，即直线距离）， 方向也是从(0, 0)到(x, y)的方向。")]),f]),m,t("h3",g,[x,e(" ."),t("a",b,[e("height"),o(r)]),e(" : Float")]),t("p",null,[t("a",u,[e("y"),o(r)]),e("的别名。")]),t("h3",k,[V,e(" ."),t("a",v,[e("isVector2"),o(r)]),e(" : Boolean")]),j,t("h3",z,[y,e(" ."),t("a",F,[e("width"),o(r)]),e(" : Float")]),t("p",null,[t("a",w,[e("x"),o(r)]),e("的别名。")]),t("h3",S,[A,e(" ."),t("a",T,[e("x"),o(r)]),e(" : Float")]),t("h3",E,[q,e(" ."),t("a",B,[e("y"),o(r)]),e(" : Float")]),L,t("h3",D,[I,e(" ."),t("a",C,[e("addScalar"),o(r)]),e(" ( s : Float ) : this")]),t("p",null,[e("将传入的标量s和这个向量的"),t("a",M,[e("x"),o(r)]),e("值、"),t("a",N,[e("y"),o(r)]),e("值相加。")]),t("h3",R,[X,e(" ."),t("a",Y,[e("addScaledVector"),o(r)]),e(" ( v : "),t("a",Z,[e("Vector2"),o(r)]),e(", s : Float ) : this")]),t("p",null,[e("将所传入的"),t("a",H,[e("v"),o(r)]),e("与s相乘所得乘积和这个向量相加。")]),t("h3",U,[W,e(" ."),t("a",$,[e("addVectors"),o(r)]),e(" ( a : "),t("a",G,[e("Vector2"),o(r)]),e(", b : "),t("a",J,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("将该向量设置为 "),t("a",K,[e("a"),o(r)]),e(" + "),t("a",O,[e("b"),o(r)]),e("。")]),t("h3",P,[Q,e(" ."),t("a",ee,[e("angle"),o(r)]),e(" () : Float")]),te,t("h3",re,[oe,e(" ."),t("a",ae,[e("applyMatrix3"),o(r)]),e(" ( m : "),t("a",ne,[e("Matrix3"),o(r)]),e(" ) : this")]),he,t("h3",se,[ie,e(" ."),t("a",de,[e("ceil"),o(r)]),e(" () : this")]),t("p",null,[e("向量中的"),t("a",ce,[e("x"),o(r)]),e("分量和"),t("a",le,[e("y"),o(r)]),e("分量向上取整为最接近的整数值。")]),t("h3",_e,[pe,e(" ."),t("a",fe,[e("clamp"),o(r)]),e(" ( min : "),t("a",me,[e("Vector2"),o(r)]),e(", max : "),t("a",ge,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[t("a",xe,[e("min"),o(r)]),e(" - 在限制范围内，x和y的最小值。 "),t("a",be,[e("max"),o(r)]),e(" - 在限制范围内，x和y的最大值。")]),ue,ke,t("h3",Ve,[ve,e(" ."),t("a",je,[e("clampLength"),o(r)]),e(" ( min : Float, max : Float ) : this")]),ze,ye,Fe,t("h3",we,[Se,e(" ."),t("a",Ae,[e("clampScalar"),o(r)]),e(" ( min : Float, max : Float ) : this")]),Te,Ee,qe,t("h3",Be,[Le,e(" ."),t("a",De,[e("clone"),o(r)]),e(" () : "),t("a",Ie,[e("Vector2"),o(r)])]),t("p",null,[e("返回一个新的Vector2，其具有和当前这个向量相同的"),t("a",Ce,[e("x"),o(r)]),e("和"),t("a",Me,[e("y"),o(r)]),e("。")]),t("h3",Ne,[Re,e(" ."),t("a",Xe,[e("copy"),o(r)]),e(" ( v : "),t("a",Ye,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("将所传入Vector2的"),t("a",Ze,[e("x"),o(r)]),e("和"),t("a",He,[e("y"),o(r)]),e("属性复制给这一Vector2。")]),t("h3",Ue,[We,e(" ."),t("a",$e,[e("distanceTo"),o(r)]),e(" ( v : "),t("a",Ge,[e("Vector2"),o(r)]),e(" ) : Float")]),t("p",null,[e("计算该vector到传入的"),t("a",Je,[e("v"),o(r)]),e("的距离。")]),t("h3",Ke,[Oe,e(" ."),t("a",Pe,[e("manhattanDistanceTo"),o(r)]),e(" ( v : "),t("a",Qe,[e("Vector2"),o(r)]),e(" ) : Float")]),t("p",null,[e("计算该vector到传入的"),t("a",et,[e("v"),o(r)]),e("的曼哈顿距离（"),t("a",tt,[e("Manhattan distance"),o(r)]),e("）。")]),t("h3",rt,[ot,e(" ."),t("a",at,[e("distanceToSquared"),o(r)]),e(" ( v : "),t("a",nt,[e("Vector2"),o(r)]),e(" ) : Float")]),t("p",null,[e("计算该向量到传入的"),t("a",ht,[e("v"),o(r)]),e("的平方距离。 如果你只是将该距离和另一个距离进行比较，则应当比较的是距离的平方， 因为它的计算效率会更高一些。")]),t("h3",st,[it,e(" ."),t("a",dt,[e("divide"),o(r)]),e(" ( v : "),t("a",ct,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("将该向量除以向量"),t("a",lt,[e("v"),o(r)]),e("。")]),t("h3",_t,[pt,e(" ."),t("a",ft,[e("divideScalar"),o(r)]),e(" ( s : Float ) : this")]),mt,t("h3",gt,[xt,e(" ."),t("a",bt,[e("dot"),o(r)]),e(" ( v : "),t("a",ut,[e("Vector2"),o(r)]),e(" ) : Float")]),t("p",null,[e("计算该vector和所传入"),t("a",kt,[e("v"),o(r)]),e("的点积（"),t("a",Vt,[e("dot product"),o(r)]),e("）。")]),t("h3",vt,[jt,e(" ."),t("a",zt,[e("cross"),o(r)]),e(" ( v : "),t("a",yt,[e("Vector2"),o(r)]),e(" ) : Float")]),t("p",null,[e("计算该vector和所传入"),t("a",Ft,[e("v"),o(r)]),e("的叉积（"),t("a",wt,[e("cross product"),o(r)]),e("）。 请注意，“叉积”在2D中并没有被明确定义。该函数计算的是2D图形中经常使用的几何叉积。")]),t("h3",St,[At,e(" ."),t("a",Tt,[e("equals"),o(r)]),e(" ( v : "),t("a",Et,[e("Vector2"),o(r)]),e(" ) : Boolean")]),t("p",null,[e("检查该向量和"),t("a",qt,[e("v"),o(r)]),e("的严格相等性。")]),t("h3",Bt,[Lt,e(" ."),t("a",Dt,[e("floor"),o(r)]),e(" () : this")]),t("p",null,[e("向量中的"),t("a",It,[e("x"),o(r)]),e("分量和"),t("a",Ct,[e("y"),o(r)]),e("分量向下取整为最接近的整数值。")]),t("h3",Mt,[Nt,e(" ."),t("a",Rt,[e("fromArray"),o(r)]),e(" ( array : Array, offset : Integer ) : this")]),Xt,t("p",null,[e("设置向量中的"),t("a",Yt,[e("x"),o(r)]),e("值为array[ offset ]，"),t("a",Zt,[e("y"),o(r)]),e("值为array[ offset + 1 ]。")]),t("h3",Ht,[Ut,e(" ."),t("a",Wt,[e("fromBufferAttribute"),o(r)]),e(" ( attribute : "),t("a",$t,[e("BufferAttribute"),o(r)]),e(", index : Integer ) : this")]),t("p",null,[t("a",Gt,[e("attribute"),o(r)]),e(" - 来源的attribute。 index - 在attribute中的索引。")]),t("p",null,[e("从"),t("a",Jt,[e("attribute"),o(r)]),e("中设置向量的"),t("a",Kt,[e("x"),o(r)]),e("值和"),t("a",Ot,[e("y"),o(r)]),e("值。 、")]),t("h3",Pt,[Qt,e(" ."),t("a",er,[e("getComponent"),o(r)]),e(" ( index : Integer ) : Float")]),tr,t("p",null,[e("如果index值为0则返回"),t("a",rr,[e("x"),o(r)]),e("值。 如果index值为1则返回"),t("a",or,[e("y"),o(r)]),e("值。")]),t("h3",ar,[nr,e(" ."),t("a",hr,[e("length"),o(r)]),e(" () : Float")]),t("p",null,[e("计算从(0, 0)到(x, y)的欧几里得长度 （"),t("a",sr,[e("Euclidean length"),o(r)]),e("，即直线长度）。")]),t("h3",ir,[dr,e(" ."),t("a",cr,[e("manhattanLength"),o(r)]),e(" () : Float")]),t("p",null,[e("计算该向量的曼哈顿长度（"),t("a",lr,[e("Manhattan length"),o(r)]),e("）。")]),t("h3",_r,[pr,e(" ."),t("a",fr,[e("lengthSq"),o(r)]),e(" () : Float")]),t("p",null,[e("计算从(0, 0)到(x, y)的欧几里得长度 （"),t("a",mr,[e("Euclidean length"),o(r)]),e("，即直线长度）的平方。 如果你正在比较向量的长度，应当比较的是长度的平方，因为它的计算效率更高一些。")]),t("h3",gr,[xr,e(" ."),t("a",br,[e("lerp"),o(r)]),e(" ( v : "),t("a",ur,[e("Vector2"),o(r)]),e(", alpha : Float ) : this")]),t("p",null,[t("a",kr,[e("v"),o(r)]),e(" - 朝着进行插值的"),t("a",Vr,[e("Vector2"),o(r)]),e("。 alpha - 插值因数，其范围通常在[0, 1]闭区间。")]),t("p",null,[e("在该向量与传入的向量"),t("a",vr,[e("v"),o(r)]),e("之间的线性插值，alpha是沿着线的长度的百分比 —— alpha = 0 时表示的是当前向量，alpha = 1 时表示的是所传入的向量"),t("a",jr,[e("v"),o(r)]),e("。")]),t("h3",zr,[yr,e(" ."),t("a",Fr,[e("lerpVectors"),o(r)]),e(" ( v1 : "),t("a",wr,[e("Vector2"),o(r)]),e(", v2 : "),t("a",Sr,[e("Vector2"),o(r)]),e(", alpha : Float ) : this")]),t("p",null,[t("a",Ar,[e("v1"),o(r)]),e(" - 起始的"),t("a",Tr,[e("Vector2"),o(r)]),e("。 "),t("a",Er,[e("v2"),o(r)]),e(" - 朝着进行插值的"),t("a",qr,[e("Vector2"),o(r)]),e("。 alpha - 插值因数，其范围通常在[0, 1]闭区间。")]),t("p",null,[e("将此向量设置为在"),t("a",Br,[e("v1"),o(r)]),e("和"),t("a",Lr,[e("v2"),o(r)]),e("之间进行线性插值的向量， 其中alpha为两个向量之间连线的长度的百分比 —— alpha = 0 时表示的是"),t("a",Dr,[e("v1"),o(r)]),e("，alpha = 1 时表示的是"),t("a",Ir,[e("v2"),o(r)]),e("。")]),t("h3",Cr,[Mr,e(" ."),t("a",Nr,[e("negate"),o(r)]),e(" () : this")]),Rr,t("h3",Xr,[Yr,e(" ."),t("a",Zr,[e("normalize"),o(r)]),e(" () : this")]),t("p",null,[e("将该向量转换为单位向量（"),t("a",Hr,[e("unit vector"),o(r)]),e("）， 也就是说，将该向量的方向设置为和原向量相同，但是其长度（"),t("a",Ur,[e("length"),o(r)]),e("）为1。")]),t("h3",Wr,[$r,e(" ."),t("a",Gr,[e("max"),o(r)]),e(" ( v : "),t("a",Jr,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("如果该向量的x值或y值小于所传入"),t("a",Kr,[e("v"),o(r)]),e("的x值或y值，则将该值替换为对应的最大值。")]),t("h3",Or,[Pr,e(" ."),t("a",Qr,[e("min"),o(r)]),e(" ( v : "),t("a",eo,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("如果该向量的x值或y值大于所传入"),t("a",to,[e("v"),o(r)]),e("的x值或y值，则将该值替换为对应的最小值。")]),t("h3",ro,[oo,e(" ."),t("a",ao,[e("multiply"),o(r)]),e(" ( v : "),t("a",no,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("将该向量与所传入的向量"),t("a",ho,[e("v"),o(r)]),e("进行相乘。")]),t("h3",so,[io,e(" ."),t("a",co,[e("multiplyScalar"),o(r)]),e(" ( s : Float ) : this")]),lo,t("h3",_o,[po,e(" ."),t("a",fo,[e("rotateAround"),o(r)]),e(" ( center : "),t("a",mo,[e("Vector2"),o(r)]),e(", angle : Float ) : this")]),t("p",null,[t("a",go,[e("center"),o(r)]),e(" - 将被围绕旋转的点。 angle - 将要旋转的角度，以弧度来表示。")]),t("p",null,[e("将向量围绕着"),t("a",xo,[e("center"),o(r)]),e("旋转angle弧度。")]),t("h3",bo,[uo,e(" ."),t("a",ko,[e("round"),o(r)]),e(" () : this")]),t("p",null,[e("向量中的"),t("a",Vo,[e("x"),o(r)]),e("分量和"),t("a",vo,[e("y"),o(r)]),e("分量四舍五入取整为最接近的整数值。")]),t("h3",jo,[zo,e(" ."),t("a",yo,[e("roundToZero"),o(r)]),e(" () : this")]),Fo,t("h3",wo,[So,e(" ."),t("a",Ao,[e("set"),o(r)]),e(" ( x : Float, y : Float ) : this")]),t("p",null,[e("设置该向量的"),t("a",To,[e("x"),o(r)]),e("和"),t("a",Eo,[e("y"),o(r)]),e("分量。")]),t("h3",qo,[Bo,e(" ."),t("a",Lo,[e("setComponent"),o(r)]),e(" ( index : Integer, value : Float ) : this")]),Do,t("p",null,[e("如果index值为0则将"),t("a",Io,[e("x"),o(r)]),e("值设置为value。 如果index值为1则将"),t("a",Co,[e("y"),o(r)]),e("值设置为value")]),t("h3",Mo,[No,e(" ."),t("a",Ro,[e("setLength"),o(r)]),e(" ( l : Float ) : this")]),t("p",null,[e("将该向量的方向设置为和原向量相同，但是长度（"),t("a",Xo,[e("length"),o(r)]),e("）为l。")]),t("h3",Yo,[Zo,e(" ."),t("a",Ho,[e("setScalar"),o(r)]),e(" ( scalar : Float ) : this")]),t("p",null,[e("将该向量的"),t("a",Uo,[e("x"),o(r)]),e("、"),t("a",Wo,[e("y"),o(r)]),e("值同时设置为等于传入的scalar。")]),t("h3",$o,[Go,e(" ."),t("a",Jo,[e("setX"),o(r)]),e(" ( x : Float ) : this")]),t("p",null,[e("将向量中的"),t("a",Ko,[e("x"),o(r)]),e("值替换为x。")]),t("h3",Oo,[Po,e(" ."),t("a",Qo,[e("setY"),o(r)]),e(" ( y : Float ) : this")]),t("p",null,[e("将向量中的"),t("a",ea,[e("y"),o(r)]),e("值替换为y。")]),t("h3",ta,[ra,e(" ."),t("a",oa,[e("sub"),o(r)]),e(" ( v : "),t("a",aa,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("从该向量减去向量"),t("a",na,[e("v"),o(r)]),e("。")]),t("h3",ha,[sa,e(" ."),t("a",ia,[e("subScalar"),o(r)]),e(" ( s : Float ) : this")]),t("p",null,[e("从该向量的"),t("a",da,[e("x"),o(r)]),e("和"),t("a",ca,[e("y"),o(r)]),e("中减去标量s。")]),t("h3",la,[_a,e(" ."),t("a",pa,[e("subVectors"),o(r)]),e(" ( a : "),t("a",fa,[e("Vector2"),o(r)]),e(", b : "),t("a",ma,[e("Vector2"),o(r)]),e(" ) : this")]),t("p",null,[e("将该向量设置为"),t("a",ga,[e("a"),o(r)]),e(" - "),t("a",xa,[e("b"),o(r)]),e("。")]),t("h3",ba,[ua,e(" ."),t("a",ka,[e("toArray"),o(r)]),e(" ( array : Array, offset : Integer ) : Array")]),Va,va,t("h3",ja,[za,e(" ."),t("a",ya,[e("random"),o(r)]),e(" () : this")]),Fa])}const Ea=a(d,[["render",wa],["__file","Vector2.html.vue"]]);export{Ea as default};
