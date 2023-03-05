# 相机(Camera)

由位置、方向和视锥体定义的相机。

::: note

如果需要修改该Camera属性，可以直接通过`veiewer.scene.camera`得到camera实例进行修改。

:::

## 属性

### [DEFAULT_OFFSET]()

当相机拉近到物体包围球时，默认的heading/pitch/range值。

### [DEFAULT_VIEW_FACTOR]()

该值用来确定相机位置，当值为0是相机观察范围是整个`Camera#DEFAULT_VIEW_RECTANGLE`，大于0时远离`Camera#DEFAULT_VIEW_RECTANGLE`， 小于0时向`Camera#DEFAULT_VIEW_RECTANGLE`拉近。

### [DEFAULT_VIEW_RECTANGLE]()

相机在创建时查看的默认矩形位置。

### [direction ]()

相机的观察方向。

### [frustum ]()

视锥(平截头体)。可选值：`PerspectiveFrustum`，`OrthographicFrustum`;默认值`PerspectiveFrustum`

### [heading]()

获取相机的偏航角，以弧度表示。

### [pitch]()

获取相机的俯仰角，以弧度表示。

### [position]()

相机的位置。

### [roll]()

获取相机的翻滚角，以弧度表示。

### [up ]()

相机向上的方向。

## 方法

