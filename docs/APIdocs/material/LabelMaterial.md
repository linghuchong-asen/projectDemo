# 文字(LabelMaterial)

文字材质部分。

## 构造器

**LabelMaterial()**

## 示例代码

```javascript
const labelMaterial = new Webgis.LabelMaterial();
// 文字内容
labelMaterial.text = "Label文字"
// 粗细 大小 字体
labelMaterial.font = "normal 200px 微软雅黑";
// 颜色
labelMaterial.fillColor = new Webgis.Color(109, 139, 241,1)
// 添加边框
labelMaterial.isOutline = true;
// 边框颜色
labelMaterial.outlineColor = new Webgis.Color(238, 121, 89,1);
// 边框宽度
labelMaterial.outlineWidth = 5;
```

## 属性

### text: string|undefined

获取或设置文字内容。

### font: string|undefined

获取或设置文字样式，与css中使用的风格一致。

### fillColor: [Color](../math/Color.md)|undefined

获取或设置文字颜色。

### outlineColor: [Color](../math/Color.md)|undefined

获取或设置文字边框颜色。

### isFill: boolean

文字是否填充，若不填充则是空心文字。默认为`true`

### isOutline: boolean

文字是否有外边框。默认为`false`

### outlineWidth: number|undefined

获取或设置文字的外边框宽度。

## 方法

