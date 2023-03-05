# 线边框材质(PolylineOutlineMaterialProperty)

线边框材质。

## 构造器

**PolylineOutlineMaterialProperty(options)**

options对象拥有以下属性：

| Name           | Type                                                         | Default       | Description                                                  |
| :------------- | :----------------------------------------------------------- | :------------ | :----------------------------------------------------------- |
| `color`        | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE` | optional颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `outlineColor` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK` | optional边线颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) 。 |
| `outlineWidth` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1.0`         | optional边线宽度。                                           |

## 属性

**[color : Property]()**

设置/获取颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) 。

默认值：`Color.WHITE`

`readonly` **[definitionChanged : Event]()**

获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。

`readonly` **[isConstant : Boolean]()**

获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。

**[outlineColor : Property]()**

设置/获取边框颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值：`Color.BLACK`

**[outlineWidth : Property]()**

设置/获取边线宽度。

默认值：`1.0`

## 方法

**[equals(other): Boolean]()**

将此属性与提供的属性进行比较。

| Name    | Type                                                         | Description        |
| :------ | :----------------------------------------------------------- | :----------------- |
| `other` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | optional其他属性。 |

返回值: 如果相等。则为 `true` ，否则为 `false`。

**[getType(time): String]()**

根据提供的时间获取材质的类型 [`Material`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html)。

| Name   | Type                                                         | Description |
| :----- | :----------------------------------------------------------- | :---------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间        |

返回值: 材质类型。

**[getValue(time, result): Object]()**

据提供的时间获取属性对象。

| Name     | Type                                                         | Description                                                |
| :------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。                                                     |
| `result` | Object                                                       | optional存储结果的对象（如果省略）将创建并返回一个新实例。 |

返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。