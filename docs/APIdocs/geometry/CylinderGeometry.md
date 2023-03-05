# 圆柱(CylinderGeometry)

圆柱几何体

## 构造器

**CylinderGeometry(optons)**

optons对象，具有以下属性：

| Name           | Type                                                         | Default                | Description                  |
| :------------- | :----------------------------------------------------------- | :--------------------- | :--------------------------- |
| `length`       | Number                                                       |                        | 圆柱体的长度。               |
| `topRadius`    | Number                                                       |                        | 圆柱体顶部的半径。           |
| `bottomRadius` | Number                                                       |                        | 圆柱体底部的半径。           |
| `slices`       | Number                                                       | `128`                  | `optional`圆柱体周边的边数。 |
| `vertexFormat` | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | `optional`要计算的顶点属性。 |

## 示例代码

```javascript
// 创建圆柱体几何
var cylinder = new Webgis.CylinderGeometry({
    length: 200000,
    topRadius: 80000,
    bottomRadius: 200000,
});
var geometry = Webgis.CylinderGeometry.createGeometry(cylinder);
```

## 属性

## 方法