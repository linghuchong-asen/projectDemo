import{_ as s,V as o,W as i,X as e,Y as a,$ as t,a0 as n,Z as d,D as h}from"./framework-13182686.js";const c={},p=e("h1",{id:"场景-scene",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#场景-scene","aria-hidden":"true"},"#"),a(" 场景(Scene)")],-1),l=e("p",null,"场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。",-1),_=e("h2",{id:"属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),a(" 属性")],-1),f={id:"camera-camera",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#camera-camera","aria-hidden":"true"},"#",-1),g=e("p",null,"🚩",-1),m=e("p",null,"获取或者设置相机。",-1),x={id:"primitives-primitivegroup",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#primitives-primitivegroup","aria-hidden":"true"},"#",-1),v=d('<p>🚩</p><p>获取要素的合集。</p><h3 id="fog" tabindex="-1"><a class="header-anchor" href="#fog" aria-hidden="true">#</a> <strong><a href="">fog</a></strong></h3><p>雾。默认undefined。</p><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> <strong><a href="">light</a></strong></h3><p>🚩</p><p>灯光。有PointLight与DirectionalLight两种，默认DirectionalLight。</p><h3 id="postprocessstages" tabindex="-1"><a class="header-anchor" href="#postprocessstages" aria-hidden="true">#</a> <strong><a href="">postProcessStages</a></strong></h3><p>后处理效果应用于最终渲染。</p><h3 id="postrender" tabindex="-1"><a class="header-anchor" href="#postrender" aria-hidden="true">#</a> <strong><a href="">postRender</a></strong></h3><p>获取将在渲染场景后立即引发的事件。活动订阅者接收Scene实例作为第一个参数，并接收当前时间作为第二个参数。</p><h3 id="prerender" tabindex="-1"><a class="header-anchor" href="#prerender" aria-hidden="true">#</a> <strong><a href="">preRender</a></strong></h3><p>获取在场景更新之后以及场景渲染之前立即引发的事件。事件的订阅者将Scene实例作为第一个参数，将当前时间作为第二个参数参数。</p><h3 id="skybox" tabindex="-1"><a class="header-anchor" href="#skybox" aria-hidden="true">#</a> <strong><a href="">skyBox</a></strong></h3><p>天空盒。默认<code>undefined</code>。</p><h3 id="screenspacecameracontroller" tabindex="-1"><a class="header-anchor" href="#screenspacecameracontroller" aria-hidden="true">#</a> <strong><a href="">screenSpaceCameraController</a></strong></h3><p><code>readOnly</code></p><p>屏幕空间相机控制器；把屏幕空间的用户输入（鼠标拖拽点击或者触摸事件）转换为三维世界的相机移动。它包含一些属性，可以启用/禁用某种用户输入，修改惯性、最小最大缩放距离等。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>',19);function S(k,C){const r=h("RouterLink");return o(),i("div",null,[p,l,_,e("h3",f,[u,a(" camera: "),t(r,{to:"/APIdocs/core/Camera.html"},{default:n(()=>[a("Camera")]),_:1})]),g,m,e("h3",x,[b,a(" primitives: "),t(r,{to:"/APIdocs/primitive/PrimitiveGroup.html"},{default:n(()=>[a("PrimitiveGroup")]),_:1})]),v])}const L=s(c,[["render",S],["__file","Scene.html.vue"]]);export{L as default};
