

# 视窗(Viewer)

视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。

## 构造器

**Viewer(containerId,options)**

| Name        | Type              | Description                       |
| :---------- | :---------------- | :-------------------------------- |
| `container` | Element \| String | 将容纳Viewer的HTML DOM 元素或ID。 |

## 代码实例

::: code-tabs#Viewer

@tab html

```html
<div id="containerId"></div>
```
@tab ts

```ts
const viewer = new WebGis.Viewer(containerId)
```

:::

## 属性

### axes: <font color="gray">boolean</font>

:triangular_flag_on_post:

是否显示坐标轴。

### axesLength:<font color="gray">number</font>

:triangular_flag_on_post:

坐标轴长度，默认为10。

###  container : <font color=gray>Element</font>

:triangular_flag_on_post:

获取父容器。

### entities:[ EntityGroup](../entity/EntityGroup.md)

:triangular_flag_on_post:

获取未关联到特定数据源的实体集合

### [fullscreenButton : FullscreenButton]()

`readonly`

获取全屏按钮（FullscreenButton）。

### [homeButton : HomeButton]()

`readonly`

获取主画面按钮（HomeButton）。

### [infoBox : InfoBox]()

`readonly`

获取消息盒（InfoBox）。

### [navigationHelpButton : NavigationHelpButton]()

`readonly`

获取导航帮助按钮（NavigationHelpButton）。

### [postProcessStages : PostProcessStageCollection]()

`readonly`

获取后处理阶段集合（PostProcessStageCollection）。

### [resolutionScale : Number]()

获取或设置渲染分辨率的比例因子。 小于1.0的值可以在功能较弱的设备上提高性能，而大于1.0的值将以更高的分辨率渲染，然后缩小比例，从而提高视觉保真度。 例如，如果部件的大小为640x480，将该值设置为0.5将导致场景以320x240的大小呈现，然后按比例放大， 而将其设置为2.0将导致场景以1280x960的大小呈现，然后按比例缩小。

### scene: [Scene](./Scene.md)

:triangular_flag_on_post:

`readonly`

获取场景Scene。

### [selectedEntity : Entity]()

获取或设置要为其显示选择指示符的对象实例。

### [selectedEntityChanged : Event]()

`readonly`

获取所选实体更改时引发的事件。

### [selectionIndicator : SelectionIndicator]()

`readonly`

获取选择指示器（SelectionIndicator）。

### **[shadows : Boolean]()**

确定阴影是否由点光源投射形成。

### [trackedEntity : Entity]()

获取或设置相机当前跟踪的实体实例。

### [trackedEntityChanged : Event]()

`readonly`

获取被跟踪实体更改时引发的事件。

### [useBrowserRecommendedResolution : Boolean]()

