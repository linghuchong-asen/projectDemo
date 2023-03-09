# 几何实例(GeometryInstance)

几何图形实例，具有几何体通用的方法和属性。

## 构造器

**GeometryInstance(options)**

options对象，具有以下属性：

| Name      | Type                          | Default          | Description            |
| :-------- | :---------------------------- | :--------------- | :--------------------- |
| geometry  |                               |                  | 实例化的几何体。       |
| translate | [Vector3](../math/Vector3.md) | `Vector3(0,0,0)` | `optional`几何体平移。 |
| scale     | [Vector3](../math/Vector3.md) | `Vector3(1,1,1)` | `optional`几何体缩放。 |
| rotation  | [Vector3](../math/Vector3.md) | `Vector3(0,0,0)` | `optional`几何体旋转。 |
| heading   | number                        | `0`              | `optional`偏航角       |
| pitch     | number                        | `0`              | `optional`俯仰角       |
| roll      | number                        | `0`              | `optional`翻滚角       |

## 代码示例

```javascript
new Webgis.GeometryInstance({
      geometry: polygonGeometry,
      tanslate: new Webgis.Vector3(2,2,2),
      scale: new Webgis.Vector3(3,3,3),
      rotation: new Webgis.Vector3(Math.PI/4,0,0),
    }),
```

## 属性

