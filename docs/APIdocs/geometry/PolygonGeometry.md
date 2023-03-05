# 多边形(PolygonGeometry)

多边形几何体，可以具有孔洞。

## 构造器

**PolygonGeometry(options)**

options对象，具有以下属性：

| Name                | Type                                                         | Default                         | Description                                                  |
| :------------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `polygonHierarchy`  | [PolygonHierarchy](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html) |                                 | 包含孔洞（holes）的多边形层次结构。                          |
| `height`            | Number                                                       | `0.0`                           | optional多边形与椭球面的距离，单位为米。                     |
| `extrudedHeight`    | Number                                                       |                                 | optional多边形的挤压面与椭球面的距离，单位为米。             |
| `vertexFormat`      | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `stRotation`        | Number                                                       | `0.0`                           | optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。   |
| `ellipsoid`         | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |
| `granularity`       | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `perPositionHeight` | Boolean                                                      | `false`                         | optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。 |
| `closeTop`          | Boolean                                                      | `true`                          | optional如果为false，则将挤出多边形的顶部保留为打开状态。    |
| `closeBottom`       | Boolean                                                      | `true`                          | optional如果为false，则将挤出多边形的底部保留为打开状态。    |
| `arcType`           | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional多边形边缘必须遵循的线的类型。有效的选项是[`ArcType.GEODESIC`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC)和[`ArcType.RHUMB`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB)。 |

## 示例代码

```javascript
// 1. create a polygon from points
const polygon = new Cesium.PolygonGeometry({
  polygonHierarchy : new Cesium.PolygonHierarchy(
    Cesium.Cartesian3.fromDegreesArray([
      -72.0, 40.0,
      -70.0, 35.0,
      -75.0, 30.0,
      -70.0, 30.0,
      -68.0, 40.0
    ])
  )
});
const geometry = Cesium.PolygonGeometry.createGeometry(polygon);

// 2. create a nested polygon with holes
const polygonWithHole = new Cesium.PolygonGeometry({
  polygonHierarchy : new Cesium.PolygonHierarchy(
    Cesium.Cartesian3.fromDegreesArray([
      -109.0, 30.0,
      -95.0, 30.0,
      -95.0, 40.0,
      -109.0, 40.0
    ]),
    [new Cesium.PolygonHierarchy(
      Cesium.Cartesian3.fromDegreesArray([
        -107.0, 31.0,
        -107.0, 39.0,
        -97.0, 39.0,
        -97.0, 31.0
      ]),
      [new Cesium.PolygonHierarchy(
        Cesium.Cartesian3.fromDegreesArray([
          -105.0, 33.0,
          -99.0, 33.0,
          -99.0, 37.0,
          -105.0, 37.0
        ]),
        [new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([
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
const geometry = Cesium.PolygonGeometry.createGeometry(polygonWithHole);

// 3. create extruded polygon
const extrudedPolygon = new Cesium.PolygonGeometry({
  polygonHierarchy : new Cesium.PolygonHierarchy(
    Cesium.Cartesian3.fromDegreesArray([
      -72.0, 40.0,
      -70.0, 35.0,
      -75.0, 30.0,
      -70.0, 30.0,
      -68.0, 40.0
    ])
  ),
  extrudedHeight: 300000
});
const geometry = Cesium.PolygonGeometry.createGeometry(extrudedPolygon);
```

## 属性

## 方法

`static`**[computeRectangle(options, result): Rectangle]()**

返回给定options的包围框。

options对象，具有以下属性：

| Name               | Type                                                         | Default                         | Description                                                  |
| :----------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `polygonHierarchy` | [PolygonHierarchy](https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html) |                                 | 包含孔洞（holes）的多边形层次结构。                          |
| `granularity`      | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定采样位置的数量。 |
| `arcType`          | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional多边形边缘必须遵循的线的类型。有效的选项是[`ArcType.GEODESIC`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC)和[`ArcType.RHUMB`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB)。 |
| `ellipsoid`        | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |

result:  Rectangle;  `optional`存储结果的对象。

`static`**[fromPositions(options): PolygonGeometry]()**

从位置数组中对多边形的描述。多边形几何可以用[`Primitive`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html)和[`GroundPrimitive`](https://www.vvpstk.com/public/Cesium/Documentation/GroundPrimitive.html)来绘制。

options对象，具有以下属性：

| Name                | Type                                                         | Default                         | Description                                                  |
| :------------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `positions`         | Vector3[]                                                    |                                 | 定义多边形的角点的位置数组。                                 |
| `height`            | Number                                                       | `0.0`                           | optional多边形的高度。                                       |
| `extrudedHeight`    | Number                                                       |                                 | optional多边形挤压的高度。                                   |
| `vertexFormat`      | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `stRotation`        | Number                                                       | `0.0`                           | optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。   |
| `ellipsoid`         | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |
| `granularity`       | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `perPositionHeight` | Boolean                                                      | `false`                         | optional为每个位置使用options.positions的高度，而不是使用options.height来确定高度。 |
| `closeTop`          | Boolean                                                      | `true`                          | optional如果为false，则将挤出多边形的顶部保留为打开状态。    |
| `closeBottom`       | Boolean                                                      | `true`                          | optional如果为false，则将挤出多边形的底部保留为打开状态。    |
| `arcType`           | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional多边形边缘必须遵循的线的类型。有效的选项是[`ArcType.GEODESIC`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.GEODESIC)和[`ArcType.RHUMB`](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html#.RHUMB)。 |

Example:

```javascript
// create a polygon from points
const polygon = Webgis.PolygonGeometry.fromPositions({
  positions : Webgis.Cartesian3.fromDegreesArray([
    -72.0, 40.0,
    -70.0, 35.0,
    -75.0, 30.0,
    -70.0, 30.0,
    -68.0, 40.0
  ])
});
const geometry = Webgis.PolygonGeometry.createGeometry(polygon);
```