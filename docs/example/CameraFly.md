```js
/* 相机飞行 */
const button = document.getElementById("cameraFly");
button.addEventListener('click', () => {
  viewer.flyTo(pointPrimitive,{during:2000})
})
```

![相机飞行](./img/flyTo.gif)
