# 多边形(PolygonGraphics)

多边形，可以具有一定的高度。

## 构造器

**PolygonGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定显隐性。                                       |
| `hierarchy`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`多边形的点集合串，是一个[`PolygonHierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html)类型的对象，里面可以创建普通面和孔洞对象。 |
| `height`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                              | `optional`多边形相对于面的高度。                             |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | `optional`相对于地形的位置。                                 |
| `extrudedHeight`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`多边形的挤出高度。                                 |
| `extrudedHeightReference`  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | `optional`挤出高度相对于地形的位置。                         |
| `stRotation`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.0`                            | `optional`纹理逆时针旋转角（相对于正北方向）。               |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | `optional`指定每个纬度和经度点之间的角度距离。               |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | `optional`用于填充的材质。                                   |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                    | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | `optional`边框宽度。                                         |
| `perPositionHeight`        | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否单独使用对象的高度，也就是每个节点的高度可显示，这样可以做一个倾斜的平面。 |
| `closeTop`                 | Boolean                                                      | `true`                           | `optional`挤出的时候顶部是否封口。                           |
| `closeBottom`              | Boolean                                                      | `true`                           | `optional`挤出的时候底部是否封口。                           |
| `arcType`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ArcType.GEODESIC`               | `optional`多边形边缘必须遵循的线型。                         |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`指定在距相机某个距离内显示。                       |
| `classificationType`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ClassificationType.BOTH`        | `optional`指定将它贴到地形，3D Tiles上或者两者都贴。         |
| `zIndex`                   | [ConstantProperty](https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html) | `0`                              | `optional`指定用于排序地面几何的zIndex。只有当该对象是恒定的且没有高度才有效。 |

## 属性

**[arcType : Property]()**

设置/获取多边形边缘必须遵循的线型[`ArcType`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html)。

Default Value: `ArcType.GEODESIC`

**[classificationType : Property]()**

设置/获取[`ClassificationType`](https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html) (指定将它贴到地形，3D Tiles上或者两者都贴。)

Default Value: `ClassificationType.BOTH`

**[closeBottom : Property]()**

设置/获取挤出的时候底部是否封口。

**[closeTop : Property]()**

设置/获取挤出的时候顶部是否封口。

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html)，

**[extrudedHeight : Property]()**

设置/获取挤出高度。 如果 [`PolygonGraphics#perPositionHeight`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#perPositionHeight) 是 false, the volume starts at [`PolygonGraphics#height`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#height) and ends at this altitude. If [`PolygonGraphics#perPositionHeight`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#perPositionHeight) is true, the volume starts at the height of each [`PolygonGraphics#hierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#hierarchy) position and ends at this altitude.

**[extrudedHeightReference : Property]()**

设置/获取挤出高度相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

**[fill : Property]()**

设置/获取是否使用提供的材质填充。

Default Value: `true`

**[granularity : Property]()**

设置/获取每个纬度和经度点之间的角度距离。

Default Value: `{CesiumMath.RADIANS_PER_DEGREE}`

**[height : Property]()**

设置/获取高度。

Default Value: `0.0`

**[heightReference : Property]()**

设置/获取相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

Default Value: `HeightReference.NONE`

**[hierarchy : Property]()**

设置/获取 [`PolygonHierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html)（多边形的点集合串）。

**[material : MaterialProperty]()**

设置/获取用于填充的材质。

Default Value: `Color.WHITE`

**[outline : Property]()**

设置/获取是否显示边框。

Default Value: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

Default Value: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

Default Value: `1.0`

**[perPositionHeight : Property]()**

设置/获取是否单独使用对象的高度。也就是每个节点的高度可显示，这样可以做一个倾斜的平面。 If true, the shape will have non-uniform altitude defined by the height of each [`PolygonGraphics#hierarchy`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#hierarchy) position. If false, the shape will have a constant altitude as specified by [`PolygonGraphics#height`](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#height).

[**shadows : Property**]()

设置/获取从每个光源投射或接收阴影的模式。

Default Value: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

Default Value: `true`

**[stRotation : Property]()**

设置/获取纹理逆时针旋转角（相对于正北方向）。

Default Value: `0`

**[zIndex : ConstantProperty]()**

设置/获取the zIndex（用于排序地面几何，只有当该对象时恒定的且没有高度才有效。）。

Default Value: `0`

## 方法

**[clone(result): PolygonGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PolygonGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PolygonGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html) | 要被合并到这个对象的对象。 |