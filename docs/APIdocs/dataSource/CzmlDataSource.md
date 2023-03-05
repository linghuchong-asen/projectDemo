# CZML数据(CzmlDataSource)

CZML数据源。

## 构造器

**CzmlDataSource(name)**

| Name   | Type   | Description                                                  |
| :----- | :----- | :----------------------------------------------------------- |
| `name` | String | optional数据源的可选名称。如果加载的文档包含名称，则该值将被覆盖。 |

## 属性

`static` **[CzmlDataSource.updaters : Array]()**

获取CZML处理函数的数组。

**[changedEvent : Event]()**

获取在基础数据更改时引发的事件。

**[clock : DataSourceClock]()**

获取加载的CZML定义的时钟设置。如果在CZML中没有显式定义时钟， 则返回所有对象的组合可用性。如果仅存在静态数据，则此值未定义。

**[clustering : EntityCluster]()**

获取或设置此数据源的聚类选项。该对象可以在多个数据源之间共享。

**[credit : Credit]()**

获取要显示的版权信息。

**[entities : EntityCollection]()**

获取实体[`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)实例的集合。

**[errorEvent : Event]()**

获取在处理过程中遇到错误时将引发的事件。

**[isLoading : Boolean]()**

获取/设置数据源当前是否正在加载数据。

**[loadingEvent : Event]()**

获取一个isLoading的值更改时将引发的事件。

**[name : String]()**

为该实例获取可读的名字。

**[show : Boolean]()**

获取是否应显示此数据源。

## 方法

`static` **[CzmlDataSource.load(czml, options): Promise&lt;CzmlDataSource&gt;]()**

创建对使用提供的CZML数据加载的新实例的Promise。

| Name   | Type                                                         | Description               |
| :----- | :----------------------------------------------------------- | :------------------------ |
| `czml` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Object | 将被处理的url或czml对象。 |

options对象拥有以下属性：

| Name        | Type                                                         | Description                           |
| :---------- | :----------------------------------------------------------- | :------------------------------------ |
| `sourceUri` | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String | optional重写要用于解析相对链接的url。 |
| `credit`    | [Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| String | optional用于显示在Canvas的版权信息。  |

返回值: 处理数据后解析到新实例的Promise。

`static` **[CzmlDataSource.processMaterialPacketData(object, propertyName, packetData, interval, sourceUri, entityCollection)]()**

自定义CZML更新器（updater）函数使用的帮助函数,它从CZML包创建或更新材质属性[`MaterialProperty`](https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html)。

| Name               | Type                                                         | Description                                          |
| :----------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
| `object`           | Object                                                       | 将在其上添加或更新属性的对象。                       |
| `propertyName`     | String                                                       | 对象的属性名。                                       |
| `packetData`       | Object                                                       | 正在被处理的czml包。                                 |
| `interval`         | [TimeInterval](https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html) | A constraining interval for which the data is valid. |
| `sourceUri`        | String                                                       | 正在处理的数据的原始uri。                            |
| `entityCollection` | [EntityCollection](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html) | 正在处理的实体集合。                                 |

`static` **[CzmlDataSource.processPacketData(type, object, propertyName, interval, sourceUri, entityCollection)]()**

自定义CZML更新器（updater）函数使用的帮助函数，它从CZML包创建或更新属性[`Property`](https://www.vvpstk.com/public/Cesium/Documentation/Property.html)。

| Name               | Type                                                         | Description                                          |
| :----------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
| `type`             | function                                                     | 正在处理的属性的构造函数。                           |
| `object`           | Object                                                       | 此对象拥有以下属性：                                 |
| `propertyName`     | String                                                       | 对象的属性名。                                       |
| `interval`         | [TimeInterval](https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html) | A constraining interval for which the data is valid. |
| `sourceUri`        | String                                                       | 正在处理的数据的原始uri。                            |
| `entityCollection` | [EntityCollection](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html) | 正在处理的实体集合。                                 |

`static` **[CzmlDataSource.processPositionPacketData(object, propertyName, packetData, interval, sourceUri, entityCollection)]()**

自定义CZML更新器（updater）函数使用的帮助函数,它从CZML包创建或更新位置属性[`PositionProperty`](https://www.vvpstk.com/public/Cesium/Documentation/PositionProperty.html)。

| Name               | Type                                                         | Description                                          |
| :----------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
| `object`           | Object                                                       | 此对象拥有以下属性：                                 |
| `propertyName`     | String                                                       | 对象的属性名。                                       |
| `packetData`       | Object                                                       | 正在被处理的czml包。                                 |
| `interval`         | [TimeInterval](https://www.vvpstk.com/public/Cesium/Documentation/TimeInterval.html) | A constraining interval for which the data is valid. |
| `sourceUri`        | String                                                       | 正在处理的数据的原始uri。                            |
| `entityCollection` | [EntityCollection](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html) | 正在处理的实体集合。                                 |

**[load(czml, options): Promise&lt;CzmlDataSource&gt;]()**

处理提供的url或CZML对象，替换现有数据。

| Name      | Type                                                         | Description                                                  |
| :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `czml`    | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Object | 要处理的url或CZML对象。                                      |
| `options` | Object                                                       | optional此对象拥有以下属性：NameTypeDescription`sourceUri`Stringoptional重写要用于解析相对链接的url。`credit`[Credit](https://www.vvpstk.com/public/Cesium/Documentation/Credit.html) \| Stringoptional版权信息。 |

返回值: 处理数据后解析到此实例的Promise。

**[process(czml, options): Promise&lt;CzmlDataSource&gt;]()**

处理提供的url或CZML对象，而不清除任何现有数据。

| Name      | Type                                                         | Description                                                  |
| :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `czml`    | [Resource](https://www.vvpstk.com/public/Cesium/Documentation/Resource.html) \| String \| Object | 要处理的url或CZML对象。                                      |
| `options` | Object                                                       | optional此对象拥有以下属性：NameTypeDescription`sourceUri`Stringoptional重写要用于解析相对链接的url。 |

返回值: 处理数据后解析到此实例的Promise。