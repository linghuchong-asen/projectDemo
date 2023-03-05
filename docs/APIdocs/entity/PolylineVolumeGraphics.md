# 多段线柱体(PolylineVolumeGraphics)

沿多段线弯折的柱体。

## 构造器

**PolylineVolumeGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`显隐性。                                           |
| `positions`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`存储折线的点的位置[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)数组。 |
| `shape`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`要挤出的形状的[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)数组，相当于是对象的切面形状。 |
| `cornerType`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `CornerType.ROUNDED`             | `optional`[`CornerType`](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html) 属性。指定拐角样式的属性。 |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | `optional`指定每个纬度之间的经度距离。                       |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | `optional`用于填充的材质。                                   |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                    | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | `optional`边框宽度。                                         |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`指定在距相机某个距离内显示。                       |

## 属性

**[cornerType : Property]()**

设置/获取拐角样式 [`CornerType`](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html)。

默认值: `CornerType.ROUNDED`

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[fill : Property]()**

设置/获取是否使用提供的材质填充。

**[granularity : Property]()**

设置/获取每个纬度之间的经度距离。

默认值: `{CesiumMath.RADIANS_PER_DEGREE}`

**[material : MaterialProperty]()**

设置/获取用于填充的材质。

默认值: `Color.WHITE`

**[outline : Property]()**

设置/获取是否显示边框。

默认值: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

默认值: `1.0`

**[positions : Property]()**

设置/获取存储折线的点的位置[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)。

**[shadows : Property]()**

从每个光源投射或接收阴影的模式。

默认值: `ShadowMode.DISABLED`

**[shape : Property]()**

设置/获取要挤出的形状的[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)数组。

**[show : Property]()**

设置/获取显隐性。

默认值: `true`

## 方法

**[clone(result): PolylineVolumeGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PolylineVolumeGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolylineVolumeGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PolylineVolumeGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolylineVolumeGraphics.html) | 要被合并到这个对象的对象。 |