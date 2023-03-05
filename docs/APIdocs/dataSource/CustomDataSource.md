# 自定义数据源(CustomDataSource)

[`DataSource`](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html)实现，可用于手动管理一组实体。

## 构造器

#### CustomDataSource(name)

| Name   | Type   | Description        |
| :----- | :----- | :----------------- |
| `name` | String | optional实例名称。 |

## 示例代码

```javascript
var dataSource = new Webgis.CustomDataSource('myData');

var entity = dataSource.entities.add({
   position : Webgis.Cartesian3.fromDegrees(1, 2, 0),
   billboard : {
       image : 'image.png'
   }
});

viewer.dataSources.add(dataSource);
```

## 属性

**[changedEvent : Event]()**

获取在基础数据更改时引发的事件。

**[clock : DataSourceClock]()**

获取此数据源的时钟设置。

**[clustering : EntityCluster]()**

获取或设置此数据源的聚类选项。该对象可以在多个数据源之间共享。

**[entities : EntityCollection]()**

获取[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)实例的集合。

**[errorEvent : Event]()**

获取在处理过程中遇到错误时将引发的事件。

**[isLoading : Boolean]()**

获取/设置数据源当前是否正在加载数据。

**[loadingEvent : Event]()**

获取一个isLoading的值更改时将引发的事件。

**[name : String]()**

为该实例获取可读的名称。

**[show : Boolean]()**

获取是否应显示此数据源。

## 