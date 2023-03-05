# 批量模型(Models)

适用于模型相同，但是位置，朝向，大小不同的场景。支持加载glb，gltf模型。

## 构造器

**Models(options)**

options具有以下属性：

| Name     | Type                                | Description                                   |
| -------- | ----------------------------------- | --------------------------------------------- |
| url      | string                              | 模型的url。                                   |
| count    | number                              | 批量渲染模型的数量。                          |
| position | &lt;Array&gt;[number,number,number] | 含有模型位置的二维数组，三个值分别代表X,Y,Z。 |

## 示例代码

```js
const positionArr = [
    [1,0,1],
    [2,0,2],
    [3,0,3]
    ....
]

const models = new Webgis.Models({
    url:"../model.glb",
    count:100,
    position:positionArr
})
```

## 属性

## 方法

### setPosition(position,index)

| Name     | Type                          | Description              |
| -------- | ----------------------------- | ------------------------ |
| position | [Vector3](../math/Vector3.md) | 指定模型要移动到的位置。 |
| index    | number                        | 指定要移动的模型索引。   |

设置批量模型中单个模型的位置。

### setRotation(X,Y,Z)

| Name | Type      | Description                             |
| ---- | --------- | --------------------------------------- |
| X    | rad:Float | 绕局部空间的X轴旋转模型，以弧度制表示。 |
| Y    | rad:Float | 绕局部空间的Y轴旋转模型，以弧度制表示。 |
| Z    | rad:Float | 绕局部空间的Z轴旋转模型，以弧度制表示。 |

设置批量模型中单个模型的旋转方向。

### setScale(scale)

| Name  | Type                          | Description      |
| ----- | ----------------------------- | ---------------- |
| scale | [Vector3](../math/Vector3.md) | 模型的局部缩放。 |

设置批量模型中单个模型的缩放。
