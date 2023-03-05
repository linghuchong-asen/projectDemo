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
      text: "数学库",
      link: "/APIdocs/math/Box2.md",
      collapsible: true,
      children: [
        { text: "Box2", link: "/APIdocs/math/Box2.md" },
        { text: "Box3", link: "/APIdocs/math/Box3.md" },
        { text: "Color", link: "/APIdocs/math/Color.md" },
        { text: "Line3", link: "/APIdocs/math/Line3.md" },
        { text: "Matrix3", link: "/APIdocs/math/Matrix3.md" },
        { text: "Matrix4", link: "/APIdocs/math/Matrix4.md" },
        { text: "MathUtils", link: "/APIdocs/math/MathUtils.md" },
        { text: "Quaternion", link: "/APIdocs/math/Quaternion.md" },
        { text: "Ray", link: "/APIdocs/math/Ray.md" },
        { text: "Sphere", link: "/APIdocs/math/Sphere.md" },
        { text: "Spherical", link: "/APIdocs/math/Spherical.md" },
        { text: "Vector2", link: "/APIdocs/math/Vector2.md" },
        { text: "Vector3", link: "/APIdocs/math/Vector3.md" },
        { text: "Vector4", link: "/APIdocs/math/Vector4.md" },
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
        {
          text: "Model",
          link: "/APIdocs/primitive/Model.md",
        },
        {
          text: "Models",
          link: "/APIdocs/primitive/Models.md",
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
          text: "BoxGeometry",
          link: "/APIdocs/geometry/BoxGeometry.md",
        },
        {
          text: "BoxOutlineGeometry",
          link: "/APIdocs/geometry/BoxOutlineGeometry.md",
        },
        {
          text: "CircleGeometry",
          link: "/APIdocs/geometry/CircleGeometry.md",
        },
        {
          text: "CircleOutlineGeometry",
          link: "/APIdocs/geometry/CircleOutlineGeometry.md",
        },
        {
          text: "CoplanarPolygonGeometry",
          link: "/APIdocs/geometry/CoplanarPolygonGeometry.md",
        },
        {
          text: "CoplanarPolygonOutlineGeometry",
          link: "/APIdocs/geometry/CoplanarPolygonOutlineGeometry.md",
        },
        {
          text: "CorridorGeometry",
          link: "/APIdocs/geometry/CorridorGeometry.md",
        },
        {
          text: "CorridorOutlineGeometry",
          link: "/APIdocs/geometry/CorridorOutlineGeometry.md",
        },
        {
          text: "CylinderGeometry",
          link: "/APIdocs/geometry/CylinderGeometry.md",
        },
        {
          text: "CylinderOutlineGeometry",
          link: "/APIdocs/geometry/CylinderOutlineGeometry.md",
        },
        {
          text: "EllipseGeometry",
          link: "/APIdocs/geometry/EllipseGeometry.md",
        },
        {
          text: "EllipseOutlineGeometry",
          link: "/APIdocs/geometry/EllipseOutlineGeometry.md",
        },
        {
          text: "EllipsoidGeometry",
          link: "/APIdocs/geometry/EllipsoidGeometry.md",
        },
        {
          text: "EllipsoidOutlineGeometry",
          link: "/APIdocs/geometry/EllipsoidOutlineGeometry.md",
        },
        {
          text: "FrustumGeometry",
          link: "/APIdocs/geometry/FrustumGeometry.md",
        },
        {
          text: "FrustumOutlineGeometry",
          link: "/APIdocs/geometry/FrustumOutlineGeometry.md",
        },
        {
          text: "Geometry",
          link: "/APIdocs/geometry/Geometry.md",
        },
        {
          text: "PlaneGeometry",
          link: "/APIdocs/geometry/PlaneGeometry.md",
        },
        {
          text: "PlaneOutlineGeometry",
          link: "/APIdocs/geometry/PlaneOutlineGeometry.md",
        },
        {
          text: "PolygonGeometry",
          link: "/APIdocs/geometry/PolygonGeometry.md",
        },
        {
          text: "PolygonOutlineGeometry",
          link: "/APIdocs/geometry/PolygonOutlineGeometry.md",
        },
        {
          text: "PolylineGeometry",
          link: "/APIdocs/geometry/PolylineGeometry.md",
        },
        {
          text: "PolylineVolumeGeometry",
          link: "/APIdocs/geometry/PolylineVolumeGeometry.md",
        },
        {
          text: "PolylineVolumeOutlineGeometry",
          link: "/APIdocs/geometry/PolylineVolumeOutlineGeometry.md",
        },
        {
          text: "RectangleGeometry",
          link: "/APIdocs/geometry/RectangleGeometry.md",
        },
        {
          text: "RectangleOutlineGeometry",
          link: "/APIdocs/geometry/RectangleOutlineGeometry.md",
        },
        {
          text: "SphereGeometry",
          link: "/APIdocs/geometry/SphereGeometry.md",
        },
        {
          text: "SphereOutlineGeometry",
          link: "/APIdocs/geometry/SphereOutlineGeometry.md",
        },
        {
          text: "WallGeometry",
          link: "/APIdocs/geometry/WallGeometry.md",
        },
        {
          text: "WallOutlineGeometry",
          link: "/APIdocs/geometry/WallOutlineGeometry.md",
        },
      ],
    },
    {
      text: "材质",
      link: "/APIdocs/material/Material.md",
      collapsible: true,
      children: [
        { text: "基础材质", link: "/APIdocs/material/Material.md" },
        {
          text: "棋盘材质",
          link: "/APIdocs/material/CheckerboardMaterialProperty.md",
        },
        {
          text: "颜色材质",
          link: "/APIdocs/material/ColorMaterialProperty.md",
        },
        {
          text: "网格材质",
          link: "/APIdocs/material/GridMaterialProperty.md",
        },
        {
          text: "图像材质",
          link: "/APIdocs/material/ImageMaterialProperty.md",
        },
        { text: "材质抽象类", link: "/APIdocs/material/MaterialProperty.md" },
        {
          text: "带箭头折线材质",
          link: "/APIdocs/material/PolylineArrowMaterialProperty.md",
        },
        {
          text: "发光材质",
          link: "/APIdocs/material/PolylineGlowMaterialProperty.md",
        },
        {
          text: "线边框材质",
          link: "/APIdocs/material/PolylineOutlineMaterialProperty.md",
        },
        {
          text: "条纹材质",
          link: "/APIdocs/material/StripMaterialProperty.md",
        },
      ],
    },
    {
      text: "外观",
      link: "/APIdocs/appearance/Appearance.md",
      collapsible: true,
      children: [
        { text: "基础外观", link: "/APIdocs/appearance/Appearance.md" },
        {
          text: "任意几何图形外观",
          link: "/APIdocs/appearance/MaterialAppearance.md",
        },
        {
          text: "带有颜色属性外观",
          link: "/APIdocs/appearance/PerInstanceColorAppearance.md",
        },
        {
          text: "带有颜色属性线几何体外观",
          link: "/APIdocs/appearance/PolylineColorAppearance.md",
        },
        {
          text: "线几何体外观",
          link: "/APIdocs/appearance/PolylineAppearance.md",
        },
      ],
    },
    {
      text: "实体",
      link: "/APIdocs/entity/Entity.md",
      collapsible: true,
      children: [
        { text: "实体", link: "/APIdocs/entity/Entity.md" },
        { text: "实体组", link: "/APIdocs/entity/EntityGroup.md" },
        { text: "广告牌", link: "/APIdocs/entity/BillboardGraphics.md" },
        { text: "立方体", link: "/APIdocs/entity/BoxGraphics.md" },
        { text: "走廊", link: "/APIdocs/entity/CorridorGraphics.md" },
        {
          text: "圆柱/圆锥/圆台",
          link: "/APIdocs/entity/CylinderGraphics.md",
        },
        { text: "椭圆", link: "/APIdocs/entity/EllipseGraphics.md" },
        { text: "椭球/球体", link: "/APIdocs/entity/EllipsoidGraphics.md" },
        { text: "文本", link: "/APIdocs/entity/LabelGraphics.md" },
        { text: "模型", link: "/APIdocs/entity/ModelGraphics.md" },
        { text: "路径", link: "/APIdocs/entity/PathGraphics.md" },
        { text: "平面", link: "/APIdocs/entity/PlaneGraphics.md" },
        { text: "点", link: "/APIdocs/entity/PointGraphics.md" },
        { text: "多边形", link: "/APIdocs/entity/PolygonGraphics.md" },
        { text: "多段线", link: "/APIdocs/entity/PolylineGraphics.md" },
        {
          text: "多段线柱体",
          link: "/APIdocs/entity/PolylineVolumeGraphics.md",
        },
        { text: "矩形", link: "/APIdocs/entity/RectangleGraphics.md" },
        { text: "墙", link: "/APIdocs/entity/WallGraphics.md" },
      ],
    },
    {
      text: "数据源",
      link: "/APIdocs/dataSource/DataSource.md",
      collapsible: true,
      children: [
        { text: "数据源", link: "/APIdocs/dataSource/DataSource.md" },
        {
          text: "数据源集合",
          link: "/APIdocs/dataSource/DataSourceCollection.md",
        },
        {
          text: "自定义数据源",
          link: "/APIdocs/dataSource/CustomDataSource.md",
        },
        { text: "Czml数据源", link: "/APIdocs/dataSource/CzmlDataSource.md" },
        {
          text: "GeoJson数据源",
          link: "/APIdocs/dataSource/GeoJsonDataSource.md",
        },
        { text: "Kml数据源", link: "/APIdocs/dataSource/KmlDataSource.md" },
      ],
    },
    {
      text: "基础",
      link: "/APIdocs/basic/Object3D.md",
      collapsible: true,
      children: [
        { text: "Object3D", link: "/APIdocs/basic/Object3D.md" },
        { text: "Raycaster", link: "/APIdocs/basic/Raycaster.md" },
      ],
    },
  ],
  "/example/": [
    {
      text: "案例",
      link: "/example/Add_Entity.md",
      collapsible: true,
      children: [
        { text: "添加Entity", link: "/example/Add_Entity.md" },
        {
          text: "添加Primitive",
          link: "/example/Add_Primitive.md",
        },
        {
          text: "相机飞行",
          link: "/example/Camera.md",
        },
        {
          text: "加载模型Entity方式",
          link: "/example/EntityModel.md",
        },
        {
          text: "加载模型Primitive方式",
          link: "/example/PrimitiveModel.md",
        },
        {
          text: "画点",
          link: "/example/EntityPoint.md",
        },
        {
          text: "多段线",
          link: "/example/EntityPolyline.md",
        },
        {
          text: "多边形",
          link: "/example/EntityPolygon.md",
        },
        {
          text: "拾取点",
          link: "/example/pickPoint.md",
        },
        {
          text: "修改天空盒",
          link: "/example/setSkyBox.md",
        },
      ],
    },
  ],
});
