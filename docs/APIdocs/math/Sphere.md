# 球（Sphere）

一个球由球心和半径所定义。

## 构造函数

### Sphere( center : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), radius : Float )

[center](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 球心的位置，默认值是一个位于(0, 0, 0)的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。
radius - 球的半径，默认值是-1。

创建一个新的Sphere。

## 属性

### .[center](https://threejs.org/docs/index.html#api/zh/math/Sphere.center) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

A [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)定义了球心的位置，默认值位于(0, 0, 0)。

### .[radius](https://threejs.org/docs/index.html#api/zh/math/Sphere.radius) : Float

球的半径，默认值为-1。

## 方法

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Sphere.applyMatrix4) ( matrix : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

[matrix](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - 将被应用的[Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)矩阵。

使用所传入的[Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)矩阵来对球进行变换。

### .[clampPoint](https://threejs.org/docs/index.html#api/zh/math/Sphere.clampPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 将要夹取的点。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将被复制到这个Vector3中。

从球中夹取一个点。若这一点位于球外，则将会夹取到该点球边缘最近的点。已位于球中的点将不会受到影响。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Sphere.clone) () : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)

返回一个新的球，新的球与这个球具有相同的[center](https://threejs.org/docs/index.html#api/zh/math/Sphere.center)和[radius](https://threejs.org/docs/index.html#api/zh/math/Sphere.radius)。

### .[containsPoint](https://threejs.org/docs/index.html#api/zh/math/Sphere.containsPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Boolean

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 要被检查的点

检查球体中是否包含所传入的[point](https://threejs.org/docs/index.html#api/zh/math/Vector3)点，包括球的表面。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Sphere.copy) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : this

复制所传入的球的[center](https://threejs.org/docs/index.html#api/zh/math/Sphere.center)和[radius](https://threejs.org/docs/index.html#api/zh/math/Sphere.radius)到这个球上。

### .[distanceToPoint](https://threejs.org/docs/index.html#api/zh/math/Sphere.distanceToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Float

返回球的边界到所传入的[point](https://threejs.org/docs/index.html#api/zh/math/Vector3)点的最近距离。 若这个点位于球内，则距离将为负值。

### .[expandByPoint](https://threejs.org/docs/index.html#api/zh/math/Sphere.expandByPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 将被包含在球内的点

扩展该球的边界以包含此点 [point](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

### .[isEmpty](https://threejs.org/docs/index.html#api/zh/math/Sphere.isEmpty) () : Boolean

检查球是否为空(球半径为负值)。半径为 0 的球体仅包含其中心点，并不会被视为空。

### .[makeEmpty](https://threejs.org/docs/index.html#api/zh/math/Sphere.makeEmpty) () : this

将该球修改为空，即中心点 [center](https://threejs.org/docs/index.html#api/zh/math/Sphere.center) 为 (0,0,0)，半径 [radius](https://threejs.org/docs/index.html#api/zh/math/Sphere.radius) 为 -1。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Sphere.equals) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : Boolean

检查这两个球的球心与半径是否相等。

### .[getBoundingBox](https://threejs.org/docs/index.html#api/zh/math/Sphere.getBoundingBox) ( target : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)

[target](https://threejs.org/docs/index.html#api/zh/math/Box3) — 结果将被复制到这个Box3中。

返回这个球的[Minimum Bounding Box](https://en.wikipedia.org/wiki/Minimum_bounding_box)（最小包围盒）。

### .[intersectsBox](https://threejs.org/docs/index.html#api/zh/math/Sphere.intersectsBox) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 将被用于测试是否与这个球有交集的[Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)。

检测这个球与所传入的[box](https://threejs.org/docs/index.html#api/zh/math/Box3)是否有交集。

### .[intersectsPlane](https://threejs.org/docs/index.html#api/zh/math/Sphere.intersectsPlane) ( plane : [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane) ) : Boolean

[plane](https://threejs.org/docs/index.html#api/zh/math/Plane) - 将被用于测试是否与这个球有交集的Plane。

检测这个球与所传入的[plane](https://threejs.org/docs/index.html#api/zh/math/Plane)是否有交集。

### .[intersectsSphere](https://threejs.org/docs/index.html#api/zh/math/Sphere.intersectsSphere) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : Boolean

[sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) - 将被用于测试是否与这个球有交集的Sphere。

检测两球之间是否有交集。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Sphere.set) ( center : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), radius : Float ) : this

[center](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 球心位置。
radius - 球的半径。

设置球的[center](https://threejs.org/docs/index.html#api/zh/math/Sphere.center)和[radius](https://threejs.org/docs/index.html#api/zh/math/Sphere.radius)属性。
请注意此，方法使用复制的方式来设置中心值。

### .[setFromPoints](https://threejs.org/docs/index.html#api/zh/math/Sphere.setFromPoints) ( points : Array, optionalCenter : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

points - 一个包含有[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)位置的Array。
[optionalCenter](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 可选， [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 球心位置。

计算一个points数组（中的点）的最小边界球。如果给定了[optionalCenter](https://threejs.org/docs/index.html#api/zh/math/Vector3)，则它将被用作该球的球心； 否则，环绕points的包围盒的轴心将通过计算来得到。

### .[translate](https://threejs.org/docs/index.html#api/zh/math/Sphere.translate) ( offset : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

使用所给定[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) offset（偏移量）平移球心。

### .[union](https://threejs.org/docs/index.html#api/zh/math/Sphere.union) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : this

[sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) - 将与该球体即将结合的边界球体。

扩展此球体以包含原始球体和给定球体。