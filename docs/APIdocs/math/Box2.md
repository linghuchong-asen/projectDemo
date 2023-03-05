# Box2

表示二维空间中的一个轴对齐包围盒（axis-aligned bounding box，AABB）。

## 构造函数(Constructor)

### Box2( min : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), max : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) )

[min](https://threejs.org/docs/index.html#api/zh/math/Vector2) - (可选) [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) 表示该盒子的下边界(x, y)。默认值为( + Infinity, + Infinity )。
[max](https://threejs.org/docs/index.html#api/zh/math/Vector2) - (可选) [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) 表示该盒子的上边界(x, y)。默认值为( - Infinity, - Infinity )。

创建一个介于最小和最大值之间的Box2。

## 属性(Properties)

### .[min](https://threejs.org/docs/index.html#api/zh/math/Box2.min) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) 表示该盒子的下边界(x, y)。
默认值为( + Infinity, + Infinity )。

### .[max](https://threejs.org/docs/index.html#api/zh/math/Box2.max) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) 表示该盒子的上边界(x, y)。
默认值为( - Infinity, - Infinity )。

## 方法(Methods)

### .[clampPoint](https://threejs.org/docs/index.html#api/zh/math/Box2.clampPoint) ( point : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), target : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector2) - clamp 的位置 ([Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2))
[target](https://threejs.org/docs/index.html#api/zh/math/Vector2) — 结果会被复制到该二维向量中。

在该盒子范围内夹紧（[Clamps](https://en.wikipedia.org/wiki/Clamping_(graphics))）[point](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Box2.clone) () : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2)

返回一个新的[Box2](https://threejs.org/docs/index.html#api/zh/math/Box2)，其[min](https://threejs.org/docs/index.html#api/zh/math/Box2.min)和[max](https://threejs.org/docs/index.html#api/zh/math/Box2.max)与此盒子相同。

### .[containsBox](https://threejs.org/docs/index.html#api/zh/math/Box2.containsBox) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box2) - 要检查是否被包含的盒子。

如果盒子包含整个被检查盒子，则返回true。如果两者重叠，
也会返回true。

### .[containsPoint](https://threejs.org/docs/index.html#api/zh/math/Box2.containsPoint) ( point : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Boolean

[point](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 要检查是否被包含的点[Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)。

如果指定的点([point](https://threejs.org/docs/index.html#api/zh/math/Vector2))位于盒子的边界内或边界上，则返回true。

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Box2.copy) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : this

将[box](https://threejs.org/docs/index.html#api/zh/math/Box2)的[min](https://threejs.org/docs/index.html#api/zh/math/Box2.min) 和 [max](https://threejs.org/docs/index.html#api/zh/math/Box2.max)复制到此盒子中。

### .[distanceToPoint](https://threejs.org/docs/index.html#api/zh/math/Box2.distanceToPoint) ( point : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : Float

[point](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 要测量距离的点([Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2))。

返回这个盒子的任何边缘到指定点的距离。如果这个点([point](https://threejs.org/docs/index.html#api/zh/math/Vector2))位于这个盒子里，距离将是0。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Box2.equals) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box2) - 要对比的盒子

如果这个盒子和被对比盒子具有相同的上下边界，则返回true。

### .[expandByPoint](https://threejs.org/docs/index.html#api/zh/math/Box2.expandByPoint) ( point : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[point](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 应该被盒子包含的点。

扩展盒子的边界来包含该点。

### .[expandByScalar](https://threejs.org/docs/index.html#api/zh/math/Box2.expandByScalar) ( scalar : Float ) : this

scalar - 盒子扩展的距离。

在每个维度上扩展参数scalar所指定的距离，如果为负数，则盒子空间将收缩。

### .[expandByVector](https://threejs.org/docs/index.html#api/zh/math/Box2.expandByVector) ( vector : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[vector](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 按照该向量扩展。

在每个维度中按vector的数值进行扩展。宽度在两个方向上的扩展将由vector的x分量确定， 高度在两个方向上的扩展则由y分量确定。

### .[getCenter](https://threejs.org/docs/index.html#api/zh/math/Box2.getCenter) ( target : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector2) — 结果将被复制到此二维向量中。

以二维向量形式返回盒子的中心点。

### .[getParameter](https://threejs.org/docs/index.html#api/zh/math/Box2.getParameter) ( point : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), target : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[point](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 二维向量([Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)).
[target](https://threejs.org/docs/index.html#api/zh/math/Vector2) — 结果将被复制到此二维向量中。

返回一个点作为此盒子的宽度和高度的比例。

### .[getSize](https://threejs.org/docs/index.html#api/zh/math/Box2.getSize) ( target : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector2) — 结果将被复制到此二维向量中。

返回此盒子的宽度和高度。

### .[intersect](https://threejs.org/docs/index.html#api/zh/math/Box2.intersect) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : this

[box](https://threejs.org/docs/index.html#api/zh/math/Box2) - 要相交的盒子。

返回两者的相交后的盒子，并将相交后的盒子的上限设置为两者的上限中的较小者，将下限设置为两者的下限中的较大者。

### .[intersectsBox](https://threejs.org/docs/index.html#api/zh/math/Box2.intersectsBox) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : Boolean

[box](https://threejs.org/docs/index.html#api/zh/math/Box2) - 用来检查相交的盒子。

确定该盒子是否和其相交。

### .[isEmpty](https://threejs.org/docs/index.html#api/zh/math/Box2.isEmpty) () : Boolean

如果这个盒子包含0个顶点，则返回true。
请注意，一个下上边界相等的的盒子仍然包括一个点，一个两个边界共享的点。

### .[makeEmpty](https://threejs.org/docs/index.html#api/zh/math/Box2.makeEmpty) () : this

使此盒子为空。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Box2.set) ( min : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), max : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[min](https://threejs.org/docs/index.html#api/zh/math/Vector2) - (必须) 表示该盒子的下边界(x, y)。
[max](https://threejs.org/docs/index.html#api/zh/math/Vector2) - (必须) 表示该盒子的上边界(x, y)。

设置这个盒子的上下(x, y)的界限。
请注意，此方法仅复制给定对象的值。

### .[setFromCenterAndSize](https://threejs.org/docs/index.html#api/zh/math/Box2.setFromCenterAndSize) ( center : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), size : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[center](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 盒子所要设置的中心位置。 ([Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)).
[size](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 盒子所要设置的x和y尺寸 ([Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2)).

使盒子的中心点位于[center](https://threejs.org/docs/index.html#api/zh/math/Vector2)，并设置宽高为[size](https://threejs.org/docs/index.html#api/zh/math/Vector2)中指定的值。

### .[setFromPoints](https://threejs.org/docs/index.html#api/zh/math/Box2.setFromPoints) ( points : Array ) : this

points - 点的集合，由这些点确定的空间将被盒子包围。

设置这个盒子的上下边界，来包含所有设置在points参数中的点。

### .[translate](https://threejs.org/docs/index.html#api/zh/math/Box2.translate) ( offset : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2) ) : this

[offset](https://threejs.org/docs/index.html#api/zh/math/Vector2) - 偏移方向和距离。

添加 [offset](https://threejs.org/docs/index.html#api/zh/math/Vector2) 到这个盒子的上下边界，实际上在2D空间移动这个盒子[offset](https://threejs.org/docs/index.html#api/zh/math/Vector2)个单位。

### .[union](https://threejs.org/docs/index.html#api/zh/math/Box2.union) ( box : [Box2](https://threejs.org/docs/index.html#api/zh/math/Box2) ) : this

[box](https://threejs.org/docs/index.html#api/zh/math/Box2) - 将要与该盒子联合的盒子

在[box](https://threejs.org/docs/index.html#api/zh/math/Box2)参数的上边界和该盒子的上边界之间取较大者，而对两者的下边界取较小者，这样获得一个新的较大的联合盒子。