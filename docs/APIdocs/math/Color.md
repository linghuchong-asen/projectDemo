# 颜色（Color）

表示一个颜色。使用rgba的格式。

## 构造器（Constructor）

### Color( r , g , b ,a)

| Name | Type   | Description                     |
| :--- | :----- | :------------------------------ |
| r    | number | 红色通道的值，取值范围0~255。   |
| g    | number | 绿色通道的值，取值范围0~255。   |
| b    | number | 蓝色通道的值，取值范围0~255。   |
| a    | number | `optional`透明度，取值范围0~1。 |

## 示例代码

```js
const color = new Webgis.Color(255,0,0,1);
```

## 属性（Properties）

### isColor : <font color=gray>boolean</font>

`readonly `

判断一个对象是否是Color实例的标志。

### rValue : <font color=gray>number</font>

`readonly `

红色通道的值在0到255之间。默认值为255。

### gValue : <font color=gray>number</font>

`readonly `

绿色通道的值在0到255之间。默认值为255。

### bValue : <font color=gray>number</font>

`readonly `

蓝色通道的值在0到255之间。默认值为255。

## 方法（Methods）

