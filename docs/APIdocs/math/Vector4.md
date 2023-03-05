# 四维向量（Vector4）

该类表示的是一个三维向量（4D [vector](https://en.wikipedia.org/wiki/Vector_space)）。 一个四维向量表示的是一个有顺序的、四个为一组的数字组合（标记为x、y和z）， 可被用来表示很多事物，例如：

- 一个位于四维空间中的点。
- 一个在四维空间中的方向与长度的定义。在three.js中，长度总是从(0, 0, 0, 0)到(x, y, z, w)的 [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)（欧几里德距离，即直线距离）， 方向也是从(0, 0, 0, 0)到(x, y, z, w)的方向。
- 任意的、有顺序的、四个为一组的数字组合。

其他的一些事物也可以使用四维向量进行表示，但以上这些是它在three.js中的常用用途。

## 代码示例

```js
const a = new THREE.Vector4( 0, 1, 0, 0 ); //no arguments; will be initialised to (0, 0, 0, 1) const b = new THREE.Vector4( ); const d = a.dot( b );
```

对 Vector4 实例进行遍历将按相应的顺序生成它的分量 (x, y, z, w)。

## 构造函数

### Vector4( x : Float, y : Float, z : Float, w : Float )

x - 向量的x值，默认为**0**。
y - 向量的y值，默认为**0**。
z - 向量的z值，默认为**0**。
w - 向量的w值，默认为**1**。

创建一个新的Vector4。

## 属性

### .[isVector4](https://threejs.org/docs/index.html#api/zh/math/Vector4.isVector4) : Boolean

Read-only flag to check if a given object is of type Vector4.

### .[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x) : Float

### .[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y) : Float

### .[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z) : Float

### .[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w) : Float

### .[width](https://threejs.org/docs/index.html#api/zh/math/Vector4.width) : Float

[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)的别名。

### .[height](https://threejs.org/docs/index.html#api/zh/math/Vector4.height) : Float

[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)的别名。

## 方法

### .[add](https://threejs.org/docs/index.html#api/zh/math/Vector4.add) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

将传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)和这个向量相加。

### .[addScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.addScalar) ( s : Float ) : this

将传入的标量s和这个向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值以及[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值相加。

### .[addScaledVector](https://threejs.org/docs/index.html#api/zh/math/Vector4.addScaledVector) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), s : Float ) : this

将所传入的[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)与s相乘所得的乘积和这个向量相加。

### .[addVectors](https://threejs.org/docs/index.html#api/zh/math/Vector4.addVectors) ( a : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), b : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

将该向量设置为[a](https://threejs.org/docs/index.html#api/zh/math/Vector4) + [b](https://threejs.org/docs/index.html#api/zh/math/Vector4).

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Vector4.applyMatrix4) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将该向量乘以四阶矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)。

### .[ceil](https://threejs.org/docs/index.html#api/zh/math/Vector4.ceil) () : this

将该向量[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)分量、 [y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)分量[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)分量以及[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)分量向上取整为最接近的整数。

### .[clamp](https://threejs.org/docs/index.html#api/zh/math/Vector4.clamp) ( min : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), max : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

[min](https://threejs.org/docs/index.html#api/zh/math/Vector4) - 在限制范围内，[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值以及[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值的最小值
[max](https://threejs.org/docs/index.html#api/zh/math/Vector4) - 在限制范围内，[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值以及[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值的最大值

如果该向量的x值、y值、z值或w值大于限制范围内最大x值、y值、z值或w值，则该值将会被所对应的值取代。

如果该向量的x值、y值、z值或w值小于限制范围内最小x值、y值、z值或w值，则该值将会被所对应的值取代。

### .[clampLength](https://threejs.org/docs/index.html#api/zh/math/Vector4.clampLength) ( min : Float, max : Float ) : this

min - 长度将被限制为的最小值
max - 长度将被限制为的最大值

如果向量长度大于最大值，则它将会被最大值所取代。

如果向量长度小于最小值，则它将会被最小值所取代。

### .[clampScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.clampScalar) ( min : Float, max : Float ) : this

min - 分量将被限制为的最小值
max - 分量将被限制为的最大值

如果该向量的x值、y值、z值或w值大于最大值，则它们将被最大值所取代。

如果该向量的x值、y值、z值或w值小于最小值，则它们将被最小值所取代。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Vector4.clone) () : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4)

返回一个新的Vector4，其具有和当前这个向量相同的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Vector4.copy) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

