# 二维向量（Vector2）

表示2D [vector](https://en.wikipedia.org/wiki/Vector_space)（二维向量）的类。 一个二维向量是一对有顺序的数字（标记为x和y），可用来表示很多事物，例如：

- 一个位于二维空间中的点（例如一个在平面上的点）。
- 一个在平面上的方向与长度的定义。在three.js中，长度总是从(0, 0)到(x, y)的 [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)（欧几里德距离，即直线距离）， 方向也是从(0, 0)到(x, y)的方向。
- 任意的、有顺序的一对数字。

其他的一些事物也可以使用二维向量进行表示，比如说动量矢量、复数等等；但以上这些是它在three.js中的常用用途。

对 Vector2 实例进行遍历将按相应的顺序生成它的分量 (x, y)。

## 代码示例

```js
const a = new THREE.Vector2( 0, 1 ); //no arguments; will be initialised to (0, 0) 
const b = new THREE.Vector2( ); 
const d = a.distanceTo( b );
```

## 构造函数

### Vector2( x : number, y : number)

x - 向量的x值，默认为**0**。
y - 向量的y值，默认为**0**。

创建一个新的Vector2。

## 属性

### .[height](https://threejs.org/docs/index.html#api/zh/math/Vector2.height) : Float

[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)的别名。

### .[isVector2](https://threejs.org/docs/index.html#api/zh/math/Vector2.isVector2) : Boolean

Read-only flag to check if a given object is of type Vector2.

### .[width](https://threejs.org/docs/index.html#api/zh/math/Vector2.width) : Float

[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)的别名。

### .[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x) : Float

### .[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y) : Float

## 方法

### .[addScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.addScalar) ( s : Float ) : this

将传入的标量s和这个向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值、[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值相加。

### .[addScaledVector](https://threejs.org/docs/index.html#api/zh/math/Vector2.addScaledVector) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), s : Float ) : this

将所传入的[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)与s相乘所得乘积和这个向量相加。

### .[addVectors](https://threejs.org/docs/index.html#api/zh/math/Vector2.addVectors) ( a : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), b : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

将该向量设置为 [a](https://threejs.org/docs/index.html#api/zh/math/Vector2) + [b](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[angle](https://threejs.org/docs/index.html#api/zh/math/Vector2.angle) () : Float

计算该向量相对于x轴正方向的弧度角度。

### .[applyMatrix3](https://threejs.org/docs/index.html#api/zh/math/Vector2.applyMatrix3) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

将该向量乘以三阶矩阵m（第三个值隐式地为1）。

### .[ceil](https://threejs.org/docs/index.html#api/zh/math/Vector2.ceil) () : this

向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)分量和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)分量向上取整为最接近的整数值。

### .[clamp](https://threejs.org/docs/index.html#api/zh/math/Vector2.clamp) ( min : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), max : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[min](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 在限制范围内，x和y的最小值。
[max](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 在限制范围内，x和y的最大值。

如果该向量的x值或y值大于限制范围内最大x值或y值，则该值将会被所对应的值取代。

如果该向量的x值或y值小于限制范围内最小x值或y值，则该值将会被所对应的值取代。

### .[clampLength](https://threejs.org/docs/index.html#api/zh/math/Vector2.clampLength) ( min : Float, max : Float ) : this

min - 长度将被限制为的最小值
max - 长度将被限制为的最大值

如果向量长度大于最大值，则它将会被最大值所取代。

如果向量长度小于最小值，则它将会被最小值所取代。

### .[clampScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.clampScalar) ( min : Float, max : Float ) : this

min - 分量将被限制为的最小值
max - 分量将被限制为的最大值

如果该向量的x值或y值大于最大值，则它们将被最大值所取代。

如果该向量的x值或y值小于最小值，则它们将被最小值所取代。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Vector2.clone) () : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

返回一个新的Vector2，其具有和当前这个向量相同的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Vector2.copy) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

将所传入Vector2的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)属性复制给这一Vector2。

### .[distanceTo](https://threejs.org/docs/index.html#api/zh/math/Vector2.distanceTo) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

