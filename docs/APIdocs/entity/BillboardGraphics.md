# 广告牌(BillboardGraphics)

描述一个包含位置的二维图标，其位置和方向由包含其的[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)确定

## 构造器

**BillboardGraphics(options)**

options对象拥有的属性如下:

| Name                         | Type                                                         | Default                   | Description                                                  |
| :--------------------------- | :----------------------------------------------------------- | :------------------------ | :----------------------------------------------------------- |
| `show`                       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`                    | optional布尔型属性，指定布告牌的可见性。                     |
| `image`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional用于指定广告牌的图像，URI或画布。                    |
| `scale`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`                     | optional数字属性，指定要应用于图像尺寸的比例。               |
| `pixelOffset`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cartesian2.ZERO`         | optional[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)属性，用于指定像素偏移（单位为像素）。 |
| `eyeOffset`                  | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cartesian3.ZERO`         | optional[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)属性，用于指定距目标位置的偏移量（单位为米）。 |
| `horizontalOrigin`           | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HorizontalOrigin.CENTER` | optional用于指定 [`HorizontalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html)。 |
| `verticalOrigin`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `VerticalOrigin.CENTER`   | optional用于指定 [`VerticalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html)。 |
| `heightReference`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `HeightReference.NONE`    | optional相对于地形的位置。                                   |
| `color`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`             | optional指定图像的色调 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `rotation`                   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                       | optional数字属性， 指定围绕alignedAxis的旋转角度。？？？     |
| `alignedAxis`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Cartesian3.ZERO`         | optional[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)属性，用于指定单位矢量旋转轴。 |
| `sizeInMeters`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional布尔型属性，指定是否应以米为单位测量此布告牌的大小。 |
| `width`                      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional数字属性，用于指定布告牌的宽度（以像素为单位），并覆盖原始尺寸。 |
| `height`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional数字属性，用于指定布告牌的高度（以像素为单位），并覆盖原始尺寸。 |
| `scaleByDistance`            | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)属性， 用于根据距相机的距离缩放布告牌。 |
| `translucencyByDistance`     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)属性，用于根据距相机的距离设置半透明性。 |
| `pixelOffsetScaleByDistance` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional[`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)属性，根据距相机的距离设置偏移量，以像素为单位，不会超过pixelOffset。 |
| `imageSubRegion`             | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional指定一个 [`BoundingRectangle`](https://www.vvpstk.com/public/Cesium/Documentation/BoundingRectangle.html)属性，它定义要用于布告牌的图像的子区域，而不是整个图像，以像素为单位从左下角开始。 |
| `distanceDisplayCondition`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional指定在距像机的某个距离处显示此布告牌。               |
| `disableDepthTestDistance`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                           | optional指定在距相机的某个距离范围内禁用深度测试。           |

## 属性

**[alignedAxis : Property]()**

设置/获取 `Vector3`型的单位矢量旋转轴。 设置为Cartesian3.ZERO时，旋转从屏幕顶部开始。

默认值: `Vector3.ZERO`

**[color : Property]()**

设置/获取 获取或设置指定与 `image`. 相乘的 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) 属性。 这有两个常见的用例。首先，许多不同的布告牌都可以使用相同的白色纹理， 每个都有不同的颜色，以创建彩色布告牌。其次，可以为布告牌指定ahpha值如下所示：

默认值: `Color.WHITE`

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[disableDepthTestDistance : Property]()**

设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。

**[distanceDisplayCondition : Property]()**

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[eyeOffset : Property]()**

设置/获取在视点坐标系下的偏移量。 试点坐标系是左手坐标系。

在下方，布告牌位于地球中心，但眼球偏移使它始终无论观看者或地球的方向如何，它都会出现在地球的顶部。

默认值：`Vector3.ZERO`

**[height : Property]()**

设置/获取布告牌的高度（以像素为单位）。 未定义时, the native height is used.

**[heightReference : Property]()**

设置/获取相对于地形的位置。

默认值: `HeightReference.NONE`

[**horizontalOrigin : Property**]()

设置/获取 [`HorizontalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html)。

默认值: `HorizontalOrigin.CENTER`

**[image : Property]()**

设置/获取布告牌（billboard）上图片的URL。

**[imageSubRegion : Property]()**

设置/获取[`BoundingRectangle`](https://www.vvpstk.com/public/Cesium/Documentation/BoundingRectangle.html)属性。 它定义要用于布告牌的图像的子区域，而不是整个图像， 以像素为单位从左下角开始。

**[pixelOffset : Property]()**

设置/获取[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)像素偏移属性。 该属性指定布告牌在屏幕空间中的像素偏移量从此布告牌的来源开始。 通常用于对齐多个布告牌和标签相同的位置，例如图片和文字。

默认值：`Vector2.ZERO`

**[pixelOffsetScaleByDistance : Property]()**

设置/获取 [`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)，即基于相机距离的像素偏移量。 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 时， 布告牌的偏移量性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围。

**[rotation : Property]()**

设置/获取 指定围绕`alignedAxis`的旋转角度。

默认值：`0`

**[scale : Property]()**

设置/获取应用于图像尺寸的比例。

默认值: `1.0`

**[scaleByDistance : Property]()**

设置/获取 [`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html) 属性（用于根据距相机的距离缩放布告牌）。 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#far`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#far) 时， 布告牌的比例将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值 ， 在这些范围之外，布告牌的比例仍保持在最近的范围内。

**[show : Property]()**

设置/获取显隐性。

**[sizeInMeters : Property]()**

设置/获取是否应以米为单位测量此布告牌的大小。

默认值: `false`

**[translucencyByDistance : Property]()**

设置/获取 [`NearFarScalar`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html)， 即基于相机距离的半透明性。 当相机距离在上下限之内指定的 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 和 [`NearFarScalar#near`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near) 。 布告牌的半透明性将在 [`NearFarScalar#nearValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue) 和 [`NearFarScalar#farValue`](https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue)插值。 在这些范围之外，半透明性仍保持在最近的范围。

verticalOrigin : Property

设置/获取 [`VerticalOrigin`](https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html)。

默认值：`VerticalOrigin.CENTER`

**[width : Property]()**

设置/获取布告牌的宽度（以像素为单位）。 未定义时，the native width is used.

## 方法

**[clone(result): BillboardGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [BillboardGraphics](https://www.vvpstk.com/public/Cesium/Documentation/BillboardGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [BillboardGraphics](https://www.vvpstk.com/public/Cesium/Documentation/BillboardGraphics.html) | 要被合并到这个对象的对象。 |