# Clock

该对象用于跟踪时间。如果[performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)可用，则 Clock 对象通过该方法实现，否则回落到使用略欠精准的[Date.now](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now)来实现。

## 构造函数

### Clock( autoStart : Boolean )

autoStart — (可选) 是否要在第一次调用 [.getDelta](https://threejs.org/docs/index.html#api/zh/core/Clock.getDelta)() 时自动开启时钟。默认值是 **true**。

## 属性

### .[autoStart](https://threejs.org/docs/index.html#api/zh/core/Clock.autoStart) : Boolean

如果设置为 true，则在第一次调用 [.getDelta](https://threejs.org/docs/index.html#api/zh/core/Clock.getDelta)() 时开启时钟。默认值是 **true**。

### .[startTime](https://threejs.org/docs/index.html#api/zh/core/Clock.startTime) : Float

存储时钟最后一次调用 [start](https://threejs.org/docs/index.html#api/zh/core/Clock.start) 方法的时间。默认值是 **0**。

### .[oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) : Float

存储时钟最后一次调用 [start](https://threejs.org/docs/index.html#api/zh/core/Clock.start), [.getElapsedTime](https://threejs.org/docs/index.html#api/zh/core/Clock.getElapsedTime)() 或 [.getDelta](https://threejs.org/docs/index.html#api/zh/core/Clock.getDelta)() 方法的时间。默认值是 **0**。

### .[elapsedTime](https://threejs.org/docs/index.html#api/zh/core/Clock.elapsedTime) : Float

保存时钟运行的总时长。默认值是 **0**。

### .[running](https://threejs.org/docs/index.html#api/zh/core/Clock.running) : Boolean

判断时钟是否在运行。默认值是 **false**。

## 方法

### .[start](https://threejs.org/docs/index.html#api/zh/core/Clock.start) () : undefined

启动时钟。同时将 [startTime](https://threejs.org/docs/index.html#api/zh/core/Clock.startTime) 和 [oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) 设置为当前时间。 设置 [elapsedTime](https://threejs.org/docs/index.html#api/zh/core/Clock.elapsedTime) 为 **0**，并且设置 [running](https://threejs.org/docs/index.html#api/zh/core/Clock.running) 为 **true**.

### .[stop](https://threejs.org/docs/index.html#api/zh/core/Clock.stop) () : undefined

停止时钟。同时将 [oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) 设置为当前时间。

### .[getElapsedTime](https://threejs.org/docs/index.html#api/zh/core/Clock.getElapsedTime) () : Float

获取自时钟启动后的秒数，同时将 [.oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) 设置为当前时间。
如果 [.autoStart](https://threejs.org/docs/index.html#api/zh/core/Clock.autoStart) 设置为 **true** 且时钟并未运行，则该方法同时启动时钟。

### .[getDelta](https://threejs.org/docs/index.html#api/zh/core/Clock.getDelta) () : Float

获取自 [.oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) 设置后到当前的秒数。 同时将 [.oldTime](https://threejs.org/docs/index.html#api/zh/core/Clock.oldTime) 设置为当前时间。
如果 [.autoStart](https://threejs.org/docs/index.html#api/zh/core/Clock.autoStart) 设置为 **true** 且时钟并未运行，则该方法同时启动时钟。