# 平面(PlaneGeometry)

描述以原点为中心、具有单位宽度和长度的平面的几何形状。

## 构造器

**PlaneGeometry(options)**

options对象，具有以下属性：

| Name           | Type                                                         | Default                | Description                |
| :------------- | :----------------------------------------------------------- | :--------------------- | :------------------------- |
| `vertexFormat` | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | optional要计算的顶点属性。 |

## 示例代码

```javascript
const planeGeometry = new Webgis.PlaneGeometry({
  vertexFormat : Webgis.VertexFormat.POSITION_ONLY
});
```

## 属性

## 方法