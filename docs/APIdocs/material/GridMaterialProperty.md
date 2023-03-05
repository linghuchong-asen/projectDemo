# 网格材质(GridMaterialProperty)

## 构造器

**GridMaterialProperty(options)**

options对象拥有以下属性：

| Name            | Type                                                         | Default                    | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :------------------------- | :----------------------------------------------------------- |
| `color`         | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`              | optional颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `cellAlpha`     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0.1`                      | optional每个格子的alpha值（不透明度）。                      |
| `lineCount`     | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Cartesian2(8, 8)`     | optional[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 用于指定沿每个轴的格网线的数量。 |
| `lineThickness` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Cartesian2(1.0, 1.0)` | optional[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 用于指定沿每个轴的格网线的粗细。 |
| `lineOffset`    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Cartesian2(0.0, 0.0)` | optional[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 用于指定沿每个轴的格网线的偏移量。 |

## 属性

**[cellAlpha : Property]()**

设置/获取每个格子的alpha值（不透明度）。

默认值：`0.1`

**[color : Property]()**

设置/获取格网颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值：`Color.WHITE`

`readonly` **[definitionChanged : Event]()**

获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。

`readonly` **[isConstant : Boolean]()**

获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。

**[lineCount : Property]()**

设置/获取指定沿每个轴的格网线的数量 Vector2属性。

默认值：`new Vector2(8.0, 8.0)`

**[lineOffset : Property]()**

设置/获取每个轴的格网线的偏移量Vector2。

默认值：`new Vector2(0.0, 0.0)`

**[lineThickness : Property]()**

设置/获取沿每个轴的格网线的粗细，Vector2属性。

默认值：`new Vector2(1.0, 1.0)`

## 方法

**[equals(other): Boolean]()**

将此属性与提供的属性进行比较。

| Name    | Type                                                         | Description        |
| :------ | :----------------------------------------------------------- | :----------------- |
| `other` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | optional其他属性。 |

返回值: 如果相等。则为 `true` ，否则为 `false`。

**[getType(time): String]()**

在提供的时间获取材质的类型 [`Material`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html)。

| Name   | Type                                                         | Description  |
| :----- | :----------------------------------------------------------- | :----------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 提供的时间。 |

返回值: 材质类型。

**[getValue(time, result): Object]()**

根据提供的时间获取属性对象。

| Name     | Type                                                         | Description                                                |
| :------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。                                                     |
| `result` | Object                                                       | optional存储结果的对象（如果省略）将创建并返回一个新实例。 |

返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。