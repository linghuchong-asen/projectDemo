# 任意几何图形外观(MaterialAppearance)

支持材质着色的任意几何图形的外观。

## 构造器

**MaterialAppearance(options)**

options具有以下属性的对象：

| Name                   | Type                                                         | Default                                             | Description                                                  |
| :--------------------- | :----------------------------------------------------------- | :-------------------------------------------------- | :----------------------------------------------------------- |
| `flat`                 | Boolean                                                      | `false`                                             | `optional`当`true`时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。 |
| `faceForward`          | Boolean                                                      | `!options.closed`                                   | `optional`当 `true`时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像[`WallGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html) 一样着色时，这很有用。 |
| `translucent`          | Boolean                                                      | `true`                                              | `optional`当`true`时，几何图形应该是半透明的，因此[`MaterialAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState)启用了alpha混合。 |
| `closed`               | Boolean                                                      | `false`                                             | `optional`当`true`时，几何图形将被关闭，因此[`MaterialAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState)启用了背面剔除。 |
| `materialSupport`      | MaterialAppearance.<br />MaterialSupport                     | `MaterialAppearance.<br />MaterialSupport.TEXTURED` | `optional`支持的材质类型。                                   |
| `material`             | [Material](https://www.vvpstk.com/public/Cesium/Documentation/Material.html) | `Material.ColorType`                                | `optional`用于确定片元颜色的材质。                           |
| `vertexShaderSource`   | String                                                       |                                                     | `optional`可选的GLSL顶点着色器源覆盖默认的顶点着色器。       |
| `fragmentShaderSource` | String                                                       |                                                     | `optional`可选的GLSL片段着色器源覆盖默认的片段着色器。       |
| `renderState`          | RenderState                                                  |                                                     | `optional`可选的渲染状态来覆盖默认的渲染状态。               |

## 示例代码

```javascript
const primitive = new Webgis.Primitive({
  geometryInstances : new Webgis.GeometryInstance({
    geometry : new Webgis.WallGeometry({
            materialSupport :  Webgis.MaterialAppearance.MaterialSupport.BASIC.vertexFormat,
      // ...
    })
  }),
  appearance : new Webgis.MaterialAppearance({
    material : Webgis.Material.fromType('Color'),
    faceForward : true
  })

});
```

## 属性

`readOnly` **[closed : Boolean]()**

当`true`时，几何图形将被关闭，因此[`MaterialAppearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#renderState)启用了后表面剔除。

默认值：`false`

`readOnly` **[faceForward : Boolean]()**

当 `true`时，片段着色器会根据需要翻转表面法线， 以确保法线面对观察者，避免出现黑斑。当几何图形的两侧都应像[`WallGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/WallGeometry.html) 一样着色时，这很有用。

默认值：`true`

`readOnly` **[flat : Boolean]()**

当`true`时，在片段着色器中使用了平面着色，这意味着没有考虑到光照。

默认值：`false`

`readOnly` **[fragmentShaderSource : String]()**

片段着色器的GLSL源代码。 完整的片段着色器源是根据[`MaterialAppearance#material`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#material)、[`MaterialAppearance#flat`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#flat)和[`MaterialAppearance#faceForward`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#faceForward)构建的。 使用[`MaterialAppearance#getFragmentShaderSource`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#getFragmentShaderSource)获得完整的源代码。

**[material : Material]()**

用于确定片元颜色的材质。与其他[`MaterialAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html)属性不同，它不是只读的，所以外观的材质可以动态改变。

默认值：`Material.ColorType`

`readOnly` **[materialSupport : MaterialAppearance.MaterialSupport]()**

此实例支持的材质类型。 这影响了所需的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)和顶点、片段着色器的复杂性。

默认值：`MaterialAppearance.MaterialSupport.TEXTURED`

`readOnly` **[renderState : Object]()**

渲染几何图形时的WEBGL状态。

可以在构造[`MaterialAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html)实例时显式定义渲染状态， 也可以通过`MaterialAppearance#半透明`和[`MaterialAppearance#closed`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#closed)隐式设置渲染状态。

**[translucent : Boolean]()**

当`true`时，几何图形应该是半透明的。

默认值：`true`

`readOnly` **[vertexFormat : VertexFormat]()**

与此外观实例兼容的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)。 几何图形可以有更多的顶点属性，而且仍然是兼容的——以潜在的性能成本为代价——但它不能有更少的顶点属性。

默认值：`MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat`

`readOnly` **[vertexShaderSource : String]()**

顶点着色器的GLSL源代码。

## 方法

**[getFragmentShaderSource(): String]()**

创建完整的GLSL片段着色源。对于[`MaterialAppearance`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html)，这是从[`MaterialAppearance#fragmentShaderSource`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#fragmentShaderSource)、[`MaterialAppearance#material`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#material)、[`MaterialAppearance#flat`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#flat)、[`MaterialAppearance#faceForward`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#faceForward)派生出来的。

返回值：完整的GLSL片段着色器。

**[getRenderState(): Object]()**

获取渲染状态。 这不是最终的渲染状态实例；相反，它可以包含与上下文中创建的呈现状态相同的渲染状态属性的子集。

返回值：渲染状态。

**[isTranslucent() → Boolean]()**

根据[`MaterialAppearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialAppearance.html#translucent)和[`Material#isTranslucent`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html#isTranslucent)确定几何图形是否为半透明。

返回值：如果外观是半透明的`true`。
