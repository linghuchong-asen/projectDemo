const e=JSON.parse('{"key":"v-a22e3806","path":"/APIdocs/math/Box3.html","title":"Box3","lang":"zh-CN","frontmatter":{"description":"\u8868\u793A\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u4E00\u4E2A\u8F74\u5BF9\u9F50\u5305\u56F4\u76D2\uFF08axis-aligned bounding box\uFF0CAABB\uFF09\u3002 \u4EE3\u7801\u793A\u4F8B ```js const box = new THREE.Box3(); const mesh = new THREE.Mesh( new THREE.SphereGeometry(), new THREE.MeshBasicMaterial()...","head":[["meta",{"property":"og:url","content":"https://projectDemo/APIdocs/math/Box3.html"}],["meta",{"property":"og:site_name","content":"API\u6587\u6863--three.js\u5C01\u88C5"}],["meta",{"property":"og:title","content":"Box3"}],["meta",{"property":"og:description","content":"\u8868\u793A\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u4E00\u4E2A\u8F74\u5BF9\u9F50\u5305\u56F4\u76D2\uFF08axis-aligned bounding box\uFF0CAABB\uFF09\u3002 \u4EE3\u7801\u793A\u4F8B ```js const box = new THREE.Box3(); const mesh = new THREE.Mesh( new THREE.SphereGeometry(), new THREE.MeshBasicMaterial()..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-05T08:18:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-05T08:18:56.000Z"}]]},"headers":[{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B","link":"#\u4EE3\u7801\u793A\u4F8B","children":[]},{"level":2,"title":"\u6784\u9020\u5668\uFF08Constructor\uFF09","slug":"\u6784\u9020\u5668-constructor","link":"#\u6784\u9020\u5668-constructor","children":[{"level":3,"title":"Box3( min : Vector3, max : Vector3 )","slug":"box3-min-vector3-max-vector3","link":"#box3-min-vector3-max-vector3","children":[]}]},{"level":2,"title":"\u5C5E\u6027\uFF08Properties\uFF09","slug":"\u5C5E\u6027-properties","link":"#\u5C5E\u6027-properties","children":[{"level":3,"title":".isBox3 : Boolean","slug":"isbox3-boolean","link":"#isbox3-boolean","children":[]},{"level":3,"title":".min : Vector3","slug":"min-vector3","link":"#min-vector3","children":[]},{"level":3,"title":".max : Vector3","slug":"max-vector3","link":"#max-vector3","children":[]}]},{"level":2,"title":"\u65B9\u6CD5\uFF08Methods\uFF09","slug":"\u65B9\u6CD5-methods","link":"#\u65B9\u6CD5-methods","children":[{"level":3,"title":".applyMatrix4 ( matrix : Matrix4 ) : this","slug":"applymatrix4-matrix-matrix4-this","link":"#applymatrix4-matrix-matrix4-this","children":[]},{"level":3,"title":".clampPoint ( point : Vector3, target : Vector3 ) : Vector3","slug":"clamppoint-point-vector3-target-vector3-vector3","link":"#clamppoint-point-vector3-target-vector3-vector3","children":[]},{"level":3,"title":".clone () : Box3","slug":"clone-box3","link":"#clone-box3","children":[]},{"level":3,"title":".containsBox ( box : Box3 ) : Boolean","slug":"containsbox-box-box3-boolean","link":"#containsbox-box-box3-boolean","children":[]},{"level":3,"title":".containsPoint ( point : Vector3 ) : Boolean","slug":"containspoint-point-vector3-boolean","link":"#containspoint-point-vector3-boolean","children":[]},{"level":3,"title":".copy ( box : Box3 ) : this","slug":"copy-box-box3-this","link":"#copy-box-box3-this","children":[]},{"level":3,"title":".distanceToPoint ( point : Vector3 ) : Float","slug":"distancetopoint-point-vector3-float","link":"#distancetopoint-point-vector3-float","children":[]},{"level":3,"title":".equals ( box : Box3 ) : Boolean","slug":"equals-box-box3-boolean","link":"#equals-box-box3-boolean","children":[]},{"level":3,"title":".expandByObject ( object : Object3D ) : this","slug":"expandbyobject-object-object3d-this","link":"#expandbyobject-object-object3d-this","children":[]},{"level":3,"title":".expandByPoint ( point : Vector3 ) : this","slug":"expandbypoint-point-vector3-this","link":"#expandbypoint-point-vector3-this","children":[]},{"level":3,"title":".expandByScalar ( scalar : Float ) : this","slug":"expandbyscalar-scalar-float-this","link":"#expandbyscalar-scalar-float-this","children":[]},{"level":3,"title":".expandByVector ( vector : Vector3 ) : this","slug":"expandbyvector-vector-vector3-this","link":"#expandbyvector-vector-vector3-this","children":[]},{"level":3,"title":".getBoundingSphere ( target : Sphere ) : Sphere","slug":"getboundingsphere-target-sphere-sphere","link":"#getboundingsphere-target-sphere-sphere","children":[]},{"level":3,"title":".getCenter ( target : Vector3 ) : Vector3","slug":"getcenter-target-vector3-vector3","link":"#getcenter-target-vector3-vector3","children":[]},{"level":3,"title":".getParameter ( point : Vector3, target : Vector3 ) : Vector3","slug":"getparameter-point-vector3-target-vector3-vector3","link":"#getparameter-point-vector3-target-vector3-vector3","children":[]},{"level":3,"title":".getSize ( target : Vector3 ) : Vector3","slug":"getsize-target-vector3-vector3","link":"#getsize-target-vector3-vector3","children":[]},{"level":3,"title":".intersect ( box : Box3 ) : this","slug":"intersect-box-box3-this","link":"#intersect-box-box3-this","children":[]},{"level":3,"title":".intersectsBox ( box : Box3 ) : Boolean","slug":"intersectsbox-box-box3-boolean","link":"#intersectsbox-box-box3-boolean","children":[]},{"level":3,"title":".intersectsPlane ( plane : Plane ) : Boolean","slug":"intersectsplane-plane-plane-boolean","link":"#intersectsplane-plane-plane-boolean","children":[]},{"level":3,"title":".intersectsSphere ( sphere : Sphere ) : Boolean","slug":"intersectssphere-sphere-sphere-boolean","link":"#intersectssphere-sphere-sphere-boolean","children":[]},{"level":3,"title":".intersectsTriangle ( triangle : Triangle ) : Boolean","slug":"intersectstriangle-triangle-triangle-boolean","link":"#intersectstriangle-triangle-triangle-boolean","children":[]},{"level":3,"title":".isEmpty () : Boolean","slug":"isempty-boolean","link":"#isempty-boolean","children":[]},{"level":3,"title":".makeEmpty () : this","slug":"makeempty-this","link":"#makeempty-this","children":[]},{"level":3,"title":".set ( min : Vector3, max : Vector3 ) : this","slug":"set-min-vector3-max-vector3-this","link":"#set-min-vector3-max-vector3-this","children":[]},{"level":3,"title":".setFromArray ( array : Array ) : this","slug":"setfromarray-array-array-this","link":"#setfromarray-array-array-this","children":[]},{"level":3,"title":".setFromBufferAttribute ( attribute : BufferAttribute ) : this","slug":"setfrombufferattribute-attribute-bufferattribute-this","link":"#setfrombufferattribute-attribute-bufferattribute-this","children":[]},{"level":3,"title":".setFromCenterAndSize ( center : Vector3, size : Vector3 ) : this","slug":"setfromcenterandsize-center-vector3-size-vector3-this","link":"#setfromcenterandsize-center-vector3-size-vector3-this","children":[]},{"level":3,"title":".setFromObject ( object : Object3D ) : this","slug":"setfromobject-object-object3d-this","link":"#setfromobject-object-object3d-this","children":[]},{"level":3,"title":".setFromPoints ( points : Array ) : this","slug":"setfrompoints-points-array-this","link":"#setfrompoints-points-array-this","children":[]},{"level":3,"title":".translate ( offset : Vector3 ) : this","slug":"translate-offset-vector3-this","link":"#translate-offset-vector3-this","children":[]},{"level":3,"title":".union ( box : Box3 ) : this","slug":"union-box-box3-this","link":"#union-box-box3-this","children":[]}]}],"git":{"createdTime":1678004336000,"updatedTime":1678004336000,"contributors":[{"name":"unknown","email":"374688995@qq.com","commits":1}]},"readingTime":{"minutes":9.79,"words":2937},"filePathRelative":"APIdocs/math/Box3.md","localizedDate":"2023\u5E743\u67085\u65E5","autoDesc":true}');export{e as data};