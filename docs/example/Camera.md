```js
const viewer = new Webgis.Viewer("cesiumContainer", { infoBox: false });

const entity = viewer.entities.add({
  rectangle: {
    show: true,
    // height: 0,
    coordinates: Webgis.Rectangle.fromDegrees(-92.0, 20.0, -66.0, 57.0), //  从经纬度创建矩形
    material: Webgis.Color.ANTIQUEWHITE,
    outline: true, // 是否有轮廓线
    outLineColor: Webgis.Color.AQUA,
    outLineWidth: 400,
    stRotation: Webgis.Math.toRadians(0), // 旋转角度
  },
});


/* 问题：已知某一矩形范围 [110.2,35.6,112.3,36.7] ，要求相机倾斜25度，实现矩形位置飞行定位。 */

/*  相机倾斜25度，实现矩形位置飞行定位。*/
const heading = Webgis.Math.toRadians(0.0);
const pitch = Webgis.Math.toRadians(-25.0);
const roll = Webgis.Math.toRadians(0.0);

/* 方法一：利用viewer的flyTo方法 */
viewer.flyTo(entity, {
  offset: new Webgis.HeadingPitchRange(heading, pitch, roll),
});

/* 方法二：利用camera的flyTo方法;初始化会看不到矩形，当滚动鼠标滚轮缩小视图时，会发现地球出现在屏幕下方；这是因为destination指定一个矩形区域时，是从上向下看，所以矩形就没有出现在屏幕中央 */
/* const rect = Webgis.Rectangle.fromDegrees(-92.0, 20.0, -66.0, 57.0);
viewer.camera.flyTo({
  destination: rect,
  orientation: new Webgis.HeadingPitchRange(heading, pitch, roll),
}); */
```

