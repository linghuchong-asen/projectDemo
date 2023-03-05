# 多段线柱体(PolylineVolumeGeometry)

对具有体的折线的描述（沿折线挤压的二维形状）。

## 构造器

**PolylineVolumeGeometry(options)**

options对象，具有以下属性：

| Name                | Type                                                         | Default                         | Description                                                  |
| :------------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `polylinePositions` | Vector3[ ]                                                   |                                 | 定义折线体中心的`Cartesain3`位置数组。                       |
| `shapePositions`    | Vector3[ ]                                                   |                                 | 一个[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)位置数组，定义要沿着折线挤压的形状 |
| `ellipsoid`         | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | `optional`用作参考的椭球体。                                 |
| `granularity`       | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | `optional`每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `vertexFormat`      | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | `optional`要计算的顶点属性。                                 |
| `cornerType`        | [CornerType](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html) | `CornerType.ROUNDED`            | `optional`确定角的样式。                                     |

## 示例代码

```javascript
function computeCircle(radius) {
  const positions = [];
  for (let i = 0; i < 360; i++) {
    const radians = Webgis.Math.toRadians(i);
    positions.push(new Webgis.Vector2(radius * Math.cos(radians), radius * Math.sin(radians)));
  }
  return positions;
}

const volume = new Webgis.PolylineVolumeGeometry({
  vertexFormat : Webgis.VertexFormat.POSITION_ONLY,
  polylinePositions : Webgis.Vector3.fromDegreesArray([
    -72.0, 40.0,
    -70.0, 35.0
  ]),
  shapePositions : computeCircle(100000.0)
});
```

## 属性

## 方法