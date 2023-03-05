# 走廊(CorridorGeometry)

廊道的描述。

## 构造器

**CorridorGeometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                         | Description                                                  |
| :--------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `positions`      | Vector3[]                                                    |                                 | 定义廊道中心的一系列位置。                                   |
| `width`          | Number                                                       |                                 | 廊道边界之间的距离，以米为单位。                             |
| `ellipsoid`      | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用作参考的椭球体。                                   |
| `granularity`    | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定在缓冲区中的位置数。 |
| `height`         | Number                                                       | `0`                             | optional椭球面和廊道之间的距离，以米为单位。                 |
| `extrudedHeight` | Number                                                       |                                 | optional椭球面与挤压面之间的距离，以米为单位。               |
| `vertexFormat`   | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`          | optional要计算的顶点属性。                                   |
| `cornerType`     | [CornerType](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html) | `CornerType.ROUNDED`            | optional确定角的样式。                                       |

## 示例代码

```javascript
var corridor = new Webgis.CorridorGeometry({
  vertexFormat : Webgis.VertexFormat.POSITION_ONLY,
  positions : Webgis.Cartesian3.fromDegreesArray([-72.0, 40.0, -70.0, 35.0]),
  width : 100000
});
```

## 属性

## 方法

`static`**[computeRectangle(options, result): Rectangle]()**

根据提供的选项计算包围矩形。

options对象，具有以下属性：

| Name         | Type                                                         | Default              | Description                      |
| :----------- | :----------------------------------------------------------- | :------------------- | :------------------------------- |
| `positions`  | Vector3[]                                                    |                      | 定义廊道中心的一系列位置。       |
| `width`      | Number                                                       |                      | 廊道边界之间的距离，以米为单位。 |
| `ellipsoid`  | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`    | `optional`用作参考的椭球体。     |
| `cornerType` | [CornerType](https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html) | `CornerType.ROUNDED` | `optional`确定角的样式。         |

`result`:Rectangle, `optional`储存结果的对象

Returns: 结果矩形。