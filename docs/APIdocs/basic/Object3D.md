# 三维物体（Object3D）

这是大部分对象的基类，提供了一系列的属性和方法来对三维空间中的物体进行操纵。

请注意，可以通过[.add](https://threejs.org/docs/index.html#api/zh/core/Object3D.add)( object )方法来将对象进行组合，该方法将对象添加为子对象，但为此最好使用[Group](https://threejs.org/docs/index.html#api/zh/objects/Group)（来作为父对象）。

## 构造器

### Object3D()

构造器中不带有参数。

## 属性

### .[animations](https://threejs.org/docs/index.html#api/zh/core/Object3D.animations) : [AnimationClip](https://threejs.org/docs/index.html#api/zh/animation/AnimationClip)

Array with object's animation clips.

### .[castShadow](https://threejs.org/docs/index.html#api/zh/core/Object3D.castShadow) : Boolean

对象是否被渲染到阴影贴图中。默认值为**false**。

### .[children](https://threejs.org/docs/index.html#api/zh/core/Object3D.children) : Array

含有对象的子级的数组。请参阅[Group](https://threejs.org/docs/index.html#api/zh/objects/Group)来了解将手动对象进行分组的相关信息。

### .[customDepthMaterial](https://threejs.org/docs/index.html#api/zh/core/Object3D.customDepthMaterial) : [Material](https://threejs.org/docs/index.html#api/zh/materials/Material)

渲染到深度贴图时要使用的自定义深度材质。只能在网格上下文中使用。使用平行光或聚光灯进行阴影投射时，如果要修改顶点着色器中的顶点位置，则必须为适当的阴影指定自定义深度材质。默认值为**false**。

### .[customDistanceMaterial](https://threejs.org/docs/index.html#api/zh/core/Object3D.customDistanceMaterial) : [Material](https://threejs.org/docs/index.html#api/zh/materials/Material)

与[customDepthMaterial](https://threejs.org/docs/index.html#api/zh/core/Object3D.customDepthMaterial)相同，但与[PointLight](https://threejs.org/docs/index.html#api/zh/lights/PointLight)一起使用。默认值为**undefined**。

### .[frustumCulled](https://threejs.org/docs/index.html#api/zh/core/Object3D.frustumCulled) : Boolean

设置此选项后，在渲染对象之前，它会检查每一帧对象是否位于摄影机的平截头体中。如果设置为false，则即使对象不在摄影机的平截头体中，也会每帧渲染一次。默认值为**true**。

### .[id](https://threejs.org/docs/index.html#api/zh/core/Object3D.id) : Integer

只读 —— 表示该对象实例ID的唯一数字。

### .[isObject3D](https://threejs.org/docs/index.html#api/zh/core/Object3D.isObject3D) : Boolean

只读标志，用于检查给定对象是否为Object3D类型。

### .[layers](https://threejs.org/docs/index.html#api/zh/core/Object3D.layers) : [Layers](https://threejs.org/docs/index.html#api/zh/core/Layers)

物体的层级关系。 物体只有和一个正在使用的[Camera](https://threejs.org/docs/index.html#api/zh/cameras/Camera)至少在同一个层时才可见。当使用Raycaster时，该属性还可用于过滤光线相交测试中不需要的对象。

### .[matrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrix) : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

局部变换矩阵。

### .[matrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixAutoUpdate) : Boolean

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算matrixWorld属性。默认值是[Object3D.DefaultMatrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultMatrixAutoUpdate) (true)。

### .[matrixWorld](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixWorld) : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

物体的世界变换。若这个Object3D没有父级，则它将和local transform [.matrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrix)（局部变换矩阵）相同。

### .[matrixWorldAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixWorldAutoUpdate) : Boolean

默认值为`true`。如果已设置，则渲染器将检查每个帧是否对象及其子对象需要矩阵更新。如果不是，则必须自己维护对象及其子对象中的所有矩阵。

### .[matrixWorldNeedsUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixWorldNeedsUpdate) : Boolean

当这个属性设置了之后，它将计算在那一帧中的matrixWorld，并将这个值重置为false。默认值为**false**。

### .[modelViewMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.modelViewMatrix) : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4)

这个值传递给着色器，用于计算物体的位置。

### .[name](https://threejs.org/docs/index.html#api/zh/core/Object3D.name) : String

对象的名称，可选、不必唯一。默认值是一个空字符串。

### .[normalMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.normalMatrix) : [Matrix3](https://threejs.org/docs/index.html#api/zh/math/Matrix3)

这个值传递给着色器，用于计算物体的光照。 它是物体的modelViewMatrix矩阵中，左上角3x3子矩阵的逆的转置矩阵。

使用这个特殊矩阵的原因，是只需使用modelViewMatrix就可以得出一个法线（缩放时）的非单位长度或者非垂直的方向（不规则缩放时）。

另一方面，modelViewMatrix矩阵中的位移部分和法线的计算无关，因此Matrix3就已经足够了。

### .[onAfterRender](https://threejs.org/docs/index.html#api/zh/core/Object3D.onAfterRender) : Function

一个可选的回调函数，在Object3D渲染之后直接执行。 使用以下参数来调用此函数：renderer，scene，camera，geometry，material，group。

请注意，此回调仅对可渲染的3D对象执行。表示使用几何图形和材质（如网格、直线、点或精灵的实例）定义其视觉外观的三维对象。Object3D、Group或Bone的实例不可渲染，因此不会对此类对象执行此回调。

### .[onBeforeRender](https://threejs.org/docs/index.html#api/zh/core/Object3D.onBeforeRender) : Function

一个可选的回调函数，在Object3D渲染之前直接执行。 使用以下参数来调用此函数：renderer，scene，camera，geometry，material，group。

请注意，此回调仅对可渲染的3D对象执行。表示使用几何图形和材质（如网格、直线、点或精灵的实例）定义其视觉外观的三维对象。Object3D、Group或Bone的实例不可渲染，因此不会对此类对象执行此回调。

### .[parent](https://threejs.org/docs/index.html#api/zh/core/Object3D.parent) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

在[scene graph](https://en.wikipedia.org/wiki/Scene_graph)（场景图）中，一个对象的父级对象。 一个对象最多仅能有一个父级对象。

### .[position](https://threejs.org/docs/index.html#api/zh/core/Object3D.position) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

表示对象局部位置的[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)。默认值为(0, 0, 0)。

### .[quaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.quaternion) : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)

表示对象局部旋转的[Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)（四元数）。

### .[receiveShadow](https://threejs.org/docs/index.html#api/zh/core/Object3D.receiveShadow) : Boolean

材质是否接收阴影。默认值为**false**。

### .[renderOrder](https://threejs.org/docs/index.html#api/zh/core/Object3D.renderOrder) : Number

这个值将使得[scene graph](https://en.wikipedia.org/wiki/Scene_graph)（场景图）中默认的的渲染顺序被覆盖， 即使不透明对象和透明对象保持独立顺序。 渲染顺序是由低到高来排序的，默认值为**0**。

### .[rotation](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotation) : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler)

物体的局部旋转，以弧度来表示。（请参阅[Euler angles](https://en.wikipedia.org/wiki/Euler_angles)-欧拉角）

### .[scale](https://threejs.org/docs/index.html#api/zh/core/Object3D.scale) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

物体的局部缩放。默认值是[Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)( 1, 1, 1 )。

### .[up](https://threejs.org/docs/index.html#api/zh/core/Object3D.up) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

这个属性由[lookAt](https://threejs.org/docs/index.html#api/zh/core/Object3D.lookAt)方法所使用，例如，来决定结果的朝向。 默认值是[Object3D.DefaultUp](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultUp)，即( 0, 1, 0 )。

### .[userData](https://threejs.org/docs/index.html#api/zh/core/Object3D.userData) : Object

一个用于存储Object3D自定义数据的对象。 它不应当包含对函数的引用，因为这些函数将不会被克隆。

### .[uuid](https://threejs.org/docs/index.html#api/zh/core/Object3D.uuid) : String

该对象实例的[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier)。 这是一个自动生成的值，不应当对其进行修改。

### .[visible](https://threejs.org/docs/index.html#api/zh/core/Object3D.visible) : Boolean

可见性。这个值为**true**时，物体将被渲染。默认值为**true**。

## 静态属性

静态属性和方法由每个类所定义，并非由每个类的实例所定义。 也就是说，改变[Object3D.DefaultUp](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultUp)或[Object3D.DefaultMatrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultMatrixAutoUpdate)的值， 将改变**每个在此之后**由Object3D类（或派生类）创建的实例中的[up](https://threejs.org/docs/index.html#api/zh/core/Object3D.up)和[matrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixAutoUpdate)的值。（已经创建好的Object3D不会受到影响）。

### .[DefaultUp](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultUp) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

默认的物体的[up](https://threejs.org/docs/index.html#api/zh/core/Object3D.up)方向，同时也作为[DirectionalLight](https://threejs.org/docs/index.html#api/zh/lights/DirectionalLight)、[HemisphereLight](https://threejs.org/docs/index.html#api/zh/lights/HemisphereLight)和Spotlight（自顶向下创建的灯光）的默认方向。 默认设为( 0, 1, 0 )。

### .[DefaultMatrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.DefaultMatrixAutoUpdate) : Boolean

[matrixAutoUpdate](https://threejs.org/docs/index.html#api/zh/core/Object3D.matrixAutoUpdate)的默认设置，用于新创建的Object3D。

## 方法

[EventDispatcher](https://threejs.org/docs/index.html#api/zh/core/EventDispatcher) 在该类上可用的所有方法。

### .[add](https://threejs.org/docs/index.html#api/zh/core/Object3D.add) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D), ... ) : this

添加**对象**到这个对象的子级，可以添加任意数量的对象。 当前传入的对象中的父级将在这里被移除，因为一个对象仅能有一个父级。

请参阅[Group](https://threejs.org/docs/index.html#api/zh/objects/Group)来查看手动编组对象的相关信息。

### .[applyMatrix4](https://threejs.org/docs/index.html#api/zh/core/Object3D.applyMatrix4) ( matrix : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : undefined

对当前物体应用这个变换矩阵，并更新物体的位置、旋转和缩放。

### .[applyQuaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.applyQuaternion) ( quaternion : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : this

对当前物体应用由四元数所表示的变换。

### .[attach](https://threejs.org/docs/index.html#api/zh/core/Object3D.attach) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D) ) : this

将**object**作为子级来添加到该对象中，同时保持该object的世界变换。

### .[clone](https://threejs.org/docs/index.html#api/zh/core/Object3D.clone) ( recursive : Boolean ) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

recursive —— 如果值为true，则该物体的后代也会被克隆。默认值为true。

返回对象前物体的克隆（以及可选的所有后代）。

### .[copy](https://threejs.org/docs/index.html#api/zh/core/Object3D.copy) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D), recursive : Boolean ) : this

recursive —— 如果值为true，则该物体的后代也会被复制。默认值为true。

复制给定的对象到这个对象中。 请注意，事件监听器和用户定义的回调函数（[.onAfterRender](https://threejs.org/docs/index.html#api/zh/core/Object3D.onAfterRender) 和 [.onBeforeRender](https://threejs.org/docs/index.html#api/zh/core/Object3D.onBeforeRender)）不会被复制。

### .[getObjectById](https://threejs.org/docs/index.html#api/zh/core/Object3D.getObjectById) ( id : Integer ) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

id —— 标识该对象实例的唯一数字。

从该对象开始，搜索一个对象及其子级，返回第一个带有匹配id的子对象。
请注意，id是按照时间顺序来分配的：1、2、3、……，每增加一个新的对象就自增1。

### .[getObjectByName](https://threejs.org/docs/index.html#api/zh/core/Object3D.getObjectByName) ( name : String ) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

name —— 用于来匹配子物体中Object3D.name属性的字符串。

从该对象开始，搜索一个对象及其子级，返回第一个带有匹配name的子对象。
请注意，大多数的对象中name默认是一个空字符串，要使用这个方法，你将需要手动地设置name属性。

### .[getObjectByProperty](https://threejs.org/docs/index.html#api/zh/core/Object3D.getObjectByProperty) ( name : String, value : Any ) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

name —— 将要用于查找的属性的名称。
value —— 给定的属性的值。

从该对象开始，搜索一个对象及其子级，返回第一个给定的属性中包含有匹配的值的子对象。

### .[getObjectsByProperty](https://threejs.org/docs/index.html#api/zh/core/Object3D.getObjectsByProperty) ( name : String, value : Any ) : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D)

name —— 将要用于查找的属性的名称。
value —— 给定的属性的值。

从此对象开始，搜索一个对象及其子对象，返回包含给定属性的匹配值的所有子对象。

### .[getWorldPosition](https://threejs.org/docs/index.html#api/zh/core/Object3D.getWorldPosition) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将被复制到这个Vector3中。

返回一个表示该物体在世界空间中位置的矢量。

### .[getWorldQuaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.getWorldQuaternion) ( target : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion)

[target](https://threejs.org/docs/index.html#api/zh/math/Quaternion) — 结果将被复制到这个Quaternion中。

返回一个表示该物体在世界空间中旋转的四元数。

### .[getWorldScale](https://threejs.org/docs/index.html#api/zh/core/Object3D.getWorldScale) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将被复制到这个Vector3中。

返回一个包含着该物体在世界空间中各个轴向上所应用的缩放因数的矢量。

### .[getWorldDirection](https://threejs.org/docs/index.html#api/zh/core/Object3D.getWorldDirection) ( target : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

[target](https://threejs.org/docs/index.html#api/zh/math/Vector3) — 结果将被复制到这个Vector3中。

返回一个表示该物体在世界空间中Z轴正方向的矢量。

### .[localToWorld](https://threejs.org/docs/index.html#api/zh/core/Object3D.localToWorld) ( vector : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

vector - 一个表示在该物体局部空间中位置的向量。

将该向量从物体的局部空间转换到世界空间。

### .[lookAt](https://threejs.org/docs/index.html#api/zh/core/Object3D.lookAt) ( vector : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : undefined .[lookAt](https://threejs.org/docs/index.html#api/zh/core/Object3D.lookAt) ( x : Float, y : Float, z : Float ) : undefined

vector - 一个表示世界空间中位置的向量。

也可以使用世界空间中[x](https://threejs.org/docs/index.html#api/zh/core/Object3D.x)、[y](https://threejs.org/docs/index.html#api/zh/core/Object3D.y)和[z](https://threejs.org/docs/index.html#api/zh/core/Object3D.z)的位置分量。

旋转物体使其在世界空间中面朝一个点。

这一方法不支持其父级被旋转过或者被位移过的物体。

### .[raycast](https://threejs.org/docs/index.html#api/zh/core/Object3D.raycast) ( raycaster : [Raycaster](https://threejs.org/docs/index.html#api/zh/core/Raycaster), intersects : Array ) : undefined

抽象（空方法），在一条被投射出的射线与这个物体之间获得交点。 在一些子类，例如[Mesh](https://threejs.org/docs/index.html#api/zh/objects/Mesh), [Line](https://threejs.org/docs/index.html#api/zh/objects/Line), and [Points](https://threejs.org/docs/index.html#api/zh/objects/Points)实现了这个方法，以用于光线投射。

### .[remove](https://threejs.org/docs/index.html#api/zh/core/Object3D.remove) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D), ... ) : this

从当前对象的子级中移除**对象**。可以移除任意数量的对象。

### .[removeFromParent](https://threejs.org/docs/index.html#api/zh/core/Object3D.removeFromParent) () : this

Removes this object from its current parent.

### .[rotateOnAxis](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotateOnAxis) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), angle : Float ) : this

axis —— 一个在局部空间中的标准化向量。
angle —— 角度，以弧度来表示。

在局部空间中绕着该物体的轴来旋转一个物体，假设这个轴已被标准化。

### .[rotateOnWorldAxis](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotateOnWorldAxis) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), angle : Float ) : this

axis -- 一个在世界空间中的标准化向量。
angle -- 角度，以弧度来表示。

在世界空间中绕着该物体的轴来旋转一个物体，假设这个轴已被标准化。 方法假设该物体没有旋转过的父级。

### .[rotateX](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotateX) ( rad : Float ) : this

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的X轴旋转这个物体。

### .[rotateY](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotateY) ( rad : Float ) : this

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的Y轴旋转这个物体。

### .[rotateZ](https://threejs.org/docs/index.html#api/zh/core/Object3D.rotateZ) ( rad : Float ) : this

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的Z轴旋转这个物体。

### .[setRotationFromAxisAngle](https://threejs.org/docs/index.html#api/zh/core/Object3D.setRotationFromAxisAngle) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), angle : Float ) : undefined

axis -- 一个在局部空间中的标准化向量。
angle -- 角度（以弧度来表示）。

调用[.quaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.quaternion)中的[setFromAxisAngle](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromAxisAngle)( axis, angle )。

### .[setRotationFromEuler](https://threejs.org/docs/index.html#api/zh/core/Object3D.setRotationFromEuler) ( euler : [Euler](https://threejs.org/docs/index.html#api/zh/math/Euler) ) : undefined

euler -- 指定了旋转量的欧拉角。
调用[.quaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.quaternion)中的[setRotationFromEuler](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setRotationFromEuler)( [euler](https://threejs.org/docs/index.html#api/zh/math/Euler))。

### .[setRotationFromMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.setRotationFromMatrix) ( m : [Matrix4](https://threejs.org/docs/index.html#api/zh/math/Matrix4) ) : undefined

m -- 通过该矩阵中的旋转分量来旋转四元数。
调用[.quaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.quaternion)中的[setFromRotationMatrix](https://threejs.org/docs/index.html#api/zh/math/Quaternion.setFromRotationMatrix)( [m](https://threejs.org/docs/index.html#api/zh/math/Matrix4))。

请注意，这里假设m上的3x3矩阵是一个纯旋转矩阵（即未缩放的矩阵）。

### .[setRotationFromQuaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.setRotationFromQuaternion) ( q : [Quaternion](https://threejs.org/docs/index.html#api/zh/math/Quaternion) ) : undefined

q -- 标准化的四元数。

将所给的四元数复制到[.quaternion](https://threejs.org/docs/index.html#api/zh/core/Object3D.quaternion)中。

### .[toJSON](https://threejs.org/docs/index.html#api/zh/core/Object3D.toJSON) ( meta : Object ) : Object

meta -- 包含有元数据的对象，例如该对象的材质、纹理或图片。 将对象转换为 three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4)（three.js JSON 物体/场景格式）。

### .[translateOnAxis](https://threejs.org/docs/index.html#api/zh/core/Object3D.translateOnAxis) ( axis : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3), distance : Float ) : this

axis -- 一个在局部空间中的标准化向量。
distance -- 将要平移的距离。

在局部空间中沿着一条轴来平移物体，假设轴已被标准化。

### .[translateX](https://threejs.org/docs/index.html#api/zh/core/Object3D.translateX) ( distance : Float ) : this

沿着X轴将平移**distance**个单位。

### .[translateY](https://threejs.org/docs/index.html#api/zh/core/Object3D.translateY) ( distance : Float ) : this

沿着Y轴将平移**distance**个单位。

### .[translateZ](https://threejs.org/docs/index.html#api/zh/core/Object3D.translateZ) ( distance : Float ) : this

沿着Z轴将平移**distance**个单位。

### .[traverse](https://threejs.org/docs/index.html#api/zh/core/Object3D.traverse) ( callback : Function ) : undefined

callback - 以一个object3D对象作为第一个参数的函数。

在对象以及后代中执行的回调函数。

### .[traverseVisible](https://threejs.org/docs/index.html#api/zh/core/Object3D.traverseVisible) ( callback : Function ) : undefined

callback - 以一个object3D对象作为第一个参数的函数。

类似traverse函数，但在这里，回调函数仅对可见的对象执行，不可见对象的后代将不遍历。

### .[traverseAncestors](https://threejs.org/docs/index.html#api/zh/core/Object3D.traverseAncestors) ( callback : Function ) : undefined

callback - 以一个object3D对象作为第一个参数的函数。

在所有的祖先中执行回调函数。

### .[updateMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.updateMatrix) () : undefined

更新局部变换。

### .[updateMatrixWorld](https://threejs.org/docs/index.html#api/zh/core/Object3D.updateMatrixWorld) ( force : Boolean ) : undefined

更新物体及其后代的全局变换。

### .[updateWorldMatrix](https://threejs.org/docs/index.html#api/zh/core/Object3D.updateWorldMatrix) ( updateParents : Boolean, updateChildren : Boolean ) : undefined

updateParents - 递归更新祖先的全局变换。
updateChildren - 递归更新子体的全局变换。

更新对象的全局变换。

### .[worldToLocal](https://threejs.org/docs/index.html#api/zh/core/Object3D.worldToLocal) ( vector : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3) ) : [Vector3](https://threejs.org/docs/index.html#api/zh/math/Vector3)

vector - 一个表示在世界空间中位置的向量。

将该向量从世界空间转换到物体的局部空间。