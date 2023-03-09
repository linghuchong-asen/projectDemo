# 图元组(PrimitiveGroup)

可以向其中添加图元Primitive。本身也是一种图元，也可以向其中添加PrimitiveGroup。

## 构造器

**PrimitiveGroup()**

## 示例代码

```js
// scene.primitives即可获取到PrimitiveGroup
viewer.scene.primitives.append(
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
);
```

## 属性



## 方法

### append(primitive) 

| Name        | Type                                   | Description                             |
| :---------- | :------------------------------------- | :-------------------------------------- |
| `primitive` | [Primitive](../primitive/Primitive.md) | 要添加的图元。:triangular_flag_on_post: |

向集合中添加图元。

