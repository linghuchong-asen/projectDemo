# 三维矩阵（Matrix3）

一个表示3X3矩阵[matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)).的类。

## 代码示例

```js
const m = new Matrix3();
```

## 注意行优先列优先的顺序。

set()方法参数采用行优先[row-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)， 而它们在内部是用列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order)顺序存储在数组当中。

这意味着

```js
m.set( 11, 12, 13,
       21, 22, 23,
       31, 32, 33 );
```

元素数组[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix3.elements)将存储为:

```js
m.elements = [ 11, 21, 31,
              12, 22, 32,
              13, 23, 33 ];
```

在内部，所有的计算都是使用列优先顺序进行的。然而，由于实际的排序在数学上没有什么不同， 而且大多数人习惯于以行优先顺序考虑矩阵，所以three.js文档以行为主的顺序显示矩阵。 请记住，如果您正在阅读源代码，您必须对这里列出的任何矩阵进行转置[transpose](https://en.wikipedia.org/wiki/Transpose)，以理解计算。

## Constructor

### Matrix3()

创建并初始化一个3X3的单位矩阵[identity matrix](https://en.wikipedia.org/wiki/Identity_matrix).

## 属性（Properties）

### .[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix3.elements) : Array

矩阵列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order)列表。

## 方法（Methods）

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Matrix3.clone) () : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3)

创建一个新的矩阵，元素 [elements](https://threejs.org/docs/index.html#api/zh/math/Matrix3.elements) 与该矩阵相同。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Matrix3.copy) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

将矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3)的元素复制到当前矩阵中。

### .[determinant](https://threejs.org/docs/index.html#api/zh/math/Matrix3.determinant) () : Float

计算并返回矩阵的行列式[determinant](https://en.wikipedia.org/wiki/Determinant) 。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Matrix3.equals) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : Boolean

如果矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3) 与当前矩阵所有对应元素相同则返回true。

### .[extractBasis](https://threejs.org/docs/index.html#api/zh/math/Matrix3.extractBasis) ( xAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), yAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), zAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

