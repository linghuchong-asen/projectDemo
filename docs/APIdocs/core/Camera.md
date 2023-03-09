# 相机(Camera)

由位置、方向和视锥体定义的相机。

::: note

如果需要修改该Camera属性，可以直接通过`veiewer.scene.camera`得到camera实例进行修改。

:::

## 属性

### direction: [Vector3](../math/Vector3.md)

`readonly`

相机的观察方向。

### heading: number

`readonly`

获取相机的偏航角，以弧度表示。

### pitch: number

`readonly`

获取相机的俯仰角，以弧度表示。

### position: [Vector3](../math/Vector3.md)

相机的位置。

### roll: number

`readonly`

获取相机的翻滚角，以弧度表示。

### up: [Vector3](../math/Vector3.md)

相机向上的方向。

## 方法

### lookAt(target): void

| Name   | Type                          | Description    |
| :----- | :---------------------------- | :------------- |
| target | [Vector3](../math/Vector3.md) | 相机朝向的点。 |

设置相机朝向。