指示是否使用浏览器的推荐分辨率的布尔值。 如果为true，则忽略浏览器的设备像素比，代之以1.0，有效地基于CSS像素而不是设备像素进行渲染。这可以提高具有高像素密度的低功能设备的性能。 当为false时，渲染将以设备像素为单位。无论这个布尔值是true还是false，[`Viewer#resolutionScale`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#resolutionScale)仍然有效。

### [useDefaultRenderLoop : Boolean]()

获取或设置此部件是否应控制渲染循环。 如果设置为true，部件将使用[`requestAnimationFrame`](https://www.vvpstk.com/public/Cesium/Documentation/requestAnimationFrame.html)来执行部件的渲染和调整大小，以及驱动仿真时钟。 如果设置为false，您必须手动调用`resize`， `render`方法作为自定义渲染循环的一部分。 如果在渲染过程中出现错误，[`Scene`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html)的`renderError`事件将被触发，该属性将被设置为false。 必须将其设置为true，以便在发生错误后继续渲染。

### [vrButton : VRButton]()

`readonly`

获取VRButton。

## 方法

### [destroy()]()

销毁部件。如果从布局中永久删除viewer部件，则应调用。

### drillPick(windowPosition,objects,recursive): <font color="gray">&lt;Array&gt;object</font>

:triangular_flag_on_post:

| Name           | Type                                          | Description                                                  |
| -------------- | --------------------------------------------- | ------------------------------------------------------------ |
| windowPosition | [Vector2](../math/Vector2.md)                 | 屏幕坐标。                                                   |
| object         | &lt;Array&gt;[Object3D](../basic/Object3D.md) | 检测与射线相交的一组物体。                                   |
| recursive      | <font color="gray">boolean</font>             | `optional`若为true，则同时也会检查所有的后代。<br />否则将只会检查对象本身。默认值为true。 |

从相机位置到windowPosition做一条射线，检测所有在射线与这些物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个）。

该方法返回一个包含有交叉部分的数组:

```js
[ { distance, point, object }, ... ]
```

- distance: number —— 射线投射原点和相交部分之间的距离。

- point: Vector3 —— 相交部分的点（世界坐标）。

- object: Object3D —— 相交的物体。

### [isDestroyed(): Boolean]()

**返回值**: 如果对象已被销毁，则为true，否则为false。

### [flyTo (target, options ): Promise&lt;boolean&gt;]()

相机定位到指定实体或者图元处，相机移动过程有一个动画效果。

| Name     | Type   | Description    |
| :------- | :----- | :------------- |
| `target` | Entity | 要查看的实体。 |

对象，具有以下属性：

| Name            | Type                                                         | Default | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
| `duration`      | Number                                                       | `3.0`   | `optional`飞行时间以秒为单位。                               |
| `maximumHeight` | Number                                                       |         | `optional`飞行中的最高高度。                                 |
| `offset`        | [HeadingPitchRange](https://www.vvpstk.com/public/Cesium/Documentation/HeadingPitchRange.html) |         | `optional`在当地的东北向上（east-north-up）参考系中从目标到以目标为中心的偏移量。 |
| `scale`         | boolean                                                      | false   | `optional`是否支持缩放                                       |

**返回值**：飞行成功时，promise被解析为true；如果实体未在场景中可视化或飞行取消，promise被解析为false。

### flyTo(position,options)



### [forceResize()]()

这迫使部件重新考虑它的布局，包括部件大小和版权的放置。

### getPrimitiveByName(name): [Object3D](../basic/Object3D.md)

:triangular_flag_on_post:

| Name | Type   | Description          |
| ---- | ------ | -------------------- |
| name | string | 要获取的图元的名称。 |

根据图元的名称获取图元。若未找到则返回`undefined`。

请注意，大多数的图元中name默认是一个空字符串，要使用这个方法，你将需要手动地设置name属性。

### pick(windowPosition ,object,recursive): <font color="gray">: Array</font>

:triangular_flag_on_post:

| Name           | Type                              | Description                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| windowPosition | [Vector2](../math/Vector2.md)     | 屏幕坐标。                                                   |
| object         | [Object3D](../basic/Object3D.md)  | 检测与射线相交的物体。                                       |
| recursive      | <font color="gray">boolean</font> | `optional`若为true，则同时也会检查所有的后代。<br />否则将只会检查对象本身。默认值为true。 |

从相机位置到windowPosition做一条射线，检测是否与object相交。

检测所有在射线与物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个。
该方法返回一个包含有交叉部分的数组:

```js
[ { distance, point, object }, ... ]
```

- distance: number —— 射线投射原点和相交部分之间的距离。

- point: Vector3 —— 相交部分的点（世界坐标）。

- object: Object3D —— 相交的物体。

### pickPosition(windowPosition): [ Vector3](../math/Vector3.md)|<font color="gray">undefined</font>

:triangular_flag_on_post:

| Name             | Type                          | Description |
| :--------------- | :---------------------------- | :---------- |
| `windowPosition` | [Vector2](../math/Vector2.md) | 屏幕坐标。  |

从相机到屏幕坐标做一条射线，拾取场景中物体上的点。

返回相交点的世界坐标；若没有交点返回`undefined`。

::: note

要使用此方法，必须给要拾取点的物体赋值`name`属性。

:::

### [resize()]()

调整部件的大小以匹配容器的大小。 除非`useDefaultRenderLoop`被设置为false，否则将根据需要自动调用此函数。

### setSkyBox(source,show)

:triangular_flag_on_post:

| Name   | Type                                                         | Description                                                  |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| source | {<br />  &nbsp; px:string<br /> &nbsp; mx:string<br /> &nbsp; py:string<br />  &nbsp; my:string<br />  &nbsp; pz:string<br /> &nbsp;  mz:string<br />} | 天空盒纹理贴图，<br />传入前后、左右、上下六个面的纹理图片路径。 |
| show   | boolean                                                      | 是否显示天空盒。                                             |

未定义时，默认使用星辰效果。