将该矩阵的基向量 [basis](https://en.wikipedia.org/wiki/Basis_(linear_algebra)) 提取到提供的三个轴向中。如果该矩阵如下：

```js
a, b, c,
d, e, f,
g, h, i
```

那么 [xAxis](https://threejs.org/docs/index.html#api/zh/math/Vector3), [yAxis](https://threejs.org/docs/index.html#api/zh/math/Vector3), [zAxis](https://threejs.org/docs/index.html#api/zh/math/Vector3) 将会被设置为：

```js
xAxis = (a, d, g)
yAxis = (b, e, h)
zAxis = (c, f, i)
```



### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Matrix3.fromArray) ( array : Array, offset : Integer ) : this

array - 用来存储设置元素数据的数组
offset - (可选参数) 数组的偏移量，默认值为 0。

使用基于列优先格式[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)的数组来设置该矩阵。

### .[invert](https://threejs.org/docs/index.html#api/zh/math/Matrix3.invert) () : this

将当前矩阵翻转为它的逆矩阵，使用 [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution) 解析方式。你不能对行或列为 0 的矩阵进行翻转，如果你尝试这样做，该方法将生成一个零矩阵。

### .[getNormalMatrix](https://threejs.org/docs/index.html#api/zh/math/Matrix3.getNormalMatrix) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

将这个矩阵设置为给定矩阵的正规矩阵[normal matrix](https://en.wikipedia.org/wiki/Normal_matrix)（左上角的3x3）。 正规矩阵是矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)的逆矩阵[inverse](https://en.wikipedia.org/wiki/Invertible_matrix) 的转置[transpose](https://en.wikipedia.org/wiki/Transpose)。

### .[identity](https://threejs.org/docs/index.html#api/zh/math/Matrix3.identity) () : this

将此矩阵重置为3x3单位矩阵:`1, 0, 0 0, 1, 0 0, 0, 1`

### .[makeRotation](https://threejs.org/docs/index.html#api/zh/math/Matrix3.makeRotation) ( theta : Float ) : this

theta — 弧度表示的旋转角。 逆时针旋转为正值

将这个矩阵设置为一个二维旋转变换，单位为弧度。 矩阵的结果将是:

```js
cos(θ) -sin(θ) 0
sin(θ) cos(θ)  0
0      0       1
```

### .[makeScale](https://threejs.org/docs/index.html#api/zh/math/Matrix3.makeScale) ( x : Float, y : Float ) : this

x - x轴缩放范围.
y - y轴缩放范围.
将这个矩阵设置为2维缩放矩阵:

```js
x, 0, 0,
0, y, 0,
0, 0, 1
```

### .[makeTranslation](https://threejs.org/docs/index.html#api/zh/math/Matrix3.makeTranslation) ( x : Float, y : Float ) : this

x - 沿X轴移动距离。
y - 沿Y轴移动距离。
将这个矩阵设置为2维平移矩阵:

```js
1, 0, x,
0, 1, y,
0, 0, 1
```

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Matrix3.multiply) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

将当前矩阵乘以矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3)。

### .[multiplyMatrices](https://threejs.org/docs/index.html#api/zh/math/Matrix3.multiplyMatrices) ( a : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3), b : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

设置当前矩阵为矩阵[a](https://threejs.org/docs/index.html#api/zh/math/Matrix3) x 矩阵[b](https://threejs.org/docs/index.html#api/zh/math/Matrix3)。

### .[multiplyScalar](https://threejs.org/docs/index.html#api/zh/math/Matrix3.multiplyScalar) ( s : Float ) : this

当前矩阵所有的元素乘以该缩放值**s**

### .[set](https://threejs.org/docs/index.html#api/zh/math/Matrix3.set) ( n11 : Float, n12 : Float, n13 : Float, n21 : Float, n22 : Float, n23 : Float, n31 : Float, n32 : Float, n33 : Float ) : this

n11 - 设置第一行第一列的值。
n12 - 设置第一行第二列的值。
...
...
n32 - 设置第三行第二列的值。
n33 - 设置第三行第三列的值。

使用行优先 [row-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order) 的格式来设置该矩阵。

### .[premultiply](https://threejs.org/docs/index.html#api/zh/math/Matrix3.premultiply) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

将矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3)乘以当前矩阵。

### .[setFromMatrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix3.setFromMatrix4) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

根据参数 [m](https://threejs.org/docs/index.html#api/zh/math/Matrix4) 左上 3x3 的矩阵值，设置当前矩阵的值。

### .[setUvTransform](https://threejs.org/docs/index.html#api/zh/math/Matrix3.setUvTransform) ( tx : Float, ty : Float, sx : Float, sy : Float, rotation : Float, cx : Float, cy : Float ) : this

tx - x偏移量
ty - y偏移量
sx - x方向的重复比例
sy - y方向的重复比例
rotation - 旋转, 弧度。Positive values rotate counterclockwise
cx - 旋转中心x
cy - 旋转中心y

使用偏移，重复，旋转和中心点位置设置UV变换矩阵。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Matrix3.toArray) ( array : Array, offset : Integer ) : Array

array - (可选参数) 存储矩阵元素的数组，如果未指定会创建一个新的数组。
offset - (可选参数) 存放矩阵元素数组的偏移量。

使用列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)格式将此矩阵的元素写入数组中。

### .[transpose](https://threejs.org/docs/index.html#api/zh/math/Matrix3.transpose) () : this

将该矩阵转置[Transposes](https://en.wikipedia.org/wiki/Transpose)。

### .[transposeIntoArray](https://threejs.org/docs/index.html#api/zh/math/Matrix3.transposeIntoArray) ( array : Array ) : this

array - 用于存储当前矩阵转置结果的数组。

将当前矩阵的转置[Transposes](https://en.wikipedia.org/wiki/Transpose)存入给定的数组 array 中，但不改变当前矩阵， 并返回当前矩阵。