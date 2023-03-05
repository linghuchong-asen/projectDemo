# 图元(Primitive)

图元（Primitive）表示场景中的几何图形。这个几何图形可以来自单个的[`GeometryInstance`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html)，如下例1所示， 或者来自实例数组，允许几何图形来自不同的几何类型，例如[`RectangleGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/RectangleGeometry.html) 和[`EllipsoidGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGeometry.html)），如例2所示。

图元将几何图形实例和外观（[`Appearance`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html)）结合在一起，包括[`Material`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html)和`RenderState`。 大致上几何图形实例定义了结构和位置， 外观定义了视觉效果。解耦几何和外观允许我们混合和匹配它们中的大多数，并彼此独立地添加一个新的几何或外观。

将多个实例组合成一个图元称为批处理，这可以显著提高静态数据的性能。 可以单独选择实例；[`Scene#pick`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick)返回其[`GeometryInstance#id`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html#id)。 使用每个实例的外观，例如[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)，每个实例也可以具有唯一的颜色。

[`Geometry`](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html)可以在web worker或主线程上创建和批量处理。前两个示例展示了通过使用几何图形的描述在web worker上创建的几何图形。 第三个示例显示如何通过显式调用`createGeometry`方法在主线程上创建几何图形。

## 构造器

optional具有以下属性的对象：

| Name                       | Type                                                         | Default               | Description                                                  |
| :------------------------- | :----------------------------------------------------------- | :-------------------- | :----------------------------------------------------------- |
| `geometryInstances`        | GeometryInstance\|<br />GeometryInstance[]                   | [GeometryInstance]()  | optional要渲染的几何实例数组或者单个的几何实例。             |
| `appearance`               | [Appearance]()                                               |                       | optional用于渲染图元的外观。                                 |
| `depthFailAppearance`      | [Appearance]()                                               |                       | optional深度测试失败时，用于使该图元着色的外观。             |
| `show`                     | Boolean                                                      | `true`                | optional图元是否被显示。                                     |
| `modelMatrix`              | [Matrix4]()                                                  | `Matrix4.IDENTITY`    | optional将图元（所有几何实例），从模型坐标系转换到世界坐标系的4*4矩阵。 |
| `vertexCacheOptimize`      | Boolean                                                      | `false`               | optional当`true`时，几何顶点被优化为前后顶点着色器缓存。     |
| `interleave`               | Boolean                                                      | `false`               | optional当`true`时，几何顶点属性是交错的，这可以略微提高渲染性能，但增加了加载时间。 |
| `compressVertices`         | Boolean                                                      | `true`                | optional当`true`时，几何顶点被压缩，这将节省内存。           |
| `releaseGeometryInstances` | Boolean                                                      | `true`                | optional当`true`时，该图元不保留对输入`geometryInstances`的引用，以节省内存。 |
| `allowPicking`             | Boolean                                                      | `true`                | optional当`true`时，每个几何体实例只能用[`Scene#pick`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick)来拾取。 当`false`时, 节省GPU内存。 |
| `cull`                     | Boolean                                                      | `true`                | optional当`true`时，渲染器视锥和水平视点将根据图元的包围体来裁剪它们。如果您手动裁剪图元，请将其设置为`false`可获得较小的性能提升。 |
| `asynchronous`             | Boolean                                                      | `true`                | optional确定图元是异步创建（true）还是阻塞直到准备就绪。     |
| `debugShowBoundingVolume`  | Boolean                                                      | `false`               | optional只是用来调试，是否显示图元的包围球。                 |
| `shadows`                  | [ShadowMode](https://www.vvpstk.com/public/Cesium/Documentation/ShadowMode.html) | `ShadowMode.DISABLED` | optional图元是否从每个光源投射或接收阴影。                   |

Examples:

```js
// 1.画一个半透明，表面为棋盘图案的椭圆。
var instance = new Cesium.GeometryInstance({
  geometry : new Cesium.EllipseGeometry({
      center : Cesium.Cartesian3.fromDegrees(-100.0, 20.0),
      semiMinorAxis : 500000.0,
      semiMajorAxis : 1000000.0,
      rotation : Cesium.Math.PI_OVER_FOUR,
      vertexFormat : Cesium.VertexFormat.POSITION_AND_ST
  }),
  id : 'object returned when this instance is picked and to get/set per-instance attributes'
});
scene.primitives.add(new Cesium.Primitive({
  geometryInstances : instance,
  appearance : new Cesium.EllipsoidSurfaceAppearance({
    material : Cesium.Material.fromType('Checkerboard')
  })
}));
```

```js
// 2. 用独特的颜色绘制不同的实例
var rectangleInstance = new Cesium.GeometryInstance({
  geometry : new Cesium.RectangleGeometry({
    rectangle : Cesium.Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0),
    vertexFormat : Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
  }),
  id : 'rectangle',
  attributes : {
    color : new Cesium.ColorGeometryInstanceAttribute(0.0, 1.0, 1.0, 0.5)
  }
});
var ellipsoidInstance = new Cesium.GeometryInstance({
  geometry : new Cesium.EllipsoidGeometry({
    radii : new Cesium.Cartesian3(500000.0, 500000.0, 1000000.0),
    vertexFormat : Cesium.VertexFormat.POSITION_AND_NORMAL
  }),
  modelMatrix : Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(-95.59777, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 500000.0), new Cesium.Matrix4()),
  id : 'ellipsoid',
  attributes : {
    color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
  }
});
scene.primitives.add(new Cesium.Primitive({
  geometryInstances : [rectangleInstance, ellipsoidInstance],
  appearance : new Cesium.PerInstanceColorAppearance()
}));
```

```js
// 3. 在主线程上创建几何图形。
scene.primitives.add(new Cesium.Primitive({
  geometryInstances : new Cesium.GeometryInstance({
      geometry : Cesium.EllipsoidGeometry.createGeometry(new Cesium.EllipsoidGeometry({
        radii : new Cesium.Cartesian3(500000.0, 500000.0, 1000000.0),
        vertexFormat : Cesium.VertexFormat.POSITION_AND_NORMAL
      })),
      modelMatrix : Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(
        Cesium.Cartesian3.fromDegrees(-95.59777, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 500000.0), new Cesium.Matrix4()),
      id : 'ellipsoid',
      attributes : {
        color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
      }
  }),
  appearance : new Cesium.PerInstanceColorAppearance()
}));
```

## 属性

`readonly` **[allowPicking : Boolean]()**

当`true`时，每个几何体实例只能用[`Scene#pick`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick)来拾取。 当`false`时，节省GPU内存。

defaultValue: `true`

**[appearance : Appearance]()**

用于给图元着色的[`Appearance`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html)。 每个几何实例都以相同的外观着色。 有些外观，如[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)允许赋予每个实例唯一的值。

defaultValue: `undefined`

`readOnly` **[asynchronous : Boolean]()**

确定图元是异步创建（true）还是阻塞直到准备就绪。

defaultValue: `true`

`readOnly` **[compressVertices : Boolean]()**

当`true`时，几何顶点被压缩，这将节省内存。

defaultValue: `true`

**[cull : Boolean]()**

当`true`时，渲染器视锥和水平视点将根据图元的包围体来裁剪它们。 如果您手动裁剪图元，请将其设置为 false 可获得较小的性能提升。

defaultValue: `true`

`readOnly` **[geometryInstances : GeometryInstance[]|GeometryInstance]()**

这个图元渲染的几何实例，它有可能为undefined（当构造图元时，如果`options.releaseGeometryInstances`属性为true）。

在图元被渲染后，更改此属性无效。

defaultValue: `true`

**[modelMatrix : Matrix4]()**

将图元（所有几何实例），从模型坐标系转换到世界坐标系的4*4矩阵。 当这为单位矩阵时，图元是在世界坐标系（即地球的WGS84坐标）中绘制的。 本地参考系可以通过提供一个不同的转换矩阵来使用，就像[`Transforms.eastNorthUpToFixedFrame`](https://www.vvpstk.com/public/Cesium/Documentation/Transforms.html#.eastNorthUpToFixedFrame)返回的那样。

此属性仅在3D模式下受支持。

defaultValue: `Matrix4.IDENTITY`

Example:

```javascript
var origin = Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 200000.0);
p.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(origin);
```

`readOnly` **[ready : Boolean]()**

确定图元是否完成并准备渲染。如果为true，在下一次调用[`Primitive#update`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html#update)时渲染图元。

`readOnly` **[releaseGeometryInstances : Boolean]()**

当`true`时，该图元不保留对输入`geometryInstances`的引用，以节省内存。

defaultValue: `true`

**[shadows : ShadowMode]()**

确定此图元是否从每个光源投射或接收阴影。

defaultValue: `ShadowMode.DISABLED`

**[show : Boolean]()**

图元是否显示，这将影响到所有的几何图形。

defaultValue: `true`

`readOnly`**[vertexCacheOptimize : Boolean]()**

当`true`时，几何顶点被优化为前后顶点着色器缓存。

defaultValue: `true`

## 方法

**[destroy()]()**

销毁此对象持有的WebGL资源。

一旦对象被销毁，它将不能在使用; 调用除`isDestroyed`之外的任何函数都会导致[`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html)异常。 因此，将返回值（`undefined`）赋给对象，如示例所示。

**[getGeometryInstanceAttributes(id):  Object]()**

返回 [`GeometryInstance`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html) 的每个实例的可修改属性。

| Name | Type | Description                                                  |
| :--- | :--- | :----------------------------------------------------------- |
| `id` | *    | [`GeometryInstance`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html) 的ID。 |

Returns:

以属性格式表示的类型化数组；如果没有实例，则未定义类型

Example:

```javascript
var attributes = primitive.getGeometryInstanceAttributes('an id');
attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.AQUA);
attributes.show = Cesium.ShowGeometryInstanceAttribute.toValue(true);
attributes.distanceDisplayCondition = Cesium.DistanceDisplayConditionGeometryInstanceAttribute.toValue(100.0, 10000.0);
attributes.offset = Cesium.OffsetGeometryInstanceAttribute.toValue(Cartesian3.IDENTITY);
```

**[ isDestroyed(): Boolean]()**

如果该对象没被销毁，返回false。

如果该对象已经被销毁，使用`isDestroyed`会触发 [`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) 异常。

Returns: `false`

**[update()]()**

当[`Viewer`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html)或[`CesiumWidget`](https://www.vvpstk.com/public/Cesium/Documentation/CesiumWidget.html)渲染场景以获得渲染此图元所需的draw命令时调用。

不要直接调用此函数。这被记录下来只是为了列出在场景渲染时可能传播的异常：

Throws:

- [DeveloperError](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) : 所有实例几何必须具有相同的primaryType。
- [DeveloperError](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) : 外观和材质具有相同名称的uniform。
- [DeveloperError](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) : Primitive.modelMatrix仅在3D模式下受支持。
- [RuntimeError](https://www.vvpstk.com/public/Cesium/Documentation/RuntimeError.html) : 需要使用顶点纹理获取支持来渲染具有每个实例属性的图元。顶点纹理图像单元的最大数量必须大于零。