# Box3

表示三维空间中的一个轴对齐包围盒（axis-aligned bounding box，AABB）。

## 代码示例

```js
const box = new THREE.Box3(); const mesh = new THREE.Mesh( new THREE.SphereGeometry(), new THREE.MeshBasicMaterial() ); // ensure the bounding box is computed for its geometry // this should be done only once (assuming static geometries) mesh.geometry.computeBoundingBox(); // ... // in the animation loop, compute the current bounding box with the world matrix box.copy( mesh.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );
```

## 构造器（Constructor）

### Box3( min : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), max : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) )

[min](https://threejs.org/docs/index.html#api/zh/math/Vector3) - (参数可选) [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示包围盒的下边界。 默认值是（ + Infinity, + Infinity, + Infinity ）。
[max](https://threejs.org/docs/index.html#api/zh/math/Vector3) - (参数可选) [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示包围盒的上边界。 默认值是（ - Infinity, - Infinity, - Infinity ）。

创建一个以max和min为边界的包围盒。

## 属性（Properties）

### .[isBox3](https://threejs.org/docs/index.html#api/zh/math/Box3.isBox3) : Boolean

Read-only flag to check if a given object is of type Box3.

### .[min](https://threejs.org/docs/index.html#api/zh/math/Box3.min) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示包围盒的下边界。
默认值是（ + Infinity, + Infinity, + Infinity ）。

### .[max](https://threejs.org/docs/index.html#api/zh/math/Box3.max) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 包围盒的(x, y, z)上边界。
默认值是 ( - Infinity, - Infinity, - Infinity ).

## 方法（Methods）

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Box3.applyMatrix4) ( matrix : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

[matrix](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - 要应用的 [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

使用传入的矩阵变换Box3（包围盒8个顶点都会乘以这个变换矩阵）。

### .[clampPoint](https://threejs.org/docs/index.html#api/zh/math/Box3.clampPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 需要做clamp 的坐标 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会被拷贝到这个对象中

使这个点[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) [Clamps](https://en.wikipedia.org/wiki/Clamping_(graphics))(处于范围内) 处于包围盒边界范围内。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Box3.clone) () : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)

返回一个与该包围盒子有相同下边界[min](https://threejs.org/docs/index.html#api/zh/math/Box3.min) 和上边界 [max](https://threejs.org/docs/index.html#api/zh/math/Box3.max)的新包围盒。

### .[containsBox](https://threejs.org/docs/index.html#api/zh/math/Box3.containsBox) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 需要检测是否在当前包围盒内的 [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)。

传入的 [box](https://threejs.org/docs/index.html#api/zh/math/Box3) 整体都被包含在该对象中则返回true。如果他们两个包围盒是一样的也返回true。

### .[containsPoint](https://threejs.org/docs/index.html#api/zh/math/Box3.containsPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Boolean

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 需要检测是否在当前包围盒内的 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

当传入的值 [point](https://threejs.org/docs/index.html#api/zh/math/Vector3) 在包围盒内部或者边界都会返回true。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Box3.copy) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : this

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 需要复制的包围盒 [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) 。

将传入的值 [box](https://threejs.org/docs/index.html#api/zh/math/Box3) 中的 [min](https://threejs.org/docs/index.html#api/zh/math/Box3.min) 和 [max](https://threejs.org/docs/index.html#api/zh/math/Box3.max) 拷贝到当前对象。

### .[distanceToPoint](https://threejs.org/docs/index.html#api/zh/math/Box3.distanceToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Float

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 用来测试距离的点 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

返回这个box的任何边缘到指定点的距离。如果这个点位于这个盒子里，距离将是0。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Box3.equals) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 将box与当前对象做比较。

返回true如果传入的值与当前的对象 [box](https://threejs.org/docs/index.html#api/zh/math/Box3) 有相同的上下边界。

### .[expandByObject](https://threejs.org/docs/index.html#api/zh/math/Box3.expandByObject) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D) ) : this

[object](https://threejs.org/docs/index.html#api/zh/core/Object3D) - 包裹在包围盒中的3d对象 [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)。

扩展此包围盒的边界，使得对象及其子对象在包围盒内，包括对象和子对象的世界坐标的变换。 该方法可能会导致一个比严格需要的更大的框。

### .[expandByPoint](https://threejs.org/docs/index.html#api/zh/math/Box3.expandByPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 需要在包围盒中的点 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

扩展这个包围盒的边界使得该点（[point](https://threejs.org/docs/index.html#api/zh/math/Vector3)）在包围盒内。

### .[expandByScalar](https://threejs.org/docs/index.html#api/zh/math/Box3.expandByScalar) ( scalar : Float ) : this

scalar - 扩展包围盒的比例。

按 scalar 的值展开盒子的每个维度。如果是负数，盒子的尺寸会缩小。

### .[expandByVector](https://threejs.org/docs/index.html#api/zh/math/Box3.expandByVector) ( vector : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 扩展包围盒的数值 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 。

按 [vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) 每个纬度的值展开这个箱子。 这个盒子的宽度将由 [vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) 的x分量在两个方向上展开。 这个盒子的高度将由 [vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) 两个方向上的y分量展开。 这个盒子的深度将由 [vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) z分量在两个方向上展开。

### .[getBoundingSphere](https://threejs.org/docs/index.html#api/zh/math/Box3.getBoundingSphere) ( target : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)

[target](https://threejs.org/docs/index.html#api/zh/math/Sphere) — 如果指定了target ，结果将会被拷贝到target。

获取一个包围球 [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)。

### .[getCenter](https://threejs.org/docs/index.html#api/zh/math/Box3.getCenter) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 如果指定了target ，结果将会被拷贝到target。

返回包围盒的中心点 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

### .[getParameter](https://threejs.org/docs/index.html#api/zh/math/Box3.getParameter) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3).
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 如果指定了target ，结果将会被拷贝到target。

返回一个点为这个盒子的宽度、高度和深度的比例。

### .[getSize](https://threejs.org/docs/index.html#api/zh/math/Box3.getSize) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 如果指定了target ，结果将会被拷贝到target。

返回包围盒的宽度，高度，和深度。

### .[intersect](https://threejs.org/docs/index.html#api/zh/math/Box3.intersect) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : this

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 与包围盒的交集

计算此包围盒和 [box](https://threejs.org/docs/index.html#api/zh/math/Box3) 的交集，将此框的上界设置为两个框的max的较小部分， 将此包围盒的下界设置为两个包围盒的min的较大部分。如果两个包围盒不相交，则清空此包围盒。

### .[intersectsBox](https://threejs.org/docs/index.html#api/zh/math/Box3.intersectsBox) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 用来检测是否相交的包围盒

确定当前包围盒是否与传入包围盒[box](https://threejs.org/docs/index.html#api/zh/math/Box3) 相交。

### .[intersectsPlane](https://threejs.org/docs/index.html#api/zh/math/Box3.intersectsPlane) ( plane : [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane) ) : Boolean

[plane](https://threejs.org/docs/index.html#api/zh/math/Plane) - 用来检测是否相交的 [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)。

确定当前包围盒是否与平面 [plane](https://threejs.org/docs/index.html#api/zh/math/Plane) 相交。

### .[intersectsSphere](https://threejs.org/docs/index.html#api/zh/math/Box3.intersectsSphere) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : Boolean

[sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) - 用来检测是否相交的球体 [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)。

确定当前包围盒是否与球体 [sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) 相交。

### .[intersectsTriangle](https://threejs.org/docs/index.html#api/zh/math/Box3.intersectsTriangle) ( triangle : [Triangle](https://threejs.org/docs/index.html#api/zh/math/Triangle) ) : Boolean

[triangle](https://threejs.org/docs/index.html#api/zh/math/Triangle) - 用来检测是否相交的三角形 [Triangle](https://threejs.org/docs/index.html#api/zh/math/Triangle)。

确定当前包围盒是否与三角形 [triangle](https://threejs.org/docs/index.html#api/zh/math/Triangle) 相交。

### .[isEmpty](https://threejs.org/docs/index.html#api/zh/math/Box3.isEmpty) () : Boolean

如果这个盒子包含0个顶点，则返回true。
注意，下界和上界相等的方框仍然包含一个点，即两个边界共享的那个点。

### .[makeEmpty](https://threejs.org/docs/index.html#api/zh/math/Box3.makeEmpty) () : this

清空包围盒。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Box3.set) ( min : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), max : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[min](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示下边界每个纬度（x,y,z）的值。
[max](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示上边界每个纬度（x,y,z）的值。

设置包围盒上下边界每个纬度（x,y,z)的值。
请注意，此方法仅复制给定对象的值。

### .[setFromArray](https://threejs.org/docs/index.html#api/zh/math/Box3.setFromArray) ( array : Array ) : this

array - 数组当中的所有的点都将被包围盒包裹。

设置包围盒的上下边界使得数组 **array** 中的所有点的点都被包含在内。

### .[setFromBufferAttribute](https://threejs.org/docs/index.html#api/zh/math/Box3.setFromBufferAttribute) ( attribute : [BufferAttribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) ) : this

[attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) - 位置的缓冲数据，包含在返回的包围盒内。

设置此包围盒的上边界和下边界，以包含 [attribute](https://threejs.org/docs/index.html#api/zh/core/BufferAttribute) 中的所有位置数据。

### .[setFromCenterAndSize](https://threejs.org/docs/index.html#api/zh/math/Box3.setFromCenterAndSize) ( center : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), size : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[center](https://threejs.org/docs/index.html#api/zh/math/Vector3), - 包围盒所要设置的中心位置。
[size](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 包围盒所要设置的x、y和z尺寸（宽/高/长）。

将当前包围盒的中心点设置为 [center](https://threejs.org/docs/index.html#api/zh/math/Vector3) ，并将此包围盒的宽度，高度和深度设置为大小指定 [size](https://threejs.org/docs/index.html#api/zh/math/Vector3) 的值。

### .[setFromObject](https://threejs.org/docs/index.html#api/zh/math/Box3.setFromObject) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D) ) : this

[object](https://threejs.org/docs/index.html#api/zh/core/Object3D) - 用来计算包围盒的3D对象 [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)。

计算和世界轴对齐的一个对象 [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D) （含其子对象）的包围盒，计算对象和子对象的世界坐标变换。 该方法可能会导致一个比严格需要的更大的框。

### .[setFromPoints](https://threejs.org/docs/index.html#api/zh/math/Box3.setFromPoints) ( points : Array ) : this

points - 计算出的包围盒将包含数组中所有的点 [Vector3s](https://threejs.org/docs/index.html#api/zh/math/Vector3)

设置此包围盒的上边界和下边界，以包含数组 points 中的所有点。

### .[translate](https://threejs.org/docs/index.html#api/zh/math/Box3.translate) ( offset : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[offset](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 偏移方向和距离。

给包围盒的上下边界添加偏移量 [offset](https://threejs.org/docs/index.html#api/zh/math/Vector3)，这样可以有效的在3D空间中移动包围盒。 偏移量为 [offset](https://threejs.org/docs/index.html#api/zh/math/Vector3) 大小。

### .[union](https://threejs.org/docs/index.html#api/zh/math/Box3.union) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : this

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 将被用于与该盒子计算并集的盒子。

在 [box](https://threejs.org/docs/index.html#api/zh/math/Box3) 参数的上边界和已有box对象的上边界之间取较大者，而对两者的下边界取较小者，这样获得一个新的较大的联合盒子。