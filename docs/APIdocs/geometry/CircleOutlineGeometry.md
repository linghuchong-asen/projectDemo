# 仅有轮廓的圆形(CircleOutlineGeometry)

仅有轮廓的圆形几何体。

## 构造器

**CircleOutlineGeometry(options)**

options对象，具有以下属性：

| Name                    | Type                                                         | Default           | Description                                                  |
| :---------------------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------------- |
| `center`                | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) |                   | 圆的中心点。                                                 |
| `radius`                | Number                                                       |                   | 半径，单位是米。                                             |
| `ellipsoid`             | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | optional圆将放到的椭球面。                                   |
| `height`                | Number                                                       | `0.0`             | optional圆与椭球面的距离（以米为单位）。                     |
| `granularity`           | Number                                                       | `0.02`            | optional圆上点之间的角距离（以弧度表示）。                   |
| `extrudedHeight`        | Number                                                       | `0.0`             | optional圆的挤压面（extruded face）与椭球面的距离，单位为米。 |
| `numberOfVerticalLines` | Number                                                       | `16`              | optional在挤压圆的顶部和底部之间绘制的线数。                 |

## 示例代码

```javascript
// 创建一个圆
var circle = new Webgis.CircleOutlineGeometry({
  center : Webgis.Cartesian3.fromDegrees(-75.59777, 40.03883),
  radius : 100000.0
});
var geometry = Webgis.CircleOutlineGeometry.createGeometry(circle);
```

## 属性

## 方法