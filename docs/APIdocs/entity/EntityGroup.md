# 实体组(EntityGroup)

Entity实体的组，其中每一个Entity都有唯一的id。

## 构造器

**EntityGroup(owner)**

| Name    | Type                                                         | Description                                                  |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `owner` | [DataSource](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html) \| [CompositeEntityCollection](https://www.vvpstk.com/public/Cesium/Documentation/CompositeEntityCollection.html) | optional[`DataSource`](https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html)或者[`CompositeEntityCollection`](https://www.vvpstk.com/public/Cesium/Documentation/CompositeEntityCollection.html)，用于创建EntityCollection。 |

## 属性

### `readonly` **[collectionChanged : Event]()**

获取在集合中添加或删除实体时触发的事件。生成的事件是 [`EntityCollection.collectionChangedEventCallback`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#.collectionChangedEventCallback) 。

### `readonly` **[id : String]()**

获取全局唯一ID。

### `readonly` **[owner : DataSource|CompositeEntityCollection]()**

获取此实体集合的所有者。即，创建它的数据源或复合实体集合。

### **[show : Boolean]()**

获取此实体集合是否应为显示出来。当为true时，仅当其自身的show属性也为true时，才显示每个实体。

### `readonly` **[values : Entity[ ]]()**

获取集合中实体实例的数组。 不应该直接修改这个数组。

## 方法

### `static`**[collectionChangedEventCallback(collection, added, removed, changed)]()**

由 [`EntityCollection#collectionChanged`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged) 生成的事件的签名。

| Name         | Type                                                         | Description                                                  |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `collection` | [EntityCollection](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html) | 触发事件的集合。                                             |
| `added`      | Array.<[Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)> | 已添加到集合中的 [`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) 实例的数组。 |
| `removed`    | Array.<[Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)> | 从集合中删除的 [`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) 实例的数组。 |
| `changed`    | Array.<[Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html)> | 已修改的 [`Entity`](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) 实例的数组。 |

### **[add(entity): Entity]()**

添加实体。

| Name     | Type                                                         | Description |
| :------- | :----------------------------------------------------------- | :---------- |
| `entity` | [Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) | 实体。      |

返回值:已添加的实体。

### **[computeAvailability(): TimeInterval]()**

计算集合中实体的最大可用性。 如果集合包含无限可用数据和非无限数据的混合，它将只返回与非无限数据相关的间隔。 如果所有数据都是无限的，则返回一个无限的间隔。

返回值: 集合中实体的可用性。

### **[contains(entity): Boolean]()**

是否含有某实体。

| Name     | Type                                                         | Description |
| :------- | :----------------------------------------------------------- | :---------- |
| `entity` | [Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) | 实体。      |

返回值: 含有，返回true，反之，返回false。

### **[getById(id): Entity]()**

根据ID获取实体。

| Name | Type   | Description      |
| :--- | :----- | :--------------- |
| `id` | String | 要获取的实体ID。 |

返回值: 获取成功，返回该实体，如果ID不存在，返回未定义。

### **[getOrCreateEntity(id): Entity]()**

获取具有指定id的实体，或创建该实体，如果该实体不存在，则将其添加到集合中。

| Name | Type   | Description |
| :--- | :----- | :---------- |
| `id` | String | 实体ID。    |

返回值: 新的或存在的实体对象。

### **[remove(entity): Boolean]()**

移除实体。

| Name     | Type                                                         | Description    |
| :------- | :----------------------------------------------------------- | :------------- |
| `entity` | [Entity](https://www.vvpstk.com/public/Cesium/Documentation/Entity.html) | 要移除的实体。 |

返回值: 被移除返回true，不存在false。

### **[removeAll()]()**

移除所有实体。

### **[removeById(id): Boolean]()**

通过ID移除实体。

| Name | Type   | Description      |
| :--- | :----- | :--------------- |
| `id` | String | 要移除的实体ID。 |

返回值: 被移除返回true，不存在false。

### **[resumeEvents()]()**

在添加或删除项时，立即恢复引发[`EntityCollection#collectionChanged`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged)事件。 当调用该函数时，while事件被挂起时所做的任何修改都将作为单个事件触发。 这个函数是引用计数的，可以安全地调用多次，只要有相应的调用[`EntityCollection#resumeEvents`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents)。

### **[suspendEvents()]()**

防止[`EntityCollection#collectionChanged`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged)事件被引发，直到对[`EntityCollection#resumeEvents`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents)进行相应调用，此时将引发一个包含所有挂起操作的单一事件。 这使得许多项目可以有效地添加和删除。 只要对[`EntityCollection#resumeEvents`](https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents)有相应的调用，就可以安全地多次调用这个函数。