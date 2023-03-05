# 仅有轮廓椭球(EllipsoidOutlineGeometry)

以原点为中心的仅有轮廓线的椭球几何体。

## 构造器

**EllipsoidOutlineGeometry(options)**

options对象，具有以下属性：

| Name              | Type    | Default                     | Description                                               |
| :---------------- | :------ | :-------------------------- | :-------------------------------------------------------- |
| `radii`           | Vector3 | `Cartesian3(1.0, 1.0, 1.0)` | `optional`椭球体在x、y和z方向上的半径。                   |
| `innerRadii`      | Vector3 | `options.radii`             | `optional`椭球体在x、y和z方向上的内半径。                 |
| `minimumClock`    | Number  | `0.0`                       | `optional`从正x轴向正y轴测得的在xy平面上的最小角度。      |
| `maximumClock`    | Number  | `2*PI`                      | `optional`从正x轴到正y轴所测得的在xy平面上的最大角度。    |
| `minimumCone`     | Number  | `0.0`                       | `optional`从正z轴到负z轴的测得的最小角度。                |
| `maximumCone`     | Number  | `PI`                        | `optional`从正z轴到负z轴的测得的最大角度。                |
| `stackPartitions` | Number  | `10`                        | `optional`椭球面的堆栈（stacks）数（比平行线的数目大1）。 |
| `slicePartitions` | Number  | `8`                         | `optional`椭球面的切片数（等于径向线的数目）。            |
| `subdivisions`    | Number  | `128`                       | `optional`每条线的点数，决定了曲率的粒度（granularity）。 |

## 示例代码

```javascript
const ellipsoid = new Webgis.EllipsoidOutlineGeometry({
  radii : new Webgis.Vector3(1000000.0, 500000.0, 500000.0),
  stackPartitions: 6,
  slicePartitions: 5
});
const geometry = Webgis.EllipsoidOutlineGeometry.createGeometry(ellipsoid);
```

## 属性

## 方法