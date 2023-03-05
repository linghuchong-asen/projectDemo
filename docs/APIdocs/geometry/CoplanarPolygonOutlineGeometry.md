# 仅有轮廓的共面多边形(CoplanarPolygonOutlineGeometry)

仅有轮廓的共面多边形几何体

## 构造器

**CoplanarPolygonOutlineGeometry(options)**

options对象，具有以下属性：

| Name               | Type                                                         | Description          |
| :----------------- | :----------------------------------------------------------- | :------------------- |
| `polygonHierarchy` | [PolygonHierarchy](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html) | 包含孔的多边形层次。 |

## 示例代码

```javascript
var polygonOutline = new Webgis.CoplanarPolygonOutlineGeometry({
  positions : Webgis.Cartesian3.fromDegreesArrayHeights([
     -90.0, 30.0, 0.0,
     -90.0, 30.0, 1000.0,
     -80.0, 30.0, 1000.0,
     -80.0, 30.0, 0.0
  ])
});
var geometry = Webgis.CoplanarPolygonOutlineGeometry.createGeometry(polygonOutline);
```

## 属性

## 方法

**[fromPositions(options): CoplanarPolygonOutlineGeometry]()**

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

