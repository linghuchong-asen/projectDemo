# 仅有轮廓球体(SphereOutlineGeometry)

以原点为中心的球体轮廓的描述。

## 构造器

**SphereOutlineGeometry(options)**

options对象，具有以下属性：

| Name              | Type   | Default | Description                                               |
| :---------------- | :----- | :------ | :-------------------------------------------------------- |
| `radius`          | Number | `1.0`   | `optional`球体的半径。                                    |
| `stackPartitions` | Number | `10`    | `optional`球体的堆栈（stacks）数（比平行线的数目大1）。   |
| `slicePartitions` | Number | `8`     | `optional`球体的切片数（等于径向线的数目）。              |
| `subdivisions`    | Number | `200`   | `optional`每条线的点数，决定了曲率的粒度（granularity）。 |

## 示例代码

```javascript
const sphere = new Webgis.SphereOutlineGeometry({
  radius : 100.0,
  stackPartitions : 6,
  slicePartitions: 5
});
const geometry = Webgis.SphereOutlineGeometry.createGeometry(sphere);
```

## 属性

## 方法