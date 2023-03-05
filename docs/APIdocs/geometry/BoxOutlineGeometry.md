# 仅有轮廓立方体(BoxOutlineGeometry)

以原点为中心的立方体轮廓的描述。

## 构造器

**BoxOutlineGeometry(options)**

options对象，具有以下属性：

| Name      | Type                                                         | Description             |
| :-------- | :----------------------------------------------------------- | :---------------------- |
| `minimum` | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) | 盒子的最小x, y, z坐标。 |
| `maximum` | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) | 盒子的最大x, y, z坐标。 |

## 示例代码

```javascript
var box = new Webgis.BoxOutlineGeometry({
  maximum : new Webgis.Cartesian3(250000.0, 250000.0, 250000.0),
  minimum : new Webgis.Cartesian3(-250000.0, -250000.0, -250000.0)
});
var geometry = Webgis.BoxOutlineGeometry.createGeometry(box);
```

## 属性

## 方法

**[fromAxisAlignedBoundingBox(boundingBox): BoxGeometry]()**

从AxisAlignedBoundingBox的尺寸创建一个立方体。

| Name          | Type                                                         | Description                    |
| :------------ | :----------------------------------------------------------- | :----------------------------- |
| `boundingBox` | [AxisAlignedBoundingBox](https://www.vvpstk.com/public/Cesium/Documentation/AxisAlignedBoundingBox.html) | AxisAlignedBoundingBox的描述。 |

Example:

```javascript
var aabb = Webgis.AxisAlignedBoundingBox.fromPoints(Cesium.Cartesian3.fromDegreesArray([
     -72.0, 40.0,
     -70.0, 35.0,
     -75.0, 30.0,
     -70.0, 30.0,
     -68.0, 40.0
]));
var box = Webgis.BoxGeometry.fromAxisAlignedBoundingBox(aabb);
```

**[fromDimensions(options) → BoxGeometry]()**

创建一个以给定尺寸的原点为中心的立方体。

options对象，具有以下属性：

| Name           | Type                                                         | Default                | Description                                                  |
| :------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| `dimensions`   | [Cartesian3](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html) |                        | 分别存储在`Cartesian3`的x、y和z坐标中的盒子的宽度、深度和高度。 |
| `vertexFormat` | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | `optional`要计算的顶点属性。                                 |

Example:

```javascript
var box = Cesium.BoxGeometry.fromDimensions({
  vertexFormat : Cesium.VertexFormat.POSITION_ONLY,
  dimensions : new Cesium.Cartesian3(500000.0, 500000.0, 500000.0)
});
var geometry = Cesium.BoxGeometry.createGeometry(box);
```

