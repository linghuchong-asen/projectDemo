# 点(PointGraphics)

描述一个位于包含它的[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)的点对象。

## 构造器

**PointGraphics(options)**

options对象拥有以下属性：

| Name                       | Type                                                         | Default                | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                 | `optional`指定显隐性。                                       |
| `pixelSize`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1`                    | `optional`点的大小。                                         |
| `heightReference`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE` | `optional`相对于地形的位置。                                 |
| `color`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`          | `optional`指定颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) |
| `outlineColor`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`          | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                    | `optional`边框宽度。                                         |
| `scaleByDistance`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性 设置基于相机距离的点大小，也就是说可以根据不同的相机高度来设置点的不同大小。 |
| `translucencyByDistance`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性 设置基于相机距离的点透明度。 |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`指定在距相机某个距离内显示。                       |
| `disableDepthTestDistance` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                        | `optional`指定从相机到禁用深度测试的距离。                   |

## 属性

**[color : Property]()**

设置/获取点颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) 。

Default Value: `Color.WHITE`

`readonly`**[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[disableDepthTestDistance : Property]()**

设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[heightReference : Property]()**

设置/获取相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

Default Value: `HeightReference.NONE`

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

Default Value: `Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边框宽度。

Default Value: `0`

**[pixelSize : Property]()**

设置/获取点的大小。

Default Value: `1`

**[scaleByDistance : Property]()**

设置/获取[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)，即基于相机距离的点大小。 If undefined, a constant size is used.

**[show : Property]()**

设置/获取设置/获取显隐性。

Default Value: `true`

**[translucencyByDistance : Property]()**

设置/获取[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)(基于相机距离的点透明度)。 点的半透明性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值 ， 而相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 。 在这些范围之外，点的半透明性仍保持在最近的范围内。

## 方法

**[clone(result): PointGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PointGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PointGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PointGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PointGraphics.html) | 要被合并到这个对象的对象。 |