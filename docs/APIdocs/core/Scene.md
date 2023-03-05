# 场景(Scene)

场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。

## 属性

### camera: [Camera](./Camera.md)

:triangular_flag_on_post:

获取或者设置相机。

### primitives: [PrimitiveGroup](../primitive/PrimitiveGroup.md)

:triangular_flag_on_post:

获取要素的合集。

### **[fog]()**

雾。默认undefined。

### **[light]()**

:triangular_flag_on_post:

灯光。有PointLight与DirectionalLight两种，默认DirectionalLight。

### **[postProcessStages]()**

后处理效果应用于最终渲染。

### **[postRender]()**

获取将在渲染场景后立即引发的事件。活动订阅者接收Scene实例作为第一个参数，并接收当前时间作为第二个参数。

### **[preRender]()**

获取在场景更新之后以及场景渲染之前立即引发的事件。事件的订阅者将Scene实例作为第一个参数，将当前时间作为第二个参数参数。

### **[skyBox]()**

天空盒。默认`undefined`。

### **[screenSpaceCameraController]()**

`readOnly`

屏幕空间相机控制器；把屏幕空间的用户输入（鼠标拖拽点击或者触摸事件）转换为三维世界的相机移动。它包含一些属性，可以启用/禁用某种用户输入，修改惯性、最小最大缩放距离等。

## 方法

