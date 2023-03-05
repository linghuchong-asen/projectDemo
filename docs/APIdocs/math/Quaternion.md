# 四元数（Quaternion）

该类实现了 [quaternion](http://en.wikipedia.org/wiki/Quaternion) 。
四元数在three.js中用于表示 [rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) （旋转）。

对 Quaternion 实例进行遍历将按相应的顺序生成它的分量 (x, y, z, w)。

## 代码示例

```js
const quaternion = new THREE.Quaternion(); 
quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ); 
const vector = new THREE.Vector3( 1, 0, 0 ); vector.applyQuaternion( quaternion );
```

## 构造函数

### Quaternion( x : Float, y : Float, z : Float, w : Float )

x - x 坐标
y - y 坐标
z - z 坐标
w - w 坐标

## 属性

### .[isQuaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion.isQuaternion) : Boolean

Read-only flag to check if a given object is of type Quaternion.

### .[x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x) : Float

### .[y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y) : Float

### .[z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z) : Float

### .[w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w) : Float

## 方法

### .[angleTo](https://threejs.org/docs/index.html#api/zh/math/Quaternion.angleTo) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : Float

以弧度返回该四元数与四元数 [q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 之间的夹角。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Quaternion.clone) () : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)

创建一个与该四元数具有相同[x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w) 属性的四元数。

### .[conjugate](https://threejs.org/docs/index.html#api/zh/math/Quaternion.conjugate) () : this

返回该四元数的旋转共轭。 四元数的共轭表示的是，围绕旋转轴在相反方向上的相同旋转。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Quaternion.copy) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