计算该vector到传入的[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的距离。

### .[manhattanDistanceTo](https://threejs.org/docs/index.html#api/zh/math/Vector2.manhattanDistanceTo) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

计算该vector到传入的[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的曼哈顿距离（[Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)）。

### .[distanceToSquared](https://threejs.org/docs/index.html#api/zh/math/Vector2.distanceToSquared) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

计算该向量到传入的[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的平方距离。 如果你只是将该距离和另一个距离进行比较，则应当比较的是距离的平方， 因为它的计算效率会更高一些。

### .[divide](https://threejs.org/docs/index.html#api/zh/math/Vector2.divide) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

将该向量除以向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[divideScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.divideScalar) ( s : Float ) : this

将该向量除以标量s。

### .[dot](https://threejs.org/docs/index.html#api/zh/math/Vector2.dot) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

计算该vector和所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的点积（[dot product](https://en.wikipedia.org/wiki/Dot_product)）。

### .[cross](https://threejs.org/docs/index.html#api/zh/math/Vector2.cross) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

计算该vector和所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的叉积（[cross product](https://en.wikipedia.org/wiki/Cross_product)）。 请注意，“叉积”在2D中并没有被明确定义。该函数计算的是2D图形中经常使用的几何叉积。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Vector2.equals) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Boolean

检查该向量和[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的严格相等性。

### .[floor](https://threejs.org/docs/index.html#api/zh/math/Vector2.floor) () : this

向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)分量和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)分量向下取整为最接近的整数值。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Vector2.fromArray) ( array : Array, offset : Integer ) : this

array - 来源的数组。
offset - （可选）在数组中的元素偏移量，默认值为0。

设置向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值为array[ offset ]，[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值为array[ offset + 1 ]。

### .[fromBufferAttribute](https://threejs.org/docs/index.html#api/zh/math/Vector2.fromBufferAttribute) ( attribute : [BufferAttribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute), index : Integer ) : this

[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) - 来源的attribute。
index - 在attribute中的索引。

从[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute)中设置向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值。 、

### .[getComponent](https://threejs.org/docs/index.html#api/zh/math/Vector2.getComponent) ( index : Integer ) : Float

index - 0 或 1

如果index值为0则返回[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值。
如果index值为1则返回[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值。

### .[length](https://threejs.org/docs/index.html#api/zh/math/Vector2.length) () : Float

计算从(0, 0)到(x, y)的欧几里得长度 （[Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance)，即直线长度）。

### .[manhattanLength](https://threejs.org/docs/index.html#api/zh/math/Vector2.manhattanLength) () : Float

计算该向量的曼哈顿长度（[Manhattan length](http://en.wikipedia.org/wiki/Taxicab_geometry)）。

### .[lengthSq](https://threejs.org/docs/index.html#api/zh/math/Vector2.lengthSq) () : Float

计算从(0, 0)到(x, y)的欧几里得长度 （[Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance)，即直线长度）的平方。 如果你正在比较向量的长度，应当比较的是长度的平方，因为它的计算效率更高一些。

### .[lerp](https://threejs.org/docs/index.html#api/zh/math/Vector2.lerp) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), alpha : Float ) : this

[v](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 朝着进行插值的[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)。
alpha - 插值因数，其范围通常在[0, 1]闭区间。

在该向量与传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)之间的线性插值，alpha是沿着线的长度的百分比 —— alpha = 0 时表示的是当前向量，alpha = 1 时表示的是所传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[lerpVectors](https://threejs.org/docs/index.html#api/zh/math/Vector2.lerpVectors) ( v1 : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), v2 : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), alpha : Float ) : this

[v1](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 起始的[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)。
[v2](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 朝着进行插值的[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)。
alpha - 插值因数，其范围通常在[0, 1]闭区间。

将此向量设置为在[v1](https://threejs.org/docs/index.html#api/zh/math/Vector2)和[v2](https://threejs.org/docs/index.html#api/zh/math/Vector2)之间进行线性插值的向量， 其中alpha为两个向量之间连线的长度的百分比 —— alpha = 0 时表示的是[v1](https://threejs.org/docs/index.html#api/zh/math/Vector2)，alpha = 1 时表示的是[v2](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[negate](https://threejs.org/docs/index.html#api/zh/math/Vector2.negate) () : this

向量取反，即： x = -x , y = -y。

### .[normalize](https://threejs.org/docs/index.html#api/zh/math/Vector2.normalize) () : this

将该向量转换为单位向量（[unit vector](https://en.wikipedia.org/wiki/Unit_vector)）， 也就是说，将该向量的方向设置为和原向量相同，但是其长度（[length](https://threejs.org/docs/index.html#api/zh/math/Vector2.length)）为1。

### .[max](https://threejs.org/docs/index.html#api/zh/math/Vector2.max) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

如果该向量的x值或y值小于所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的x值或y值，则将该值替换为对应的最大值。

### .[min](https://threejs.org/docs/index.html#api/zh/math/Vector2.min) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

如果该向量的x值或y值大于所传入[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)的x值或y值，则将该值替换为对应的最小值。

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Vector2.multiply) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

将该向量与所传入的向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)进行相乘。

### .[multiplyScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.multiplyScalar) ( s : Float ) : this

将该向量与所传入的标量s进行相乘。

### .[rotateAround](https://threejs.org/docs/index.html#api/zh/math/Vector2.rotateAround) ( center : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), angle : Float ) : this

[center](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 将被围绕旋转的点。
angle - 将要旋转的角度，以弧度来表示。

将向量围绕着[center](https://threejs.org/docs/index.html#api/zh/math/Vector2)旋转angle弧度。

### .[round](https://threejs.org/docs/index.html#api/zh/math/Vector2.round) () : this

向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)分量和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)分量四舍五入取整为最接近的整数值。

### .[roundToZero](https://threejs.org/docs/index.html#api/zh/math/Vector2.roundToZero) () : this

向量中的分量朝向0取整数（若分量为负数则向上取整，若为正数则向下取整）。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Vector2.set) ( x : Float, y : Float ) : this

设置该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)分量。

### .[setComponent](https://threejs.org/docs/index.html#api/zh/math/Vector2.setComponent) ( index : Integer, value : Float ) : this

index - 0 或 1
value - Float

如果index值为0则将[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值设置为value。
如果index值为1则将[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值设置为value

### .[setLength](https://threejs.org/docs/index.html#api/zh/math/Vector2.setLength) ( l : Float ) : this

将该向量的方向设置为和原向量相同，但是长度（[length](https://threejs.org/docs/index.html#api/zh/math/Vector2.length)）为l。

### .[setScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.setScalar) ( scalar : Float ) : this

将该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)、[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值同时设置为等于传入的scalar。

### .[setX](https://threejs.org/docs/index.html#api/zh/math/Vector2.setX) ( x : Float ) : this

将向量中的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)值替换为x。

### .[setY](https://threejs.org/docs/index.html#api/zh/math/Vector2.setY) ( y : Float ) : this

将向量中的[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)值替换为y。

### .[sub](https://threejs.org/docs/index.html#api/zh/math/Vector2.sub) ( v : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

从该向量减去向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[subScalar](https://threejs.org/docs/index.html#api/zh/math/Vector2.subScalar) ( s : Float ) : this

从该向量的[x](https://threejs.org/docs/index.html#api/zh/math/Vector2.x)和[y](https://threejs.org/docs/index.html#api/zh/math/Vector2.y)中减去标量s。

### .[subVectors](https://threejs.org/docs/index.html#api/zh/math/Vector2.subVectors) ( a : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), b : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

将该向量设置为[a](https://threejs.org/docs/index.html#api/zh/math/Vector2) - [b](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Vector2.toArray) ( array : Array, offset : Integer ) : Array

array - （可选）被用于存储向量的数组。如果这个值没有传入，则将创建一个新的数组。
offset - （可选） 数组中元素的偏移量。

返回一个数组[x, y]，或者将x和y复制到所传入的array中。

### .[random](https://threejs.org/docs/index.html#api/zh/math/Vector2.random) () : this

将该向量的每个分量(x、y)设置为介于 0 和 1 之间的伪随机数，不包括 1。