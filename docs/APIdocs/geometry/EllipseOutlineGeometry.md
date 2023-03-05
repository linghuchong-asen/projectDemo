# 仅有轮廓椭圆(EllipseOutlineGeometry)

## 构造器

**EllipseOutlineGeometry(options)**

options对象，具有以下属性：

| Name                    | Type                                                         | Default           | Description                                          |
| :---------------------- | :----------------------------------------------------------- | :---------------- | :--------------------------------------------------- |
| `center`                | Vector3                                                      |                   | 椭圆的中心点。                                       |
| `semiMajorAxis`         | Number                                                       |                   | 椭圆长半轴的长度，以米为单位。                       |
| `semiMinorAxis`         | Number                                                       |                   | 椭圆短半轴的长度，以米为单位。                       |
| `ellipsoid`             | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | optional椭圆将放到的椭球面。                         |
| `height`                | Number                                                       | `0.0`             | optional椭圆和椭球面之间的距离，以米为单位。         |
| `extrudedHeight`        | Number                                                       |                   | optional椭圆的挤压面与椭球面之间的距离，以米为单位。 |
| `rotation`              | Number                                                       | `0.0`             | optional从北(逆时针方向)的角度，以弧度表示。         |
| `granularity`           | Number                                                       | `0.02`            | optional椭圆上各点之间的角距离，以弧度表示。         |
| `numberOfVerticalLines` | Number                                                       | `16`              | optional在挤压椭圆的顶部和底部之间绘制的线数。       |

## 示例代码

```javascript
var ellipse = new Webgis.EllipseOutlineGeometry({
  center : Webgis.Vector3.fromDegrees(-75.59777, 40.03883),
  semiMajorAxis : 500000.0,
  semiMinorAxis : 300000.0,
  rotation : Webgis.Math.toRadians(60.0)
});
var geometry = Webgis.EllipseOutlineGeometry.createGeometry(ellipse);
```

## 属性

## 方法