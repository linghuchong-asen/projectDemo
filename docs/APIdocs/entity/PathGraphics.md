# 路径(PathGraphics)

描述一条折线，该折线定义为 [`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) 随着时间的推移所形成的路径。

## 构造器

**PathGraphics(options)**

对象拥有以下属性：

| Name                       | Type                                                         | Default       | Description                                  |
| :------------------------- | :----------------------------------------------------------- | :------------ | :------------------------------------------- |
| `show`                     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `true`        | `optional`指定显隐性。                       |
| `leadTime`                 | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |               | `optional`指定在对象前面要显示路径的秒数。   |
| `trailTime`                | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |               | `optional`指定在对象后面要显示路径的秒数。   |
| `width`                    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`         | `optional`路径宽度。                         |
| `resolution`               | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `60`          | `optional`指定在采样位置时要前进的最大秒数。 |
| `material`                 | [MaterialProperty](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html) | `Color.WHITE` | `optional`指定于绘制路径的材质。             |
| `distanceDisplayCondition` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |               | `optional`指定在距相机某个距离内显示。       |

## 属性

`readonly` **[definitionChanged : Event]()**

获取每当更改或修改属性或子属性时引发的事件。

**[distanceDisplayCondition : Property]()**

设置/获取设置/获取显示条件[`DistanceDisplayCondition`](https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html),即在距相机某个距离内显示。

**[leadTime : Property]()**

设置/获取在对象前面要显示路径的秒数。

**[material : MaterialProperty]()**

设置/获取指定于绘制路径的材质。

默认值: `Color.WHITE`

**[resolution : Property]()**

设置/获取指定在采样位置时要前进的最大秒数。

默认值: `60`

**[show : Property]()**

设置/获取显隐性。

默认值: `true`

**[trailTime : Property]()**

设置/获取在对象后面要显示路径的秒数。

**[width : Property]()**

设置/获取路径宽度。

默认值: `1.0`

## 方法

**[clone(result): PathGraphics]()**

复制实例。

| Name     | Type                                                         | Description                  |
| :------- | :----------------------------------------------------------- | :--------------------------- |
| `result` | [PathGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PathGraphics.html) | optional用来存储结果的对象。 |

返回值：修改后的结果参数或一个新实例（如果未提供）。

**[merge(source)]()**

合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。

| Name     | Type                                                         | Description                |
| :------- | :----------------------------------------------------------- | :------------------------- |
| `source` | [PathGraphics](https://www.vvpstk.com/public/Cesium/Documentation/PathGraphics.html) | 要被合并到这个对象的对象。 |