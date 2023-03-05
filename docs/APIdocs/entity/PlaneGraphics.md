# 平面(PlaneGraphics)

平面。中心位置和方向由包含的 [`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) 确定。

## 构造器

**PlaneGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default               | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :-------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                | `optional`指定显隐性。                                       |
| `plane`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                       | `optional`[`Plane`](https://www.vvpstk.com/public/Cesium/Documentation/Plane.html) 属性，指定平面的法线和原点距平面的距离。 |
| `dimensions`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                       | `optional`[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性，指定平面的长宽。 |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`         | `optional`指定用于填充的材质。                               |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`               | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`         | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                 | `optional`边框宽度。                                         |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED` | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                       | `optional`指定在距相机某个距离内显示。                       |

## 属性

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[dimensions : Property]()**

设置/获取平面的宽高， [`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。

**[distanceDisplayCondition : Property]()**

设置/获取设置/获取获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[fill : Property]()**

设置/获取是否使用提供的材质填充。

默认值: `true`

**[material : MaterialProperty]()**

设置/获取用于填充的材质。

默认值: `Color.WHITE`

**[outline : Property]()**

设置/获取是否显示边框。

默认值: `false`

**[outlineColor : Propert]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `Color.BLACK`

**[outlineWidth : Propert]()**

设置/获取边框宽度。

默认值: `1.0`

**[plane : Propert]()**

设置/获取[`Plane`](https://www.vvpstk.com/public/Cesium/Documentation/Plane.html) （指定平面的法线和原点距平面的距离）。

**[shadows : Propert]()**

从每个光源投射或接收阴影的模式。

默认值: `ShadowMode.DISABLED`

**[show : Propert]()**

设置/获取显隐性。

默认值: `true`

## 方法

**[clone(result): PlaneGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PlaneGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PlaneGraphics.html) | optional用来存储结果的对象。 |

返回值:

修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PlaneGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PlaneGraphics.html) | 要被合并到这个对象的对象。 |