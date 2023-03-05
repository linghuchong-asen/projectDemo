# 几何体(Geometry)

几何图形表示为具有组织顶点的属性和定义图元的可选索引数据。

## 构造器

**Geometry(options)**

options对象，具有以下属性：

| Name             | Type                                                         | Default                   | Description                                      |
| :--------------- | :----------------------------------------------------------- | :------------------------ | :----------------------------------------------- |
| `attributes`     | [GeometryAttributes](https://www.vvpstk.com/public/Cesium/Documentation/GeometryAttributes.html) |                           | 组成几何图形的顶点的属性。                       |
| `primitiveType`  | [PrimitiveType](https://www.vvpstk.com/public/Cesium/Documentation/PrimitiveType.html) | `PrimitiveType.TRIANGLES` | optional几何图形中的图元类型。                   |
| `indices`        | Uint16Array \| Uint32Array                                   |                           | optional可选索引数据，用于确定几何图形中的图元。 |
| `boundingSphere` | [BoundingSphere](https://www.vvpstk.com/public/Cesium/Documentation/BoundingSphere.html) |                           | optional一个可选的包围球，完全包围了几何图形。   |

## 示例代码

```javascript
// 使用位置属性和线索引创建几何图形。
var positions = new Float64Array([
  0.0, 0.0, 0.0,
  7500000.0, 0.0, 0.0,
  0.0, 7500000.0, 0.0
]);

var geometry = new Webgis.Geometry({
  attributes : {
    position : new Webgis.GeometryAttribute({
      componentDatatype : Webgis.ComponentDatatype.DOUBLE,
      componentsPerAttribute : 3,
      values : positions
    })
  },
  indices : new Uint16Array([0, 1, 1, 2, 2, 0]),
  primitiveType : Webgis.PrimitiveType.LINES,
  boundingSphere : Webgis.BoundingSphere.fromVertices(positions)
});
```

## 属性

**[attributes : GeometryAttributes]()**

组成几何图形的顶点的属性。这个对象中的每个属性都对应一个[`GeometryAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryAttribute.html)，其中包含属性的数据。

属性总是以非交插（non-interleaved）的方式存储在几何图形中。

保留具有众所周知语义的属性名称。以下属性由Geometry（取决于提供的[`VertexFormat`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html)）创建。

- `position` - 3D顶点位置。64位浮点数（用于精度）。 每个属性3个分量。请参见 [`VertexFormat#position`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#position)。
- `normal` - 标准（标准化的）, 通常用于光照。32位浮点数。每个属性3个分量。请参见 [`VertexFormat#normal`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#normal)。
- `st` - 2D纹理坐标。32位浮点数。每个属性2个分量。请参见[`VertexFormat#st`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#st).
- `bitangent` - Bitangent（标准化的），用于切线空间（tangent-space）效果，如凹凸贴图（bump mapping）。32位浮点数。每个属性3个分量。请参见 [`VertexFormat#bitangent`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#bitangent)。
- `tangent` - Tangent（标准化的），用于切线空间（tangent-space）效果，如凹凸贴图（bump mapping）。32位浮点数。每个属性3个分量。请参见 [`VertexFormat#tangent`](https://www.vvpstk.com/public/Cesium/Documentation/VertexFormat.html#tangent)。



以下属性名通常不是由Geometry创建的，而是由[`Primitive`](https://www.vvpstk.com/public/Cesium/Documentation/Primitive.html)或[`GeometryPipeline`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html)函数添加到Geometry中，以便为渲染几何图形做好准备。

- `position3DHigh` - 使用[`GeometryPipeline.encodeAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute)计算得出的已编码64位位置的高32位。32位浮点数。每个属性4个分量。
- `position3DLow` - 使用[`GeometryPipeline.encodeAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute)计算得出的已编码64位位置的低32位。32位浮点数。每个属性4个分量。
- `position2DHigh` - 使用[`GeometryPipeline.encodeAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute)计算得出的已编码的64位2D（Columbus view）位置的高32位。 32位浮点数。每个属性4个分量。
- `position2DLow` - 使用[`GeometryPipeline.encodeAttribute`](https://www.vvpstk.com/public/Cesium/Documentation/GeometryPipeline.html#.encodeAttribute)计算得出的已编码的64位2D（Columbus view）位置的低32位。 32位浮点数。每个属性4个分量。
- `color` - 通常从`GeometryInstance#color`而来的RGBA颜色(标准化)。32位浮点数。每个属性4个分量。
- `pickColor` - 用于拾取的RGBA颜色。32位浮点数。每个属性4个分量。

defaultValue: `undefined`

Example:

```javascript
geometry.attributes.position = new Cesium.GeometryAttribute({
  componentDatatype : Cesium.ComponentDatatype.FLOAT,
  componentsPerAttribute : 3,
  values : new Float32Array(0)
});
```

**[boundingSphere : BoundingSphere]()**

一个可选的包围球，完全包围几何图形。这是通常用于筛选（culling）。

defaultValue: `undefined`

**[indices : Array]()**

可选的索引数据——与[`Geometry#primitiveType`](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html#primitiveType)一起——决定几何图形中的图元。

defaultValue: `undefined`

**[primitiveType : PrimitiveType]()**

几何图形中的图元类型。这通常是[`PrimitiveType.TRIANGLES`](https://www.vvpstk.com/public/Cesium/Documentation/PrimitiveType.html#.TRIANGLES)，但可以根据具体的几何形状变化。

defaultValue: `undefined`

## 方法

**[computeNumberOfVertices(geometry): number]()**

计算几何图形中的顶点数。运行时与顶点的属性数量有关，而与顶点的数量无关。

| Name       | Type                                                         | Description |
| :--------- | :----------------------------------------------------------- | :---------- |
| `geometry` | [Geometry](https://www.vvpstk.com/public/Cesium/Documentation/Geometry.html) | 几何图形。  |

Returns:

几何图形中的顶点数。

Example:

```javascript
var numVertices = Cesium.Geometry.computeNumberOfVertices(geometry);
```