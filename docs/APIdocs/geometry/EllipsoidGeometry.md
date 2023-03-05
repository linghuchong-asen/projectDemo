# 椭球(EllipsoidGeometry)

以原点为中心的椭球几何体

## 构造器

**EllipsoidGeometry(options)**

options对象，具有以下属性：

| Name              | Type                                                         | Default                  | Description                                             |
| :---------------- | :----------------------------------------------------------- | :----------------------- | :------------------------------------------------------ |
| `radii`           | Vector3                                                      | `Vector3(1.0, 1.0, 1.0)` | `optional`椭球体在x、y和z方向上的半径。                 |
| `innerRadii`      | Vector3                                                      | `options.radii`          | `optional`椭球体在x、y和z方向上的内半径。               |
| `minimumClock`    | Number                                                       | `0.0`                    | `optional`从正x轴向正y轴测得的在xy平面上的最小角度。    |
| `maximumClock`    | Number                                                       | `2*PI`                   | `optional`从正x轴到正y轴所测得的在xy平面上的最大角度。  |
| `minimumCone`     | Number                                                       | `0.0`                    | `optional`从正z轴到负z轴的测得的最小角度。              |
| `maximumCone`     | Number                                                       | `PI`                     | `optional`从正z轴到负z轴的测得的最大角度。              |
| `stackPartitions` | Number                                                       | `64`                     | `optional`将椭球体分割成堆栈（stacks）的次数。          |
| `slicePartitions` | Number                                                       | `64`                     | `optional`将椭球分割成径向切片（radial slices）的次数。 |
| `vertexFormat`    | [VertexFormat](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html) | `VertexFormat.DEFAULT`   | `optional`要计算的顶点属性。                            |

## 示例代码

```javascript
const ellipsoid = new Webgis.EllipsoidGeometry({
  vertexFormat : Webgis.VertexFormat.POSITION_ONLY,
  radii : new Webgis.Vector3(1000000.0, 500000.0, 500000.0)
});
const geometry = Webgis.EllipsoidGeometry.createGeometry(ellipsoid);
```

## 属性

## 方法