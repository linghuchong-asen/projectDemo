# 矩形(RectangleGeometry)

在以原点为中心的椭球体上绘制的矩形的描述。

## 构造器

**RectangleGeometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                         | Description                                                  |
| :--------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `rectangle`      | [Rectangle](https://www.vvpstk.com/public/Cesium/Documentation/Rectangle.html) |                                 | 东西南北四个属性的地图矩形，以弧度为单位。                   |
| `vertexFormat`   | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `ellipsoid`      | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional矩形所在的椭球面。                                   |
| `granularity`    | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `height`         | Number                                                       | `0.0`                           | optional以米为单位的矩形和椭球面之间的距离。                 |
| `rotation`       | Number                                                       | `0.0`                           | optional矩形的旋转，以弧度为单位。正的旋转是逆时针的。       |
| `stRotation`     | Number                                                       | `0.0`                           | optional纹理坐标的旋转，以弧度为单位。正的旋转是逆时针的。   |
| `extrudedHeight` | Number                                                       |                                 | optional矩形的挤压面与椭球面的距离，单位为米。               |

## 示例代码

```javascript
// 1. 创建一个矩形
var rectangle = new Webgis.RectangleGeometry({
  ellipsoid : Webgis.Ellipsoid.WGS84,
  rectangle : Webgis.Rectangle.fromDegrees(-80.0, 39.0, -74.0, 42.0),
  height : 10000.0
});
var geometry = Webgis.RectangleGeometry.createGeometry(rectangle);

// 2. 创建一个没有顶部的挤压矩形
var rectangle = new Webgis.RectangleGeometry({
  ellipsoid : Webgis.Ellipsoid.WGS84,
  rectangle : Webgis.Rectangle.fromDegrees(-80.0, 39.0, -74.0, 42.0),
  height : 10000.0,
  extrudedHeight: 300000
});
var geometry = Webgis.RectangleGeometry.createGeometry(rectangle);
```

## 属性

## 方法

`static` **[computeRectangle(options, result): Rectangle]()**

根据提供的options计算包围框。

options对象，具有以下属性：

| Name          | Type                                                         | Default                         | Description                                                  |
| :------------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `rectangle`   | [Rectangle](https://www.vvpstk.com/public/Cesium/Documentation/Rectangle.html) |                                 | 东西南北四个属性的地图矩形，以弧度为单位。                   |
| `ellipsoid`   | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional矩形所在的椭球面。                                   |
| `granularity` | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `rotation`    | Number                                                       | `0.0`                           | optional矩形的旋转，以弧度为单位。正的旋转是逆时针的。       |

`result`: Rectangle; `optional` 储存结果的对象。