# 图元组(PrimitiveGroup)

可以向其中添加图元Primitive。本身也是一种图元，也可以向其中添加PrimitiveGroup

## 构造器

**PrimitiveGroup()**

## 示例代码

```js
const group = new WebGis.PrimitiveGroup()
```

## 属性

### **[destroyPrimitives :boolean]()**

确定当[`PrimitiveGroup.destroy`]()删除或[`PrimitiveGroup.remove`]()删除 或[`PrimitiveGroup.removeAll`]()隐式删除集合中的图元时，该图元是否被销毁。

```js
// 例1. 默认情况下会销毁图元。
var primitives = new Cesium.PrimitiveCollection();
var labels = primitives.add(new Cesium.LabelCollection());
primitives = primitives.destroy();
var b = labels.isDestroyed(); // true
```

```js
// 例2. 不销毁集合中的图元。
var primitives = new Cesium.PrimitiveCollection();
primitives.destroyPrimitives = false;
var labels = primitives.add(new Cesium.LabelCollection());
primitives = primitives.destroy();
var b = labels.isDestroyed(); // false
labels = labels.destroy();    // 显式销毁
```

`readOnly` **[length: number]()**

获取集合中图元的数量。

### **[show: boolean]()**

是否显示集合中的图元。默认值:`true`

## 方法

### append(primitive, index) 

:triangular_flag_on_post:

向集合中添加图元。

| Name        | Type   | Description                                                |
| :---------- | :----- | :--------------------------------------------------------- |
| `primitive` | Object | 要添加的图元。:triangular_flag_on_post:                    |
| `index`     | Number | `optional`要添加图元的索引，如果省略将被添加到集合最底层。 |

Example:

```javascript
var billboards = scene.primitives.add(new Cesium.BillboardCollection());
```

### **[contains(primitive):  Boolean]()**

集合中是否包含此图元。

| Name        | Type   | Description              |
| :---------- | :----- | :----------------------- |
| `primitive` | Object | optional需要查询的图元。 |

Returns:

如果找到该图元返回`true`，如果图元为undefined或者未找到则返回`false`。

### **[destroy()]()**

销毁此集合中每个图元持有的WebGL资源。 显式销毁这个集合允许WebGL资源的确定性释放，而不是依赖于垃圾收集器来销毁这个集合。

因为销毁一个集合会销毁所有包含的图元，所以只有在您确定没有其他代码仍在使用任何一个包含的图元时才销毁此集合。

一旦对象被销毁，它将不能在使用; 调用除`isDestroyed`之外的任何函数都会导致[`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html)异常。 因此，将返回值（`undefined`）赋给对象，如示例所示。

### **[get(index):  Object]()**

返回指定索引处的图元。

| Name    | Type   | Description  |
| :------ | :----- | :----------- |
| `index` | Number | 传入的索引。 |

Returns:

返回的`index`处的图元。

Example:

```javascript
// 切换集合中每个图元的show属性。
var primitives = scene.primitives;
var length = primitives.length;
for (var i = 0; i < length; ++i) {
  var p = primitives.get(i);
  p.show = !p.show;
}
```

### **[isDestroyed():  Boolean]()**

如果该对象没被销毁，返回false。

如果该对象已经被销毁，使用`isDestroyed` 会触发 [`DeveloperError`](https://www.vvpstk.com/public/Cesium/Documentation/DeveloperError.html) 异常.

Returns:

如果该对象没被销毁，返回false。

### **[lower(primitive)]()**

将图元在集合中的位置下移一位（如果所有图元都被绘制在地球上，这意味着在视觉上把图元向下移动了一位）。

| Name        | Type   | Description                  |
| :---------- | :----- | :--------------------------- |
| `primitive` | Object | optional要被向下移动的图元。 |

### **[lowerToBottom(primitive)]()**

将图元在集合中的位置移到最下面（如果所有图元都被绘制在地球上，这意味着在视觉上把图元移到最下面）。

| Name        | Type   | Description                    |
| :---------- | :----- | :----------------------------- |
| `primitive` | Object | optional被移到到最下面的图元。 |

### **[raise(primitive)]()**

将图元在集合中的位置上移一位（如果所有图元都被绘制在地球上，这意味着在视觉上把图元向上移动了一位）。

| Name        | Type   | Description                  |
| :---------- | :----- | :--------------------------- |
| `primitive` | Object | optional要被向上移动的图元。 |

### **[raiseToTop(primitive)]()**

将图元在集合中的位置移到最上面 （如果所有图元都被绘制在地球上，这意味着在视觉上把图元移到最上面）。

| Name        | Type   | Description                    |
| :---------- | :----- | :----------------------------- |
| `primitive` | Object | optional被移到到最上面的图元。 |

### **[remove(primitive):  Boolean]()**

从集合中移除图元。

| Name        | Type   | Description                |
| :---------- | :----- | :------------------------- |
| `primitive` | Object | optional将要被移除的图元。 |

Returns:

如果图元被删除返回`true`，如果图元为undefined或者未找到则返回`false`。

Example:

```javascript
var billboards = scene.primitives.add(new Cesium.BillboardCollection());
scene.primitives.remove(p);  // 返回true
```

### **[removeAll()]()**

从集合中移除所有图元。