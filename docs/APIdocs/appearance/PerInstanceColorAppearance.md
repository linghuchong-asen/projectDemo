# PerInstanceColorAppearance

带有颜色属性的[`GeometryInstance`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryInstance.html)实例的外观。 这允许使用相同的[`Primitive`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html)绘制几个几何实例，每个实例使用不同的颜色，如下面的第二个示例所示。

## 构造器

**PerInstanceColorAppearance(options)**

options具有下列属性的对象:

| Name                   | Type        | Default           | Description                                                  |
| :--------------------- | :---------- | :---------------- | :----------------------------------------------------------- |
| `flat`                 | Boolean     | `false`           | `optional`当`true`时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。 |
| `faceForward`          | Boolean     | `!options.closed` | `optional`当 `true`时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像[`WallGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html) 一样着色时，这很有用。 |
| `translucent`          | Boolean     | `true`            | `optional`当`true`时，几何图形应该是半透明的，因此 [`PerInstanceColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState)启用了alpha混合。 |
| `closed`               | Boolean     | `false`           | `optional`当`true`时，几何图形将被关闭，因此[`PerInstanceColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState)启用了背面剔除。 |
| `vertexShaderSource`   | String      |                   | `optional`可选的GLSL顶点着色器源覆盖默认的顶点着色器。       |
| `fragmentShaderSource` | String      |                   | `optional`可选的GLSL片段着色器源覆盖默认的片段着色器。       |
| `renderState`          | RenderState |                   | `optional`可选的渲染状态来覆盖默认的渲染状态。               |

## 示例代码

```javascript
// 一条白色的线段
var primitive = new Webgis.Primitive({
  geometryInstances : new Webgis.GeometryInstance({
    geometry : new Webgis.SimplePolylineGeometry({
      positions : Webgis.Cartesian3.fromDegreesArray([
        0.0, 0.0,
        5.0, 0.0
      ])
    }),
    attributes : {
      color : Webgis.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(1.0, 1.0, 1.0, 1.0))
    }
  }),
  appearance : new Webgis.PerInstanceColorAppearance({
    flat : true,
    translucent : false
  })
});

// 一个图元中有两个矩形，并且具有不同的颜色。
var instance = new Webgis.GeometryInstance({
  geometry : new Webgis.RectangleGeometry({
    rectangle : Webgis.Rectangle.fromDegrees(0.0, 20.0, 10.0, 30.0)
  }),
  attributes : {
    color : new Webgis.ColorGeometryInstanceAttribute(1.0, 0.0, 0.0, 0.5)
  }
});

var anotherInstance = new Webgis.GeometryInstance({
  geometry : new Webgis.RectangleGeometry({
    rectangle : Webgis.Rectangle.fromDegrees(0.0, 40.0, 10.0, 50.0)
  }),
  attributes : {
    color : new Webgis.ColorGeometryInstanceAttribute(0.0, 0.0, 1.0, 0.5)
  }
});

var rectanglePrimitive = new Webgis.Primitive({
  geometryInstances : [instance, anotherInstance],
  appearance : new Webgis.PerInstanceColorAppearance()
});
```

## 属性

`static` `constant` **[Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT : VertexFormat]()**

当[`PerInstanceColorAppearance#flat`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat)为 `true`时， 所有[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)实例都兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。这只需要一个`position`属性。

`static` `constant` **[Cesium.PerInstanceColorAppearance.VERTEX_FORMAT : VertexFormat]()**

所有[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)实例都兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。 这只需要`position` and `normal` 属性。

`readOnly` **[closed : Boolean]()**

当`true`时，几何图形将被关闭，因此[`PerInstanceColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState)启用了后表面剔除。

默认值：`false` 

`readOnly` **[faceForward : Boolean]()**

当 `true`时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像[`WallGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html) 一样着色时，这很有用。

默认值：`true`

`readOnly` **[flat : Boolean]()**

当`true`时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。

默认值：`false`

`readOnly` **[fragmentShaderSource : String]()**

片段着色器的GLSL源代码。

**[material : Material]()**

此属性是[`Appearance`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html)接口的一部分，但[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)不使用此属性，因为使用的是完全自定义的片段着色器。

默认值：`undefined`

`readOnly` **[renderState : Object]()**

渲染几何图形时的WEBGL状态。

渲染状态可以在构造一个[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)例时显式定义， 也可以通过[`PerInstanceColorAppearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent)和[`PerInstanceColorAppearance#closed`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#closed)隐式设置。

**[translucent : Boolean]()**

当`true`时，几何图形应该是半透明的，因此[`PerInstanceColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#renderState)启用了alpha混合。

默认值：`true`

`readOnly` **[vertexFormat : VertexFormat]()**

与此外观实例兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。

`readOnly` **[vertexShaderSource : String]()**

顶点着色器的GLSL源代码。

## 方法

**[getFragmentShaderSource(): String]()**

创建完整的GLSL片段着色器。 对于[`PerInstanceColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html)，这是从[`PerInstanceColorAppearance#fragmentShaderSource`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#fragmentShaderSource)、[`PerInstanceColorAppearance#flat`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#flat)和[`PerInstanceColorAppearance#faceForward`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#faceForward)派生出来的。

返回值：完整的GLSL片段着色器。

**[getRenderState() → Object]()**

创建渲染状态。

返回值：渲染状态。

**[isTranslucent() → Boolean]()**

确定几何图形是否是半透明 [`PerInstanceColorAppearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/PerInstanceColorAppearance.html#translucent).

返回值：如果是半透明，返回`true`。

