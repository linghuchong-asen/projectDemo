# PolylineMaterialAppearance

支持材质着色的[`PolylineGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineGeometry.html)的外观。

## 构造器

**PolylineMaterialAppearance(options)**

options具有下列属性的对象：

| Name                   | Type                                                         | Default              | Description                                                  |
| :--------------------- | :----------------------------------------------------------- | :------------------- | :----------------------------------------------------------- |
| `translucent`          | Boolean                                                      | `true`               | `optional`当`true`时，几何图形应该是半透明的，因此[`PolylineMaterialAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineMaterialAppearance.html#renderState)启用了alpha混合。 |
| `material`             | [Material](https://www.vvpstk.com/public/Cesium/Documentation/Material.html) | `Material.ColorType` | `optional`确定片元颜色的材质。                               |
| `vertexShaderSource`   | String                                                       |                      | `optional`可选的GLSL顶点着色器源覆盖默认的顶点着色器。       |
| `fragmentShaderSource` | String                                                       |                      | `optional`可选的GLSL片段着色器源覆盖默认的片段着色器。       |
| `renderState`          | RenderState                                                  |                      | `optional`可选的渲染状态来覆盖默认的渲染状态。               |

## 示例代码

```javascript
const primitive = new Webgis.Primitive({
  geometryInstances : new Webgis.GeometryInstance({
    geometry : new Webgis.PolylineGeometry({
      positions : Webgis.Cartesian3.fromDegreesArray([
        0.0, 0.0,
        5.0, 0.0
      ]),
      width : 10.0,
      vertexFormat : Webgis.PolylineMaterialAppearance.VERTEX_FORMAT
    })
  }),
  appearance : new Webgis.PolylineMaterialAppearance({
    material : Webgis.Material.fromType('Color')
  })
});
```

## 属性

`static` `constant` **[Cesium.PolylineColorAppearance.VERTEX_FORMAT : VertexFormat]()**

所有[`PolylineColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html)实例都兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。 这只需要一个`position`属性。

`readOnly` **[closed : Boolean]()**

当`true`时，几何图形将被关闭，因此[`PolylineColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#renderState)启用了背面剔除。

默认值：`false`

`readOnly` **[fragmentShaderSource : String]()**

片段着色器的GLSL源代码。

**[material : Material]()**

此属性是[`Appearance`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html)接口的一部分，但[`PolylineColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html)不使用此属性，因为使用的是完全自定义的片段着色器。

默认值：`undefined`

`readOnly` **[renderState : Object]()**

渲染几何图形时的WEBGL状态。

渲染状态可以在构造一个 [`PolylineColorAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html)例时显式定义， 也可以通过[`PolylineColorAppearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#translucent)隐式设置。

**[translucent : Boolean]()**

当`true`时，几何图形应该是半透明的，因此[`PolylineColorAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#renderState)启用了alpha混合。

默认值：`true`

`readOnly` **[vertexFormat : VertexFormat]()**

与此外观实例兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。

默认值：`PolylineColorAppearance.VERTEX_FORMAT`

`readOnly` **[vertexShaderSource : String]()**

顶点着色器的GLSL源代码。

## 方法

**[getFragmentShaderSource(): String]()**

创建完整的GLSL片段着色源。

返回值：完整的GLSL片段着色源。

**[getRenderState(): Object]()**

获取渲染状态。

返回值：渲染状态。

**[isTranslucent() → Boolean]()**

基于[`PolylineColorAppearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/PolylineColorAppearance.html#translucent)确定几何图形是否为半透明。

返回值：如果外观是半透明的，返回`true`。