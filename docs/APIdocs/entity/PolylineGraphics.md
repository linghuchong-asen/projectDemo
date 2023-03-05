# 多段线(PolylineGraphics)

## 构造器

**PolylineGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定显隐性。                                       |
| `positions`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`折线的点串信息，一组 [`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)的数组。 |
| `width`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | `optional`线宽。                                             |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | `optional`指定每个纬度和经度点之间的角度距离。               |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | `optional`指定材质。                                         |
| `depthFailMaterial`        | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) |                                  | `optional`当折线低于地形时用于绘制折线的材质，               |
| `arcType`                  | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`               | `optional`多边形边缘必须遵循的线型。                         |
| `clampToGround`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否贴地。                                         |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`指定在距相机某个距离内显示。                       |
| `classificationType`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ClassificationType.BOTH`        | `optional`指定将它贴到地形或3D Tiles上或者两者都贴。         |
| `zIndex`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                              | `optional`指定用于排序地面几何的zIndex。只有当`clampToGround`为真时才有效。 |

## 属性

**[arcType : Property]()**

设置/获取线型[`ArcType`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) （线段应该是大弧线，菱形线还是线性连接。）

Default Value: `ArcType.GEODESIC`

**[clampToGround : Property]()**

设置/获取是否贴地。

Default Value: `false`

**[classificationType : Property]()**

设置/获取[`ClassificationType`](https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html),即将它贴到地形或3D Tiles上或者两者都贴。

Default Value: `ClassificationType.BOTH`

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[depthFailMaterial : MaterialProperty]()**

设置/获取当折线低于地形时用于绘制折线的材质。

需要EXT_frag_depth WebGL扩展才能正确渲染。

Default Value: `undefined`

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html)，即距相机某个距离内显示。

**[granularity : Property]()**

设置/获取每个纬度和经度点之间的角度距离。

Default Value: `Cesium.Math.RADIANS_PER_DEGREE`

**[material : Property]()**

设置/获取材质。

Default Value: `Color.WHITE`

**[positions : Property]()**

设置/获取折线的点串信息，即一组 [`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)的数组。

**[shadows : Property]()**

设置/获取是否从每个光源投射或接收阴影。

Default Value: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

Default Value: `true`

**[width : Property]()**

设置/获取线宽。

Default Value: `1.0`

## 方法

**[clone(result): PolylineGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PolylineGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolylineGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PolylineGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolylineGraphics.html) | 要被合并到这个对象的对象。 |