复制四元数 [q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 的 [x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z) 和 [w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w) 属性到该四元数中。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Quaternion.equals) ( v : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : Boolean

[v](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 用于进行比较的四元数。

将四元数 [v](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 的 [x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、 [y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、 [z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z) 和 [w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w) 的属性 与当前四元数的对应属性相比较，以确定它们是否表示相同的旋转。

### .[dot](https://threejs.org/docs/index.html#api/zh/math/Quaternion.dot) ( v : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : Float

计算四元数 [v](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 与当前四元数的[dot product](https://en.wikipedia.org/wiki/Dot_product)（点积）。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Quaternion.fromArray) ( array : Array, offset : Integer ) : this

array - 用于构造四元数的形如(x, y, z, w)的数组。
offset - （可选）数组的偏移量。（译者注：使用数组中从第offset元素算起的四个元素）

从一个数组来设置四元数的 [x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、 [y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z) 和 [w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w) 的属性。

### .[identity](https://threejs.org/docs/index.html#api/zh/math/Quaternion.identity) () : this

设置该四元数为 identity 四元数，即表示“不旋转”的四元数。

### .[invert](https://threejs.org/docs/index.html#api/zh/math/Quaternion.invert) () : this

翻转该四元数 —— 计算 [conjugate](https://threejs.org/docs/index.html#api/zh/math/Quaternion.conjugate) 。假定该四元数具有单位长度。

### .[length](https://threejs.org/docs/index.html#api/zh/math/Quaternion.length) () : Float

计算四元数的 [Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance) （欧几里得长度，直线长度），视为一个四维向量。

### .[lengthSq](https://threejs.org/docs/index.html#api/zh/math/Quaternion.lengthSq) () : Float

计算四元数 [Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance) （欧几里得长度，直线长度）的平方，视为一个四维向量。 如果要比较两个四元数的长度，这可能会十分有用， 因为这比 [length](https://threejs.org/docs/index.html#api/zh/math/Quaternion.length)() 的效率稍高一些。

### .[normalize](https://threejs.org/docs/index.html#api/zh/math/Quaternion.normalize) () : this

[Normalizes](https://en.wikipedia.org/wiki/Normalized_vector)（归一化）四元数 —— 即计算与该四元数具有相同旋转、但长度为**1**的四元数。

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiply) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

将该四元数与[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion)相乘。

### .[multiplyQuaternions](https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiplyQuaternions) ( a : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), b : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

将该四元数设为 [a](https://threejs.org/docs/index.html#api/zh/math/Quaternion) x [b](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 。
改编自 [here](http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm) 所概述的方法。

### .[premultiply](https://threejs.org/docs/index.html#api/zh/math/Quaternion.premultiply) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

使用 [q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 乘以该四元数。

### .[rotateTowards](https://threejs.org/docs/index.html#api/zh/math/Quaternion.rotateTowards) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), step : Float ) : this

[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 目标四元数
step - 以弧度为单位的角度步长

将该四元数按照步长 step 向目标 **q** 进行旋转。该方法确保最终的四元数不会超过 **q**。

### .[slerp](https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerp) ( qb : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), t : Float ) : this

[qb](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 另一个四元数旋转
t - 闭区间 [0, 1] 中的插值因子

处理四元数之间的球面线性插值。t 表示该四元数(其中 t 为 0) 和 [qb](https://threejs.org/docs/index.html#api/zh/math/Quaternion) (其中 t 为1) 之间的旋转量。 该四元数会被设置为上述计算的结果。另请参阅下面 **slerp** 的静态版本。`// rotate a mesh towards a target quaternion mesh.quaternion.slerp( endQuaternion, 0.01 );`

### .[slerpQuaternions](https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerpQuaternions) ( qa : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), qb : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), t : Float ) : this

在给定的四元数之间执行球面线性插值，并将结果存储在这个四元数中

### .[set](https://threejs.org/docs/index.html#api/zh/math/Quaternion.set) ( x : Float, y : Float, z : Float, w : Float ) : this

设置该四元数的 [x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w)属性。

### .[setFromAxisAngle](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromAxisAngle) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), angle : Float ) : this

从由 [axis](https://threejs.org/docs/index.html#api/zh/math/Vector3)（轴） 和 angle（角度）所给定的旋转来设置该四元数。
改编自 [here](http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm) 所述的方法。
假定**Axis**已被归一化，**angle**以弧度来表示。

### .[setFromEuler](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromEuler) ( euler : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) ) : this

从由 [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) 角所给定的旋转来设置该四元数。

### .[setFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromRotationMatrix) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

从[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)的旋转分量中来设置该四元数。
改编自 [here](http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm) 所概述的方法。

### .[setFromUnitVectors](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromUnitVectors) ( vFrom : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), vTo : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

将该四元数设置为从方向向量 [vFrom](https://threejs.org/docs/index.html#api/zh/math/Vector3) 旋转到方向向量 [vTo](https://threejs.org/docs/index.html#api/zh/math/Vector3) 所需的旋转。
改编自方法 [here](http://lolengine.net/blog/2013/09/18/beautiful-maths-quaternion-from-vectors)。
假设 [vFrom](https://threejs.org/docs/index.html#api/zh/math/Vector3) 和 [vTo](https://threejs.org/docs/index.html#api/zh/math/Vector3) 都已归一化。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Quaternion.toArray) ( array : Array, offset : Integer ) : Array

array - （可选）存储该四元数的数组。若未指定该参数，则将创建一个新数组。
offset - （可选）若指定了该值，结果将会被拷贝到该 Array。

在形如[x, y, z, w]的数组中，返回四元数中的数字元素。

### .[fromBufferAttribute](https://threejs.org/docs/index.html#api/zh/math/Quaternion.fromBufferAttribute) ( attribute : [BufferAttribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute), index : Integer ) : this

[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) - 源 attribute。
index - attribute 中的索引。

从 [attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) 中设置该四元数的[x](https://threejs.org/docs/index.html#api/zh/math/Quaternion.x)、 [y](https://threejs.org/docs/index.html#api/zh/math/Quaternion.y)、 [z](https://threejs.org/docs/index.html#api/zh/math/Quaternion.z)、 [w](https://threejs.org/docs/index.html#api/zh/math/Quaternion.w)属性。

## 静态方法

### .[slerpFlat](https://threejs.org/docs/index.html#api/zh/math/Quaternion.slerpFlat) ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer, t : Float ) : undefined

dst - 输出数组
dstOffset - 输出数组的偏移量
src0 - 起始四元数的源数组
srcOffset0 - 数组 **src0** 的偏移量
src1 - 目标四元数的源数组
srcOffset1 - 数组 **src1** 的偏移量
t - 归一化插值因子(介于 0 和 1 之间)

This SLERP implementation assumes the quaternion data are managed in flat arrays.

### .[multiplyQuaternionsFlat](https://threejs.org/docs/index.html#api/zh/math/Quaternion.multiplyQuaternionsFlat) ( dst : Array, dstOffset : Integer, src0 : Array, srcOffset0 : Integer, src1 : Array, srcOffset1 : Integer ) : Array

dst - The output array.
dstOffset - An offset into the output array.
src0 - The source array of the starting quaternion.
srcOffset0 - An offset into the array **src0**.
src1 - The source array of the target quaternion.
srcOffset1 - An offset into the array **src1**.

This multiplication implementation assumes the quaternion data are managed in flat arrays.