# 立方体(BoxGraphics)

一个盒子。其中心位置和方向由其包含的[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)决定。

## 构造器

**BoxGraphics(options)**

对象拥有如下属性:

| Name                       | Type                                                         | Default                | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`盒子是否可见。                                     |
| `dimensions`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)属性， 指定盒子的长、宽、高。 |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE` | `optional`相对于地形的位置。                                 |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定是否用提供的材质填充。                         |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`          | `optional`使用提供的材质填充。                               |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                | `optional`指定是否有边框。                                   |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`          | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                  | `optional`数字属性，指定边框宽度.                            |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`  | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`指定在距相机某个距离内显示。                       |

## 属性

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[dimensions : Property]()**

设置/获取长、宽、高。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[fill : Property]()**

设置/获取是否用提供的材质填充。

默认值：`true`

**[heightReference : Property]()**

设置/获取相对于地形的位置 [`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

默认值：`HeightReference.NONE`

**[material : MaterialProperty]()**

设置/获取要填充的的材质

默认值: `Color.WHITE`

**[outline : Property]()**

设置/获取是否有边框。

默认值: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

默认值: `1.0`

**[shadows : Property]()**

从每个光源投射或接收阴影的模式。

默认值: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

默认值: `true`

## 方法

**[clone(result):BoxGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [BoxGraphics](https://www.vvpstk.com/public/Cesium/Documentation/BoxGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [BoxGraphics](https://www.vvpstk.com/public/Cesium/Documentation/BoxGraphics.html) | 要被合并到这个对象的对象。 |

