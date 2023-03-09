# 场景(Scene)

场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。

## 属性

### camera: [Camera](./Camera.md)

获取或者设置相机。

### primitives: [PrimitiveGroup](../primitive/PrimitiveGroup.md)

获取要素的合集。

### **[light]()**

灯光。有PointLight与DirectionalLight两种，默认DirectionalLight。

## 方法

### getPrimitiveById(id) 

| Name | Type   |                  |
| :--- | :----- | :--------------- |
| id   | string | 要获取图元的id。 |

根据图元的id获取图元。
