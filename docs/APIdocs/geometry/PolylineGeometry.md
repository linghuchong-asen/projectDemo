# 多段线(PolylineGeometry)

多段线的几何体部分。

## 构造器

**PolylineGeometry()**

## 示例代码

```javascript
const polylineGeometry = new Webgis.PolylineGeometry();
// 设置路径点
const polyline = [-10, 0, 10, 10, 10, 0, 10, 0, 0];
polylineGeometry.setPath(polyline);
```

## 属性



## 方法

### setPath(path) 

| Name | Type                                       | Description      |
| :--- | :----------------------------------------- | :--------------- |
| path | [&lt;Array&gt;Vector3](../math/Vector3.md) | 多段线的路径点。 |

设置多段线的路径点。