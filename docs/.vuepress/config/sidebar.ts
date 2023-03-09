import { sidebar } from "vuepress-theme-hope";

export const sidebar_hope = sidebar({
  "/APIdocs/": [
    /* vuepress会自动解析文档的标题；侧边栏的顺序就是这里md文档的顺序；文档的名称不能使用中文；文件夹名称不能使用中文 */
    {
      text: "介绍",
      link: "/APIdocs/index.md",
    },
    {
      text: "核心",
      link: "/APIdocs/core/Viewer.md",
      collapsible: true,
      children: [
        { text: "Viewer", link: "/APIdocs/core/Viewer.md" },
        { text: "Scene", link: "/APIdocs/core/Scene.md" },
        { text: "Camera", link: "/APIdocs/core/Camera.md" },
      ],
    },
    {
      text: "图元",
      link: "/APIdocs/primitive/Primitive.md",
      collapsible: true,
      children: [
        { text: "primitive", link: "/APIdocs/primitive/Primitive.md" },
        {
          text: "primitiveGroup",
          link: "/APIdocs/primitive/PrimitiveGroup.md",
        },
      ],
    },
    {
      text: "几何体",
      link: "/APIdocs/geometry/GeometryInstance.md",
      collapsible: true,
      children: [
        {
          text: "GeometryInstance",
          link: "/APIdocs/geometry/GeometryInstance.md",
        },
        {
          text: "PolygonGeometry",
          link: "/APIdocs/geometry/PolygonGeometry.md",
        },
        {
          text: "PolylineGeometry",
          link: "/APIdocs/geometry/PolylineGeometry.md",
        },
        {
          text: "WallGeometry",
          link: "/APIdocs/geometry/WallGeometry.md",
        },
        {
          text: "PointGeometry",
          link: "/APIdocs/geometry/PointGeometry.md",
        },
        {
          text: "BillboardGeometry",
          link: "/APIdocs/geometry/BillboardGeometry.md",
        },
        {
          text: "LabelGeometry",
          link: "/APIdocs/geometry/LabelGeometry.md",
        },
      ],
    },
    {
      text: "材质",
      link: "/APIdocs/material/PolygonMaterial.md",
      collapsible: true,
      children: [
        {
          text: "PolygonMaterial",
          link: "/APIdocs/material/PolygonMaterial.md",
        },
        {
          text: "PolylineMaterial",
          link: "/APIdocs/material/PolylineMaterial.md",
        },
        {
          text: "WallMaterial",
          link: "/APIdocs/material/WallMaterial.md",
        },
        {
          text: "PointMaterial",
          link: "/APIdocs/material/PointMaterial.md",
        },
        {
          text: "BillboardMaterial",
          link: "/APIdocs/material/BillboardMaterial.md",
        },
        {
          text: "LabelMaterial",
          link: "/APIdocs/material/LabelMaterial.md",
        },
      ],
    },
    {
      text: "外观",
      link: "/APIdocs/appearance/MaterialAppearance.md",
      collapsible: true,
      children: [
        {
          text: "MaterialAppearance",
          link: "/APIdocs/appearance/MaterialAppearance.md",
        },
      ],
    },
    {
      text: "数学库",
      link: "/APIdocs/math/Box2.md",
      collapsible: true,
      children: [
        { text: "Color", link: "/APIdocs/math/Color.md" },
        { text: "Box2", link: "/APIdocs/math/Box2.md" },
        { text: "Box3", link: "/APIdocs/math/Box3.md" },
        { text: "Matrix3", link: "/APIdocs/math/Matrix3.md" },
        { text: "Matrix4", link: "/APIdocs/math/Matrix4.md" },
        { text: "Quaternion", link: "/APIdocs/math/Quaternion.md" },
        { text: "Ray", link: "/APIdocs/math/Ray.md" },
        { text: "Vector2", link: "/APIdocs/math/Vector2.md" },
        { text: "Vector3", link: "/APIdocs/math/Vector3.md" },
        { text: "Vector4", link: "/APIdocs/math/Vector4.md" },
      ],
    },
    {
      text: "基础",
      link: "/APIdocs/basic/Clock.md",
      collapsible: true,
      children: [
        { text: "Clock", link: "/APIdocs/basic/Clock.md" },
        { text: "Raycaster", link: "/APIdocs/basic/Raycaster.md" },
      ],
    },
  ],
  "/example/": [
    {
      text: "案例",
      link: "/example/index.md", // 一个文件夹中必须有一个index.md文件，否则会报404
      collapsible: true,
      children: [
        { text: "添加模型", link: "/example/AddModel.md" },
        {
          text: "添加多边形",
          link: "/example/AddPolygon.md",
        },
        {
          text: "添加墙",
          link: "/example/AddWall.md",
        },
        {
          text: "添加多段线",
          link: "/example/AddPolyline.md",
        },
        {
          text: "添加点",
          link: "/example/AddPoint.md",
        },
        {
          text: "添加广告牌",
          link: "/example/AddBillboard.md",
        },
        {
          text: "相机飞行",
          link: "/example/CameraFly.md",
        },
        {
          text: "高亮物体",
          link: "/example/HighLight.md",
        },
        {
          text: "拾取点",
          link: "/example/PickPoint.md",
        },
        {
          text: "修改天空盒",
          link: "/example/SetSkyBox.md",
        },
      ],
    },
  ],
});
