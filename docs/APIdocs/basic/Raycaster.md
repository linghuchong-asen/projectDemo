# 光线投射Raycaster

这个类用于进行[raycasting](https://en.wikipedia.org/wiki/Ray_casting)（光线投射）。 光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。

## 代码示例

```js
const raycaster = new THREE.Raycaster(); 
const pointer = new THREE.Vector2(); 
function onPointerMove( event ) { 	
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1) 	
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1; 
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1; 
} 
function render() { 	
    // 通过摄像机和鼠标位置更新射线 
    raycaster.setFromCamera( pointer, camera ); 	
    // 计算物体和射线的焦点 
    const intersects = raycaster.intersectObjects( scene.children ); 	
    for ( let i = 0; i < intersects.length; i ++ ) { 		
        intersects[ i ].object.material.color.set( 0xff0000 ); 	
    } 	
    renderer.render( scene, camera ); 
} 
window.addEventListener( 'pointermove', onPointerMove ); 
window.requestAnimationFrame(render);
```

## 构造器

### Raycaster()

这将创建一个新的raycaster对象。

## 属性

### .[far](https://threejs.org/docs/index.html#api/zh/core/Raycaster.far) : Float

raycaster的远距离因数（投射远点）。这个值表明哪些对象可以基于该距离而被raycaster所丢弃。 这个值不应当为负，并且应当比near属性大。

### .[near](https://threejs.org/docs/index.html#api/zh/core/Raycaster.near) : Float

raycaster的近距离因数（投射近点）。这个值表明哪些对象可以基于该距离而被raycaster所丢弃。 这个值不应当为负，并且应当比far属性小。

### .[camera](https://threejs.org/docs/index.html#api/zh/core/Raycaster.camera) : [Camera](https://threejs.org/docs/index.html#api/zh/cameras/Camera)

当对依赖于视图的对象进行光线投射时使用的摄影机。此字段可以手动设置，也可以在调用“setFromCamera”时设置。默认值为`null`。

### .[layers](https://threejs.org/docs/index.html#api/zh/core/Raycaster.layers) : [Layers](https://threejs.org/docs/index.html#api/zh/core/Layers)

Raycaster 在执行相交测试时有选择地忽略 3D 对象。

下面的代码示例确保只有第 1 层上的 3D 对象才会被 Raycaster 实例接受。

```js
raycaster.layers.set( 1 );
object.layers.enable( 1 );
```

### .[params](https://threejs.org/docs/index.html#api/zh/core/Raycaster.params) : Object

具有以下属性的对象：

```js
{ 
    Mesh: {}, 
    Line: { threshold: 1 }, 
    LOD: {},
    Points: { threshold: 1 }, 
    Sprite: {} 
}
```

射线求交物体时阈值的精度，单位为世界坐标系。

### .[ray](https://threejs.org/docs/index.html#api/zh/core/Raycaster.ray) : [Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)

用于进行光线投射的[Ray](https://threejs.org/docs/index.html#api/zh/math/Ray)（射线）。

## 方法

### .[set](https://threejs.org/docs/index.html#api/zh/core/Raycaster.set) ( origin , direction) : undefined

| Name      | Type                          | Description                      |
| --------- | ----------------------------- | -------------------------------- |
| origin    | [Vector3](../math/Vector3.md) | 光线投射的原点向量。             |
| direction | [Vector3](../math/Vector3.md) | 为光线提供方向的标准化方向向量。 |

使用一个新的原点和方向来更新射线。

### .[setFromCamera](https://threejs.org/docs/index.html#api/zh/core/Raycaster.setFromCamera) ( : [Vector2](https://threejs.org/docs/index.html#api/zh/math/Vector2), : [Camera](https://threejs.org/docs/index.html#api/zh/cameras/Camera) ) : undefined

| Name   | Type                          | Description                                                  |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| coords | [Vector2](../math/Vector2.md) | 在标准化设备坐标中鼠标的二维坐标 —— X分量与Y分量应当在-1到1之间。 |
| camera | [Camera](./Camera.md)         | 射线所来源的摄像机。                                         |

使用一个新的原点和方向来更新射线。

### .[intersectObject](https://threejs.org/docs/index.html#api/zh/core/Raycaster.intersectObject) ( object : [Object3D](https://threejs.org/docs/index.html#api/zh/core/Object3D), recursive : Boolean, optionalTarget : Array ) : Array

object —— 检查与射线相交的物体。

recursive —— 若为true，则同时也会检查所有的后代。否则将只会检查对象本身。默认值为true。

optionalTarget — （可选）设置结果的目标数组。如果不设置这个值，则一个新的Array会被实例化；如果设置了这个值，则在每次调用之前必须清空这个数组（例如：array.length = 0;）。

检测所有在射线与物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个。
该方法返回一个包含有交叉部分的数组:

```
[ { distance, point, face, faceIndex, object }, ... ]
```

distance —— 射线投射原点和相交部分之间的距离。

point —— 相交部分的点（世界坐标）

face —— 相交的面

faceIndex —— 相交的面的索引

object —— 相交的物体

uv —— 相交部分的点的UV坐标。

uv2 —— 交点处的第二组U、V坐标。

instanceId – 光线与实例化网格相交的实例的索引编号。

当计算这条射线是否和物体相交的时候，**Raycaster**将传入的对象委托给raycast方法。 这将可以让mesh对于光线投射的响应不同于lines和pointclouds。

**请注意**：对于网格来说，面必须朝向射线的原点，以便其能够被检测到。 用于交互的射线穿过面的背侧时，将不会被检测到。如果需要对物体中面的两侧进行光线投射， 你需要将material中的side属性设置为**THREE.DoubleSide**。

### .[intersectObjects](https://threejs.org/docs/index.html#api/zh/core/Raycaster.intersectObjects) ( objects : Array, recursive : Boolean, optionalTarget : Array ) : Array

objects —— 检测和射线相交的一组物体。
recursive —— 若为true，则同时也会检测所有物体的后代。否则将只会检测对象本身的相交部分。默认值为true。
optionalTarget —— （可选）设置结果的目标数组。如果不设置这个值，则一个新的Array会被实例化；如果设置了这个值，则在每次调用之前必须清空这个数组（例如：array.length = 0;）。

检测所有在射线与这些物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个），相交部分和[.intersectObject](https://threejs.org/docs/index.html#api/zh/core/Raycaster.intersectObject)所返回的格式是相同的。