# 材质(Material)

材质是通过漫反射、镜面反射、法线、散射和alpha的组合来定义表面外观。 这些值是使用一个名为Fabric的JSON模式指定的，该模式被解析并组装到glsl着色器代码中。 查看[wiki页面](https://github.com/AnalyticalGraphicsInc/cesium/wiki/Fabric)了解更多关于Fabric的信息。

基本材质类型和它们的uniforms

- Color

- - `color`: rgba 颜色对象

- Image

- - `image`: 图片路径
  - `repeat`: 对象，其x和y值指定重复图像的次数。

- DiffuseMap

- - `image`: 图片路径
  - `channels`: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数。

- AlphaMap

- - `image`: 图片路径
  - `channel`: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数。

- SpecularMap

- - `image`: 图片路径
  - `channel`: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数。

- EmissionMap

- - `image`: 图片路径
  - `channels`: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数

- BumpMap

- - `image`: 图片路径
  - `channel`: 一个包含r、g、b或a的字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数
  - `strength`: 凹凸程度值在0.0和1.0之间

- NormalMap

- - `image`: 图片路径
  - `channels`: 包含r、g、b和a的任意组合的三个字符串，用于选择所需的图像通道。
  - `repeat`: 对象，其x和y值指定重复图像的次数。
  - `strength`: 凹凸程度值在0.0和1.0之间

- Grid

- - `color`: 整个材质的rgba颜色对象
  - `cellAlpha`: 网格线之间单元格的Alpha值,这个值会和color.alpha融合
  - `lineCount`: 对象，其x和y值分别指定列和行数。
  - `lineThickness`: 对象，其x和y值指定网格线的厚度(可用像素表示)。
  - `lineOffset`: 对象，其x和y值指定网格线的偏移量(范围为0到1)。

- Stripe

- - `horizontal`: 决定条纹是水平还是垂直的布尔值。
  - `evenColor`: 条纹的第一种颜色
  - `oddColor`: 条纹的第二种颜色
  - `offset`: 控制从哪一点开始绘制图案的数字; with 0.0 being the beginning of the even color, 1.0 the beginning of the odd color, 2.0 being the even color again, and any multiple or fractional values being in between.
  - `repeat`: 条纹的总数

- Checkerboard

- - `lightColor`: 棋盘明亮部分的颜色
  - `darkColor`: 棋盘暗淡部分的颜色
  - `repeat`: 对象，其x和y值分别指定列和行数。

- Dot

- - `lightColor`: 点的颜色
  - `darkColor`: 背景颜色
  - `repeat`: 对象，其x和y值分别指定圆点的行数和列数。

- Water

- - `baseWaterColor`: 水的基础颜色
  - `blendColor`: 用于混合从水到非水的地区的颜色
  - `specularMap`: 用于表示水域区域的单通道纹理。
  - `normalMap`: 水正常扰动的法线贴图。
  - `frequency`: 波浪数
  - `normalMap`: 水正常扰动的法线贴图。
  - `animationSpeed`: 水运动的速度.
  - `amplitude`: 水波振幅
  - `specularIntensity`: 镜面反射强度。

- RimLighting

- - `color`: 扩散颜色和alpha.
  - `rimColor`: 边缘的扩散颜色和alpha.
  - `width`: 边缘的宽度

- Fade

- - `fadeInColor`: diffuse color and alpha at `time`
  - `fadeOutColor`: diffuse color and alpha at `maximumDistance` from `time`
  - `maximumDistance`: Number between 0.0 and 1.0 where the `fadeInColor` becomes the `fadeOutColor`. A value of 0.0 gives the entire material a color of `fadeOutColor` and a value of 1.0 gives the the entire material a color of `fadeInColor`
  - `repeat`: true if the fade should wrap around the texture coodinates.
  - `fadeDirection`: Object with x and y values specifying if the fade should be in the x and y directions.
  - `time`: Object with x and y values between 0.0 and 1.0 of the `fadeInColor` position

- PolylineArrow

- - `color`: 扩散的颜色和alpha

- PolylineDash

- - `color`: 线的颜色
  - `gapColor`: 线的间隙的颜色
  - `dashLength`: Dash length in pixels.
  - `dashPattern`: The 16 bit stipple pattern for the line..

- PolylineGlow

- - `color`: 辉光的颜色和最大的alpha值
  - `glowPower`: 辉光的强度
  - `taperPower`: 渐变效果的强度。

- PolylineOutline

- - `color`: 内部线条的散射颜色和alpha值
  - `outlineColor`: 轮廓的散射颜色和alpha值
  - `outlineWidth`: 轮廓的宽度

- ElevationContour

- - `color`: 等高线的颜色和alpha
  - `spacing`: 等高线间距，以米为单位。
  - `width`: 线宽，以像素为单位

- ElevationRamp

- - `image`: 给地形着色的色带图像。
  - `minimumHeight`: 最低高度
  - `maximumHeight`: 最高高度

- SlopeRamp

- - `image`: 给地形着色的色带图像

- AspectRamp

- - `image`: color ramp image to use for color the terrain by aspect.

## 构造器

**Material(options)**

options具有下列属性的对象：

| Name          | Type                | Default | Description                                           |
| :------------ | :------------------ | :------ | :---------------------------------------------------- |
| `strict`      | Boolean             | `false` | optional是否为通常会被忽略的问题抛出错误。            |
| `translucent` | Boolean \| function | `true`  | optional当 `true`时，此材质的几何图形将显示为半透明。 |
| `fabric`      | Object              |         | 用于生成材质的fabric JSON。                           |

## 示例代码

```javascript
// 用fromType创建一个颜色材质:
polygon.material = Cesium.Material.fromType('Color');
polygon.material.uniforms.color = new Cesium.Color(1.0, 1.0, 0.0, 1.0);

// 创建默认材质:
polygon.material = new Cesium.Material();

// 用完整的Fabric，创建颜色材质:
polygon.material = new Cesium.Material({
    fabric : {
        type : 'Color',
        uniforms : {
            color : new Cesium.Color(1.0, 1.0, 0.0, 1.0)
        }
    }
});
```

## 属性

`static` `readonly`**[Cesium.Material.AlphaMapType : String]()**

获取alpha贴图材质的名称。

`static` `readonly` **[AspectRampMaterialType : String]()**

获取长宽比渐变材质的名称。

`static` `readonly` **[BumpMapType : String]()**

获取凹凸贴图材质的名称。

`static` `readonly`**[CheckerboardType : String]()**

获取棋盘材质的名称。

`static` `readonly` **[ColorType : String]()**

获取颜色材质的名称。

`static` **[DefaultCubeMapId : String]()**

获取或者设置默认立方体贴图的uniform值。

`static` **[DefaultImageId : String]()**

获取或者设置默认纹理的uniform值.

`static` `readonly` **[DiffuseMapType : String]()**

获取漫射贴图材质的名称。

`static` `readonly` **[DotType : String]()**

获取点材质的名称。

`static` `readonly` **[ElevationContourType : String]()**

获取等高线材质的名称。

`static` `readonly` **[ElevationRampType : String]()**

获取高度分层设色材质的名称。

`static` `readonly` **[EmissionMapType : String]()**

获取emmision map 材质的名称。

`static` `readonly` **[FadeType : String]()**

获取淡入淡出材质的名称。

`static` `readonly` **[GridType : String]()**

获取格网材质的名称。

`static` `readonly` **[ImageType : String]()**

获取图像材质的名称。

`static` `readonly` **[NormalMapType : String]()**

获取法线贴图材质的名称。

`static` `readonly` **[PolylineArrowType : String]()**

获取箭头折线材质的名称。

`static` `readonly` **[PolylineDashType : String]()**

获取折线辉光材料的名称。

`static` `readonly` **[PolylineGlowType : String]()**

获取辉光折线材质的名称。

`static` `readonly` **[PolylineOutlineType : String]()**

获取轮廓线材质的名称。

`static` `readonly` **[RimLightingType : String]()**

获取边缘发光材质的名称。

`static` `readonly` **[SlopeRampMaterialType : String]()**

获取坡度材质的名称。

`static` `readonly` **[SpecularMapType : String]()**

获取高光贴图材质的名称。

`static` `readonly` **[StripeType : String]()**

获取条纹材质的名称。

`static` `readonly` **[WaterType : String]()**

获取水面材质的名称。

[**materials : Object**]()

将子材质名称映射到材质对象.

**[shaderSource : String]()**

该材质的glsl着色器代码

**[translucent : Boolean|function]()**

当`true`时，几何图形将显示为半透明。

**[type : String]()**

材质类型。可以是现有类型，也可以是新类型。如果在fabric中没有指定类型，则类型为GUID。

**[uniforms : Object]()**

将uniform名称映射到它们的值。

## 方法

`static`**[fromType(type, uniforms): Material]()**

使用现有材质类型创建材质。

| Name       | Type   | Description                   |
| :--------- | :----- | :---------------------------- |
| `type`     | String | 基本材质类型。                |
| `uniforms` | Object | `optional`重写默认的uniforms. |

返回值: 创建的材质对象

**[destroy()]()**

销毁此集合中所有图元持有的WebGL资源。

Example:

```javascript
material = material && material.destroy();
```

**[isDestroyed(): Boolean]()**

如果该对象没被销毁，返回`false`。

如果该对象已经被销毁，使用`isDestroyed` 会触发 [`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) 异常。

返回值: 如果该对象没被销毁，返回false。

**[isTranslucent(): Boolean]()**

获取此材质是否为半透明。

返回值：如果是半透明返回true。