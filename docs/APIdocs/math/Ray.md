# 射线（Ray）

射线由一个原点向一个确定的方向发射。它被[Raycaster](https://threejs.org/docs/index.html#api/zh/core/Raycaster)（光线投射）所使用， 以用于辅助[raycasting](https://en.wikipedia.org/wiki/Ray_casting)。 光线投射用于在各个物体之间进行拾取（当鼠标经过三维空间中的物体/对象时进行拾取）。

## 构造函数

### Ray( origin : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), direction : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) )

[origin](https://threejs.org/docs/index.html#api/zh/math/Vector3) - （可选）[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的原点，默认值是一个位于(0, 0, 0)的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。
[direction](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的方向。该向量必须经过标准化（使用[Vector3.normalize](https://threejs.org/docs/index.html#api/zh/math/Vector3.normalize)），这样才能使方法正常运行。 默认值是一个位于(0, 0, -1)的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

创建一个新的Ray。

## 属性

### .[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的原点，默认值是一个位于(0, 0, 0)的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

### .[direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的方向。该向量必须经过标准化（使用[Vector3.normalize](https://threejs.org/docs/index.html#api/zh/math/Vector3.normalize)），这样才能使方法正常运行。 默认值是一个位于(0, 0, -1)的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

## 方法

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Ray.applyMatrix4) ( matrix4 : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

[matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - 将被用于这个[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)的[Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)。

使用传入的[Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)来变换这个[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)。

### .[at](https://threejs.org/docs/index.html#api/zh/math/Ray.at) ( t : Float, target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

t - 使用这一传入的距离，在[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)上确定一个位置。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将复制到这一Vector3中。

获得这一[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)上给定距离处的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Ray.clone) () : [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)

创建一个新的和这个Ray具有相同[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin)和[direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction)的Ray。

### .[closestPointToPoint](https://threejs.org/docs/index.html#api/zh/math/Ray.closestPointToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 获得距离射线上的点最接近的点。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将复制到这一Vector3中。

沿着[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)，获得与所传入[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)最接近的点。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Ray.copy) ( ray : [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray) ) : this

复制所传入Ray的[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin)和[direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction)属性到这个Ray上。

### .[distanceSqToPoint](https://threejs.org/docs/index.html#api/zh/math/Ray.distanceSqToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Float

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 将被用于计算到其距离的 [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

获得[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)与传入的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)之间最近的平方距离。

### .[distanceSqToSegment](https://threejs.org/docs/index.html#api/zh/math/Ray.distanceSqToSegment) ( v0 : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), v1 : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), optionalPointOnRay : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), optionalPointOnSegment : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Float

[v0](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的起点。
[v1](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的终点。
optionalPointOnRay - （可选）若这个值被给定，它将接收在[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）上距离线段最近的点。
optionalPointOnSegment - （可选）若这个值被给定，它将接收在线段上距离[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）最近的点。

获取[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）与线段之间的平方距离。

### .[distanceToPlane](https://threejs.org/docs/index.html#api/zh/math/Ray.distanceToPlane) ( plane : [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane) ) : Float

[plane](https://threejs.org/docs/index.html#api/zh/math/Plane) - 将要获取射线原点到该平面的距离的平面。

获取射线原点（[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin)）到平面（[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)）之间的距离。若射线（[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)）不与平面（[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)）相交，则将返回**null**。

### .[distanceToPoint](https://threejs.org/docs/index.html#api/zh/math/Ray.distanceToPoint) ( point : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : Float

[point](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 将被用于计算到其距离的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。

获得[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）到所传入[point](https://threejs.org/docs/index.html#api/zh/math/Vector3)之间最接近的距离。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Ray.equals) ( ray : [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray) ) : Boolean

[ray](https://threejs.org/docs/index.html#api/zh/math/Ray) - 用于比较的[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)。

如果所传入的[ray](https://threejs.org/docs/index.html#api/zh/math/Ray)具有和当前Ray相同的[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin)和[direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction)则返回true。

### .[intersectBox](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectBox) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 将会与之相交的[Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会被复制到这一Vector3中。

将[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）与一个[Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)相交，并返回交点，倘若没有交点将返回**null**。

### .[intersectPlane](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectPlane) ( plane : [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[plane](https://threejs.org/docs/index.html#api/zh/math/Plane) - 将会与之相交的[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会被复制到这一Vector3中。

将[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）与一个[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)相交，并返回交点，倘若没有交点将返回**null**。

### .[intersectSphere](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectSphere) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere), target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) - 将会与之相交的[Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会被复制到这一Vector3中。

将[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）与一个[Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)（球）相交，并返回交点，倘若没有交点将返回**null**。

### .[intersectTriangle](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectTriangle) ( a : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), b : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), c : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), backfaceCulling : Boolean, target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[a](https://threejs.org/docs/index.html#api/zh/math/Vector3), [b](https://threejs.org/docs/index.html#api/zh/math/Vector3), [c](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 组成三角形的三个[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。
backfaceCulling - 是否使用背面剔除。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将会被复制到这一Vector3中。

将[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）与一个三角形相交，并返回交点，倘若没有交点将返回**null**。

### .[intersectsBox](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectsBox) ( box : [Box3](https://threejs.org/docs/index.html#api/zh/math/Box3) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box3) - 将被检查是否与之相交的[Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)。

若这一射线与[Box3](https://threejs.org/docs/index.html#api/zh/math/Box3)相交，则将返回true。

### .[intersectsPlane](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectsPlane) ( plane : [Plane](https://threejs.org/docs/index.html#api/zh/math/Plane) ) : Boolean

[plane](https://threejs.org/docs/index.html#api/zh/math/Plane) - 将被检查是否与之相交的[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)。

若这一射线与[Plane](https://threejs.org/docs/index.html#api/zh/math/Plane)相交，则将返回true。

### .[intersectsSphere](https://threejs.org/docs/index.html#api/zh/math/Ray.intersectsSphere) ( sphere : [Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) ) : Boolean

[sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere) - 将被检查是否与之相交的[Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)。

若这一射线与[Sphere](https://threejs.org/docs/index.html#api/zh/math/Sphere)相交，则将返回true。

### .[lookAt](https://threejs.org/docs/index.html#api/zh/math/Ray.lookAt) ( v : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[v](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 将要“直视”的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

调整光线的方向到世界坐标中该向量所指代的点。

### .[recast](https://threejs.org/docs/index.html#api/zh/math/Ray.recast) ( t : Float ) : this

t - 沿着[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)进行插值的距离。

将[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的原点沿着其方向移动给定的距离。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Ray.set) ( origin : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), direction : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[origin](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的[origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin)（原点）。
[origin](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）的[direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction)（方向）。 该向量必须经过标准化（使用[Vector3.normalize](https://threejs.org/docs/index.html#api/zh/math/Vector3.normalize)），这样才能使方法正常运行。

根据参数设置该射线的 [origin](https://threejs.org/docs/index.html#api/zh/math/Ray.origin) 和 [direction](https://threejs.org/docs/index.html#api/zh/math/Ray.direction) 。