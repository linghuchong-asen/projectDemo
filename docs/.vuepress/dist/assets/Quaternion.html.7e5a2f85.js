import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as t,b as e,e as n,d as h,r as i}from"./app.5c5af4fe.js";const l={},d=t("h1",{id:"\u56DB\u5143\u6570-quaternion",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u56DB\u5143\u6570-quaternion","aria-hidden":"true"},"#"),e(" \u56DB\u5143\u6570\uFF08Quaternion\uFF09")],-1),c={href:"http://en.wikipedia.org/wiki/Quaternion",target:"_blank",rel:"noopener noreferrer"},p={href:"https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation",target:"_blank",rel:"noopener noreferrer"},_=h(`<p>\u5BF9 Quaternion \u5B9E\u4F8B\u8FDB\u884C\u904D\u5386\u5C06\u6309\u76F8\u5E94\u7684\u987A\u5E8F\u751F\u6210\u5B83\u7684\u5206\u91CF (x, y, z, w)\u3002</p><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> quaternion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Quaternion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
quaternion<span class="token punctuation">.</span><span class="token function">setFromAxisAngle</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> vector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> vector<span class="token punctuation">.</span><span class="token function">applyQuaternion</span><span class="token punctuation">(</span> quaternion <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><h3 id="quaternion-x-float-y-float-z-float-w-float" tabindex="-1"><a class="header-anchor" href="#quaternion-x-float-y-float-z-float-w-float" aria-hidden="true">#</a> Quaternion( x : Float, y : Float, z : Float, w : Float )</h3><p>x - x \u5750\u6807 y - y \u5750\u6807 z - z \u5750\u6807 w - w \u5750\u6807</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2>`,7),f={id:"isquaternion-boolean",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#isquaternion-boolean","aria-hidden":"true"},"#",-1),m={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.isQuaternion",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,"Read-only flag to check if a given object is of type Quaternion.",-1),b={id:"x-float",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#x-float","aria-hidden":"true"},"#",-1),k={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},z={id:"y-float",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#y-float","aria-hidden":"true"},"#",-1),Q={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},j={id:"z-float",tabindex:"-1"},q=t("a",{class:"header-anchor",href:"#z-float","aria-hidden":"true"},"#",-1),w={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},v={id:"w-float",tabindex:"-1"},F=t("a",{class:"header-anchor",href:"#w-float","aria-hidden":"true"},"#",-1),A={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},E=t("h2",{id:"\u65B9\u6CD5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u65B9\u6CD5","aria-hidden":"true"},"#"),e(" \u65B9\u6CD5")],-1),V={id:"angleto-q-quaternion-float",tabindex:"-1"},T=t("a",{class:"header-anchor",href:"#angleto-q-quaternion-float","aria-hidden":"true"},"#",-1),I={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.angleTo",target:"_blank",rel:"noopener noreferrer"},O={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},B={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},N={id:"clone-quaternion",tabindex:"-1"},R=t("a",{class:"header-anchor",href:"#clone-quaternion","aria-hidden":"true"},"#",-1),M={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.clone",target:"_blank",rel:"noopener noreferrer"},S={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},H={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},L={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},P={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},U={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},C={id:"conjugate-this",tabindex:"-1"},D=t("a",{class:"header-anchor",href:"#conjugate-this","aria-hidden":"true"},"#",-1),G={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.conjugate",target:"_blank",rel:"noopener noreferrer"},J=t("p",null,"\u8FD4\u56DE\u8BE5\u56DB\u5143\u6570\u7684\u65CB\u8F6C\u5171\u8F6D\u3002 \u56DB\u5143\u6570\u7684\u5171\u8F6D\u8868\u793A\u7684\u662F\uFF0C\u56F4\u7ED5\u65CB\u8F6C\u8F74\u5728\u76F8\u53CD\u65B9\u5411\u4E0A\u7684\u76F8\u540C\u65CB\u8F6C\u3002",-1),K={id:"copy-q-quaternion-this",tabindex:"-1"},W=t("a",{class:"header-anchor",href:"#copy-q-quaternion-this","aria-hidden":"true"},"#",-1),X={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.copy",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},$={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},te={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},re={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},ne={id:"equals-v-quaternion-boolean",tabindex:"-1"},oe=t("a",{class:"header-anchor",href:"#equals-v-quaternion-boolean","aria-hidden":"true"},"#",-1),ae={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.equals",target:"_blank",rel:"noopener noreferrer"},se={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},he={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},le={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},de={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},_e={id:"dot-v-quaternion-float",tabindex:"-1"},fe=t("a",{class:"header-anchor",href:"#dot-v-quaternion-float","aria-hidden":"true"},"#",-1),ue={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.dot",target:"_blank",rel:"noopener noreferrer"},me={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},be={href:"https://en.wikipedia.org/wiki/Dot_product",target:"_blank",rel:"noopener noreferrer"},xe={id:"fromarray-array-array-offset-integer-this",tabindex:"-1"},ke=t("a",{class:"header-anchor",href:"#fromarray-array-array-offset-integer-this","aria-hidden":"true"},"#",-1),ze={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.fromArray",target:"_blank",rel:"noopener noreferrer"},ye=t("p",null,"array - \u7528\u4E8E\u6784\u9020\u56DB\u5143\u6570\u7684\u5F62\u5982(x, y, z, w)\u7684\u6570\u7EC4\u3002 offset - \uFF08\u53EF\u9009\uFF09\u6570\u7EC4\u7684\u504F\u79FB\u91CF\u3002\uFF08\u8BD1\u8005\u6CE8\uFF1A\u4F7F\u7528\u6570\u7EC4\u4E2D\u4ECE\u7B2Coffset\u5143\u7D20\u7B97\u8D77\u7684\u56DB\u4E2A\u5143\u7D20\uFF09",-1),Qe={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},je={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},we={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},ve={id:"identity-this",tabindex:"-1"},Fe=t("a",{class:"header-anchor",href:"#identity-this","aria-hidden":"true"},"#",-1),Ae={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.identity",target:"_blank",rel:"noopener noreferrer"},Ee=t("p",null,"\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u4E3A identity \u56DB\u5143\u6570\uFF0C\u5373\u8868\u793A\u201C\u4E0D\u65CB\u8F6C\u201D\u7684\u56DB\u5143\u6570\u3002",-1),Ve={id:"invert-this",tabindex:"-1"},Te=t("a",{class:"header-anchor",href:"#invert-this","aria-hidden":"true"},"#",-1),Ie={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.invert",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.conjugate",target:"_blank",rel:"noopener noreferrer"},Be={id:"length-float",tabindex:"-1"},Ne=t("a",{class:"header-anchor",href:"#length-float","aria-hidden":"true"},"#",-1),Re={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.length",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://en.wikipedia.org/wiki/Euclidean_distance",target:"_blank",rel:"noopener noreferrer"},Se={id:"lengthsq-float",tabindex:"-1"},He=t("a",{class:"header-anchor",href:"#lengthsq-float","aria-hidden":"true"},"#",-1),Le={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.lengthSq",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://en.wikipedia.org/wiki/Euclidean_distance",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.length",target:"_blank",rel:"noopener noreferrer"},Ce={id:"normalize-this",tabindex:"-1"},De=t("a",{class:"header-anchor",href:"#normalize-this","aria-hidden":"true"},"#",-1),Ge={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.normalize",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://en.wikipedia.org/wiki/Normalized_vector",target:"_blank",rel:"noopener noreferrer"},Ke=t("strong",null,"1",-1),We={id:"multiply-q-quaternion-this",tabindex:"-1"},Xe=t("a",{class:"header-anchor",href:"#multiply-q-quaternion-this","aria-hidden":"true"},"#",-1),Ye={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiply",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},et={id:"multiplyquaternions-a-quaternion-b-quaternion-this",tabindex:"-1"},tt=t("a",{class:"header-anchor",href:"#multiplyquaternions-a-quaternion-b-quaternion-this","aria-hidden":"true"},"#",-1),rt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiplyQuaternions",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},at={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},st={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},ht={href:"http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm",target:"_blank",rel:"noopener noreferrer"},it={id:"premultiply-q-quaternion-this",tabindex:"-1"},lt=t("a",{class:"header-anchor",href:"#premultiply-q-quaternion-this","aria-hidden":"true"},"#",-1),dt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.premultiply",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},_t={id:"rotatetowards-q-quaternion-step-float-this",tabindex:"-1"},ft=t("a",{class:"header-anchor",href:"#rotatetowards-q-quaternion-step-float-this","aria-hidden":"true"},"#",-1),ut={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.rotateTowards",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},bt=t("p",null,[e("\u5C06\u8BE5\u56DB\u5143\u6570\u6309\u7167\u6B65\u957F step \u5411\u76EE\u6807 "),t("strong",null,"q"),e(" \u8FDB\u884C\u65CB\u8F6C\u3002\u8BE5\u65B9\u6CD5\u786E\u4FDD\u6700\u7EC8\u7684\u56DB\u5143\u6570\u4E0D\u4F1A\u8D85\u8FC7 "),t("strong",null,"q"),e("\u3002")],-1),xt={id:"slerp-qb-quaternion-t-float-this",tabindex:"-1"},kt=t("a",{class:"header-anchor",href:"#slerp-qb-quaternion-t-float-this","aria-hidden":"true"},"#",-1),zt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerp",target:"_blank",rel:"noopener noreferrer"},yt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},Qt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},qt=t("strong",null,"slerp",-1),wt=t("code",null,"// rotate a mesh towards a target quaternion mesh.quaternion.slerp( endQuaternion, 0.01 );",-1),vt={id:"slerpquaternions-qa-quaternion-qb-quaternion-t-float-this",tabindex:"-1"},Ft=t("a",{class:"header-anchor",href:"#slerpquaternions-qa-quaternion-qb-quaternion-t-float-this","aria-hidden":"true"},"#",-1),At={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerpQuaternions",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},Vt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},Tt=t("p",null,"\u5728\u7ED9\u5B9A\u7684\u56DB\u5143\u6570\u4E4B\u95F4\u6267\u884C\u7403\u9762\u7EBF\u6027\u63D2\u503C\uFF0C\u5E76\u5C06\u7ED3\u679C\u5B58\u50A8\u5728\u8FD9\u4E2A\u56DB\u5143\u6570\u4E2D",-1),It={id:"set-x-float-y-float-z-float-w-float-this",tabindex:"-1"},Ot=t("a",{class:"header-anchor",href:"#set-x-float-y-float-z-float-w-float-this","aria-hidden":"true"},"#",-1),Bt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.set",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},St={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},Ht={id:"setfromaxisangle-axis-vector3-angle-float-this",tabindex:"-1"},Lt=t("a",{class:"header-anchor",href:"#setfromaxisangle-axis-vector3-angle-float-this","aria-hidden":"true"},"#",-1),Pt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromAxisAngle",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},Ct={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},Dt={href:"http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm",target:"_blank",rel:"noopener noreferrer"},Gt=t("strong",null,"Axis",-1),Jt=t("strong",null,"angle",-1),Kt={id:"setfromeuler-euler-euler-this",tabindex:"-1"},Wt=t("a",{class:"header-anchor",href:"#setfromeuler-euler-euler-this","aria-hidden":"true"},"#",-1),Xt={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromEuler",target:"_blank",rel:"noopener noreferrer"},Yt={href:"https://threejs.org/docs/index.html#api/zh/math/Euler",target:"_blank",rel:"noopener noreferrer"},Zt={href:"https://threejs.org/docs/index.html#api/zh/math/Euler",target:"_blank",rel:"noopener noreferrer"},$t={id:"setfromrotationmatrix-m-matrix4-this",tabindex:"-1"},er=t("a",{class:"header-anchor",href:"#setfromrotationmatrix-m-matrix4-this","aria-hidden":"true"},"#",-1),tr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromRotationMatrix",target:"_blank",rel:"noopener noreferrer"},rr={href:"https://threejs.org/docs/index.html#api/zh/math/Matrix4",target:"_blank",rel:"noopener noreferrer"},nr={href:"https://threejs.org/docs/index.html#api/zh/math/Matrix4",target:"_blank",rel:"noopener noreferrer"},or={href:"http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm",target:"_blank",rel:"noopener noreferrer"},ar={id:"setfromunitvectors-vfrom-vector3-vto-vector3-this",tabindex:"-1"},sr=t("a",{class:"header-anchor",href:"#setfromunitvectors-vfrom-vector3-vto-vector3-this","aria-hidden":"true"},"#",-1),hr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromUnitVectors",target:"_blank",rel:"noopener noreferrer"},ir={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},lr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},dr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},cr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},pr={href:"http://lolengine.net/blog/2013/09/18/beautiful-maths-quaternion-from-vectors",target:"_blank",rel:"noopener noreferrer"},_r={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},fr={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},ur={id:"toarray-array-array-offset-integer-array",tabindex:"-1"},mr=t("a",{class:"header-anchor",href:"#toarray-array-array-offset-integer-array","aria-hidden":"true"},"#",-1),gr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.toArray",target:"_blank",rel:"noopener noreferrer"},br=t("p",null,"array - \uFF08\u53EF\u9009\uFF09\u5B58\u50A8\u8BE5\u56DB\u5143\u6570\u7684\u6570\u7EC4\u3002\u82E5\u672A\u6307\u5B9A\u8BE5\u53C2\u6570\uFF0C\u5219\u5C06\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002 offset - \uFF08\u53EF\u9009\uFF09\u82E5\u6307\u5B9A\u4E86\u8BE5\u503C\uFF0C\u7ED3\u679C\u5C06\u4F1A\u88AB\u62F7\u8D1D\u5230\u8BE5 Array\u3002",-1),xr=t("p",null,"\u5728\u5F62\u5982[x, y, z, w]\u7684\u6570\u7EC4\u4E2D\uFF0C\u8FD4\u56DE\u56DB\u5143\u6570\u4E2D\u7684\u6570\u5B57\u5143\u7D20\u3002",-1),kr={id:"frombufferattribute-attribute-bufferattribute-index-integer-this",tabindex:"-1"},zr=t("a",{class:"header-anchor",href:"#frombufferattribute-attribute-bufferattribute-index-integer-this","aria-hidden":"true"},"#",-1),yr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.fromBufferAttribute",target:"_blank",rel:"noopener noreferrer"},Qr={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},jr={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},qr={href:"https://threejs.org/docs/index.html#api/zh/core/BufferAttribute",target:"_blank",rel:"noopener noreferrer"},wr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.x",target:"_blank",rel:"noopener noreferrer"},vr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.y",target:"_blank",rel:"noopener noreferrer"},Fr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.z",target:"_blank",rel:"noopener noreferrer"},Ar={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.w",target:"_blank",rel:"noopener noreferrer"},Er=t("h2",{id:"\u9759\u6001\u65B9\u6CD5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u9759\u6001\u65B9\u6CD5","aria-hidden":"true"},"#"),e(" \u9759\u6001\u65B9\u6CD5")],-1),Vr={id:"slerpflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-t-float-undefined",tabindex:"-1"},Tr=t("a",{class:"header-anchor",href:"#slerpflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-t-float-undefined","aria-hidden":"true"},"#",-1),Ir={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerpFlat",target:"_blank",rel:"noopener noreferrer"},Or=t("p",null,[e("dst - \u8F93\u51FA\u6570\u7EC4 dstOffset - \u8F93\u51FA\u6570\u7EC4\u7684\u504F\u79FB\u91CF src0 - \u8D77\u59CB\u56DB\u5143\u6570\u7684\u6E90\u6570\u7EC4 srcOffset0 - \u6570\u7EC4 "),t("strong",null,"src0"),e(" \u7684\u504F\u79FB\u91CF src1 - \u76EE\u6807\u56DB\u5143\u6570\u7684\u6E90\u6570\u7EC4 srcOffset1 - \u6570\u7EC4 "),t("strong",null,"src1"),e(" \u7684\u504F\u79FB\u91CF t - \u5F52\u4E00\u5316\u63D2\u503C\u56E0\u5B50(\u4ECB\u4E8E 0 \u548C 1 \u4E4B\u95F4)")],-1),Br=t("p",null,"This SLERP implementation assumes the quaternion data are managed in flat arrays.",-1),Nr={id:"multiplyquaternionsflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-array",tabindex:"-1"},Rr=t("a",{class:"header-anchor",href:"#multiplyquaternionsflat-dst-array-dstoffset-integer-src0-array-srcoffset0-integer-src1-array-srcoffset1-integer-array","aria-hidden":"true"},"#",-1),Mr={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiplyQuaternionsFlat",target:"_blank",rel:"noopener noreferrer"},Sr=t("p",null,[e("dst - The output array. dstOffset - An offset into the output array. src0 - The source array of the starting quaternion. srcOffset0 - An offset into the array "),t("strong",null,"src0"),e(". src1 - The source array of the target quaternion. srcOffset1 - An offset into the array "),t("strong",null,"src1"),e(".")],-1),Hr=t("p",null,"This multiplication implementation assumes the quaternion data are managed in flat arrays.",-1);function Lr(Pr,Ur){const r=i("ExternalLinkIcon");return a(),s("div",null,[d,t("p",null,[e("\u8BE5\u7C7B\u5B9E\u73B0\u4E86 "),t("a",c,[e("quaternion"),n(r)]),e(" \u3002 \u56DB\u5143\u6570\u5728three.js\u4E2D\u7528\u4E8E\u8868\u793A "),t("a",p,[e("rotation"),n(r)]),e(" \uFF08\u65CB\u8F6C\uFF09\u3002")]),_,t("h3",f,[u,e(" ."),t("a",m,[e("isQuaternion"),n(r)]),e(" : Boolean")]),g,t("h3",b,[x,e(" ."),t("a",k,[e("x"),n(r)]),e(" : Float")]),t("h3",z,[y,e(" ."),t("a",Q,[e("y"),n(r)]),e(" : Float")]),t("h3",j,[q,e(" ."),t("a",w,[e("z"),n(r)]),e(" : Float")]),t("h3",v,[F,e(" ."),t("a",A,[e("w"),n(r)]),e(" : Float")]),E,t("h3",V,[T,e(" ."),t("a",I,[e("angleTo"),n(r)]),e(" ( q : "),t("a",O,[e("Quaternion"),n(r)]),e(" ) : Float")]),t("p",null,[e("\u4EE5\u5F27\u5EA6\u8FD4\u56DE\u8BE5\u56DB\u5143\u6570\u4E0E\u56DB\u5143\u6570 "),t("a",B,[e("q"),n(r)]),e(" \u4E4B\u95F4\u7684\u5939\u89D2\u3002")]),t("h3",N,[R,e(" ."),t("a",M,[e("clone"),n(r)]),e(" () : "),t("a",S,[e("Quaternion"),n(r)])]),t("p",null,[e("\u521B\u5EFA\u4E00\u4E2A\u4E0E\u8BE5\u56DB\u5143\u6570\u5177\u6709\u76F8\u540C"),t("a",H,[e("x"),n(r)]),e("\u3001"),t("a",L,[e("y"),n(r)]),e("\u3001"),t("a",P,[e("z"),n(r)]),e("\u548C"),t("a",U,[e("w"),n(r)]),e(" \u5C5E\u6027\u7684\u56DB\u5143\u6570\u3002")]),t("h3",C,[D,e(" ."),t("a",G,[e("conjugate"),n(r)]),e(" () : this")]),J,t("h3",K,[W,e(" ."),t("a",X,[e("copy"),n(r)]),e(" ( q : "),t("a",Y,[e("Quaternion"),n(r)]),e(" ) : this")]),t("p",null,[e("\u590D\u5236\u56DB\u5143\u6570 "),t("a",Z,[e("q"),n(r)]),e(" \u7684 "),t("a",$,[e("x"),n(r)]),e("\u3001"),t("a",ee,[e("y"),n(r)]),e("\u3001"),t("a",te,[e("z"),n(r)]),e(" \u548C "),t("a",re,[e("w"),n(r)]),e(" \u5C5E\u6027\u5230\u8BE5\u56DB\u5143\u6570\u4E2D\u3002")]),t("h3",ne,[oe,e(" ."),t("a",ae,[e("equals"),n(r)]),e(" ( v : "),t("a",se,[e("Quaternion"),n(r)]),e(" ) : Boolean")]),t("p",null,[t("a",he,[e("v"),n(r)]),e(" - \u7528\u4E8E\u8FDB\u884C\u6BD4\u8F83\u7684\u56DB\u5143\u6570\u3002")]),t("p",null,[e("\u5C06\u56DB\u5143\u6570 "),t("a",ie,[e("v"),n(r)]),e(" \u7684 "),t("a",le,[e("x"),n(r)]),e("\u3001 "),t("a",de,[e("y"),n(r)]),e("\u3001 "),t("a",ce,[e("z"),n(r)]),e(" \u548C "),t("a",pe,[e("w"),n(r)]),e(" \u7684\u5C5E\u6027 \u4E0E\u5F53\u524D\u56DB\u5143\u6570\u7684\u5BF9\u5E94\u5C5E\u6027\u76F8\u6BD4\u8F83\uFF0C\u4EE5\u786E\u5B9A\u5B83\u4EEC\u662F\u5426\u8868\u793A\u76F8\u540C\u7684\u65CB\u8F6C\u3002")]),t("h3",_e,[fe,e(" ."),t("a",ue,[e("dot"),n(r)]),e(" ( v : "),t("a",me,[e("Quaternion"),n(r)]),e(" ) : Float")]),t("p",null,[e("\u8BA1\u7B97\u56DB\u5143\u6570 "),t("a",ge,[e("v"),n(r)]),e(" \u4E0E\u5F53\u524D\u56DB\u5143\u6570\u7684"),t("a",be,[e("dot product"),n(r)]),e("\uFF08\u70B9\u79EF\uFF09\u3002")]),t("h3",xe,[ke,e(" ."),t("a",ze,[e("fromArray"),n(r)]),e(" ( array : Array, offset : Integer ) : this")]),ye,t("p",null,[e("\u4ECE\u4E00\u4E2A\u6570\u7EC4\u6765\u8BBE\u7F6E\u56DB\u5143\u6570\u7684 "),t("a",Qe,[e("x"),n(r)]),e("\u3001 "),t("a",je,[e("y"),n(r)]),e("\u3001"),t("a",qe,[e("z"),n(r)]),e(" \u548C "),t("a",we,[e("w"),n(r)]),e(" \u7684\u5C5E\u6027\u3002")]),t("h3",ve,[Fe,e(" ."),t("a",Ae,[e("identity"),n(r)]),e(" () : this")]),Ee,t("h3",Ve,[Te,e(" ."),t("a",Ie,[e("invert"),n(r)]),e(" () : this")]),t("p",null,[e("\u7FFB\u8F6C\u8BE5\u56DB\u5143\u6570 \u2014\u2014 \u8BA1\u7B97 "),t("a",Oe,[e("conjugate"),n(r)]),e(" \u3002\u5047\u5B9A\u8BE5\u56DB\u5143\u6570\u5177\u6709\u5355\u4F4D\u957F\u5EA6\u3002")]),t("h3",Be,[Ne,e(" ."),t("a",Re,[e("length"),n(r)]),e(" () : Float")]),t("p",null,[e("\u8BA1\u7B97\u56DB\u5143\u6570\u7684 "),t("a",Me,[e("Euclidean length"),n(r)]),e(" \uFF08\u6B27\u51E0\u91CC\u5F97\u957F\u5EA6\uFF0C\u76F4\u7EBF\u957F\u5EA6\uFF09\uFF0C\u89C6\u4E3A\u4E00\u4E2A\u56DB\u7EF4\u5411\u91CF\u3002")]),t("h3",Se,[He,e(" ."),t("a",Le,[e("lengthSq"),n(r)]),e(" () : Float")]),t("p",null,[e("\u8BA1\u7B97\u56DB\u5143\u6570 "),t("a",Pe,[e("Euclidean length"),n(r)]),e(" \uFF08\u6B27\u51E0\u91CC\u5F97\u957F\u5EA6\uFF0C\u76F4\u7EBF\u957F\u5EA6\uFF09\u7684\u5E73\u65B9\uFF0C\u89C6\u4E3A\u4E00\u4E2A\u56DB\u7EF4\u5411\u91CF\u3002 \u5982\u679C\u8981\u6BD4\u8F83\u4E24\u4E2A\u56DB\u5143\u6570\u7684\u957F\u5EA6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5341\u5206\u6709\u7528\uFF0C \u56E0\u4E3A\u8FD9\u6BD4 "),t("a",Ue,[e("length"),n(r)]),e("() \u7684\u6548\u7387\u7A0D\u9AD8\u4E00\u4E9B\u3002")]),t("h3",Ce,[De,e(" ."),t("a",Ge,[e("normalize"),n(r)]),e(" () : this")]),t("p",null,[t("a",Je,[e("Normalizes"),n(r)]),e("\uFF08\u5F52\u4E00\u5316\uFF09\u56DB\u5143\u6570 \u2014\u2014 \u5373\u8BA1\u7B97\u4E0E\u8BE5\u56DB\u5143\u6570\u5177\u6709\u76F8\u540C\u65CB\u8F6C\u3001\u4F46\u957F\u5EA6\u4E3A"),Ke,e("\u7684\u56DB\u5143\u6570\u3002")]),t("h3",We,[Xe,e(" ."),t("a",Ye,[e("multiply"),n(r)]),e(" ( q : "),t("a",Ze,[e("Quaternion"),n(r)]),e(" ) : this")]),t("p",null,[e("\u5C06\u8BE5\u56DB\u5143\u6570\u4E0E"),t("a",$e,[e("q"),n(r)]),e("\u76F8\u4E58\u3002")]),t("h3",et,[tt,e(" ."),t("a",rt,[e("multiplyQuaternions"),n(r)]),e(" ( a : "),t("a",nt,[e("Quaternion"),n(r)]),e(", b : "),t("a",ot,[e("Quaternion"),n(r)]),e(" ) : this")]),t("p",null,[e("\u5C06\u8BE5\u56DB\u5143\u6570\u8BBE\u4E3A "),t("a",at,[e("a"),n(r)]),e(" x "),t("a",st,[e("b"),n(r)]),e(" \u3002 \u6539\u7F16\u81EA "),t("a",ht,[e("here"),n(r)]),e(" \u6240\u6982\u8FF0\u7684\u65B9\u6CD5\u3002")]),t("h3",it,[lt,e(" ."),t("a",dt,[e("premultiply"),n(r)]),e(" ( q : "),t("a",ct,[e("Quaternion"),n(r)]),e(" ) : this")]),t("p",null,[e("\u4F7F\u7528 "),t("a",pt,[e("q"),n(r)]),e(" \u4E58\u4EE5\u8BE5\u56DB\u5143\u6570\u3002")]),t("h3",_t,[ft,e(" ."),t("a",ut,[e("rotateTowards"),n(r)]),e(" ( q : "),t("a",mt,[e("Quaternion"),n(r)]),e(", step : Float ) : this")]),t("p",null,[t("a",gt,[e("q"),n(r)]),e(" - \u76EE\u6807\u56DB\u5143\u6570 step - \u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\u7684\u89D2\u5EA6\u6B65\u957F")]),bt,t("h3",xt,[kt,e(" ."),t("a",zt,[e("slerp"),n(r)]),e(" ( qb : "),t("a",yt,[e("Quaternion"),n(r)]),e(", t : Float ) : this")]),t("p",null,[t("a",Qt,[e("qb"),n(r)]),e(" - \u53E6\u4E00\u4E2A\u56DB\u5143\u6570\u65CB\u8F6C t - \u95ED\u533A\u95F4 [0, 1] \u4E2D\u7684\u63D2\u503C\u56E0\u5B50")]),t("p",null,[e("\u5904\u7406\u56DB\u5143\u6570\u4E4B\u95F4\u7684\u7403\u9762\u7EBF\u6027\u63D2\u503C\u3002t \u8868\u793A\u8BE5\u56DB\u5143\u6570(\u5176\u4E2D t \u4E3A 0) \u548C "),t("a",jt,[e("qb"),n(r)]),e(" (\u5176\u4E2D t \u4E3A1) \u4E4B\u95F4\u7684\u65CB\u8F6C\u91CF\u3002 \u8BE5\u56DB\u5143\u6570\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u4E0A\u8FF0\u8BA1\u7B97\u7684\u7ED3\u679C\u3002\u53E6\u8BF7\u53C2\u9605\u4E0B\u9762 "),qt,e(" \u7684\u9759\u6001\u7248\u672C\u3002"),wt]),t("h3",vt,[Ft,e(" ."),t("a",At,[e("slerpQuaternions"),n(r)]),e(" ( qa : "),t("a",Et,[e("Quaternion"),n(r)]),e(", qb : "),t("a",Vt,[e("Quaternion"),n(r)]),e(", t : Float ) : this")]),Tt,t("h3",It,[Ot,e(" ."),t("a",Bt,[e("set"),n(r)]),e(" ( x : Float, y : Float, z : Float, w : Float ) : this")]),t("p",null,[e("\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u7684 "),t("a",Nt,[e("x"),n(r)]),e("\u3001"),t("a",Rt,[e("y"),n(r)]),e("\u3001"),t("a",Mt,[e("z"),n(r)]),e("\u548C"),t("a",St,[e("w"),n(r)]),e("\u5C5E\u6027\u3002")]),t("h3",Ht,[Lt,e(" ."),t("a",Pt,[e("setFromAxisAngle"),n(r)]),e(" ( axis : "),t("a",Ut,[e("Vector3"),n(r)]),e(", angle : Float ) : this")]),t("p",null,[e("\u4ECE\u7531 "),t("a",Ct,[e("axis"),n(r)]),e("\uFF08\u8F74\uFF09 \u548C angle\uFF08\u89D2\u5EA6\uFF09\u6240\u7ED9\u5B9A\u7684\u65CB\u8F6C\u6765\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u3002 \u6539\u7F16\u81EA "),t("a",Dt,[e("here"),n(r)]),e(" \u6240\u8FF0\u7684\u65B9\u6CD5\u3002 \u5047\u5B9A"),Gt,e("\u5DF2\u88AB\u5F52\u4E00\u5316\uFF0C"),Jt,e("\u4EE5\u5F27\u5EA6\u6765\u8868\u793A\u3002")]),t("h3",Kt,[Wt,e(" ."),t("a",Xt,[e("setFromEuler"),n(r)]),e(" ( euler : "),t("a",Yt,[e("Euler"),n(r)]),e(" ) : this")]),t("p",null,[e("\u4ECE\u7531 "),t("a",Zt,[e("Euler"),n(r)]),e(" \u89D2\u6240\u7ED9\u5B9A\u7684\u65CB\u8F6C\u6765\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u3002")]),t("h3",$t,[er,e(" ."),t("a",tr,[e("setFromRotationMatrix"),n(r)]),e(" ( m : "),t("a",rr,[e("Matrix4"),n(r)]),e(" ) : this")]),t("p",null,[e("\u4ECE"),t("a",nr,[e("m"),n(r)]),e("\u7684\u65CB\u8F6C\u5206\u91CF\u4E2D\u6765\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u3002 \u6539\u7F16\u81EA "),t("a",or,[e("here"),n(r)]),e(" \u6240\u6982\u8FF0\u7684\u65B9\u6CD5\u3002")]),t("h3",ar,[sr,e(" ."),t("a",hr,[e("setFromUnitVectors"),n(r)]),e(" ( vFrom : "),t("a",ir,[e("Vector3"),n(r)]),e(", vTo : "),t("a",lr,[e("Vector3"),n(r)]),e(" ) : this")]),t("p",null,[e("\u5C06\u8BE5\u56DB\u5143\u6570\u8BBE\u7F6E\u4E3A\u4ECE\u65B9\u5411\u5411\u91CF "),t("a",dr,[e("vFrom"),n(r)]),e(" \u65CB\u8F6C\u5230\u65B9\u5411\u5411\u91CF "),t("a",cr,[e("vTo"),n(r)]),e(" \u6240\u9700\u7684\u65CB\u8F6C\u3002 \u6539\u7F16\u81EA\u65B9\u6CD5 "),t("a",pr,[e("here"),n(r)]),e("\u3002 \u5047\u8BBE "),t("a",_r,[e("vFrom"),n(r)]),e(" \u548C "),t("a",fr,[e("vTo"),n(r)]),e(" \u90FD\u5DF2\u5F52\u4E00\u5316\u3002")]),t("h3",ur,[mr,e(" ."),t("a",gr,[e("toArray"),n(r)]),e(" ( array : Array, offset : Integer ) : Array")]),br,xr,t("h3",kr,[zr,e(" ."),t("a",yr,[e("fromBufferAttribute"),n(r)]),e(" ( attribute : "),t("a",Qr,[e("BufferAttribute"),n(r)]),e(", index : Integer ) : this")]),t("p",null,[t("a",jr,[e("attribute"),n(r)]),e(" - \u6E90 attribute\u3002 index - attribute \u4E2D\u7684\u7D22\u5F15\u3002")]),t("p",null,[e("\u4ECE "),t("a",qr,[e("attribute"),n(r)]),e(" \u4E2D\u8BBE\u7F6E\u8BE5\u56DB\u5143\u6570\u7684"),t("a",wr,[e("x"),n(r)]),e("\u3001 "),t("a",vr,[e("y"),n(r)]),e("\u3001 "),t("a",Fr,[e("z"),n(r)]),e("\u3001 "),t("a",Ar,[e("w"),n(r)]),e("\u5C5E\u6027\u3002")]),Er,t("h3",Vr,[Tr,e(" ."),t("a",Ir,[e("slerpFlat"),n(r)]),e(" ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer, t : Float ) : undefined")]),Or,Br,t("h3",Nr,[Rr,e(" ."),t("a",Mr,[e("multiplyQuaternionsFlat"),n(r)]),e(" ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer ) : Array")]),Sr,Hr])}var Gr=o(l,[["render",Lr],["__file","Quaternion.html.vue"]]);export{Gr as default};