# 模型(ModelGraphics)

加载模型，目前支持glb,gltf格式。

## 构造器

**ModelGraphics(options)**

options对象拥有以下属性：

| Name                           | Type        | Default                    | Description                                                  |
| :----------------------------- | :---------- | :------------------------- | :----------------------------------------------------------- |
| `url`:triangular_flag_on_post: | string      | `true`                     | glTF资源路径。                                               |
| `show`                         | Property    |                            | `optional`指定显隐性。                                       |
| `scale`                        | Property    | `1.0`                      | `optional`放大比例。                                         |
| `minimumPixelSize`             | Property    | `0.0`                      | `optional`一个数字属性，用于指定模型的最小像素大小，而不考虑缩放。 |
| `maximumScale`                 | Property    |                            | `optional`模型最大比例尺大小. 在这个比例尺内模型模型大小缩放受minimumPixelSize限制，超过这个比例尺，不受minimumPixelSize限制 |
| `incrementallyLoadTextures`    | Property    | `true`                     | `optional`设置在加载模型后纹理是否可以继续流入，默认是true，据说是在动态修改贴图的时候使用的。 |
| `runAnimations`                | Property    | `true`                     | `optional`指定是否应该启动模型中指定的gltf动画。             |
| `clampAnimations`              | Property    | `true`                     | `optional`指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势。 |
| `shadows`                      | Property    | `ShadowMode.ENABLED`       | `optional`枚举属性。从每个光源投射或接收阴影的模式。         |
| `heightReference`              | Property    | `HeightReference.NONE`     | `optional`相对于地形的位置。                                 |
| `silhouetteColor`              | Property    | `Color.RED`                | `optional`指定的模型边框颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) |
| `silhouetteSize`               | Property    | `0.0`                      | `optional`边框大小（像素）。                                 |
| `color`                        | Property    | `Color.WHITE`              | `optional`指定Color[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)与模型的渲染颜色混合的属性 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) |
| `colorBlendMode`               | Property    | `ColorBlendMode.HIGHLIGHT` | `optional`一个枚举属性，指定颜色混合模式。                   |
| `colorBlendAmount`             | Property    | `0.5`                      | `optional`混合模式的强度值。当colorBlendMode为Cesium.ColorBlendMode.MIX时有效，范围0-1，0表示不和颜色混合，1则表示替换。 |
| `imageBasedLightingFactor`     | Property    | `new Cartesian2(1.0, 1.0)` | `optional`指定基于漫反射和镜面反射图像的照明的属性.          |
| `lightColor`                   | Property    |                            | `optional`指定光源颜色。默认为 `undefined`。                 |
| `distanceDisplayCondition`     | Property    |                            | `optional`指定在距相机某个距离内显示。                       |
| `nodeTransformations`          | PropertyBag |                            | `optional`一个对象，其中的键是节点的名称，而值是 [`TranslationRotationScale`](https://www.vvpstk.com/public/Cesium/Documentation/TranslationRotationScale.html) 属性，描述了要应用于该节点的转换。 转换是在glTF中指定的节点现有转换之后应用的，并且不会替换节点现有转换。(轮胎转动就需要该属性。) |
| `articulations`                | PropertyBag |                            | `optional`模型关节（见CZML Model articulation 示例）它的键由关节名称，单个空格和阶段名称组成，值是数字属性。 |
| `clippingPlanes`               | Property    |                            | `optional`指定 [`ClippingPlaneCollection`](https://www.vvpstk.com/public/Cesium/Documentation/ClippingPlaneCollection.html) 属性，用于有选择地禁用渲染模型。 |

## 属性

**[articulations : PropertyBag]()**

设置/获取模型关节。（见CZML Model articulation 示例）它的键由关节名称，单个空格和阶段名称组成，值是数字属性。

**[clampAnimations : Property]()**

设置/获取指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势。

Default Value: `true`

**[clippingPlanes : Property]()**

设置/获取[`ClippingPlaneCollection`](https://www.vvpstk.com/public/Cesium/Documentation/ClippingPlaneCollection.html) 属性。用于有选择地禁用渲染模型。

**[color : Property]()**

设置/获取指定Color[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)与模型的渲染颜色混合的属性。

Default Value: `Color.WHITE`

**[colorBlendAmount : Property]()**

设置/获取混合模式的强度值（0-1）。

Default Value: `0.5`

**[colorBlendMode : Property]()**

设置/获取颜色混合模式。

Default Value: `ColorBlendMode.HIGHLIGHT`

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

distanceDisplayCondition : Property

设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

heightReference : Property

设置/获取相对于地形的位置[`HeightReference`](https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html)。

Default Value: `HeightReference.NONE`

**[imageBasedLightingFactor : Property]()**

指定基于漫反射和镜面反射图像的照明的属性[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 。

**[incrementallyLoadTextures : Property]()**

在加载模型后纹理是否可以继续流入，默认是true，据说是在动态修改贴图的时候使用的。

**[lightColor : Property]()**

指定光源颜色[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)。

**[maximumScale : Property]()**

设置/获取模型最大比例尺大小. 在这个比例尺内模型模型大小缩放受[`ModelGraphics#minimumPixelSize`](https://www.vvpstk.com/public/Cesium/Documentation/ModelGraphics.html#minimumPixelSize)限制， 超过这个比例尺，不受[`ModelGraphics#minimumPixelSize`](https://www.vvpstk.com/public/Cesium/Documentation/ModelGraphics.html#minimumPixelSize)限制. .

**[minimumPixelSize : Property]()**

设置/获取 模型的最小像素大小，而不考虑缩放。

Default Value: `0.0`

**[nodeTransformations : Property]()**

置要应用于此模型的节点转换集。这表示为 [`PropertyBag`](https://www.vvpstk.com/public/Cesium/Documentation/PropertyBag.html) ，其中的键是节点的名称， 值是 [`TranslationRotationScale`](https://www.vvpstk.com/public/Cesium/Documentation/TranslationRotationScale.html) 属性，用于描述要应用于该节点的转换。 转换是在glTF中指定的节点现有转换之后应用的，并且不会替换节点现有转换。

**[runAnimations : Property]()**

设置/获取指定是否应该启动模型中指定的gltf动画。

Default Value: `true`

**[scale : Property]()**

设置/获取放大比例。

Default Value: `1.0`

**[shadows : Property]()**

设置/获取 从每个光源投射或接收阴影的模式。

Default Value: `ShadowMode.ENABLED`

**[show : Property]()**

设置/获取显隐性。

Default Value: `true`

**[silhouetteColor : Property]()**

设置/获取指定的模型边框颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

Default Value: `Color.RED`

**[silhouetteSize : Property]()**

设置/获取边框大小（像素）。

Default Value: `0.0`

**[uri : Property]()**

设置/获取模型路径。

## 方法

**[clone(result): ModelGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [ModelGraphics](https://www.vvpstk.com/public/Cesium/Documentation/ModelGraphics.html) | optional用来存储结果的对象。 |

返回值: 修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [ModelGraphics](https://www.vvpstk.com/public/Cesium/Documentation/ModelGraphics.html) | 要被合并到这个对象的对象。 |