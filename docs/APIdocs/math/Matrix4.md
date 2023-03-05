# 四维矩阵（Matrix4）

表示为一个 4x4 [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)).

在3D计算机图形学中，4x4矩阵最常用的用法是作为一个变换矩阵[Transformation Matrix](https://en.wikipedia.org/wiki/Transformation_matrix)。 有关WebGL中使用的变换矩阵的介绍，请参阅本教程[this tutorial](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices)。

这使得表示三维空间中的一个点的向量[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)通过乘以矩阵来进行转换，如平移、旋转、剪切、缩放、反射、正交或透视投影等。这就是把矩阵*应用*到向量上。

任何3D物体[Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)都有三个关联的矩阵：

- [Object3D.matrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrix): 存储物体的本地变换矩阵。 这是对象相对于其父对象的变换矩阵。
- [Object3D.matrixWorld](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixWorld): 对象的全局或世界变换矩阵。如果对象没有父对象，那么这与存储在矩阵[matrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrix)中的本地变换矩阵相同。
- [Object3D.modelViewMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.modelViewMatrix): 表示对象相对于摄像机坐标系的变换矩阵， 一个对象的 modelViewMatrix 是物体世界变换矩阵乘以摄像机相对于世界空间变换矩阵的逆矩阵。

摄像机[Cameras](https://threejs.org/docs/index.html#api/zh/cameras/Camera) 有三个额外的四维矩阵:

- [Camera.matrixWorldInverse](https://threejs.org/docs/index.html#api/zh/cameras/Camera.matrixWorldInverse): 视矩阵 - 摄像机世界坐标变换的逆矩阵。
- [Camera.projectionMatrix](https://threejs.org/docs/index.html#api/zh/cameras/Camera.projectionMatrix): 投影变换矩阵，表示将场景中的信息投影到裁剪空间。
- [Camera.projectionMatrixInverse](https://threejs.org/docs/index.html#api/zh/cameras/Camera.projectionMatrixInverse): 投影变换矩阵的逆矩阵。

注意：物体的正规矩阵 [Object3D.normalMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.normalMatrix) 并不是一个4维矩阵，而是一个三维矩阵[Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3)。



## 注意行优先列优先的顺序。

设置set()方法参数采用行优先[row-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)， 而它们在内部是用列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order)顺序存储在数组当中。

这意味着

```js
const m = new THREE.Matrix4();

m.set( 11, 12, 13, 14,
       21, 22, 23, 24,
       31, 32, 33, 34,
       41, 42, 43, 44 );
```

元素数组[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix4.elements)将存储为:

```js
m.elements = [ 11, 21, 31, 41,
               12, 22, 32, 42,
               13, 23, 33, 43,
               14, 24, 34, 44 ];
```

在内部，所有的计算都是使用列优先顺序进行的。然而，由于实际的排序在数学上没有什么不同， 而且大多数人习惯于以行优先顺序考虑矩阵，所以three.js文档以行为主的顺序显示矩阵。 请记住，如果您正在阅读源代码，您必须对这里列出的任何矩阵进行转置[transpose](https://en.wikipedia.org/wiki/Transpose)，以理解计算。

## 提取位置(平移)、旋转和缩放

有多种选项可用于从 Matrix4 中提取位置、旋转和缩放。

- [Vector3.setFromMatrixPosition](https://threejs.org/docs/index.html#api/zh/math/Vector3.setFromMatrixPosition)：可用于提取位置相关的分量。
- [Vector3.setFromMatrixScale](https://threejs.org/docs/index.html#api/zh/math/Vector3.setFromMatrixScale)：可用于提取缩放相关的分量。
- [Quaternion.setFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromRotationMatrix), [Euler.setFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Euler.setFromRotationMatrix) 或 [extractRotation](https://threejs.org/docs/index.html#api/zh/math/Matrix4.extractRotation)：可用于从纯(未缩放)矩阵中提取旋转相关分量。
- [decompose](https://threejs.org/docs/index.html#api/zh/math/Matrix4.decompose)：可用于一次性提取位置、旋转和缩放



## 构造器（Constructor）

### Matrix4()

创建并初始化一个4X4的单位矩阵[identity matrix](https://en.wikipedia.org/wiki/Identity_matrix).

## 属性（Properties）

### .[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix4.elements) : Array

矩阵列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order)列表。

## 方法（Methods）

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Matrix4.clone) () : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

创建一个新的矩阵，元素[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix4.elements)与该矩阵相同。

### .[compose](https://threejs.org/docs/index.html#api/zh/math/Matrix4.compose) ( position : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), quaternion : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), scale : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

设置将该对象位置 [position](https://threejs.org/docs/index.html#api/zh/math/Vector3)，四元数[quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) 和 缩放[scale](https://threejs.org/docs/index.html#api/zh/math/Vector3) 组合变换的矩阵。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Matrix4.copy) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3)的元素[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix4.elements)复制到当前矩阵中。

### .[copyPosition](https://threejs.org/docs/index.html#api/zh/math/Matrix4.copyPosition) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将给定矩阵 m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) 的平移分量拷贝到当前矩阵中。

### .[decompose](https://threejs.org/docs/index.html#api/zh/math/Matrix4.decompose) ( position : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), quaternion : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), scale : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

将矩阵分解到给定的平移[position](https://threejs.org/docs/index.html#api/zh/math/Vector3) ,旋转 [quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)，缩放[scale](https://threejs.org/docs/index.html#api/zh/math/Vector3)分量中。

注意：并非所有矩阵都可以通过这种方式分解。 例如，如果一个对象有一个非均匀缩放的父对象，那么该对象的世界矩阵可能是不可分解的，这种方法可能不合适。

### .[determinant](https://threejs.org/docs/index.html#api/zh/math/Matrix4.determinant) () : Float

计算并返回矩阵的行列式[determinant](https://en.wikipedia.org/wiki/Determinant) 。

基于这个的方法概述[here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm)。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Matrix4.equals) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : Boolean

如果矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix3) 与当前矩阵所有对应元素相同则返回true。

### .[extractBasis](https://threejs.org/docs/index.html#api/zh/math/Matrix4.extractBasis) ( xAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), yAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), zAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

将矩阵的基向量[basis](https://en.wikipedia.org/wiki/Basis_(linear_algebra))提取到指定的3个轴向量中。 如果矩阵如下：

```js
a, b, c, d,
e, f, g, h,
i, j, k, l,
m, n, o, p
```

然后x轴y轴z轴被设为：

```js
xAxis = (a, e, i)
yAxis = (b, f, j)
zAxis = (c, g, k)
```

### .[extractRotation](https://threejs.org/docs/index.html#api/zh/math/Matrix4.extractRotation) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将给定矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)的旋转分量提取到该矩阵的旋转分量中。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Matrix4.fromArray) ( array : Array, offset : Integer ) : this

array - 用来存储设置元素数据的数组
offset - (可选参数) 数组的偏移量，默认值为 0。

使用基于列优先格式[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)的数组来设置该矩阵。

### .[invert](https://threejs.org/docs/index.html#api/zh/math/Matrix4.invert) () : this

将当前矩阵翻转为它的逆矩阵，使用 [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution) 解析方式。你不能对行或列为 0 的矩阵进行翻转，如果你尝试这样做，该方法将生成一个零矩阵。

### .[getMaxScaleOnAxis](https://threejs.org/docs/index.html#api/zh/math/Matrix4.getMaxScaleOnAxis) () : Float

获取3个轴方向的最大缩放值。

### .[identity](https://threejs.org/docs/index.html#api/zh/math/Matrix4.identity) () : this

将当前矩阵重置为单位矩阵[identity matrix](https://en.wikipedia.org/wiki/Identity_matrix)。

### .[lookAt](https://threejs.org/docs/index.html#api/zh/math/Matrix4.lookAt) ( eye : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), up : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

构造一个旋转矩阵，从[eye](https://threejs.org/docs/index.html#api/zh/math/Vector3) 指向 [target](https://threejs.org/docs/index.html#api/zh/math/Vector3)，由向量 [up](https://threejs.org/docs/index.html#api/zh/math/Vector3) 定向。

### .[makeRotationAxis](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationAxis) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), theta : Float ) : this

[axis](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 旋转轴，需要被归一化。
theta — 旋转量（弧度）。

设置当前矩阵为围绕轴 [axis](https://threejs.org/docs/index.html#api/zh/math/Vector3) 旋转量为 theta弧度。
这是一种有点争议但在数学上可以替代通过四元数[Quaternions](https://threejs.org/docs/index.html#api/zh/math/Quaternion)旋转的办法。 请参阅此处[here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199)的讨论。

### .[makeBasis](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeBasis) ( xAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), yAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), zAxis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

通过给定的三个向量设置该矩阵为基矩阵[basis](https://en.wikipedia.org/wiki/Basis_(linear_algebra))：

```js
xAxis.x, yAxis.x, zAxis.x, 0,
xAxis.y, yAxis.y, zAxis.y, 0,
xAxis.z, yAxis.z, zAxis.z, 0,
0,       0,       0,       1
```

### .[makePerspective](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makePerspective) ( left : Float, right : Float, top : Float, bottom : Float, near : Float, far : Float ) : this

创建一个透视投影矩阵[perspective projection](https://en.wikipedia.org/wiki/3D_projection#Perspective_projection)。 在引擎内部由[PerspectiveCamera.updateProjectionMatrix](https://threejs.org/docs/index.html#api/zh/cameras/PerspectiveCamera.updateProjectionMatrix)()使用。

### .[makeOrthographic](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeOrthographic) ( left : Float, right : Float, top : Float, bottom : Float, near : Float, far : Float ) : this

创建一个正交投影矩阵[orthographic projection](https://en.wikipedia.org/wiki/Orthographic_projection)。 在引擎内部由[OrthographicCamera.updateProjectionMatrix](https://threejs.org/docs/index.html#api/zh/cameras/OrthographicCamera.updateProjectionMatrix)()使用。

### .[makeRotationFromEuler](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationFromEuler) ( euler : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) ) : this

将传入的欧拉角转换为该矩阵的旋转分量(左上角的3x3矩阵)。 矩阵的其余部分被设为单位矩阵。根据欧拉角[euler](https://threejs.org/docs/index.html#api/zh/math/Euler)的旋转顺序[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order)，总共有六种可能的结果。 详细信息，请参阅本页[this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)。

### .[makeRotationFromQuaternion](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationFromQuaternion) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

将这个矩阵的旋转分量设置为四元数[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion)指定的旋转，如下链接所诉[here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)。 矩阵的其余部分被设为单位矩阵。因此，给定四元数[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) = w + xi + yj + zk，得到的矩阵为:

```js
1-2y²-2z²    2xy-2zw    2xz+2yw    0
2xy+2zw      1-2x²-2z²  2yz-2xw    0
2xz-2yw      2yz+2xw    1-2x²-2y²  0
0            0          0          1
```

### .[makeRotationX](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationX) ( theta : Float ) : this

theta — Rotation angle in radians.

把该矩阵设置为绕x轴旋转弧度theta (θ)大小的矩阵。 结果如下：

```js
1 0      0        0
0 cos(θ) -sin(θ)  0
0 sin(θ) cos(θ)   0
0 0      0        1
```

### .[makeRotationY](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationY) ( theta : Float ) : this

theta — Rotation angle in radians.

把该矩阵设置为绕Y轴旋转弧度theta (θ)大小的矩阵。 结果如下：

```js
cos(θ)  0 sin(θ) 0
0       1 0      0
-sin(θ) 0 cos(θ) 0
0       0 0      1
```

### .[makeRotationZ](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeRotationZ) ( theta : Float ) : this

theta — Rotation angle in radians.

把该矩阵设置为绕z轴旋转弧度theta (θ)大小的矩阵。 结果如下：

```js
cos(θ) -sin(θ) 0 0
sin(θ) cos(θ)  0 0
0      0       1 0
0      0       0 1
```

### .[makeScale](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeScale) ( x : Float, y : Float, z : Float ) : this

x - 在X轴方向的缩放比。
y - 在Y轴方向的缩放比。
z - 在Z轴方向的缩放比。

将这个矩阵设置为缩放变换:

```js
x, 0, 0, 0,
0, y, 0, 0,
0, 0, z, 0,
0, 0, 0, 1
```

### .[makeShear](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeShear) ( x : Float, y : Float, z : Float ) : this

x - 在X轴上剪切的量。
y - 在Y轴上剪切的量。
z - 在Z轴上剪切的量。

将此矩阵设置为剪切变换:

```js
1, y, z, 0,
x, 1, z, 0,
x, y, 1, 0,
0, 0, 0, 1
```

### .[makeTranslation](https://threejs.org/docs/index.html#api/zh/math/Matrix4.makeTranslation) ( x : Float, y : Float, z : Float ) : this

x - 在X轴上的平移量。
y - 在Y轴上的平移量。
z - 在Z轴上的平移量。

设置该矩阵为平移变换：

```js
1, 0, 0, x,
0, 1, 0, y,
0, 0, 1, z,
0, 0, 0, 1
```

### .[multiply](https://threejs.org/docs/index.html#api/zh/math/Matrix4.multiply) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将当前矩阵乘以矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)。

### .[multiplyMatrices](https://threejs.org/docs/index.html#api/zh/math/Matrix4.multiplyMatrices) ( a : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4), b : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

设置当前矩阵为矩阵[a](https://threejs.org/docs/index.html#api/zh/math/Matrix4) x 矩阵[b](https://threejs.org/docs/index.html#api/zh/math/Matrix4)。

### .[multiplyScalar](https://threejs.org/docs/index.html#api/zh/math/Matrix4.multiplyScalar) ( s : Float ) : this

当前矩阵所有的元素乘以该缩放值**s**

### .[premultiply](https://threejs.org/docs/index.html#api/zh/math/Matrix4.premultiply) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

将矩阵[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4)乘以当前矩阵。

### .[scale](https://threejs.org/docs/index.html#api/zh/math/Matrix4.scale) ( v : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

将该矩阵的列向量乘以对应向量[v](https://threejs.org/docs/index.html#api/zh/math/Vector3)的分量。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Matrix4.set) ( n11 : Float, n12 : Float, n13 : Float, n14 : Float, n21 : Float, n22 : Float, n23 : Float, n24 : Float, n31 : Float, n32 : Float, n33 : Float, n34 : Float, n41 : Float, n42 : Float, n43 : Float, n44 : Float ) : this

以行优先的格式将传入的数值设置给该矩阵中的元素[elements](https://threejs.org/docs/index.html#api/zh/math/Matrix4.elements)。

### .[setFromMatrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix4.setFromMatrix3) ( m : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3) ) : this

根据参数 [m](https://threejs.org/docs/index.html#api/zh/math/Matrix3) 的值，设置当前矩阵左上 3x3 的矩阵值。

### .[setPosition](https://threejs.org/docs/index.html#api/zh/math/Matrix4.setPosition) ( v : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

### .[setPosition](https://threejs.org/docs/index.html#api/zh/math/Matrix4.setPosition) ( x : Float, y : Float, z : Float ) : this // optional API

取传入参数v : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)中值设置该矩阵的位置分量，不影响该矩阵的其余部分——即，如果该矩阵当前为:

```js
a, b, c, d,
e, f, g, h,
i, j, k, l,
m, n, o, p
```

变成:

```js
a, b, c, v.x,
e, f, g, v.y,
i, j, k, v.z,
m, n, o, p
```

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Matrix4.toArray) ( array : Array, offset : Integer ) : Array

array - (可选参数) 存储矩阵元素的数组，如果未指定会创建一个新的数组。
offset - (可选参数) 存放矩阵元素数组的偏移量。

使用列优先[column-major](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)格式将此矩阵的元素写入数组中。

### .[transpose](https://threejs.org/docs/index.html#api/zh/math/Matrix4.transpose) () : this

将该矩阵转置[Transposes](https://en.wikipedia.org/wiki/Transpose)。