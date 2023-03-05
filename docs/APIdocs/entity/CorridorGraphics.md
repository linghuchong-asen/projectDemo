# 走廊(CorridorGraphics)

廊道描述，走廊是由中心线和宽度定义的形状，符合地球的曲率 它可以放置在表面或高度，也可以选择挤压成一个体。

## 构造器

**CorridorGraphics(options)**

对象拥有如下属性:

| Name                       | Type                                                         | Default                          | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | optional廊道可见性.                                          |
| `positions`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | optional指定定义廊道中心线的[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)位置的数组。 |
| `width`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | optional数字属性，用于指定廊道宽度。                         |
| `height`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                              | optional数字属性，用于指定廊道相对于椭球表面的高度。         |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | optional相对于地形的位置。                                   |
| `extrudedHeight`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | optional数字属性，指定廊道的挤出面相对于椭球面的高度。       |
| `extrudedHeightReference`  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`           | optional指定廊道的挤出面相对于什么的高度。                   |
| `cornerType`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `CornerType.ROUNDED`             | optional[`CornerType`](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html)属性，指定拐角的样式。 |
| `granularity`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cesium.Math.RADIANS_PER_DEGREE` | optional数字属性，指定每个经度和纬度之间的距离。             |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                           | optional指定廊道是否用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`                    | optional使用指定的材质填充廊道。                             |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                          | optional是否绘制廊道边框。                                   |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                    | optional指定廊道边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                            | optional指定边框宽度。                                       |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`            | optional从每个光源投射或接收阴影的模式。                     |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                  | optional指定显示条件（距相机多远）。                         |
| `classificationType`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ClassificationType.BOTH`        | optional枚举属性，用于指定该廊道贴在3D Tiles或地形上。       |
| `zIndex`                   | [ConstantProperty](https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html) |                                  | optional指定廊道的zIndex，用于排序。仅当未定义height和extrudedHeight且廊道为恒定时才有效。 |

## 属性

**[classificationType : Property]()**

设置/获取[`ClassificationType`](https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html) 属性（该廊道贴在3D Tiles或地形上或两者都贴。）

默认值: `ClassificationType.BOTH`

**[cornerType : Property]()**

设置/获取拐角样式[`CornerType`](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html)。

默认值: `CornerType.ROUNDED`

`readonly`**[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件 [`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html)，即在距相机某个距离显示。

**[extrudedHeight : Property]()**

设置/获取挤出高度。 Setting this property creates a corridor shaped volume starting at height and ending at this altitude.

**[extrudedHeightReference : Property]()**

设置/获取相对挤出高度参照物 [`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

返回值: `HeightReference.NONE`

**[fill : Property]()**

设置/获取是否用提供的材质填充。

返回值: `true`

**[granularity : Property]()**

设置/获取每个经度和纬度之间的距离。

返回值: `{CesiumMath.RADIANS_PER_DEGREE}`

**[height : Property]()**

设置/获取廊道相对于椭球表面的高度。

返回值: `0.0`

**[heightReference : Property]()**

设置/获取廊道相对高度的参照物[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

返回值: `HeightReference.NONE`

**[material : MaterialProperty]()**

设置/获取指定填充廊道的材质。

返回值: `Color.WHITE`

**[outline : Property]()**

设置/获取是否绘制廊道边框。

返回值: `false`

**[outlineColor : Property]()**

设置/获取廊道边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

返回值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

返回值: `1.0`

**[positions : Property]()**

设置/获取廊道中心线的[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)位置的数组。

**[shadows : Property]()**

设置/获取 廊道是投射还是接收来自每个光源的阴影。

返回值: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

返回值: `true`

**[width : Property]()**

设置/获取廊道宽度。

**[zIndex : ConstantProperty]()**

设置/获取zIndex(用于排序。仅当未定义height和extrudedHeight且廊道为静态时才有效。).

默认值: `0`

## 方法

**[clone(result): CorridorGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [CorridorGraphics](https://www.vvpstk.com/public/Cesium/Documentation/CorridorGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个廊道的属性，最终合并出的廊道属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [CorridorGraphics](https://www.vvpstk.com/public/Cesium/Documentation/CorridorGraphics.html) | 要被合并到这个对象的对象。 |