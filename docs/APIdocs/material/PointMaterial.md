# 点(PointMaterial)

点材质部分。

## 构造器

**PointMaterial()**

## 示例代码

```javascript
const pointMaterial = new Webgis.PointMaterial();
pointMaterial.setSize(5);
pointMaterial.setColor(new Webgis.Color(187, 79, 189, 1));
pointMaterial.setOpacity(0.9);
```

## 属性

### color: [Color](../math/Color.md)

获取或设置点颜色。

### size: [Color](../math/Color.md)

获取或设置点大小。

## 方法

### setOpacity(opacity)

| Name    | Type   | Description              |
| :------ | :----- | :----------------------- |
| opacity | number | 点的透明度，取值范围:0~1 |

设置点透明度。