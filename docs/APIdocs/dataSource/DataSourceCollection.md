# 数据源集合(DataSourceCollection)

## 属性

`readonly` **[dataSourceAdded : Event]()**

将数据源添加到集合中时引发的事件。 向事件处理程序传递添加的数据源。

`readonly` **[dataSourceMoved : Event]()**

当数据源更改在集合中的位置时引发的事件。 事件处理程序将传递被移动的数据源、在移动之后的新索引和在移动之前的旧索引。

`readonly`**[dataSourceRemoved : Event]()**

当数据源被移除时引发的事件。 事件处理程序将传递被删除的数据源。

`readonly`**[length : Number]()**

获取数据源集合中的数据源数量。

## 方法

**[add(dataSource): Promise.&lt;DataSource&gt;]()**

将数据源添加到集合中。

| Name         | Type                                                         | Description                                                  |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) \| Promise.<[DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html)> | 要添加到集合中的数据源或对数据源的Promise。 在传递Promise时，Promise成功解析之前，实际上不会将数据源添加到集合中。 |

返回值: 将数据源添加到集合后解析的Promise。

**[contains(dataSource): Boolean]()**

是否含有给定的数据源。

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 给定的数据源。 |

返回值: 如果集合包含数据源，则为true，否则为false。

**[destroy()]()**

销毁此集合中所有数据源持有的资源。显式销毁此对象即允许确定性地释放WebGL资源，而不是依赖于垃圾收集器。

一旦被销毁，就不应再使用;调用除`isDestroyed`之外的任何函数都会导致[`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html)异常。 因此，将返回值(undefined)赋给对象，如示例所示:

**[get(index): DataSource]()**

通过索引获取数据源。

| Name    | Type   | Description |
| :------ | :----- | :---------- |
| `index` | Number | 索引。      |

返回值: 索引对应的数据源。

getByName(name) → Array&lt;DataSource&gt;

通过名字获取数据源。

| Name   | Type   | Description  |
| :----- | :----- | :----------- |
| `name` | String | 给定的名字。 |

返回值: 与提供的名称匹配的所有数据源的数组。

**[indexOf(dataSource): Number]()**

确定集合中给定数据源的索引。

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 给定的数据源。 |

返回值: 集合中数据源的索引；如果集合中不存在数据源，则为-1。

**[isDestroyed(): Boolean]()**

获取对象是否已销毁。 一旦被销毁，就不应再使用;调用除`isDestroyed`之外的任何函数都会导致[`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html)异常。

返回值:已销毁，返回true，反之，返回false。

**[lower(dataSource)]()**

将数据源在集合中降低一个位置。

| Name         | Type                                                         | Description      |
| :----------- | :----------------------------------------------------------- | :--------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 要移动的数据源。 |

**[lowerToBottom(dataSource)]()**

将数据源移动到集合中的底部。

| Name         | Type                                                         | Description      |
| :----------- | :----------------------------------------------------------- | :--------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 要移动的数据源。 |

**[raise(dataSource)]()**

将数据源在集合中提升一个位置。

| Name         | Type                                                         | Description      |
| :----------- | :----------------------------------------------------------- | :--------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 要移动的数据源。 |

**[raiseToTop(dataSource)]()**

将数据源移动到集合中的顶部。

| Name         | Type                                                         | Description      |
| :----------- | :----------------------------------------------------------- | :--------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) | 要移动的数据源。 |

**[remove(dataSource, destroy): Boolean]()**

从该集合中删除数据源（如果存在）。

| Name         | Type                                                         | Default | Description                                  |
| :----------- | :----------------------------------------------------------- | :------ | :------------------------------------------- |
| `dataSource` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) |         | 要移除的数据源。                             |
| `destroy`    | Boolean                                                      | `false` | optional除删除数据源外，是否还要销毁数据源。 |

返回值: 如果数据源在集合中并且已被删除，则为true；如果数据源不在集合中，则为false。

**[removeAll(destroy)]()**

从该集合中删除所有数据源。

| Name      | Type    | Default | Description                                  |
| :-------- | :------ | :------ | :------------------------------------------- |
| `destroy` | Boolean | `false` | optional除删除数据源外，是否还要销毁数据源。 |