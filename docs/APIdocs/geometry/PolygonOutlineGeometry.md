# 仅有轮廓多边形(PolygonOutlineGeometry)

仅有轮廓的多边形几何体。

## 构造器

**PolygonOutlineGeometry(options)**

options对象，具有以下属性：

| Name                | Type                                                         | Default                         | Description                                                  |
| :------------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `polygonHierarchy`  | [PolygonHierarchy](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html) |                                 | 包含孔洞（holes）的多边形层次结构。                          |
| `height`            | Number                                                       | `0.0`                           | optional边形与椭球面的距离，单位为米。                       |
| `extrudedHeight`    | Number                                                       |                                 | optional边形的挤压面与椭球面的距离，单位为米。               |
| `vertexFormat`      | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `ellipsoid`         | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |
| `granularity`       | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `perPositionHeight` | Boolean                                                      | `false`                         | optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。 |
| `arcType`           | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional多边形边缘必须遵循的线的类型。有效的选项是[`ArcType.GEODESIC`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC)和[`ArcType.RHUMB`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB)。 |

## 示例代码

```javascript
// 1. create a polygon outline from points
const polygon = new Webgis.PolygonOutlineGeometry({
  polygonHierarchy : new Webgis.PolygonHierarchy(
    Webgis.Vector3.fromDegreesArray([
      -72.0, 40.0,
      -70.0, 35.0,
      -75.0, 30.0,
      -70.0, 30.0,
      -68.0, 40.0
    ])
  )
});
const geometry = Webgis.PolygonOutlineGeometry.createGeometry(polygon);

// 2. create a nested polygon with holes outline
const polygonWithHole = new Webgis.PolygonOutlineGeometry({
  polygonHierarchy : new Webgis.PolygonHierarchy(
    Webgis.Vector3.fromDegreesArray([
      -109.0, 30.0,
      -95.0, 30.0,
      -95.0, 40.0,
      -109.0, 40.0
    ]),
    [new Webgis.PolygonHierarchy(
      Webgis.Vector3.fromDegreesArray([
        -107.0, 31.0,
        -107.0, 39.0,
        -97.0, 39.0,
        -97.0, 31.0
      ]),
      [new Webgis.PolygonHierarchy(
        Webgis.Vector3.fromDegreesArray([
          -105.0, 33.0,
          -99.0, 33.0,
          -99.0, 37.0,
          -105.0, 37.0
        ]),
        [new Webgis.PolygonHierarchy(
          Webgis.Vector3.fromDegreesArray([
            -103.0, 34.0,
            -101.0, 34.0,
            -101.0, 36.0,
            -103.0, 36.0
          ])
        )]
      )]
    )]
  )
});
const geometry = Webgis.PolygonOutlineGeometry.createGeometry(polygonWithHole);

// 3. create extruded polygon outline
const extrudedPolygon = new Webgis.PolygonOutlineGeometry({
  polygonHierarchy : new Webgis.PolygonHierarchy(
    Webgis.Vector3.fromDegreesArray([
      -72.0, 40.0,
      -70.0, 35.0,
      -75.0, 30.0,
      -70.0, 30.0,
      -68.0, 40.0
    ])
  ),
  extrudedHeight: 300000
});
const geometry = Webgis.PolygonOutlineGeometry.createGeometry(extrudedPolygon);
```

## 属性

## 方法

`static` **[fromPositions(options): PolygonOutlineGeometry]()**

从位置数组中创建PolygonOutlineGeometry。

options对象，具有以下属性：

| Name                | Type                                                         | Default                         | Description                                                  |
| :------------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `positions`         | Vector3[]                                                    |                                 | 定义多边形的角点的位置数组。                                 |
| `height`            | Number                                                       | `0.0`                           | optional多边形的高度。                                       |
| `extrudedHeight`    | Number                                                       |                                 | optional多边形挤压的高度。                                   |
| `ellipsoid`         | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |
| `granularity`       | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `perPositionHeight` | Boolean                                                      | `false`                         | optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。 |
| `arcType`           | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional多边形边缘必须遵循的线的类型。有效的选项是[`ArcType.GEODESIC`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC)和[`ArcType.RHUMB`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB)。 |

Example:

```javascript
// 从多个点创建一个多边形轮廓
var polygon = Cesium.PolygonOutlineGeometry.fromPositions({
  positions : Cesium.Cartesian3.fromDegreesArray([
    -72.0, 40.0,
    -70.0, 35.0,
    -75.0, 30.0,
    -70.0, 30.0,
    -68.0, 40.0
  ])
});
var geometry = Cesium.PolygonOutlineGeometry.createGeometry(polygon);
```