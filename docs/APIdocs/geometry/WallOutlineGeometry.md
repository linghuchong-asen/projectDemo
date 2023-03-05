# 仅有轮廓的墙(WallOutlineGeometry)

对墙的轮廓的描述。墙是由一系列的点构成的，这些点向下延伸到地面。 可选地，它们可以向下挤压到指定的高度。

## 构造器

**WallOutlineGeometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                         | Description                                                  |
| :--------------- | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| `positions`      | Vector3[ ]                                                   |                                 | 笛卡尔对象数组，它们是墙的点。                               |
| `granularity`    | Number                                                       | `CesiumMath.RADIANS_PER_DEGREE` | optional每个经度和纬度之间的距离，以弧度表示。确定缓冲区中的位置数。 |
| `maximumHeights` | number[ ]                                                    |                                 | optional与`positions`并行的数组，给出了在`positions`处墙的最大高度。如果未定义，则使用每个位置的高度。 |
| `minimumHeights` | number[ ]                                                    |                                 | optional与`positions`并行的数组，给出了在`positions`处墙的最小高度。如果未定义，则每个位置的高度为0.0。 |
| `ellipsoid`      | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84`               | optional用于坐标操作的椭球体。                               |

## 示例代码

```javascript
// 创建一个从地面到10000米的墙的轮廓
var wall = new Webgis.WallOutlineGeometry({
  positions : Webgis.Cartesian3.fromDegreesArrayHeights([
    19.0, 47.0, 10000.0,
    19.0, 48.0, 10000.0,
    20.0, 48.0, 10000.0,
    20.0, 47.0, 10000.0,
    19.0, 47.0, 10000.0
  ])
});
var geometry = Webgis.WallOutlineGeometry.createGeometry(wall);
```

## 属性

## 方法

`static` **[fromConstantHeights(options): WallOutlineGeometry]()**

对墙的轮廓的描述。墙是由一系列的点构成的，这些点向下延伸到地面。 可选地，它们可以向下挤压到指定的高度。

options对象，具有以下属性：

| Name            | Type                                                         | Default           | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------------- |
| `positions`     | Vector3[ ]                                                   |                   | 笛卡尔对象数组，它们是墙的点。                               |
| `maximumHeight` | Number                                                       |                   | optional与`positions`并行的数组，给出了在`positions`处墙的最大高度。如果未定义，则使用每个位置的高度。 |
| `minimumHeight` | Number                                                       |                   | optional与`positions`并行的数组，给出了在`positions`处墙的最小高度。如果未定义，则每个位置的高度为0.0。 |
| `ellipsoid`     | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | optional用于坐标操作的椭球体。                               |

##### Example:

```javascript
// 建造一堵从10000米到20000米的墙
var wall = Webgis.WallOutlineGeometry.fromConstantHeights({
  positions : Webgis.Cartesian3.fromDegreesArray([
    19.0, 47.0,
    19.0, 48.0,
    20.0, 48.0,
    20.0, 47.0,
    19.0, 47.0,
  ]),
  minimumHeight : 20000.0,
  maximumHeight : 10000.0
});
var geometry = Webgis.WallOutlineGeometry.createGeometry(wall);
```