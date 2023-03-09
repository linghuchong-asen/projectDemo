# 图元()

图元（Primitive）表示场景中的几何图形。这个几何图形可以来自单个的`GeometryInstance`。

图元将几何图形实例和外观（`Appearance`）结合在一起。 大致上几何图形实例定义了结构和位置， 外观定义了视觉效果。解耦几何和外观允许我们混合和匹配它们中的大多数，并彼此独立地添加一个新的几何或外观。

## 构造器

**Primitive()**

optional具有以下属性的对象：

| Name                | Type                                       | Default              | Description                                      |
| :------------------ | :----------------------------------------- | :------------------- | :----------------------------------------------- |
| `geometryInstances` | GeometryInstance\|<br />GeometryInstance[] | [GeometryInstance]() | optional要渲染的几何实例数组或者单个的几何实例。 |
| `appearance`        | [Appearance]()                             |                      | optional用于渲染图元的外观。                     |
| `show`              | boolean                                    | `true`               | optional图元是否被显示。                         |
| id                  | string                                     | `undefined`          | `optional`图元id。                               |
| select              | boolean                                    | `true`               | `optional`图元是否可以被选中。                   |

示例代码:

```js
new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: labelGeometry,
      translate: new Webgis.Vector3(0, 0, -6),
      scale: new Webgis.Vector3(5, 5, 5),
    }),
    appearance: new Webgis.MaterialAppearance({
      material: labelMaterial,
    }),
    show: true,
    id: "labelId",
    select: false,
  }),
```

## 属性



## 方法

