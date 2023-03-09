# 多边形(PolygonGeometry)

多边形几何体，可以拉伸、挖洞。

## 构造器

**PolygonGeometry(positionArr)**

| Name        | Type                                       | Description    |
| :---------- | :----------------------------------------- | :------------- |
| positionArr | [&lt;Array&gt;Vector2](../math/Vector2.md) | 多边形的路径点 |

## 示例代码

```javascript
const positionArr = [new Webgis.Vector2(5,5), new Webgis.Vector2(-5, 5), new Webgis.Vector2(-5, -5), new Webgis.Vector2(5, -5)];
const polygonGeometry = new Webgis.PolygonGeometry(positionArr);
```

## 属性

### height: number

获取拉伸多边形的高度。

### positionArr: [&lt;Array&gt;Vector2](../math/Vector2.md)

获取多边形使用的路径点。

## 方法

### stretch(height)

| Name   | Type   | Description |
| :----- | :----- | :---------- |
| height | number | 拉伸高度。  |

拉伸多边形。

### setHole(positionArr)

| Name        | Type                                       | Description      |
| :---------- | :----------------------------------------- | :--------------- |
| positionArr | [&lt;Array&gt;Vector2](../math/Vector2.md) | 多边形的路径点。 |

在多边形内挖洞。