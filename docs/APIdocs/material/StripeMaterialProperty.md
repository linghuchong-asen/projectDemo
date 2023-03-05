# 条纹材质(StripeMaterialProperty)

条纹材质属性。

## 构造器

**StripeMaterialProperty(options)**

options对象拥有以下属性：

| Name          | Type                                                         | Default                        | Description                                                  |
| :------------ | :----------------------------------------------------------- | :----------------------------- | :----------------------------------------------------------- |
| `orientation` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `StripeOrientation.HORIZONTAL` | optional方向 [`StripeOrientation`](https://www.vvpstk.com/public/Cesium/Documentation/StripeOrientation.html)。 |
| `evenColor`   | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`                  | optional条带第一个颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `oddColor`    | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.BLACK`                  | optional条带第二个颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。 |
| `offset`      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `0`                            | optional偏移量。                                             |
| `repeat`      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `1`                            | optional重复次数。                                           |

## 属性

`readonly` **[definitionChanged : Event]()**

获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。

**[evenColor : Property]()**

设置/获取条带第一个颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值：`Color.WHITE`

`readonly`**[isConstant : Boolean]()**

获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。

**[oddColor : Property]()**

设置/获取 条带第二个颜色 [`Color`](https://www.vvpstk.com/public/Cesium/Documentation/Color.html)。

默认值：`Color.BLACK`

**[offset : Property]()**

设置/获取偏移量。 0.0是偶数颜色的开始，1.0是奇数颜色的开始，2.0是偶数颜色的开始，中间是任何倍数或小数值。

默认值：`0.0`

**[orientation : Property]()**

设置/获取方向 [`StripeOrientation`](https://www.vvpstk.com/public/Cesium/Documentation/StripeOrientation.html)。

默认值：`StripeOrientation.HORIZONTAL`

**[repeat : Property]()**

设置/获取重复次数。

默认值：`1.0`

## 方法

**[equals(other) → Boolean]()**

将此属性与提供的属性进行比较。

| Name    | Type                                                         | Description          |
| :------ | :----------------------------------------------------------- | :------------------- |
| `other` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `optional`其他属性。 |

返回值: 如果相等。则为 `true` ，否则为 `false`。

**[getType(time): String]()**

根据提供的时间获取材质的类型 [`Material`](https://www.vvpstk.com/public/Cesium/Documentation/Material.html)。

| Name   | Type                                                         | Description |
| :----- | :----------------------------------------------------------- | :---------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间        |

返回值: 材质的类型

**[getValue(time, result): Object]()**

据提供的时间获取属性对象。

| Name     | Type                                                         | Description                                                |
| :------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。                                                     |
| `result` | Object                                                       | optional存储结果的对象（如果省略）将创建并返回一个新实例。 |

返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。