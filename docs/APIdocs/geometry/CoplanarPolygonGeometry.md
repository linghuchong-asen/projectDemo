# 共面多边形(CoplanarPolygonGeometry)

由任意共面位置组成的多边形

## 构造器

**CoplanarPolygonGeometry(options)**

options具有以下属性

| Name                 | Type                                                         | Default                | Description                                                  |
| :------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `polygonHierarchy`   | [PolygonHierarchy](https://cesium.com/learn/cesiumjs/ref-doc/PolygonHierarchy.html) |                        | 包含孔的多边形层次。                                         |
| `stRotation`         | Number                                                       | `0.0`                  | `optional`纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。 |
| `vertexFormat`       | [VertexFormat](https://cesium.com/learn/cesiumjs/ref-doc/VertexFormat.html) | `VertexFormat.DEFAULT` | `optional`纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。 |
| `ellipsoid`          | [Ellipsoid](https://cesium.com/learn/cesiumjs/ref-doc/Ellipsoid.html) | `Ellipsoid.WGS84`      | `optional`要计算的顶点属性。                                 |
| `textureCoordinates` | [PolygonHierarchy](https://cesium.com/learn/cesiumjs/ref-doc/PolygonHierarchy.html) |                        | `optional`用作参考的椭球体。                                 |

## 示例代码

```javascript
const polygonGeometry = new Webgis.CoplanarPolygonGeometry({
 polygonHierarchy: new Webgis.PolygonHierarchy(
    Webgis.Vector3.fromDegreesArrayHeights([
     -90.0, 30.0, 0.0,
     -90.0, 30.0, 300000.0,
     -80.0, 30.0, 300000.0,
     -80.0, 30.0, 0.0
  ]))
});
```

## 属性

## 方法

**[fromPositions(options) → CoplanarPolygonGeometry]()**

从一个位置数组描述一个共面多边形。

options对象，具有以下属性：

| Name           | Type                                                         | Default                | Description                                                |
| :------------- | :----------------------------------------------------------- | :--------------------- | :--------------------------------------------------------- |
| `positions`    | Vector3[]                                                    |                        | 定义多边形的角点的位置数组。                               |
| `vertexFormat` | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | optional要计算的顶点属性。                                 |
| `stRotation`   | Number                                                       | `0.0`                  | optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。 |
| `ellipsoid`    | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`      | optional用作参考的椭球体。                                 |

Example:

```javascript
// create a polygon from points
var polygon = Webgis.CoplanarPolygonGeometry.fromPositions({
  positions : Webgis.Vector3.fromDegreesArray([
    -72.0, 40.0,
    -70.0, 35.0,
    -75.0, 30.0,
    -70.0, 30.0,
    -68.0, 40.0
  ])
});
var geometry = Webgis.PolygonGeometry.createGeometry(polygon);
```