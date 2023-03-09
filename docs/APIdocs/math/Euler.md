# 欧拉角（Euler）

表示 [Euler](http://en.wikipedia.org/wiki/Euler_angles) 的类。

欧拉角描述一个旋转变换，通过指定轴顺序和其各个轴向上的指定旋转角度来旋转一个物体。

对 Euler 实例进行遍历将按相应的顺序生成它的分量 (x, y, z, order)。

## 代码示例

```
const a = new THREE.Euler( 0, 1, 1.57, 'XYZ' ); const b = new THREE.Vector3( 1, 0, 1 ); b.applyEuler(a);
```

## 构造器（Constructor）

### Euler( x : Float, y : Float, z : Float, order : String )

x - (optional) 用弧度表示x轴旋转量。 默认值是 **0**。
y - (optional) 用弧度表示y轴旋转量。 默认值是 **0**。
z - (optional) 用弧度表示z轴旋转量。 默认值是 **0**。
order - (optional) 表示旋转顺序的字符串，默认为'XYZ'（必须是大写）。



## 属性（Properties）

### .[isEuler](https://threejs.org/docs/index.html#api/zh/math/Euler.isEuler) : Boolean

Read-only flag to check if a given object is of type Euler.

### .[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) : String

order值应用于旋转顺序。默认值为 'XYZ'，这意味着对象将首先是 绕X轴旋转，然后是Y轴，最后是Z轴。其他可能性包括: 'YZX'， 'ZXY'， 'XZY'， 'YXZ'和'ZYX'。这些必须是大写字母。

Three.js 使用*intrinsic* Tait-Bryan angles（Yaw、Pitch、Roll）。 这意味着旋转是在*本地*坐标系下进行的。也就是说，对于“XYZ”顺序，首先是围绕local-X轴旋转(与world- x轴相同)， 然后是local-Y(现在可能与world y轴不同)，然后是local-Z(可能与world z轴不同)。



### .[x](https://threejs.org/docs/index.html#api/zh/math/Euler.x) : Float

当前x分量的值。



### .[y](https://threejs.org/docs/index.html#api/zh/math/Euler.y) : Float

当前y分量的值。



### .[z](https://threejs.org/docs/index.html#api/zh/math/Euler.z) : Float

当前z分量的值。



## 方法（Methods）

### .[copy](https://threejs.org/docs/index.html#api/zh/math/Euler.copy) ( euler : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) ) : this

将 [euler](https://threejs.org/docs/index.html#api/zh/math/Euler) 的属性拷贝到当前对象。

### .[clone](https://threejs.org/docs/index.html#api/zh/math/Euler.clone) () : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler)

返回一个与当前参数相同的新欧拉角。

### .[equals](https://threejs.org/docs/index.html#api/zh/math/Euler.equals) ( euler : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) ) : Boolean

检查 [euler](https://threejs.org/docs/index.html#api/zh/math/Euler) 是否与当前对象相同。

### .[fromArray](https://threejs.org/docs/index.html#api/zh/math/Euler.fromArray) ( array : Array ) : this

长度为3或4的一个 array 。array[3] 是一个可选的 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) 参数。

将欧拉角的x分量设置为 array[0]。
将欧拉角的y分量设置为 array[1]。
将欧拉角的z分量设置为 array[2]。
将array[3]设置给欧拉角的 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) 。可选。

### .[reorder](https://threejs.org/docs/index.html#api/zh/math/Euler.reorder) ( newOrder : String ) : this

通过这个欧拉角创建一个四元数，然后用这个四元数和新顺序设置这个欧拉角。

*警告*: 这将弃用旋转信息。

### .[set](https://threejs.org/docs/index.html#api/zh/math/Euler.set) ( x : Float, y : Float, z : Float, order : String ) : this

[x](https://threejs.org/docs/index.html#api/zh/math/Euler.x) - 用弧度表示x轴旋转量。
[y](https://threejs.org/docs/index.html#api/zh/math/Euler.y) - 用弧度表示y轴旋转量。
[z](https://threejs.org/docs/index.html#api/zh/math/Euler.z) - 用弧度表示z轴旋转量。
[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) - (optional) 表示旋转顺序的字符串。

设置该欧拉变换的角度和旋转顺序 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order)。

### .[setFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Euler.setFromRotationMatrix) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4), order : String) : this

[m](https://threejs.org/docs/index.html#api/zh/math/Matrix4) - [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) 矩阵上面的3x3部分是一个纯旋转矩阵[rotation matrix](https://en.wikipedia.org/wiki/Rotation_matrix) （也就是不发生缩放）
[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) - (可选参数) 表示旋转顺序的字符串。
使用基于 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) 顺序的纯旋转矩阵来设置当前欧拉角。

### .[setFromQuaternion](https://threejs.org/docs/index.html#api/zh/math/Euler.setFromQuaternion) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion), order : String ) : this

[q](https://threejs.org/docs/index.html#api/zh/math/Quaternion) - 归一化的四元数。
[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) - (可选参数) 表示旋转顺序的字符串。
根据 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) 指定的方向，使用归一化四元数设置这个欧拉变换的角度。

### .[setFromVector3](https://threejs.org/docs/index.html#api/zh/math/Euler.setFromVector3) ( vector : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), order : String ) : this

[vector](https://threejs.org/docs/index.html#api/zh/math/Vector3) - [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3).
[order](https://threejs.org/docs/index.html#api/zh/math/Euler.order) - (可选参数) 表示旋转顺序的字符串。

设置 [x](https://threejs.org/docs/index.html#api/zh/math/Euler.x), [y](https://threejs.org/docs/index.html#api/zh/math/Euler.y) and [z](https://threejs.org/docs/index.html#api/zh/math/Euler.z) 并且选择性更新 [order](https://threejs.org/docs/index.html#api/zh/math/Euler.order)。

### .[toArray](https://threejs.org/docs/index.html#api/zh/math/Euler.toArray) ( array : Array, offset : Integer ) : Array

array - (可选参数) 存储欧拉角的数组。
offset (可选参数) 数组的偏移量。
返回一个数组：[[x](https://threejs.org/docs/index.html#api/zh/math/Euler.x), [y](https://threejs.org/docs/index.html#api/zh/math/Euler.y), [z](https://threejs.org/docs/index.html#api/zh/math/Euler.z), [order ](https://threejs.org/docs/index.html#api/zh/math/Euler.order)]。