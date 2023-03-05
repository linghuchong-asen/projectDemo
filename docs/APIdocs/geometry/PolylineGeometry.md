# 多段线(PolylineGeometry)

以线带（line strip）形式建模的折线的描述；前两个位置定义一个线段， 每个额外的位置和前一个位置的定义一个线段。折线可以用一种材质来显示。

## 构造器

**PolylineGeometry(options)**

options对象，具有以下属性：

| Name              | Type                                                         | Default                         | Description                                                  |
| :---------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `positions`       | Vector3[]                                                    |                                 | 一个[`Cartesian3`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html)数组，它将折线中的位置定义为一条线带（line strip）。 |
| `width`           | Number                                                       | `1.0`                           | optional宽度（以像素为单位）。                               |
| `colors`          | Color[]                                                      |                                 | optional定义每个顶点或每个段颜色的[`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)数组。 |
| `colorsPerVertex` | Boolean                                                      | `false`                         | optional一个布尔值，它决定颜色是在每段直线上是单调的（flat）还是在顶点上是插值的。 |
| `arcType`         | [ArcType](https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html) | `ArcType.GEODESIC`              | optional折线段必须遵循的线的类型。                           |
| `granularity`     | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个纬度和经度之间的距离（以弧度表示），如果options.arcType不是ArcType.NONE。确定缓冲区中的位置数。 |
| `vertexFormat`    | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `ellipsoid`       | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |

## 示例代码

```javascript
// 两条线段相连的折线
var polyline = new Cesium.PolylineGeometry({
  positions : Cesium.Cartesian3.fromDegreesArray([
    0.0, 0.0,
    5.0, 0.0,
    5.0, 5.0
  ]),
  width : 10.0
});
var geometry = Cesium.PolylineGeometry.createGeometry(polyline);
```

## 属性

## 方法