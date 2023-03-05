# 颜色材质(ColorMaterialProperty)

颜色材质属性。

## 构造器

**ColorMaterialProperty(color)**

| Name    | Type  | Default       | Description                                                  |
| :------ | :---- | :------------ | :----------------------------------------------------------- |
| `color` | Color | `Color.WHITE` | optional颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) 。 |

## 属性

**[color : Property]()**

设置/获取颜色属性。

`readonly`**[definitionChanged : Event]()**

获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。

`readonly`**[isConstant : Boolean]()**

获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。

## 方法

**[equals(other): Boolean]()**

将此属性与提供的属性进行比较。

| Name    | Type                                                         | Description        |
| :------ | :----------------------------------------------------------- | :----------------- |
| `other` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | optional其他属性。 |

返回值: 如果相等。则为 `true` ，否则为 `false` 。

**[getType(time): String]()**

根据提供的时间获取材质的类型 [`Material`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html)。

| Name   | Type                                                         | Description  |
| :----- | :----------------------------------------------------------- | :----------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 提供的时间。 |

返回值:材质类型。

**[getValue(time, result): Object]()**

根据提供的时间获取属性对象。

| Name     | Type                                                         | Description                                                |
| :------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。                                                     |
| `result` | Object                                                       | optional存储结果的对象（如果省略）将创建并返回一个新实例。 |

返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。