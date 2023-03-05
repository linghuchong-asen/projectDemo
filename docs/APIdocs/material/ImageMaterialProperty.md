# 图像材质(ImageMaterialProperty)

图像材质属性

## 构造器

**ImageMaterialProperty(options)**

options对象拥有以下属性：

| Name          | Type                                                         | Default                    | Description                                                  |
| :------------ | :----------------------------------------------------------- | :------------------------- | :----------------------------------------------------------- |
| `image`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) |                            | optional指定图像，URL，画布或视频。                          |
| `repeat`      | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `new Cartesian2(1.0, 1.0)` | optional[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) 属性。 用于指定图像在每个方向上重复的次数。 |
| `color`       | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `Color.WHITE`              | optional应用到图片上的颜色。                                 |
| `transparent` | [Property](https://www.vvpstk.com/public/Cesium/Documentation/Property.html) | `false`                    | optional当图片有透明通道时，将其指定为true。                 |

## 属性

**[color : Property]()**

设置/获取应用到图片上的颜色。

`readonly`**[definitionChanged : Event]()**

获取每当此属性的定义更改时引发的事件。 在同一时间段调用getValue时，如果返回的结果不同，则认为定义已经改变。

**[image : Property]()**

设置/获取指定的图像，URL，画布或视频。

`readonly`**[isConstant : Boolean]()**

获取该属性是是否是恒定的。 如果getValue总是返回同样的结果，则认为该属性是恒定的。

**[repeat : Property]()**

设置/获取用于指定图像在每个方向上重复的次数[`Cartesian2`](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html)。

**[transparent : Property]()**

设置/获取图片是否含有透明通道。

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

返回值: 材质类型。

**[getValue(time, result): Object]()**

根据提供的时间获取属性对象。

| Name     | Type                                                         | Description                                                |
| :------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `time`   | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。                                                     |
| `result` | Object                                                       | optional存储结果的对象（如果省略）将创建并返回一个新实例。 |

返回值: 修改后的结果参数；如果未提供结果参数，则为新实例。