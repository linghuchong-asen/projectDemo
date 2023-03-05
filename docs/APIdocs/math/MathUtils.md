# 数学函数(MathUtils)

具有多个数学实用函数的对象。

## 函数（Functions）

### .[clamp](https://threejs.org/docs/index.html#api/zh/math/MathUtils.clamp) ( value : Float, min : Float, max : Float ) : Float

value — 需要clamp处理的值。
min — 最小值。
max — 最大值。

限制数值value处于最小值min和最大值max之间。

### .[degToRad](https://threejs.org/docs/index.html#api/zh/math/MathUtils.degToRad) ( degrees : Float ) : Float

将度转化为弧度。

### .[euclideanModulo](https://threejs.org/docs/index.html#api/zh/math/MathUtils.euclideanModulo) ( n : Integer, m : Integer ) : Integer

n, m - 整型

计算 m % n 的欧几里得模:`( ( n % m ) + m ) % m`

### .[generateUUID](https://threejs.org/docs/index.html#api/zh/math/MathUtils.generateUUID) ( ) : UUID

创建一个全局唯一标识符 [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)。

### .[isPowerOfTwo](https://threejs.org/docs/index.html#api/zh/math/MathUtils.isPowerOfTwo) ( n : Number ) : Boolean

如果 n 是2的幂，返回true。

### .[inverseLerp](https://threejs.org/docs/index.html#api/zh/math/MathUtils.inverseLerp) ( x : Float, y : Float, value : Float ) : Float

x - 起始点
y - 终点
value - 介于起始点和终点的值

返回参数 value 在起点 x 与终点 y 的闭区间 [0,1] 中的百分比。

### .[lerp](https://threejs.org/docs/index.html#api/zh/math/MathUtils.lerp) ( x : Float, y : Float, t : Float ) : Float

x - 起始点。
y - 终点。
t - 闭区间 [0,1] 内的插值因子。

返回给定区间的线性插值[linearly interpolated](https://en.wikipedia.org/wiki/Linear_interpolation)结果 - t = 0 将会返回 x 如果 t = 1 将会返回 y.

### .[damp](https://threejs.org/docs/index.html#api/zh/math/MathUtils.damp) ( x : Float, y : Float, lambda : Float, dt : Float ) : Float

x - 当前点
y - 目标点
lambda - 较高的参数 lambda 值会使运动更加突然，而较低的值会使运动更加平缓。
dt - 以秒为单位的增量时间

使用 dt 以类似弹簧的方式从 x 向 y 平滑地插入一个数字，以保持与帧速率无关的运动。有关详细信息，请参阅 [Frame rate independent damping using lerp](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/).

### .[mapLinear](https://threejs.org/docs/index.html#api/zh/math/MathUtils.mapLinear) ( x : Float, a1 : Float, a2 : Float, b1 : Float, b2 : Float ) : Float

x — 用于映射的值。
a1 — A区间最小值。
a2 — A区间最大值。
b1 — B区间最小值。
b2 — B区间最大值。

x从范围[a1, a2] 到范围[b1, b2]的线性映射。

### .[pingpong](https://threejs.org/docs/index.html#api/zh/math/MathUtils.pingpong) ( x : Float, length : Float ) : Float

x — pingpong 的值
length — 函数将 pingpong 传递到的正值。默认值为 1。

返回一个介于 0 和 length : Float 之间的值。

### .[ceilPowerOfTwo](https://threejs.org/docs/index.html#api/zh/math/MathUtils.ceilPowerOfTwo) ( n : Number ) : Integer

返回大于等于 n 的2的最小次幂。

### .[floorPowerOfTwo](https://threejs.org/docs/index.html#api/zh/math/MathUtils.floorPowerOfTwo) ( n : Number ) : Integer

返回小于等于 n 的2的最大幂。

### .[radToDeg](https://threejs.org/docs/index.html#api/zh/math/MathUtils.radToDeg) ( radians : Float ) : Float

将弧度转换为角度。

### .[randFloat](https://threejs.org/docs/index.html#api/zh/math/MathUtils.randFloat) ( low : Float, high : Float ) : Float

在区间 [low, high] 内随机一个浮点数。

### .[randFloatSpread](https://threejs.org/docs/index.html#api/zh/math/MathUtils.randFloatSpread) ( range : Float ) : Float

在区间 [- range / 2, range / 2] 内随机一个浮点数。

### .[randInt](https://threejs.org/docs/index.html#api/zh/math/MathUtils.randInt) ( low : Integer, high : Integer ) : Integer

在区间 [low, high] 内随机一个整数。

### .[seededRandom](https://threejs.org/docs/index.html#api/zh/math/MathUtils.seededRandom) ( seed : Integer ) : Float

在区间 [0, 1] 中生成确定性的伪随机浮点数。 整数种子是可选的。

### .[smoothstep](https://threejs.org/docs/index.html#api/zh/math/MathUtils.smoothstep) ( x : Float, min : Float, max : Float ) : Float

x - 根据其在最小值和最大值之间的位置来计算的值。
min - 任何x比最小值还小会返回0.
max - 任何x比最大值还大会返回1.

返回0-1之间的值，该值表示x在最小值和最大值之间移动的百分比，但是当x接近最小值和最大值时，变化程度会平滑或减慢。

查看更多详情请移步到 [Smoothstep](http://en.wikipedia.org/wiki/Smoothstep) 。

### .[smootherstep](https://threejs.org/docs/index.html#api/zh/math/MathUtils.smootherstep) ( x : Float, min : Float, max : Float ) : Float

x - 根据其在最小值和最大值之间的位置来计算的值。
min - 任何x比最小值还小会返回0.
max - 任何x比最大值还大会返回0.

返回一个0-1之间的值。它和smoothstep相同，但变动更平缓。[variation on smoothstep](https://en.wikipedia.org/wiki/Smoothstep#Variations) 在x=0和x=1处有0阶和二阶导数。

### .[setQuaternionFromProperEuler](https://threejs.org/docs/index.html#api/zh/math/MathUtils.setQuaternionFromProperEuler) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), a : Float, b : Float, c : Float, order : String ) : undefined

[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 将被设置的的四元数。
a - 应用于第一个轴的旋转，以弧度为单位。
b - 应用于第二个轴的旋转，以弧度为单位。
c - 应用于第三个轴的旋转，以弧度为单位。
order - 指定轴旋转顺序的字符串：'XYX', 'XZX', 'YXY', 'YZY', 'ZXZ', 或 'ZYZ'

根据 a、b、c、order 组成的欧拉角 [intrinsic Proper Euler Angles](http://en.wikipedia.org/wiki/Euler_angles) 来设置四元数 [q](https://threejs.org/docs/index.html#api/zh/math/Quaternion)。
按照 order 指定的轴旋转顺序：先旋转角度 a，再旋转角度 b，最后旋转角度 c。角度以弧度为单位。