# 模型(Model)

加载glTF,glb格式的模型。

## 构造器

**Model(url)**

| Name                           | Type   | Description                 |
| :----------------------------- | :----- | :-------------------------- |
| `url`:triangular_flag_on_post: | String | .gltf 或者 .glb文件的路径。 |

## 示例代码

```js
const model = new Webgis("../model/model.glb")
```

## 属性

### distanceDisplayCondition : [DistanceDisplayCondition]()

设置或获取模型到相机的显示距离。

默认值: `undefined`

### id : &lt;T&gt;

选择模型时返回的用户定义对象。

默认值: `undefined`

### isModelReady: <font color="gray">boolean</font>

:triangular_flag_on_post:

模型是否加载完成状态。

### name: <font color="gray">string</font>

:triangular_flag_on_post:

模型的名称，默认值为一个空字符串。

::: note

若需要通过名称获取模型，请设置该属性。

:::

### position: [Vector3](../math/Vector3.md)

指定模型放置的位置。

默认值: `原点位置`

### maximumScale : <font color="gray">number</font>

这可以用来给[`Model#minimumPixelSize`](https://www.vvpstk.com/public/Cesium/Documentation/Model.html#minimumPixelSize)一个上限，确保模型永远不会是一个不合理的比例。

### minimumPixelSize : <font color="gray">number</font>

不考虑缩放的模型的近似最小像素大小。 这可以用来确保即使在查看器缩小时模型也是可见的。当`0.0`时，不强制执行最小大小。

默认值: `0.0`

### outlineColor : [Color]()

渲染外轮廓线使用的颜色。

默认值: `Color.BLACK`

### shadows : [ShadowMode]()

确定模型是否从每个光源投射或接收阴影。

默认值: `ShadowMode.ENABLED`

### show : <font color="gray">boolean</font>

模型是否显示。

默认值: `true`

### showOutline : <font color="gray">boolean</font>

当为true时，显示外边框；当为false时，不显示外边框。

默认值: `true`

### silhouetteColor : [Color](../math/Color.md)

轮廓的颜色。

默认值: `Color.RED`

### silhouetteSize : <font color="gray">number</font>

轮廓的大小（以像素为单位）。

默认值: `0.0`

## 方法

### setRotation(X,Y,Z)

| Name | Type      | Description                             |
| ---- | --------- | --------------------------------------- |
| X    | rad:Float | 绕局部空间的X轴旋转模型，以弧度制表示。 |
| Y    | rad:Float | 绕局部空间的Y轴旋转模型，以弧度制表示。 |
| Z    | rad:Float | 绕局部空间的Z轴旋转模型，以弧度制表示。 |

设置批量模型中单个模型的旋转方向。

### setScale(scale)

| Name  | Type                          | Description      |
| ----- | ----------------------------- | ---------------- |
| scale | [Vector3](../math/Vector3.md) | 模型的局部缩放。 |

设置批量模型中单个模型的缩放。

### destroy()

销毁此对象持有的WebGL资源。

一旦对象被销毁，它将不能在使用; 调用除`isDestroyed`之外的任何函数都会导致[`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html)异常。 因此，将返回值(`undefined`)赋给对象，如示例所示。

### isDestroyed(): <font color="gray">boolean</font>

如果该对象已经被销毁，返回`true`;否则返回`false`
