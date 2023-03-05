# 墙(WallGraphics)

描述定义为线状带和可选的最大和最小高度的二维墙壁

## 构造器

**WallGraphics(options)**

对象拥有以下属性：

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定显隐性。                                       |
| `positions`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`一个属性，它指定定义墙顶的 [`PolygonHierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html) 位置的数组。 |
| `minimumHeights`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`最小高度数组。当设置该值后，positions中设置的高度值将无效。 |
| `maximumHeights`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`最大高度数组。当设置该值后，positions中设置的高度值将无效。 |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | `optional`指定每个纬度和经度点之间的角度距离。               |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | `optional`用于填充的材质。                                   |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                    | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | `optional`边框宽度。                                         |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`指定在距相机某个距离内显示。                       |

## 属性

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[fill : Property]()**

设置/获取是否使用提供的材质填充。

Default Value: `true`

**[granularity : Property]()**

设置/获取每个纬度和经度点之间的角度距离。

Default Value: `{CesiumMath.RADIANS_PER_DEGREE}`

**[material : MaterialProperty]()**

设置/获取用于填充的材质。

Default Value: `Color.WHITE`

**[maximumHeights : Property]()**

设置/获取 设置/获取该属性指定要用于墙顶而不是每个位置的高度数组。如果已定义，则数组的长度必须与 `Wall#positions` 相同。

**[minimumHeights : Property]()**

设置/获取该属性指定要用于墙底而不是地球表面的高度数组。如果已定义，则数组的长度必须与 `Wall#positions` 相同。

**[outline : Property]()**

设置/获取是否显示边框。

Default Value: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

Default Value: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

Default Value: `1.0`

**[positions : Property]()**

设置/获取墙体对象集合串，是一个[`PolygonHierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html)。类型的对象。 the Property specifying the array of [`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) positions which define the top of the wall.

[**shadows : Property**]()

从每个光源投射或接收阴影的模式。

Default Value: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

Default Value: `true`

## 方法

**[clone(result): WallGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [WallGraphics](https://www.vvpstk.com/public/Cesium/Documentation/WallGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [WallGraphics](https://www.vvpstk.com/public/Cesium/Documentation/WallGraphics.html) | 要被合并到这个对象的对象。 |