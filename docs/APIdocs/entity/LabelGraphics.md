# 文字标注(LabelGraphics)

文字标注，位置由包含它的[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)指定

## 构造器

**LabelGraphics(options)**

options对象拥有以下属性：

| Name                         | Type                                                         | Default                               | Description                                                  |
| :--------------------------- | :----------------------------------------------------------- | :------------------------------------ | :----------------------------------------------------------- |
| `show`                       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                                | `optional`指定显隐性。                                       |
| `text`                       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`指定显示的文本，用“\n”表示换行。                   |
| `font`                       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `'30px sans-serif'`                   | `optional`字体 CSS 样式。                                    |
| `style`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `LabelStyle.FILL`                     | `optional`指定 [`LabelStyle`](https://www.vvpstk.com/public/Cesium/Documentation/LabelStyle.html). |
| `scale`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                                 | `optional`字体放大比例。                                     |
| `showBackground`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                               | `optional`指定字体背景显隐性。                               |
| `backgroundColor`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Color(0.165, 0.165, 0.165, 0.8)` | `optional`背景颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `backgroundPadding`          | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Cartesian2(7, 5)`                | `optional`[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 指定背景在垂直和水平方向上的内补白。 |
| `pixelOffset`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cartesian2.ZERO`                     | `optional`[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 文本在xy方向的像素偏移。 |
| `eyeOffset`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cartesian3.ZERO`                     | `optional`[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) 属性。 视点偏移。 |
| `horizontalOrigin`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HorizontalOrigin.CENTER`             | `optional`指定水平方向上的原点 [`HorizontalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html)。 |
| `verticalOrigin`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `VerticalOrigin.CENTER`               | `optional`垂直方向上的原点 [`VerticalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html)。 |
| `heightReference`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`                | `optional`相对于地形的位置。                                 |
| `fillColor`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`                         | `optional`字体颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html). |
| `outlineColor`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                         | `optional`边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineWidth`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                                 | `optional`边框宽度。                                         |
| `translucencyByDistance`     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性， 根据与像机的距离设置透明度。 |
| `pixelOffsetScaleByDistance` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性，根据与像机的距离设置像素偏移量。 |
| `scaleByDistance`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性， 根据与摄像机的距离设置缩放比例。 |
| `distanceDisplayCondition`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`指定在距相机某个距离内显示。                       |
| `disableDepthTestDistance`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                                       | `optional`指定禁用深度测试的相机距离。                       |

## 属性

**[backgroundColor : Property]()**

设置/获取背景颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值: `new Color(0.165, 0.165, 0.165, 0.8)`

**[backgroundPadding : Property]()**

设置/获取背景在垂直和水平方向上的内补白，[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 类型。

默认值: `new Cartesian2(7, 5)`

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[disableDepthTestDistance : Property]()**

设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[eyeOffset : Property]()**

设置/获取视点偏移[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)(在相机坐标系中)。 相机坐标系是一个左手坐标系。

标注位于地球的中心，但是视点偏移使它总是出现在地球的顶部，不管观察者或地球的方向。

默认值: `Cartesian3.ZERO`

**[fillColor : Property]()**

设置/获取字体颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

**[font : Property]()**

设置/获取字体。

**[heightReference : Property]()**

设置/获取相对于地形的位置 [`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

默认值: `HeightReference.NONE`

**[horizontalOrigin : Property]()**

设置/获取指定水平方向上的原点 [`HorizontalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html) 。

**[outlineColor : Property]()**

设置/获取边框颜色[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

**[outlineWidth : Property]()**

设置/获取边框宽度。

**[pixelOffset : Property]()**

设置/获取文本在xy方向的像素偏移 [`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)。 这通常用于对齐多个标签和相同位置的标签，例如，一个图像和文本。屏幕空间原点是画布的左上角。

默认值: `Cartesian2.ZERO`

**[pixelOffsetScaleByDistance : Property]()**

设置/获取根据与像机的距离设置像素偏移量 [`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)。 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 时， 标注的偏移量性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围。

**[scale : Property]()**

设置/获取比例(比1大。放大，反之，缩小)。

默认值: `1.0`

**[scaleByDistance : Property]()**

设置/获取 near and far scaling properties of a Label based on the label's distance from the camera. 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 时， 标注的偏移量性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围内。如果未定义，则不启用。

**[show : Property]()**

设置/获取显隐性。

**[showBackground : Property]()**

设置/获取字体背景显隐性。

默认值: `false`

**[style : Property]()**

设置/获取样式 [`LabelStyle`](https://www.vvpstk.com/public/Cesium/Documentation/LabelStyle.html)。

**[text : Property]()**

设置/获取文本。

**[translucencyByDistance : Property]()**

设置/获取[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)(基于相机距离的点透明度)。 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 。 标注的半透明性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值。 在这些范围之外，标注的半透明性仍保持在最近的范围。

**[verticalOrigin : Property]()**

设置/获取指定水平方向上的原点 `verticalOrigin` 。

## 方法

**[clone(result): LabelGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [LabelGraphics](https://www.vvpstk.com/public/Cesium/Documentation/LabelGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [LabelGraphics](https://www.vvpstk.com/public/Cesium/Documentation/LabelGraphics.html) | 要被合并到这个对象的对象。 |