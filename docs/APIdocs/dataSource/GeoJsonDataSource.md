# GeoJson数据(GeoJsonDataSource)

GeoJson数据源。

## 构造器

**GeoJsonDataSource(name)**

| Name   | Type   | Description                                       |
| :----- | :----- | :------------------------------------------------ |
| `name` | String | optional数据源名，如果未定义则使用GeoJson文件名。 |

## 示例代码

```javascript
var viewer = new Webgis.Viewer('cesiumContainer');
viewer.dataSources.add(Webgis.GeoJsonDataSource.load('../../SampleData/ne_10m_us_states.topojson', {
  stroke: Webgis.Color.HOTPINK,
  fill: Webgis.Color.PINK,
  strokeWidth: 3,
  markerSymbol: '?'
}));
```

## 属性

`static` **[GeoJsonDataSource.clampToGround : Boolean]()**

设置/获取几何要素是否贴地。

`static` **[GeoJsonDataSource.crsLinkHrefs : Object]()**

获取一个对象，该对象将crs链接的href属性映射到一个回调函数， 该回调函数接受crs properties对象并返回一个Promise，该Promise解析为一个接受GeoJSON坐标的函数， 并将其转换为一个固定在地球上的WGS84笛卡尔坐标。 假设链接具有指定的类型。该对象中的项将优先于`crsLinkHrefs`中定义的项，

`static` **[GeoJsonDataSource.crsLinkTypes : Object]()**

获取一个对象，该对象将crs链接的类型属性映射到一个回调函数， 该回调函数接受crs properties对象并返回一个promise，该promise解析为一个接受GeoJSON坐标的函数， 并将其转换为一个固定在地球上的WGS84笛卡尔坐标。 `crsLinkHrefs`中的项优先于此对象。

`static` **[GeoJsonDataSource.crsNames : Object]()**

获取一个对象，该对象将crs的名称映射到采用GeoJSON坐标的回调函数并将其转换为WGS84固定于地球的笛卡尔坐标。 旧版GeoJSON也可以通过指定完整的EPSG名称将受支持的EPSG类型添加到此列表中，例如' EPSG:4326'。

`static` **[GeoJsonDataSource.fill : Color]()**

设置/获取多边形内部的默认颜色。

`static` **[GeoJsonDataSource.markerColor : Color]()**

设置/获取地图图钉默认颜色。。

`static` **[GeoJsonDataSource.markerSize : Number]()**

设置/获取为地图图钉默认大小。

`static` **[GeoJsonDataSource.markerSymbol : String]()**

设置/获取地图图钉默认符号。 任何有效的 [Maki](http://mapbox.com/maki/) 标识符，任何单个字符，或空白（如果不使用符号）。

`static` **[GeoJsonDataSource.stroke : Color]()**

设置/获取折线和多边形边框默认颜色。

`static` **[GeoJsonDataSource.strokeWidth : Number]()**

设置/获取折线和多边形边框默认宽度。

**[changedEvent : Event]()**

获取将在基础数据更改时引发的事件。

**[clock : DataSourceClock]()**

此数据源仅定义静态数据，因此此属性始终未定义。

**[clustering : EntityCluster]()**

设置/获取此数据源的聚类选项。该对象可以在多个数据源之间共享。

**[credit : Credit]()**

获取将显示为数据源的版权。

**[entities : EntityCollection]()**

获取实体实例集合。

**[errorEvent : Event]()**

获取在处理过程中遇到错误时将引发的事件。

**[isLoading : Boolean]()**

获取是否正在加载数据。

**[loadingEvent : Event]()**

获取将在数据源启动或停止加载时引发的事件。

**[name : String]()**

设置/获取实例名字。

**[show : Boolean]()**

获取是否应显示此数据源。

## 方法

`static` **[GeoJsonDataSource.load(data, options): Promise&lt;GeoJsonDataSource&gt;]()**

创建一个根据提供的GeoJSON或TopoJSON数据创建一个新实例的Promise。

| Name   | Type                                                         | Description                                  |
| :----- | :----------------------------------------------------------- | :------------------------------------------- |
| `data` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Object | url，GeoJSON对象，或者要加载的TopoJSON对象。 |

options对象拥有以下属性：

| Name            | Type                                                         | Default                           | Description                                          |
| :-------------- | :----------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------- |
| `sourceUri`     | String                                                       |                                   | optional重写要用于解析相对链接的url。                |
| `markerSize`    | Number                                                       | `GeoJsonDataSource.markerSize`    | optional为每个点创建一个默认大小的地图图钉（像素）。 |
| `markerSymbol`  | String                                                       | `GeoJsonDataSource.markerSymbol`  | optional为每个点创建一个默认符号的地图图钉（像素）。 |
| `markerColor`   | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.markerColor`   | optional为每个点创建一个默认颜色的地图图钉（像素）。 |
| `stroke`        | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.stroke`        | optional折线和多边形边框默认颜色。                   |
| `strokeWidth`   | Number                                                       | `GeoJsonDataSource.strokeWidth`   | optional折线和多边形边框默认宽度。                   |
| `fill`          | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.fill`          | optional多边形内部的默认颜色。                       |
| `clampToGround` | Boolean                                                      | `GeoJsonDataSource.clampToGround` | optional决定几何要素是否贴地。                       |
| `credit`        | [Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| String |                                   | optional版权信息。                                   |

返回值:将在数据加载时解析的Promise。

**[load(data, options): Promise&lt;GeoJsonDataSource&gt;]()**

异步加载提供的GeoJSON或TopoJSON数据，替换任何现有数据。

| Name   | Type                                                         | Description                                  |
| :----- | :----------------------------------------------------------- | :------------------------------------------- |
| `data` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Object | url, GeoJSON对象, 或者要加载的TopoJSON对象。 |

options对象拥有以下属性：

| Name            | Type                                                         | Default                                     | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :------------------------------------------ | :----------------------------------------------------------- |
| `sourceUri`     | String                                                       |                                             | optional重写要用于解析相对链接的url。                        |
| `describe`      | [GeoJsonDataSource~describe](https://www.vvpstk.com/public/Cesium/Documentation/GeoJsonDataSource.html#~describe) | `GeoJsonDataSource.defaultDescribeProperty` | optional返回一个属性对象(或一个字符串)的函数，该函数将属性转换为html描述。 |
| `markerSize`    | Number                                                       | `GeoJsonDataSource.markerSize`              | optional为每个点创建一个默认大小的地图图钉（像素）。         |
| `markerSymbol`  | String                                                       | `GeoJsonDataSource.markerSymbol`            | optional为每个点创建一个默认符号的地图图钉（像素）。         |
| `markerColor`   | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.markerColor`             | optional为每个点创建一个默认颜色的地图图钉（像素）。         |
| `stroke`        | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.stroke`                  | optional折线和多边形边框默认颜色。                           |
| `strokeWidth`   | Number                                                       | `GeoJsonDataSource.strokeWidth`             | optional折线和多边形边框默认宽度。                           |
| `fill`          | [Color](https://www.vvpstk.com/public/Cesium/Documentation/Color.html) | `GeoJsonDataSource.fill`                    | optional多边形内部的默认颜色。                               |
| `clampToGround` | Boolean                                                      | `GeoJsonDataSource.clampToGround`           | optional决定几何要素是否贴地。                               |
| `credit`        | [Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| String |                                             | optional版权信息。                                           |

返回值: 将在数据加载时解析的Promise。