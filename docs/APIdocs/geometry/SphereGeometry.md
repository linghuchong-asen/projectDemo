# 球体(SphereGeometry)

以原点为中心的球体的描述。

## 构造器

**SphereGeometry(options)**

options对象，具有以下属性：

| Name              | Type                                                         | Default                | Description                                |
| :---------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------------- |
| `radius`          | Number                                                       | `1.0`                  | optional球体的半径。                       |
| `stackPartitions` | Number                                                       | `64`                   | optional将球体分割成堆栈（stacks）的次数。 |
| `slicePartitions` | Number                                                       | `64`                   | optional将球体分割成径向切片的次数。       |
| `vertexFormat`    | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT` | optional要计算的顶点属性。                 |

## 示例代码

```javascript
const sphere = new Webgis.SphereGeometry({
  radius : 100.0,
  vertexFormat : WebgisWebgis.VertexFormat.POSITION_ONLY
});
const geometry = Webgis.SphereGeometry.createGeometry(sphere);
```

## 属性

## 方法