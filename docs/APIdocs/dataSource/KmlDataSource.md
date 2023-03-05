# Kml数据(KmlDataSource)

Kml数据源。

## 构造器

**KmlDataSource(options)**

对象拥有以下属性：

| Name        | Type                                                         | Default           | Description                                            |
| :---------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------- |
| `camera`    | [Camera](https://www.vvpstk.com/public/Cesium/Documentation/Camera.html) |                   | 用于viewRefreshModes并将相机属性发送到网络链接的相机。 |
| `canvas`    | Canvas                                                       |                   | 用于向网络链接发送查看器属性的画布。                   |
| `ellipsoid` | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | `optional`椭球。                                       |
| `credit`    | [Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| String |                   | `optional`版权信息。                                   |

## 示例代码

```javascript
var viewer = new Webgis.Viewer('cesiumContainer');
viewer.dataSources.add(Webgis.KmlDataSource.load('../../SampleData/facilities.kmz',
     {
          camera: viewer.scene.camera,
          canvas: viewer.scene.canvas
     })
);
```

## 属性

**[changedEvent : Event]()**

获取将在基础数据更改时引发的事件。

**[clock : DataSourceClock]()**

获取由加载的KML定义的时钟设置。这表示所有时间动态数据的总可用时间间隔。 如果KML不包含时间动态数据，则此值未定义。

**[clustering : EntityCluster]()**

设置/获取此数据源的聚类选项。该对象可以在多个数据源之间共享。

**[credit : Credit]()**

获取将显示为数据源的版权。

**[entities : EntityCollection]()**

获取[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)实例集合。

**[errorEvent : Event]()**

获取在处理过程中遇到错误时将引发的事件。

**[isLoading : Boolean]()**

获取数据源当前是否正在加载数据。

**[loadingEvent : Event]()**

获取将在数据源启动或停止加载时引发的事件。

**[name : String]()**

设置/获取此实例的可读名称。 加载时，该名称将自动设置为KML文档名称。

**[refreshEvent : Event]()**

获取将在数据源刷新网络链接时引发的事件。

**[show : Boolean]()**

获取是否应显示此数据源。

**[unsupportedNodeEvent : Event]()**

当读取到不支持的节点类型时引发该事件。

## 方法

`static` **[KmlDataSource.load(data, options): Promise&lt;KmlDataSource&gt;]()**

根据提供的KML数据，创建加载数据的新实例。

| Name   | Type                                                         | Description                                                  |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `data` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Document \| Blob | URL，包含二进制KMZ数据的URL，已解析的KML文档或Blob或已解析的KML文档。 |

options对象拥有以下属性：

| Name            | Type                                                         | Default           | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------------- |
| `camera`        | [Camera](https://www.vvpstk.com/public/Cesium/Documentation/Camera.html) |                   | 用于viewRefreshModes并将相机属性发送到网络链接的相机。       |
| `canvas`        | Canvas                                                       |                   | 用于向网络链接发送查看器属性的画布。                         |
| `sourceUri`     | String                                                       |                   | optional覆盖用于解析相对链接和其他KML网络要素的url。         |
| `clampToGround` | Boolean                                                      | `false`           | optional决定几何要素（Polygons, LineStrings 和 LinearRings）是否贴地。 |
| `ellipsoid`     | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | optional椭球。                                               |
| `credit`        | [Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| String |                   | optional版权信息。                                           |

返回值:

一旦KML加载完成，将解析到一个新的KmlDataSource实例的一个promise。

**[load(data, options): Promise&lt;KmlDataSource&gt;]()**

异步加载提供的KML数据，替换任何现有数据。

| Name   | Type                                                         | Description                                                |
| :----- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| `data` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Document \| Blob | URL，解析KML文档或包含二进制KMZ数据Blob或已解析的KML文档。 |

options对象拥有以下属性：

| Name            | Type                                                         | Default           | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------------- |
| `sourceUri`     | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String |                   | optional覆盖用于解析相对链接和其他KML网络要素的url。         |
| `clampToGround` | Boolean                                                      | `false`           | optional决定几何要素（Polygons, LineStrings 和 LinearRings）是否贴地。 |
| `ellipsoid`     | [Ellipsoid](https://www.vvpstk.com/public/Cesium/Documentation/Ellipsoid.html) | `Ellipsoid.WGS84` | optional椭球。                                               |

返回值: 一个promise，它将在KML加载后解析到这个实例。

**[update(time): Boolean]()**

更新所有需要更新的网络连接。

| Name   | Type                                                         | Description |
| :----- | :----------------------------------------------------------- | :---------- |
| `time` | [JulianDate](https://www.vvpstk.com/public/Cesium/Documentation/JulianDate.html) | 时间。      |

返回值: 如果此数据源准备在提供的时间显示，则为true，否则为false。