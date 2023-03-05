# 几何实例(GeometryInstance)

几何图形实例允许一个[`Geometry`](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html)对象位于几个不同的位置和独特的（uniquely）颜色。 例如，一个[`BoxGeometry`](https://www.vvpstk.com/public/Cesium/Documentation/BoxGeometry.html)可以实例化多次，每次都使用不同的`modelMatrix`来改变它的位置、旋转和比例。

## 构造器

**GeometryInstance(options)**

options对象，具有以下属性：

| Name          | Type                                                         | Default            | Description                                                  |
| :------------ | :----------------------------------------------------------- | :----------------- | :----------------------------------------------------------- |
| `geometry`    | [Geometry](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html) |                    | 实例化的几何。                                               |
| `modelMatrix` | [Matrix4](https://www.vvpstk.com/public/Cesium/Documentation/Matrix4.html) | `Matrix4.IDENTITY` | `optional`转换模型矩阵，将几何图形从模型坐标转换为世界坐标。 |
| `id`          | Object                                                       |                    | `optional`当使用[`Scene#pick`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#pick)选择实例或使用[`Primitive#getGeometryInstanceAttributes`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html#getGeometryInstanceAttributes)获取/设置每个实例的属性时，返回一个用户定义的对象。 |
| `attributes`  | Object                                                       |                    | `optional`每个实例的属性，如下面示例中显示的show或color属性。 |

## 代码示例

```javascript
// 为一个box创建几何图形，以及引用它的两个实例。
// 一个实例将盒子放置在底部，且颜色设置为浅绿色。
// 另一个实例将盒子放置在顶部，并将颜色设置为白色。
var geometry = Webgis.BoxGeometry.fromDimensions({
  vertexFormat : WebgisWebgis.VertexFormat.POSITION_AND_NORMAL,
  dimensions : new Webgis.Cartesian3(1000000.0, 1000000.0, 500000.0)
});
var instanceBottom = new Webgis.GeometryInstance({
  geometry : geometry,
  modelMatrix : Webgis.Matrix4.multiplyByTranslation(Webgis.Transforms.eastNorthUpToFixedFrame(
    Webgis.Cartesian3.fromDegrees(-75.59777, 40.03883)), new Webgis.Cartesian3(0.0, 0.0, 1000000.0), new Webgis.Matrix4()),
  attributes : {
    color : Webgis.ColorGeometryInstanceAttribute.fromColor(Webgis.Color.AQUA)
  },
  id : 'bottom'
});
var instanceTop = new Webgis.GeometryInstance({
  geometry : geometry,
  modelMatrix : Webgis.Matrix4.multiplyByTranslation(Webgis.Transforms.eastNorthUpToFixedFrame(
    Webgis.Cartesian3.fromDegrees(-75.59777, 40.03883)), new Webgis.Cartesian3(0.0, 0.0, 3000000.0), new Webgis.Matrix4()),
  attributes : {
    color : Webgis.ColorGeometryInstanceAttribute.fromColor(Webgis.Color.AQUA)
  },
  id : 'top'
});
```

## 属性

**[attributes : Object]()**

每个实例的属性，如[`ColorGeometryInstanceAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/ColorGeometryInstanceAttribute.html)或[`ShowGeometryInstanceAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/ShowGeometryInstanceAttribute.html)。 [`Geometry`](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html)属性随顶点而变化；这些属性对于整个实例是恒定的。

defaultValue: `undefined`

**[geometry : Geometry]()**

要实例化的几何图形。

defaultValue: `undefined`

**[id : Object]()**

在选择实例或用于获取/设置每个实例的属性时返回用户定义的对象。

defaultValue: `undefined`

**[modelMatrix : Matrix4]()**

从模型坐标到世界坐标的4x4变换矩阵。 当这是单位矩阵时，几何图形是在世界坐标中绘制的，即：地球的WGS84坐标。 本地参考系可以通过提供一个不同的转换矩阵来使用，比如[`Transforms.eastNorthUpToFixedFrame`](https://www.vvpstk.com/public/Cesium/Documentation/Transforms.html#.eastNorthUpToFixedFrame)返回的转换矩阵。

defaultValue: `Matrix4.IDENTITY`