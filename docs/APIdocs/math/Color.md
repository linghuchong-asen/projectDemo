# 颜色（Color）

表示一个颜色。

对 Color 实例进行遍历将按相应的顺序生成它的分量 (r, g, b)。

## 代码示例

颜色可以用以下任意一种方式初始化。

```js
//empty constructor - will default white
const color1 = new THREE.Color();

//RGB string
const color3 = new THREE.Color(255, 0, 0);
```



## 构造器（Constructor）

### Color( r : number, g : number, b : number)

r - (可选参数) 如果被定义，表示颜色中的红色分量。 
g - (可选参数) 如果被定义，表示颜色中的绿色分量。
b - (可选参数) 如果被定义，表示颜色中的蓝色分量。



## 属性（Properties）

### .[isColor](https://threejs.org/docs/index.html#api/zh/math/Color.isColor) : <font color=gray>boolean</font>

:triangular_flag_on_post:

`readonly `

判断一个对象是否是Color实例的标志。

### .[r](https://threejs.org/docs/index.html#api/zh/math/Color.r) : <font color=gray>number</font>

:triangular_flag_on_post:

红色通道的值在0到255之间。默认值为255。

### .[g](https://threejs.org/docs/index.html#api/zh/math/Color.g) : <font color=gray>number</font>

:triangular_flag_on_post:

绿色通道的值在0到255之间。默认值为255。

### .[b](https://threejs.org/docs/index.html#api/zh/math/Color.b) : <font color=gray>number</font>

:triangular_flag_on_post:

蓝色通道的值在0到255之间。默认值为255。

## 方法（Methods）

