# 三维几何线段（Line3）

用起点和终点表示的几何线段。

## 构造器（Constructor）

### Line3( start : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), end : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) )

[start](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的起始点。默认值为 (0, 0, 0)。
[end](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 线段的终点。默认值为 (0, 0, 0)。

创建一个三维几何线段 Line3。

## 属性（Properties）

### .[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示线段的起点。

### .[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) 表示线段的终点

## 方法（Methods）

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/math/Line3.applyMatrix4) ( matrix : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : this

对此线段应用矩阵变换。

### .[at](https://threejs.org/docs/index.html#api/zh/math/Line3.at) ( t : Float, target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

t - 使用值0-1返回沿线段的位置。
[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 计算结果会被拷贝到target。

返回一个线段某一位置的向量，当 t = 0的时候返回起始点，当t = 1的时候返回终点。

### .[distance](https://threejs.org/docs/index.html#api/zh/math/Line3.distance) () : Float

Returns the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) (straight-line distance) between the line's [start](https://threejs.org/docs/index.html#api/zh/math/Line3.start) and [end](https://threejs.org/docs/index.html#api/zh/math/Line3.end) points.

### .[distanceSq](https://threejs.org/docs/index.html#api/zh/math/Line3.distanceSq) () : Float

返回起始点[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start)和终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end)的欧几里得距离[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)。（直线距离）

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Line3.equals) ( line : [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3) ) : Boolean

[line](https://threejs.org/docs/index.html#api/zh/math/Line3) - [Line3](https://threejs.org/docs/index.html#api/zh/math/Line3) to compare with this one.

如果给定线段与当前线段的起始点[start](https://threejs.org/docs/index.html#api/zh/math/Line3.start)和终点[end](https://threejs.org/docs/index.html#api/zh/math/Line3.end)都相同则返回true。

### .[getCenter](https://threejs.org/docs/index.html#api/zh/math/Line3.getCenter) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果会写入target。

返回线段的中心点。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Line3.set) ( start : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), end : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

[start](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 设置线段的起点 [start point](https://threejs.org/docs/index.html#api/zh/math/Line3.start)。
[end](https://threejs.org/docs/index.html#api/zh/math/Vector3) - 设置线段的终点 [end point](https://threejs.org/docs/index.html#api/zh/math/Line3.end)。

将传入的向量设置到线段的起始点和终点。