# 数据源(DataSource)

定义数据源的接口，它将任意数据转换为[`EntityCollection`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html)供通用使用。 此对象是用于文档目的的接口，不打算直接实例化。

## 属性

**[changedEvent : Event]()**

获取将在基础数据更改时引发的事件。

**[clock : DataSourceClock]()**

获取此数据源的首选时钟设置。

**[clustering : EntityCluster]()**

获取或设置此数据源的聚类选项。该对象可以在多个数据源之间共享。

**[entities : EntityCollection]()**

获取[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)实例的集合。

**[errorEvent : Event]()**

获取在处理过程中遇到错误时将引发的事件。

**[isLoading : Boolean]()**

获取一个值，该值指示数据源当前是否正在加载数据。

**[loadingEvent : Event]()**

获取isLoading的值更改时将引发的事件。

**[name : String]()**

获取此实例的可读名称。

**[show : Boolean]()**

获取是否应显示此数据源。

## 方法

**[update(time): Boolean]()**

将数据源更新为提供的时间。此功能是可选的，不需要实现。 它提供用于根据当前动画时间或场景状态检索数据的数据源。 如果实现了，[`DataSourceDisplay`](https://www.vvpstk.com/public/Cesium/Documentation/DataSourceDisplay.html)将在每帧中调用一次更新。

| Name   | Type                                                         | Description |
| :----- | :----------------------------------------------------------- | :---------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 模拟时间。  |

返回值: 如果此数据源准备在提供的时间显示，则为true，否则为false。