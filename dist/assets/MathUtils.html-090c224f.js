import{_ as r,V as n,W as l,X as e,Y as t,$ as a,D as h}from"./framework-13182686.js";const s={},i=e("h1",{id:"数学函数-mathutils",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数学函数-mathutils","aria-hidden":"true"},"#"),t(" 数学函数(MathUtils)")],-1),d=e("p",null,"具有多个数学实用函数的对象。",-1),_=e("h2",{id:"函数-functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#函数-functions","aria-hidden":"true"},"#"),t(" 函数（Functions）")],-1),f={id:"clamp-value-float-min-float-max-float-float",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#clamp-value-float-min-float-max-float-float","aria-hidden":"true"},"#",-1),p={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.clamp",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"value — 需要clamp处理的值。 min — 最小值。 max — 最大值。",-1),g=e("p",null,"限制数值value处于最小值min和最大值max之间。",-1),u={id:"degtorad-degrees-float-float",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#degtorad-degrees-float-float","aria-hidden":"true"},"#",-1),b={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.degToRad",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"将度转化为弧度。",-1),w={id:"euclideanmodulo-n-integer-m-integer-integer",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#euclideanmodulo-n-integer-m-integer-integer","aria-hidden":"true"},"#",-1),U={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.euclideanModulo",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"n, m - 整型",-1),j=e("p",null,[t("计算 m % n 的欧几里得模:"),e("code",null,"( ( n % m ) + m ) % m")],-1),z={id:"generateuuid-uuid",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#generateuuid-uuid","aria-hidden":"true"},"#",-1),y={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.generateUUID",target:"_blank",rel:"noopener noreferrer"},I={href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"},T={id:"ispoweroftwo-n-number-boolean",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#ispoweroftwo-n-number-boolean","aria-hidden":"true"},"#",-1),P={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.isPowerOfTwo",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"如果 n 是2的幂，返回true。",-1),E={id:"inverselerp-x-float-y-float-value-float-float",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#inverselerp-x-float-y-float-value-float-float","aria-hidden":"true"},"#",-1),X={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.inverseLerp",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,"x - 起始点 y - 终点 value - 介于起始点和终点的值",-1),B=e("p",null,"返回参数 value 在起点 x 与终点 y 的闭区间 [0,1] 中的百分比。",-1),N={id:"lerp-x-float-y-float-t-float-float",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#lerp-x-float-y-float-t-float-float","aria-hidden":"true"},"#",-1),Q={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.lerp",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"x - 起始点。 y - 终点。 t - 闭区间 [0,1] 内的插值因子。",-1),Z={href:"https://en.wikipedia.org/wiki/Linear_interpolation",target:"_blank",rel:"noopener noreferrer"},V={id:"damp-x-float-y-float-lambda-float-dt-float-float",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#damp-x-float-y-float-lambda-float-dt-float-float","aria-hidden":"true"},"#",-1),A={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.damp",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"x - 当前点 y - 目标点 lambda - 较高的参数 lambda 值会使运动更加突然，而较低的值会使运动更加平缓。 dt - 以秒为单位的增量时间",-1),W={href:"http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/",target:"_blank",rel:"noopener noreferrer"},$={id:"maplinear-x-float-a1-float-a2-float-b1-float-b2-float-float",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#maplinear-x-float-a1-float-a2-float-b1-float-b2-float-float","aria-hidden":"true"},"#",-1),H={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.mapLinear",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,"x — 用于映射的值。 a1 — A区间最小值。 a2 — A区间最大值。 b1 — B区间最小值。 b2 — B区间最大值。",-1),K=e("p",null,"x从范围[a1, a2] 到范围[b1, b2]的线性映射。",-1),ee={id:"pingpong-x-float-length-float-float",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#pingpong-x-float-length-float-float","aria-hidden":"true"},"#",-1),oe={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.pingpong",target:"_blank",rel:"noopener noreferrer"},ae=e("p",null,"x — pingpong 的值 length — 函数将 pingpong 传递到的正值。默认值为 1。",-1),re=e("p",null,"返回一个介于 0 和 length : Float 之间的值。",-1),ne={id:"ceilpoweroftwo-n-number-integer",tabindex:"-1"},le=e("a",{class:"header-anchor",href:"#ceilpoweroftwo-n-number-integer","aria-hidden":"true"},"#",-1),he={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.ceilPowerOfTwo",target:"_blank",rel:"noopener noreferrer"},se=e("p",null,"返回大于等于 n 的2的最小次幂。",-1),ie={id:"floorpoweroftwo-n-number-integer",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#floorpoweroftwo-n-number-integer","aria-hidden":"true"},"#",-1),_e={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.floorPowerOfTwo",target:"_blank",rel:"noopener noreferrer"},fe=e("p",null,"返回小于等于 n 的2的最大幂。",-1),ce={id:"radtodeg-radians-float-float",tabindex:"-1"},pe=e("a",{class:"header-anchor",href:"#radtodeg-radians-float-float","aria-hidden":"true"},"#",-1),me={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.radToDeg",target:"_blank",rel:"noopener noreferrer"},ge=e("p",null,"将弧度转换为角度。",-1),ue={id:"randfloat-low-float-high-float-float",tabindex:"-1"},xe=e("a",{class:"header-anchor",href:"#randfloat-low-float-high-float-float","aria-hidden":"true"},"#",-1),be={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.randFloat",target:"_blank",rel:"noopener noreferrer"},Fe=e("p",null,"在区间 [low, high] 内随机一个浮点数。",-1),we={id:"randfloatspread-range-float-float",tabindex:"-1"},ke=e("a",{class:"header-anchor",href:"#randfloatspread-range-float-float","aria-hidden":"true"},"#",-1),Ue={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.randFloatSpread",target:"_blank",rel:"noopener noreferrer"},Me=e("p",null,"在区间 [- range / 2, range / 2] 内随机一个浮点数。",-1),je={id:"randint-low-integer-high-integer-integer",tabindex:"-1"},ze=e("a",{class:"header-anchor",href:"#randint-low-integer-high-integer-integer","aria-hidden":"true"},"#",-1),ve={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.randInt",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"在区间 [low, high] 内随机一个整数。",-1),Ie={id:"seededrandom-seed-integer-float",tabindex:"-1"},Te=e("a",{class:"header-anchor",href:"#seededrandom-seed-integer-float","aria-hidden":"true"},"#",-1),qe={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.seededRandom",target:"_blank",rel:"noopener noreferrer"},Pe=e("p",null,"在区间 [0, 1] 中生成确定性的伪随机浮点数。 整数种子是可选的。",-1),De={id:"smoothstep-x-float-min-float-max-float-float",tabindex:"-1"},Ee=e("a",{class:"header-anchor",href:"#smoothstep-x-float-min-float-max-float-float","aria-hidden":"true"},"#",-1),Le={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.smoothstep",target:"_blank",rel:"noopener noreferrer"},Xe=e("p",null,"x - 根据其在最小值和最大值之间的位置来计算的值。 min - 任何x比最小值还小会返回0. max - 任何x比最大值还大会返回1.",-1),Ye=e("p",null,"返回0-1之间的值，该值表示x在最小值和最大值之间移动的百分比，但是当x接近最小值和最大值时，变化程度会平滑或减慢。",-1),Be={href:"http://en.wikipedia.org/wiki/Smoothstep",target:"_blank",rel:"noopener noreferrer"},Ne={id:"smootherstep-x-float-min-float-max-float-float",tabindex:"-1"},Oe=e("a",{class:"header-anchor",href:"#smootherstep-x-float-min-float-max-float-float","aria-hidden":"true"},"#",-1),Qe={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.smootherstep",target:"_blank",rel:"noopener noreferrer"},Se=e("p",null,"x - 根据其在最小值和最大值之间的位置来计算的值。 min - 任何x比最小值还小会返回0. max - 任何x比最大值还大会返回0.",-1),Ze={href:"https://en.wikipedia.org/wiki/Smoothstep#Variations",target:"_blank",rel:"noopener noreferrer"},Ve={id:"setquaternionfrompropereuler-q-quaternion-a-float-b-float-c-float-order-string-undefined",tabindex:"-1"},Re=e("a",{class:"header-anchor",href:"#setquaternionfrompropereuler-q-quaternion-a-float-b-float-c-float-order-string-undefined","aria-hidden":"true"},"#",-1),Ae={href:"https://threejs.org/docs/index.html#api/zh/math/MathUtils.setQuaternionFromProperEuler",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},We={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"},$e={href:"http://en.wikipedia.org/wiki/Euler_angles",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://threejs.org/docs/index.html#api/zh/math/Quaternion",target:"_blank",rel:"noopener noreferrer"};function He(Je,Ke){const o=h("ExternalLinkIcon");return n(),l("div",null,[i,d,_,e("h3",f,[c,t(" ."),e("a",p,[t("clamp"),a(o)]),t(" ( value : Float, min : Float, max : Float ) : Float")]),m,g,e("h3",u,[x,t(" ."),e("a",b,[t("degToRad"),a(o)]),t(" ( degrees : Float ) : Float")]),F,e("h3",w,[k,t(" ."),e("a",U,[t("euclideanModulo"),a(o)]),t(" ( n : Integer, m : Integer ) : Integer")]),M,j,e("h3",z,[v,t(" ."),e("a",y,[t("generateUUID"),a(o)]),t(" ( ) : UUID")]),e("p",null,[t("创建一个全局唯一标识符 "),e("a",I,[t("UUID"),a(o)]),t("。")]),e("h3",T,[q,t(" ."),e("a",P,[t("isPowerOfTwo"),a(o)]),t(" ( n : Number ) : Boolean")]),D,e("h3",E,[L,t(" ."),e("a",X,[t("inverseLerp"),a(o)]),t(" ( x : Float, y : Float, value : Float ) : Float")]),Y,B,e("h3",N,[O,t(" ."),e("a",Q,[t("lerp"),a(o)]),t(" ( x : Float, y : Float, t : Float ) : Float")]),S,e("p",null,[t("返回给定区间的线性插值"),e("a",Z,[t("linearly interpolated"),a(o)]),t("结果 - t = 0 将会返回 x 如果 t = 1 将会返回 y.")]),e("h3",V,[R,t(" ."),e("a",A,[t("damp"),a(o)]),t(" ( x : Float, y : Float, lambda : Float, dt : Float ) : Float")]),C,e("p",null,[t("使用 dt 以类似弹簧的方式从 x 向 y 平滑地插入一个数字，以保持与帧速率无关的运动。有关详细信息，请参阅 "),e("a",W,[t("Frame rate independent damping using lerp"),a(o)]),t(".")]),e("h3",$,[G,t(" ."),e("a",H,[t("mapLinear"),a(o)]),t(" ( x : Float, a1 : Float, a2 : Float, b1 : Float, b2 : Float ) : Float")]),J,K,e("h3",ee,[te,t(" ."),e("a",oe,[t("pingpong"),a(o)]),t(" ( x : Float, length : Float ) : Float")]),ae,re,e("h3",ne,[le,t(" ."),e("a",he,[t("ceilPowerOfTwo"),a(o)]),t(" ( n : Number ) : Integer")]),se,e("h3",ie,[de,t(" ."),e("a",_e,[t("floorPowerOfTwo"),a(o)]),t(" ( n : Number ) : Integer")]),fe,e("h3",ce,[pe,t(" ."),e("a",me,[t("radToDeg"),a(o)]),t(" ( radians : Float ) : Float")]),ge,e("h3",ue,[xe,t(" ."),e("a",be,[t("randFloat"),a(o)]),t(" ( low : Float, high : Float ) : Float")]),Fe,e("h3",we,[ke,t(" ."),e("a",Ue,[t("randFloatSpread"),a(o)]),t(" ( range : Float ) : Float")]),Me,e("h3",je,[ze,t(" ."),e("a",ve,[t("randInt"),a(o)]),t(" ( low : Integer, high : Integer ) : Integer")]),ye,e("h3",Ie,[Te,t(" ."),e("a",qe,[t("seededRandom"),a(o)]),t(" ( seed : Integer ) : Float")]),Pe,e("h3",De,[Ee,t(" ."),e("a",Le,[t("smoothstep"),a(o)]),t(" ( x : Float, min : Float, max : Float ) : Float")]),Xe,Ye,e("p",null,[t("查看更多详情请移步到 "),e("a",Be,[t("Smoothstep"),a(o)]),t(" 。")]),e("h3",Ne,[Oe,t(" ."),e("a",Qe,[t("smootherstep"),a(o)]),t(" ( x : Float, min : Float, max : Float ) : Float")]),Se,e("p",null,[t("返回一个0-1之间的值。它和smoothstep相同，但变动更平缓。"),e("a",Ze,[t("variation on smoothstep"),a(o)]),t(" 在x=0和x=1处有0阶和二阶导数。")]),e("h3",Ve,[Re,t(" ."),e("a",Ae,[t("setQuaternionFromProperEuler"),a(o)]),t(" ( q : "),e("a",Ce,[t("Quaternion"),a(o)]),t(", a : Float, b : Float, c : Float, order : String ) : undefined")]),e("p",null,[e("a",We,[t("q"),a(o)]),t(" - 将被设置的的四元数。 a - 应用于第一个轴的旋转，以弧度为单位。 b - 应用于第二个轴的旋转，以弧度为单位。 c - 应用于第三个轴的旋转，以弧度为单位。 order - 指定轴旋转顺序的字符串：'XYX', 'XZX', 'YXY', 'YZY', 'ZXZ', 或 'ZYZ'")]),e("p",null,[t("根据 a、b、c、order 组成的欧拉角 "),e("a",$e,[t("intrinsic Proper Euler Angles"),a(o)]),t(" 来设置四元数 "),e("a",Ge,[t("q"),a(o)]),t("。 按照 order 指定的轴旋转顺序：先旋转角度 a，再旋转角度 b，最后旋转角度 c。角度以弧度为单位。")])])}const tt=r(s,[["render",He],["__file","MathUtils.html.vue"]]);export{tt as default};
