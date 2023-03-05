# 仅有轮廓矩形(RectangleOutlineGeometry)

在以原点为中心的椭球面上的一个地图矩形的轮廓的描述。

## 构造器

**RectangleOutlineGeometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                         | Description                                                  |
| :--------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `rectangle`      | [Rectangle](https://www.vvpstk.com/public/Cesium/Documentation/Rectangle.html) |                                 | 东西南北四个属性的地图矩形，以弧度为单位。                   |
| `ellipsoid`      | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional矩形所在的椭球面。                                   |
| `granularity`    | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `height`         | Number                                                       | `0.0`                           | optional以米为单位的矩形和椭球面之间的距离。                 |
| `rotation`       | Number                                                       | `0.0`                           | optional矩形的旋转，以弧度为单位。正的旋转是逆时针的。       |
| `extrudedHeight` | Number                                                       |                                 | optional矩形的挤压面与椭球面的距离，单位为米。               |

## 示例代码

```javascript
const rectangle = new Webgis.RectangleOutlineGeometry({
  ellipsoid : Webgis.Ellipsoid.WGS84,
  rectangle : Webgis.Rectangle.fromDegrees(-80.0, 39.0, -74.0, 42.0),
  height : 10000.0
});
const geometry = Webgis.RectangleOutlineGeometry.createGeometry(rectangle);
```

## 属性

## 方法