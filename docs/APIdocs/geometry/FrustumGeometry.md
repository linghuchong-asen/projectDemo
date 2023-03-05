# 视椎体(FrustumGeometry)

描述给定原点和方向的截锥体。

## 构造器

**FrustumGeometry(options)**

options对象，具有以下属性：

| Name           | Type                                                         | Default                | Description          |
| :------------- | :----------------------------------------------------------- | :--------------------- | :------------------- |
| `frustum`      | [PerspectiveFrustum](https://www.vvpstk.com/public/Cesium/Documentation/PerspectiveFrustum.html) \| [OrthographicFrustum](https://www.vvpstk.com/public/Cesium/Documentation/OrthographicFrustum.html) |                        | 截锥体。             |
| `origin`       | Vector3                                                      |                        | 截锥体的原点。       |
| `orientation`  | [Quaternion](https://www.vvpstk.com/public/Cesium/Documentation/Quaternion.html) |                        | 截锥体的方向。       |
| `vertexFormat` | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | `optional`顶点格式。 |

## 示例代码

## 属性

## 方法