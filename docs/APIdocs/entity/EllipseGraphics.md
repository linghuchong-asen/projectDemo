# 椭圆(EllipseGraphics)

椭圆或者拉伸的椭圆。

## 构造器

**EllipseGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定显隐性。                                       |
| `semiMajorAxis`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`长半轴。                                           |
| `semiMinorAxis`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`短半轴。                                           |
| `height`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                              | `optional`相对于椭球表面的高度。                             |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | `optional`相对于地形的位置。                                 |
| `extrudedHeight`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`一个数字属性，指定相对于椭球的拔高高度。           |
| `extrudedHeightReference`  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | `optional`相对于地形的位置。                                 |
| `rotation`                 | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.0`                            | `optional`相对于正北方向的逆时针旋转角。                     |
| `stRotation`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.0`                            | `optional`指定椭圆纹理相对于正北方向的旋转角。               |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | `optional`指定椭圆上两点之间的角度距离。                     |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | `optional`指定用于填充的材质。                               |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                    | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | `optional`边框宽度。                                         |
| `numberOfVerticalLines`    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `16`                             | `optional`指定要沿着边框的周长绘制的竖线的数目。             |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | `optional`指定在距相机某个距离内显示。                       |
| `classificationType`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ClassificationType.BOTH`        | `optional`一个枚举属性，指定此椭圆在地面上时是否只贴到地形或3D TIles上或者两者都贴。 |
| `zIndex`                   | [ConstantProperty](https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html) | `0`                              | `optional`指定椭圆的zIndex，用于排序地面上的几何图形。 仅当未定义height和extrudedHeight且为恒定时才有效。 |

## 属性

**[classificationType : Property]()**

设置/获取此[`ClassificationType`](https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html),即椭圆在地面上时是否只贴到地形或3D TIles上或者两者都贴。

默认值: `ClassificationType.BOTH`

`readonly`**[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取在距相机某个距离内显示的显示[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html)条件。

**[extrudedHeight : Property]()**

设置/获取设置/获取挤出高度。 Setting this property creates volume starting at height and ending at this altitude.

**[extrudedHeightReference : Property]()**

设置/获取相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

默认值: `HeightReference.NONE`

**[fill : Property]()**

设置/获取是否用提供的材质填充。

默认值: `true`

**[granularity : Property]()**

设置/获取椭圆上两点之间的角度距离。

默认值: `{CesiumMath.RADIANS_PER_DEGREE}`

**[height : Property]()**

设置/获取相对于椭球表面的高度。

默认值: `0.0`

**[heightReference : Property]()**

设置/获取相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

默认值: `HeightReference.NONE`

**[material : MaterialProperty]()**

设置/获取指定填充的材质。

默认值: `Color.WHITE`

**[numberOfVerticalLines : Property]()**

设置/获取沿着边框的周长绘制的竖线的数目。

默认值: `16`

**[outline : Property]()**

设置/获取是否绘制边框。

默认值: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

默认值: `1.0`

**[rotation : Property]()**

设置/获取相对于正北方向的逆时针旋转角。

默认值: `0`

**[semiMajorAxis : Property]()**

设置/获取长半轴。

**[semiMinorAxis : Property]()**

设置/获取短半轴。

**[shadows : Property]()**

设置/获取是否从每个光源投射或接收阴影。

默认值: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

默认值: `true`

**[stRotation : Property]()**

设置/获取纹理相对于正北方向的旋转角。

默认值: `0`

**[zIndex : ConstantProperty]()**

设置/获取用于排序地面几何的zIndex。 仅当椭圆为常数且未指定height或extrudedHeight时才有效。

默认值: `0`

## 方法

**[clone(result): EllipseGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [EllipseGraphics](https://www.vvpstk.com/public/Cesium/Documentation/EllipseGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [EllipseGraphics](https://www.vvpstk.com/public/Cesium/Documentation/EllipseGraphics.html) | 要被合并到这个对象的对象。 |