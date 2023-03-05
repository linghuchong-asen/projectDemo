# 仅有轮廓线圆柱(CylinderOutlineGeometry)

仅有轮廓线圆柱几何体

## 构造器

**CylinderOutlineGeometry(options)**

options对象，具有以下属性：

| Name                    | Type   | Default | Description                                    |
| :---------------------- | :----- | :------ | :--------------------------------------------- |
| `length`                | Number |         | 圆柱体的长度。                                 |
| `topRadius`             | Number |         | 圆柱体顶部的半径。                             |
| `bottomRadius`          | Number |         | 圆柱体底部的半径。                             |
| `slices`                | Number | `128`   | `optional`圆柱体周边的边数。                   |
| `numberOfVerticalLines` | Number | `16`    | `optional`在圆柱体的顶面和底面之间绘制的线数。 |

## 示例代码

```javascript
// 创建圆柱体几何
var cylinder = new Webgis.CylinderOutlineGeometry({
    length: 200000,
    topRadius: 80000,
    bottomRadius: 200000,
});
var geometry = Webgis.CylinderOutlineGeometry.createGeometry(cylinder);
```

## 属性

## 方法

