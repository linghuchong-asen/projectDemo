# 椭球或球体(EllipsoidGraphics)

描述一个椭球或球体。中心位置和方向由包含它的[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)确定。

## 构造器

**EllipsoidGraphics(options)**

对象拥有以下属性：

| Name                       | Type                                                         | Default                | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定显隐性。                                       |
| `radii`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) 属性 ，指定椭球各轴长。 |
| `innerRadii`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) 属性 指定椭球内部各轴长。 |
| `minimumClock`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.0`                  | `optional`类似圆心角的最小角度。                             |
| `maximumClock`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `2*PI`                 | `optional`类似圆心角的最大角度。                             |
| `minimumCone`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.0`                  | `optional`最小锥角。                                         |
| `maximumCone`              | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `PI`                   | `optional`最大锥角。                                         |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE` | `optional`相对于地形的位置。                                 |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`          | `optional`指定用于填充的材质。                               |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`          | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                  | `optional`边框宽度。                                         |
| `stackPartitions`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `64`                   | `optional`横向分段数。                                       |
| `slicePartitions`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `64`                   | `optional`纵向分段数。                                       |
| `subdivisions`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `128`                  | `optional`指定每个边框环的样本数，确定曲率的粒度，值越大，边框线的节点越多，越光滑； |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`  | `optional`从每个光源投射或接收阴影的模式。                   |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`指定在距相机某个距离内显示。                       |

## 属性

`readonly`**[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[fill : Property]()**

设置/获取指定是否使用提供的材质填充。

默认值: `true`

**[heightReference : Property]()**

设置/获取相对于地形的位置。

默认值: `HeightReference.NONE`

**[innerRadii : Property]()**

设置/获取椭球内部各轴长[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) [`Property`](https://www.vvpstk.com/public/Cesium/Documentation/Property.html)。

默认值: `radii`

material : MaterialProperty

设置/获取指定用于填充的材质。

默认值: `Color.WHITE`

**[maximumClock : Property]()**

设置/获取类似圆心角的最大角度。

默认值: `2*PI`

**[maximumCone : Property]()**

设置/获取最大锥角。

默认值: `PI`

**[minimumClock : Property]()**

设置/获取类似圆心角的最小角度。

默认值: `0.0`

**[minimumCone : Property]()**

设置/获取最小锥角。

默认值: `0.0`

**[outline : Property]()**

设置/获取是否显示边框。

默认值: `false`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

默认值: `1.0`

**[radii : Property]()**

设置/获取椭球各轴长[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) [`Property`](https://www.vvpstk.com/public/Cesium/Documentation/Property.html)。

**[shadows : Property]()**

设置/获取从每个光源投射或接收阴影的模式。

默认值: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

默认值: `true`

**[slicePartitions : Property]()**

设置/获取纵向分段数。

默认值: `64`

**[stackPartitions : Property]()**

设置/获取横向分段数。

默认值: `64`

**[subdivisions : Property]()**

设置/获取指定每个边框环的样本数，确定曲率的粒度，值越大，边框线的节点越多，越光滑。

默认值: `128`

## 方法

**[clone(result): EllipsoidGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [EllipsoidGraphics](https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [EllipsoidGraphics](https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGraphics.html) | 要被合并到这个对象的对象。 |