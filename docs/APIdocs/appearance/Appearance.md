# 基础外观(Appearance)

Appearance定义了完整的GLSL顶点和片段着色器，以及用于绘制[`Primitive`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html)的渲染状态。 所有的appearances实现都基于这个基础的`Appearance`接口。

## 构造器

**Appearance(options)**

options具有下列属性的对象：

| Name                   | Type                                                         | Default              | Description                                                  |
| :--------------------- | :----------------------------------------------------------- | :------------------- | :----------------------------------------------------------- |
| `translucent`          | Boolean                                                      | `true`               | optional当`true`时，几何图形应该显示为半透明，因此[`Appearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState)启用了alpha混合。 |
| `closed`               | Boolean                                                      | `false`              | optional当`true`时，几何图形将被关闭，因此[`Appearance#renderState`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#renderState)启用了背面剔除。 |
| `material`             | [Material](https://www.vvpstk.com/public/Cesium/Documentation/Material.html) | `Material.ColorType` | optional用于确定片元颜色的材质。                             |
| `vertexShaderSource`   | String                                                       |                      | optional可选的GLSL顶点着色器源，用于覆盖默认的顶点着色器。   |
| `fragmentShaderSource` | String                                                       |                      | optional可选的GLSL片段着色器源，用于覆盖默认的片段着色器。   |
| `renderState`          | RenderState                                                  |                      | optional可选的渲染状态，用于覆盖默认的渲染状态。             |

## 示例代码

## 属性

`readOnly` **[closed: boolean]()**

当`true`时，启用背面剔除。

默认值：`false`

`readOnly` **[fragmentShaderSource : String]()**

片段着色器的GLSL源代码。 完整的片段着色器源代码是根据[`Appearance#material`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material)构建的，使用[`Appearance#getFragmentShaderSource`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#getFragmentShaderSource)获取完整的源代码。

**[material : Material]()**

用于确定片元颜色的材质。与其他[`Appearance`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html)的属性不同，它不是只读的，所以外观的材质可以动态改变。

`readOnly` **[renderState : Object]()**

渲染几何图形时的WEBGL状态。

**[translucent : Boolean]()**

当`true`时，启用了alpha混合。

默认值：`true`

`readOnly` **[vertexShaderSource : String]()**

顶点着色器的GLSL源代码。

## 方法

**[ getFragmentShaderSource(): String]()**

获取基于[`Appearance#fragmentShaderSource`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#fragmentShaderSource)和[`Appearance#material`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#material)， 为这个外观创建的完整的GLSL片段着色器源。

返回值：完整的GLSL片段着色器。

**[getRenderState(): Object]()**

获取渲染状态。

返回值：渲染状态。

**[isTranslucent(): Boolean]()**

根据[`Appearance#translucent`](https://www.vvpstk.com/public/Cesium/Documentation/Appearance.html#translucent)和[`Material#isTranslucent`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html#isTranslucent)}确定几何图形是否为半透明。

返回值：如果外观为半透明，返回`true` 。

