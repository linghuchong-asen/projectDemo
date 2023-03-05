# 椭圆(EllipseGeometry)

椭圆形几何体

## 构造器

**EllipseGeometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                         | Description                                            |
| :--------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------- |
| `center`         | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) |                                 | 椭圆的中心点。                                         |
| `semiMajorAxis`  | Number                                                       |                                 | 椭圆长半轴的长度，以米为单位。                         |
| `semiMinorAxis`  | Number                                                       |                                 | 椭圆短半轴的长度，以米为单位。                         |
| `ellipsoid`      | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | `optional`椭圆将放到的椭球面。                         |
| `height`         | Number                                                       | `0.0`                           | `optional`椭圆和椭球面之间的距离，以米为单位。         |
| `extrudedHeight` | Number                                                       |                                 | `optional`椭圆的挤压面与椭球面之间的距离，以米为单位。 |
| `rotation`       | Number                                                       | `0.0`                           | `optional`从北方逆时针旋转的角度。                     |
| `stRotation`     | Number                                                       | `0.0`                           | `optional`从北方逆时针旋转的纹理的角度。               |
| `granularity`    | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | `optional`椭圆上点之间的角距离，以弧度表示。           |
| `vertexFormat`   | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | `optional`要计算的顶点属性。                           |

## 示例代码

```javascript
// 创建一个椭圆。
var ellipse = new Webgis.EllipseGeometry({
  center : Webgis.Cartesian3.fromDegrees(-75.59777, 40.03883),
  semiMajorAxis : 500000.0,
  semiMinorAxis : 300000.0,
  rotation : Webgis.Math.toRadians(60.0)
});
var geometry = Webgis.EllipseGeometry.createGeometry(ellipse);
```

## 属性

## 方法

`static` **[computeRectangle(options, result): Rectangle]()**

`options`对象，具有以下属性：

| Name            | Type                                                         | Default                         | Description                                    |
| :-------------- | :----------------------------------------------------------- | :------------------------------ | :--------------------------------------------- |
| `center`        | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) |                                 | 椭圆的中心点。                                 |
| `semiMajorAxis` | Number                                                       |                                 | 椭圆长半轴的长度，以米为单位。                 |
| `semiMinorAxis` | Number                                                       |                                 | 椭圆短半轴的长度，以米为单位。                 |
| `ellipsoid`     | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | `optional`椭圆将放到的椭球面。                 |
| `rotation`      | Number                                                       | `0.0`                           | `optional`从北方逆时针旋转的角度。             |
| `granularity`   | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | `optional`椭圆上各点之间的角距离，以弧度表示。 |

resullt: Rectangle;  `optional` 存储结果的对象。