将所传入Vector4的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)属性复制给这一Vector4。

### .[divideScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.divideScalar) ( s : Float ) : this

将该向量除以标量s。

### .[dot](https://threejs.org/docs/index.html#api/zh/math/Vector4.dot) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : Float

计算该vector和所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector4) 的点积（[dot product](https://en.wikipedia.org/wiki/Dot_product)）。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Vector4.equals) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : Boolean

检查该向量和[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)的严格相等性。

### .[floor](https://threejs.org/docs/index.html#api/zh/math/Vector4.floor) () : this

向量的分量向下取整为最接近的整数值。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Vector4.fromArray) ( array : Array, offset : Integer ) : this

array - 来源矩阵。
offset - （可选）在数组中的元素偏移量，默认值为0。

设置向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值为array[ offset + 0 ]，[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值为array[ offset + 1 ]， [z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值为array[ offset + 2 ]，[w ](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值为array[ offset + 3 ]。

### .[fromBufferAttribute](https://threejs.org/docs/index.html#api/zh/math/Vector4.fromBufferAttribute) ( attribute : [BufferAttribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute), index : Integer ) : this

[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) - 来源的attribute。
index - 在attribute中的索引。

从[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute)中设置向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值。

### .[getComponent](https://threejs.org/docs/index.html#api/zh/math/Vector4.getComponent) ( index : Integer ) : Float

index - 0, 1, 2 or 3.

如果index值为0返回[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值。
如果index值为1返回[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值。
如果index值为2返回[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值。
如果index值为3返回[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值。

### .[length](https://threejs.org/docs/index.html#api/zh/math/Vector4.length) () : Float

计算从(0, 0, 0, 0) 到 (x, y, z, w)的欧几里得长度 （[Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance)，即直线长度）。

### .[manhattanLength](https://threejs.org/docs/index.html#api/zh/math/Vector4.manhattanLength) () : Float

计算该向量的曼哈顿长度（[Manhattan length](http://en.wikipedia.org/wiki/Taxicab_geometry)）。

### .[lengthSq](https://threejs.org/docs/index.html#api/zh/math/Vector4.lengthSq) () : Float

计算从(0, 0, 0, 0)到(x, y, z, w)的欧几里得长度 （[Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance)，即直线长度）的平方。 如果你正在比较向量的长度，应当比较的是长度的平方，因为它的计算效率更高一些。

### .[lerp](https://threejs.org/docs/index.html#api/zh/math/Vector4.lerp) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), alpha : Float ) : this

[v](https://threejs.org/docs/index.html#api/zh/math/Vector4) - 朝着进行插值的[Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4)。
alpha - 插值因数，其范围通常在[0, 1]闭区间。

在该向量与传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)之间的线性插值，alpha是沿着线的长度的百分比 —— alpha = 0 时表示的是当前向量，alpha = 1 时表示的是所传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)。

### .[lerpVectors](https://threejs.org/docs/index.html#api/zh/math/Vector4.lerpVectors) ( v1 : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), v2 : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), alpha : Float ) : this

[v1](https://threejs.org/docs/index.html#api/zh/math/Vector4) - 起始的[Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4)。
[v2](https://threejs.org/docs/index.html#api/zh/math/Vector4) - 朝着进行插值的[Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4)。
alpha - 插值因数，其范围在[0, 1]闭区间。

将此向量设置为在[v1](https://threejs.org/docs/index.html#api/zh/math/Vector4)和[v2](https://threejs.org/docs/index.html#api/zh/math/Vector4)之间进行线性插值的向量， 其中alpha为两个向量之间连线的长度的百分比 —— alpha = 0 时表示的是[v1](https://threejs.org/docs/index.html#api/zh/math/Vector4)，alpha = 1 时表示的是[v2](https://threejs.org/docs/index.html#api/zh/math/Vector4)。

### .[negate](https://threejs.org/docs/index.html#api/zh/math/Vector4.negate) () : this

向量取反，即： x = -x, y = -y, z = -z , w = -w。

### .[normalize](https://threejs.org/docs/index.html#api/zh/math/Vector4.normalize) () : this

将该向量转换为单位向量（[unit vector](https://en.wikipedia.org/wiki/Unit_vector)）， 也就是说，将该向量的方向设置为和原向量相同，但是其长度（[length](https://threejs.org/docs/index.html#api/zh/math/Vector4.length)）为1。

### .[max](https://threejs.org/docs/index.html#api/zh/math/Vector4.max) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

如果该向量的x值、y值、z值或w值小于所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)的x值、y值、z值或w值， 则将该值替换为对应的最大值。

### .[min](https://threejs.org/docs/index.html#api/zh/math/Vector4.min) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

如果该向量的x值、y值、z值或w值大于所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)的x值、y值、z值或w值， 则将该值替换为对应的最小值。

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Vector4.multiply) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

将该向量与所传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)进行相乘。

### .[multiplyScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.multiplyScalar) ( s : Float ) : this

将该向量与所传入的标量s进行相乘。

### .[round](https://threejs.org/docs/index.html#api/zh/math/Vector4.round) () : this

向量中的分量四舍五入取整为最接近的整数值。

### .[roundToZero](https://threejs.org/docs/index.html#api/zh/math/Vector4.roundToZero) () : this

向量中的分量朝向0取整数（若分量为负数则向上取整，若为正数则向下取整）

### .[set](https://threejs.org/docs/index.html#api/zh/math/Vector4.set) ( x : Float, y : Float, z : Float, w : Float ) : this

设置该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)分量。

### .[setAxisAngleFromQuaternion](https://threejs.org/docs/index.html#api/zh/math/Vector4.setAxisAngleFromQuaternion) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 归一化的[Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)（四元数）

将该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)和[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)分量设置为四元数的轴， [w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)分量设置为四元数的角度。

### .[setAxisAngleFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Vector4.setAxisAngleFromRotationMatrix) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - 一个[Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)（四阶矩阵），其左上角3x3的元素表示的是一个纯旋转矩。

将该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)和[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)设置为旋转轴，[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)为角度。

### .[setComponent](https://threejs.org/docs/index.html#api/zh/math/Vector4.setComponent) ( index : Integer, value : Float ) : this

index - 0、1、2 或 3。
value - Float

若index为 0 则设置 [x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x) 值为 value。
若index为 1 则设置 [y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y) 值为 value。
若index为 2 则设置 [z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z) 值为 value。
若index为 3 则设置 [w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w) 值为 value。

### .[setLength](https://threejs.org/docs/index.html#api/zh/math/Vector4.setLength) ( l : Float ) : this

将该向量的方向设置为和原向量相同，但是长度（[length](https://threejs.org/docs/index.html#api/zh/math/Vector4.length)）为l。

### .[setScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.setScalar) ( scalar : Float ) : this

将该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)同时设置为等于传入的scalar。

### .[setX](https://threejs.org/docs/index.html#api/zh/math/Vector4.setX) ( x : Float ) : this

将向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)值替换为x。

### .[setY](https://threejs.org/docs/index.html#api/zh/math/Vector4.setY) ( y : Float ) : this

将向量中的[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)值替换为y。

### .[setZ](https://threejs.org/docs/index.html#api/zh/math/Vector4.setZ) ( z : Float ) : this

将向量中的[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)值替换为z。

### .[setW](https://threejs.org/docs/index.html#api/zh/math/Vector4.setW) ( w : Float ) : this

将向量中的[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)值替换为w。

### .[sub](https://threejs.org/docs/index.html#api/zh/math/Vector4.sub) ( v : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

从该向量减去向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector4)。

### .[subScalar](https://threejs.org/docs/index.html#api/zh/math/Vector4.subScalar) ( s : Float ) : this

从该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector4.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector4.y)、[z](https://threejs.org/docs/index.html#api/zh/math/Vector4.z)和[w](https://threejs.org/docs/index.html#api/zh/math/Vector4.w)分量中减去标量s。

### .[subVectors](https://threejs.org/docs/index.html#api/zh/math/Vector4.subVectors) ( a : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4), b : [Vector4](https://threejs.org/docs/index.html#api/zh/math/Vector4) ) : this

将该向量设置为[a](https://threejs.org/docs/index.html#api/zh/math/Vector4) - [b](https://threejs.org/docs/index.html#api/zh/math/Vector4)。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Vector4.toArray) ( array : Array, offset : Integer ) : Array

array - （可选）被用于存储向量的数组。如果这个值没有传入，则将创建一个新的数组。
offset - （可选） 数组中元素的偏移量。

返回一个数组[x, y, z, w]，或者将x、y、z和w复制到所传入的array中。

### .[random](https://threejs.org/docs/index.html#api/zh/math/Vector4.random) () : this

将该向量的每个分量(x、y、z、w)设置为介于 0 和 1 之间的伪随机数，不包括 1。