# 实体(Entity)

Entity实例将多种形式的可视化聚合为单个高级对象。 它们可以手动创建并添加到[`Viewer#entities`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#entities)中，也可以由数据源生成，比如[`CzmlDataSource`](https://www.vvpstk.com/public/Cesium/Documentation/CzmlDataSource.html)和[`GeoJsonDataSource`](https://www.vvpstk.com/public/Cesium/Documentation/GeoJsonDataSource.html)。

## 构造器

**Entity(options)**

options对象，具有以下属性：

| Name                                | Type                          | Description                                                  |
| :---------------------------------- | :---------------------------- | :----------------------------------------------------------- |
| `id`                                | String                        | `optional`此对象的唯一标识符。如果没有提供，则生成GUID。     |
| `name`                              | String                        | `optional`指定名字，它不必是唯一的。                         |
| `availability`                      | TimeIntervalCollection        | `optional`与此对象相关联的时间区间集合，超出该时间集合，对象将不可用。 |
| `show`                              | Boolean                       | `optional`是否显示实体和它的children（子实体）。             |
| `description`                       | Property                      | `optional`指定此实体的HTML描述的字符串属性。                 |
| `position`:triangular_flag_on_post: | [Vector3](../math/Vector3.md) | `optional`指定实体位置的属性。                               |
| `orientation`                       | Property                      | `optional`指定实体方向的属性。                               |
| `viewFrom`                          | Property                      | `optional`用于查看该对象的建议初始偏移量。                   |
| `parent`                            | [Entity](./Entity.md)         | `optional`和这个对象关联的父实体.                            |
| `billboard`                         | BillboardGraphics             | `optional`与此实体关联的布告板。                             |
| `box`                               | BoxGraphics                   | `optional`与此实体关联的盒子.                                |
| `corridor`                          | CorridorGraphics              | `optional`与此实体关联的廊道。                               |
| `cylinder`                          | CylinderGraphics              | `optional`与此实体关联的圆柱体。                             |
| `ellipse`                           | EllipseGraphics               | `optional`与此实体关联的椭圆或圆。                           |
| `ellipsoid`                         | EllipsoidGraphics             | `optional`与此实体关联的椭球或球。                           |
| `label`                             | LabelGraphics                 | `optional`与此实体关联的标注。                               |
| `model`:triangular_flag_on_post:    | ModelGraphics                 | `optional`与此实体关联的模型。                               |
| `path`                              | PathGraphics                  | `optional`与此实体关联的路径。                               |
| `plane`                             | PlaneGraphics                 | `optional`与此实体关联的平面。                               |
| `point`                             | PointGraphics                 | `optional`与此实体关联的点。                                 |
| `polygon`                           | PolygonGraphics               | `optional`与此实体关联的多边形。                             |
| `polyline`                          | PolylineGraphics              | `optional`与此实体关联的折线。                               |
| `properties`                        | PropertyBag                   | `optional`与此实体关联的任意属性。                           |
| `polylineVolume`                    | PolylineVolumeGraphics        | `optional`与此实体关联的折线体。                             |
| `rectangle`                         | RectangleGraphics             | `optional`与此实体关联的矩形。                               |
| `wall`                              | WallGraphics                  | `optional`与此实体关联的墙体。                               |

## 属性

### **[availability : TimeIntervalCollection]()**

与此对象关联的可用性（如果有的话）。 如果可用性未定义，则假定此对象的其他属性将在任何给定时间内返回有效数据。 如果存在可用性，对象的其他属性将仅在给定时间间隔内查询时提供有效数据。

### **[billboard : BillboardGraphics]()**

获取/设置布告板。

### **[box : BoxGraphics]()**

获取/设置box.

### **[corridor : CorridorGraphics]()**

获取/设置廊道。

### **[cylinder : CylinderGraphics]()**

获取/设置圆柱。

### `readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

### **[description : Property]()**

获取/设置描述。

### **[ellipse : EllipseGraphics]()**

获取/设置椭圆。

### **[ellipsoid : EllipsoidGraphics]()**

获取/设置椭球。

### **[entityCollection : EntityCollection]()**

获取或设置此实体所属的实体集合

### **[id : String]()**

获取与此对象关联的唯一ID。

### **[isShowing : Boolean]()**

获取是否显示此实体，并考虑到任何祖先实体的可见性。

### **[label : LabelGraphics]()**

获取/设置标注。

### **[model : ModelGraphics]()**

获取/设置模型。

### **[name : String]()**

获取或设置该对象的名称（不需要是唯一的）。

### **[orientation : Property]()**

设置/获取方向。

### **[parent : Entity]()**

获取/设置父对象。

### **[path : PathGraphics]()**

设置/获取路径。

### **[plane : PlaneGraphics]()**

设置/获取飞机。

### **[point : PointGraphics]()**

设置/获取点。

### **[polygon : PolygonGraphics]()**

设置/获取多边形。

### **[polyline : PolylineGraphics]()**

设置/获取多折线。

### **[polylineVolume : PolylineVolumeGraphics]()**

设置/获取多折线体。

### **[position : PositionProperty]()**

获取/设置位置。

### **[properties : PropertyBag]()**

获取/设置与此实体关联的任意属性。

### **[propertyNames : Array]()**

获取所有的已注册到该实例的属性。

### **[rectangle : RectangleGraphics]()**

获取/设置矩形。

### **[show : Boolean]()**

设置/获取实体显隐性，当其被设置为true的时候，只有当其父节点（如果有的话）也是true的话才显示。

### **[viewFrom : Property]()**

获取或设置跟踪此对象时建议的初始偏移量。 偏移量通常在东北向上的参考系中定义，但是根据物体的速度也可能在另一个参考系中定义。

### **[wall : WallGraphics]()**

获取/设置墙体。

## 方法

### `static` **[supportsMaterialsforEntitiesOnTerrain(scene): Boolean]()**

检查给定场景是否支持覆盖在地形或3D Tiles上的实体的颜色以外的材质。 如果不支持此功能，则使用非彩色材质但没有‘height’的实体将渲染为高度为0。

| Name    | Type                                                         | Description |
| :------ | :----------------------------------------------------------- | :---------- |
| `scene` | [Scene](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html) | 当前场景.   |

返回值: 当前场景是否支持地形上实体的材质。

### `static` **[supportsPolylinesOnTerrain(scene): Boolean]()**

检查给定的场景是否支持将折线贴地形或贴3D Tiles。 如果不支持此功能，那么带有PolylineGraphics的实体将会在提供的高度的顶点和使用'arcType ’参数来渲染，而不是贴在地面上。

| Name    | Type                                                         | Description |
| :------ | :----------------------------------------------------------- | :---------- |
| `scene` | [Scene](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html) | 当前场景。  |

返回值: 当前场景是否支持地形或3D Tiles上的折线。

### **[addProperty(propertyName)]()**

将属性添加到此对象。一旦属性被添加，就可以用[`Entity#definitionChanged`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html#definitionChanged)来观察它， 并使用[`CompositeEntityCollection`](https://www.vvpstk.com/public/Cesium/Documentation/CompositeEntityCollection.html)来组合它。

| Name           | Type   | Description      |
| :------------- | :----- | :--------------- |
| `propertyName` | String | 要添加的属性名。 |

### **[computeModelMatrix(time, result): Matrix4]()**

在指定时间点计算实体转换的模型矩阵。如果方向或位置未定义，则返回未定义。

| Name     | Type                                                         | Description              |
| :------- | :----------------------------------------------------------- | :----------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 检索模型矩阵的时间。     |
| `result` | [Matrix4](https://www.vvpstk.com/public/Cesium/Documentation/Matrix4.html) | optional存储结果的对象。 |

返回值: 修改后的结果参数，或如果没有提供则为一个新的Matrix4实例。如果位置或方向未定义，则结果未定义。

### **[isAvailable(time): Boolean]()**

给定一个时间，如果此对象在这个时间段内有数据就返回true。

| Name   | Type                                                         | Description        |
| :----- | :----------------------------------------------------------- | :----------------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 检查可用性的时间。 |

返回值: 如果在提供的时间内对象应该有数据，则为true，否则为false。

### **[merge(source)]()**

融合对象，对于最终的属性值来说，如果此对象已经定义， 就使用此对象的，反之，使用要融合到该对象的对象的值。

| Name     | Type                                                         | Description            |
| :------- | :----------------------------------------------------------- | :--------------------- |
| `source` | [Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) | 要融合到该对象的对象。 |

### **[removeProperty(propertyName)]()**

移除属性。

| Name           | Type   | Description      |
| :------------- | :----- | :--------------- |
| `propertyName` | String | 要移除的属性名。 |



