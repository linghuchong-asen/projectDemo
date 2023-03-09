# 墙(WallGeometry)

墙几何体部分。

## 构造器

**WallGeometry(positionArr)**

| Name        | Type                                       | Description    |
| :---------- | :----------------------------------------- | :------------- |
| positionArr | [&lt;Array&gt;Vector2](../math/Vector2.md) | 多边形的路径点 |

## 示例代码

```javascript
const wallPosition = [new Webgis.Vector2(-7, 1), new Webgis.Vector2(-15, 1), new Webgis.Vector2(-15, 10), new Webgis.Vector2(-7, 10)];
const wallGeometry = new Webgis.WallGeometry(wallPosition);
```

## 属性

### height: number

获取墙的高度。

### positionArr: [&lt;Array&gt;Vector2](../math/Vector2.md)

获取墙使用的路径点。

## 方法

### stretch(height)

| Name   | Type   | Description |
| :----- | :----- | :---------- |
| height | number | 拉伸高度。  |

拉伸多边形。

