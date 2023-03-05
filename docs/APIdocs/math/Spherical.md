# 球坐标（Spherical）

一个点的[spherical coordinates](https://en.wikipedia.org/wiki/Spherical_coordinate_system)（球坐标）。

## 构造函数

### Spherical( radius : Float, phi : Float, theta : Float )

radius - 半径值，或者说从该点到原点的 [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)（欧几里得距离，即直线距离）。默认值为**1.0**。
phi - 与 y (up) 轴的极角（以弧度为单位）。 默认值为 **0**。
theta - 绕 y (up) 轴的赤道角(方位角)（以弧度为单位）。 默认值为 **0**。

极角（phi）位于正 y 轴和负 y 轴上。赤道角(方位角)（theta）从正 z 开始。

## 属性

### .[radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius) : Float

### .[phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi) : Float

### .[theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta) : Float

## 方法

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Spherical.clone) () : [Spherical](https://threejs.org/docs/index.html#api/zh/math/Spherical)

返回一个新的球坐标，新的球坐标与该球坐标具有相同的 [radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius)、[phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi)和[theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta)。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Spherical.copy) ( s : [Spherical](https://threejs.org/docs/index.html#api/zh/math/Spherical) ) : this

复制所传入的球坐标的[radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius)、 [phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi) 和[theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta)属性到该球坐标中。

### .[makeSafe](https://threejs.org/docs/index.html#api/zh/math/Spherical.makeSafe) () : this

将极角 [phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi) 的值限制在0.000001 和 π - 0.000001 之间。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Spherical.set) ( radius : Float, phi : Float, theta : Float ) : this

设置球坐标中[radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius)、[phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi) 和 [theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta) 属性的值。

### .[setFromVector3](https://threejs.org/docs/index.html#api/zh/math/Spherical.setFromVector3) ( vec3 : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : this

从[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)中设置球坐标的[radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius)、[phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi)和[theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta)值。

### .[setFromCartesianCoords](https://threejs.org/docs/index.html#api/zh/math/Spherical.setFromCartesianCoords) ( x : Float, y : Float, z : Float ) : this

从笛卡尔坐标系中设置球坐标的[radius](https://threejs.org/docs/index.html#api/zh/math/Spherical.radius)、[phi](https://threejs.org/docs/index.html#api/zh/math/Spherical.phi)和[theta](https://threejs.org/docs/index.html#api/zh/math/Spherical.theta)值。