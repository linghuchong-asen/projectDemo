# 圆柱，圆锥，圆台(CylinderGraphics)

描述一个圆柱体, 圆锥台, 或由长度，顶部半径和底部半径定义的圆锥。 中心位置和方向由包含的 Entity[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html).确定。

## 构造器

**CylinderGraphics(options)**

options拥有属性如下：

| Name                       | Type                                                         | Default                | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定显隐性。                                       |
| `length`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`数字属性，指定圆柱的长度。                         |
| `topRadius`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`数字属性，指定圆柱顶部半径。                       |
| `bottomRadius`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`数字属性，指定圆柱底部半径。                       |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE` | `optional`相对于地形的位置。                                 |
| `fill`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定是否使用提供的材质填充。                       |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE`          | `optional`指定用于填充的材质。                               |
| `outline`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                | `optional`是否显示边框。                                     |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`          | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                  | `optional`边框宽度。                                         |
| `numberOfVerticalLines`    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `16`                   | `optional`指定要沿着边框的周长绘制的竖线的数目。             |
| `slices`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `128`                  | `optional`圆柱周长分段数。                                   |
| `shadows`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `ShadowMode.DISABLED`  | `optional`圆柱从每个光源投射或接收阴影的模式。               |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`指定在距相机某个距离内显示。                       |

## 属性

**[bottomRadius : Property]()**

设置/获取圆柱底部半径。

`readonly`**[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件 [`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html)，即在距相机某个距离显示。

**[fill : Property]()**

设置/获取是否使用提供的材质填充。

返回值: `true`

**[heightReference : Property]()**

设置/获取相对于地形的位置 [`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

返回值: `HeightReference.NONE`

**[length : Property]()**

设置/获取圆柱的长度。

**[material : MaterialProperty]()**

设置/获取用于填充的材质。

返回值: `Color.WHITE`

**[numberOfVerticalLines : Property]()**

设置/获取沿着边框的周长绘制的竖线的数目。

Default Value: `16`

**[outline : Property]()**

设置/获取是否显示边框。

返回值: `false`

#### **[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

返回值: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

返回值： `1.0`

**[shadows : Property]()**

设置/获取 从每个光源投射或接收阴影的模式。

返回值: `ShadowMode.DISABLED`

**[show : Property]()**

设置/获取显隐性。

返回值: `true`

**[slices : Property]()**

设置/获取圆柱周长分段数。

返回值: `128`

**[topRadius : Property]()**

设置/获取圆柱顶部半径。

## 方法

**[clone(result): CylinderGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [CylinderGraphics](https://www.vvpstk.com/public/Cesium/Documentation/CylinderGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [CylinderGraphics](https://www.vvpstk.com/public/Cesium/Documentation/CylinderGraphics.html) | 要被合并到这个对象的对象。 |