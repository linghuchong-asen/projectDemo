const t=JSON.parse('{"key":"v-5a621bc6","path":"/APIdocs/math/Vector3.html","title":"三维向量（Vector3）","lang":"zh-CN","frontmatter":{"description":"该类表示的是一个三维向量（3D vector (https://en.wikipedia.org/wiki/Vector_space)）。 一个三维向量表示的是一个有顺序的、三个为一组的数字组合（标记为x、y和z）， 可被用来表示很多事物，例如：\\r一个位于三维空间中的点。; \\r一个在三维空间中的方向与长度的定义。在three.js中，长度总是从(0, ...","head":[["meta",{"property":"og:url","content":"https://threeForGisDocs/APIdocs/math/Vector3.html"}],["meta",{"property":"og:site_name","content":"API文档--three.js封装"}],["meta",{"property":"og:title","content":"三维向量（Vector3）"}],["meta",{"property":"og:description","content":"该类表示的是一个三维向量（3D vector (https://en.wikipedia.org/wiki/Vector_space)）。 一个三维向量表示的是一个有顺序的、三个为一组的数字组合（标记为x、y和z）， 可被用来表示很多事物，例如：\\r一个位于三维空间中的点。; \\r一个在三维空间中的方向与长度的定义。在three.js中，长度总是从(0, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-05T08:18:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-05T08:18:56.000Z"}]]},"headers":[{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[{"level":3,"title":"Vector3( x : Float, y : Float, z : Float )","slug":"vector3-x-float-y-float-z-float","link":"#vector3-x-float-y-float-z-float","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".isVector3 : Boolean","slug":"isvector3-boolean","link":"#isvector3-boolean","children":[]},{"level":3,"title":".x : Float","slug":"x-float","link":"#x-float","children":[]},{"level":3,"title":".y : Float","slug":"y-float","link":"#y-float","children":[]},{"level":3,"title":".z : Float","slug":"z-float","link":"#z-float","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":".add ( v : Vector3 ) : this","slug":"add-v-vector3-this","link":"#add-v-vector3-this","children":[]},{"level":3,"title":".addScalar ( s : Float ) : this","slug":"addscalar-s-float-this","link":"#addscalar-s-float-this","children":[]},{"level":3,"title":".addScaledVector ( v : Vector3, s : Float ) : this","slug":"addscaledvector-v-vector3-s-float-this","link":"#addscaledvector-v-vector3-s-float-this","children":[]},{"level":3,"title":".addVectors ( a : Vector3, b : Vector3 ) : this","slug":"addvectors-a-vector3-b-vector3-this","link":"#addvectors-a-vector3-b-vector3-this","children":[]},{"level":3,"title":".applyAxisAngle ( axis : Vector3, angle : Float ) : this","slug":"applyaxisangle-axis-vector3-angle-float-this","link":"#applyaxisangle-axis-vector3-angle-float-this","children":[]},{"level":3,"title":".applyEuler ( euler : Euler ) : this","slug":"applyeuler-euler-euler-this","link":"#applyeuler-euler-euler-this","children":[]},{"level":3,"title":".applyMatrix3 ( m : Matrix3 ) : this","slug":"applymatrix3-m-matrix3-this","link":"#applymatrix3-m-matrix3-this","children":[]},{"level":3,"title":".applyMatrix4 ( m : Matrix4 ) : this","slug":"applymatrix4-m-matrix4-this","link":"#applymatrix4-m-matrix4-this","children":[]},{"level":3,"title":".applyNormalMatrix ( m : Matrix3 ) : this","slug":"applynormalmatrix-m-matrix3-this","link":"#applynormalmatrix-m-matrix3-this","children":[]},{"level":3,"title":".applyQuaternion ( quaternion : Quaternion ) : this","slug":"applyquaternion-quaternion-quaternion-this","link":"#applyquaternion-quaternion-quaternion-this","children":[]},{"level":3,"title":".angleTo ( v : Vector3 ) : Float","slug":"angleto-v-vector3-float","link":"#angleto-v-vector3-float","children":[]},{"level":3,"title":".ceil () : this","slug":"ceil-this","link":"#ceil-this","children":[]},{"level":3,"title":".clamp ( min : Vector3, max : Vector3 ) : this","slug":"clamp-min-vector3-max-vector3-this","link":"#clamp-min-vector3-max-vector3-this","children":[]},{"level":3,"title":".clampLength ( min : Float, max : Float ) : this","slug":"clamplength-min-float-max-float-this","link":"#clamplength-min-float-max-float-this","children":[]},{"level":3,"title":".clampScalar ( min : Float, max : Float ) : this","slug":"clampscalar-min-float-max-float-this","link":"#clampscalar-min-float-max-float-this","children":[]},{"level":3,"title":".clone () : Vector3","slug":"clone-vector3","link":"#clone-vector3","children":[]},{"level":3,"title":".copy ( v : Vector3 ) : this","slug":"copy-v-vector3-this","link":"#copy-v-vector3-this","children":[]},{"level":3,"title":".cross ( v : Vector3 ) : this","slug":"cross-v-vector3-this","link":"#cross-v-vector3-this","children":[]},{"level":3,"title":".crossVectors ( a : Vector3, b : Vector3 ) : this","slug":"crossvectors-a-vector3-b-vector3-this","link":"#crossvectors-a-vector3-b-vector3-this","children":[]},{"level":3,"title":".distanceTo ( v : Vector3 ) : Float","slug":"distanceto-v-vector3-float","link":"#distanceto-v-vector3-float","children":[]},{"level":3,"title":".manhattanDistanceTo ( v : Vector3 ) : Float","slug":"manhattandistanceto-v-vector3-float","link":"#manhattandistanceto-v-vector3-float","children":[]},{"level":3,"title":".distanceToSquared ( v : Vector3 ) : Float","slug":"distancetosquared-v-vector3-float","link":"#distancetosquared-v-vector3-float","children":[]},{"level":3,"title":".divide ( v : Vector3 ) : this","slug":"divide-v-vector3-this","link":"#divide-v-vector3-this","children":[]},{"level":3,"title":".divideScalar ( s : Float ) : this","slug":"dividescalar-s-float-this","link":"#dividescalar-s-float-this","children":[]},{"level":3,"title":".dot ( v : Vector3 ) : Float","slug":"dot-v-vector3-float","link":"#dot-v-vector3-float","children":[]},{"level":3,"title":".equals ( v : Vector3 ) : Boolean","slug":"equals-v-vector3-boolean","link":"#equals-v-vector3-boolean","children":[]},{"level":3,"title":".floor () : this","slug":"floor-this","link":"#floor-this","children":[]},{"level":3,"title":".fromArray ( array : Array, offset : Integer ) : this","slug":"fromarray-array-array-offset-integer-this","link":"#fromarray-array-array-offset-integer-this","children":[]},{"level":3,"title":".fromBufferAttribute ( attribute : BufferAttribute, index : Integer ) : this","slug":"frombufferattribute-attribute-bufferattribute-index-integer-this","link":"#frombufferattribute-attribute-bufferattribute-index-integer-this","children":[]},{"level":3,"title":".getComponent ( index : Integer ) : Float","slug":"getcomponent-index-integer-float","link":"#getcomponent-index-integer-float","children":[]},{"level":3,"title":".length () : Float","slug":"length-float","link":"#length-float","children":[]},{"level":3,"title":".manhattanLength () : Float","slug":"manhattanlength-float","link":"#manhattanlength-float","children":[]},{"level":3,"title":".lengthSq () : Float","slug":"lengthsq-float","link":"#lengthsq-float","children":[]},{"level":3,"title":".lerp ( v : Vector3, alpha : Float ) : this","slug":"lerp-v-vector3-alpha-float-this","link":"#lerp-v-vector3-alpha-float-this","children":[]},{"level":3,"title":".lerpVectors ( v1 : Vector3, v2 : Vector3, alpha : Float ) : this","slug":"lerpvectors-v1-vector3-v2-vector3-alpha-float-this","link":"#lerpvectors-v1-vector3-v2-vector3-alpha-float-this","children":[]},{"level":3,"title":".max ( v : Vector3 ) : this","slug":"max-v-vector3-this","link":"#max-v-vector3-this","children":[]},{"level":3,"title":".min ( v : Vector3 ) : this","slug":"min-v-vector3-this","link":"#min-v-vector3-this","children":[]},{"level":3,"title":".multiply ( v : Vector3 ) : this","slug":"multiply-v-vector3-this","link":"#multiply-v-vector3-this","children":[]},{"level":3,"title":".multiplyScalar ( s : Float ) : this","slug":"multiplyscalar-s-float-this","link":"#multiplyscalar-s-float-this","children":[]},{"level":3,"title":".multiplyVectors ( a : Vector3, b : Vector3 ) : this","slug":"multiplyvectors-a-vector3-b-vector3-this","link":"#multiplyvectors-a-vector3-b-vector3-this","children":[]},{"level":3,"title":".negate () : this","slug":"negate-this","link":"#negate-this","children":[]},{"level":3,"title":".normalize () : this","slug":"normalize-this","link":"#normalize-this","children":[]},{"level":3,"title":".project ( camera : Camera ) : this","slug":"project-camera-camera-this","link":"#project-camera-camera-this","children":[]},{"level":3,"title":".projectOnPlane ( planeNormal : Vector3 ) : this","slug":"projectonplane-planenormal-vector3-this","link":"#projectonplane-planenormal-vector3-this","children":[]},{"level":3,"title":".projectOnVector ( v : Vector3 ) : this","slug":"projectonvector-v-vector3-this","link":"#projectonvector-v-vector3-this","children":[]},{"level":3,"title":".reflect ( normal : Vector3 ) : this","slug":"reflect-normal-vector3-this","link":"#reflect-normal-vector3-this","children":[]},{"level":3,"title":".round () : this","slug":"round-this","link":"#round-this","children":[]},{"level":3,"title":".roundToZero () : this","slug":"roundtozero-this","link":"#roundtozero-this","children":[]},{"level":3,"title":".set ( x : Float, y : Float, z : Float ) : this","slug":"set-x-float-y-float-z-float-this","link":"#set-x-float-y-float-z-float-this","children":[]},{"level":3,"title":".setComponent ( index : Integer, value : Float ) : this","slug":"setcomponent-index-integer-value-float-this","link":"#setcomponent-index-integer-value-float-this","children":[]},{"level":3,"title":".setFromCylindrical ( c : Cylindrical ) : this","slug":"setfromcylindrical-c-cylindrical-this","link":"#setfromcylindrical-c-cylindrical-this","children":[]},{"level":3,"title":".setFromCylindricalCoords ( radius : Float, theta : Float, y : Float ) : this","slug":"setfromcylindricalcoords-radius-float-theta-float-y-float-this","link":"#setfromcylindricalcoords-radius-float-theta-float-y-float-this","children":[]},{"level":3,"title":".setFromEuler ( euler : Euler ) : this","slug":"setfromeuler-euler-euler-this","link":"#setfromeuler-euler-euler-this","children":[]},{"level":3,"title":".setFromMatrixColumn ( matrix : Matrix4, index : Integer ) : this","slug":"setfrommatrixcolumn-matrix-matrix4-index-integer-this","link":"#setfrommatrixcolumn-matrix-matrix4-index-integer-this","children":[]},{"level":3,"title":".setFromMatrix3Column ( matrix : Matrix3, index : Integer ) : this","slug":"setfrommatrix3column-matrix-matrix3-index-integer-this","link":"#setfrommatrix3column-matrix-matrix3-index-integer-this","children":[]},{"level":3,"title":".setFromMatrixPosition ( m : Matrix4 ) : this","slug":"setfrommatrixposition-m-matrix4-this","link":"#setfrommatrixposition-m-matrix4-this","children":[]},{"level":3,"title":".setFromMatrixScale ( m : Matrix4 ) : this","slug":"setfrommatrixscale-m-matrix4-this","link":"#setfrommatrixscale-m-matrix4-this","children":[]},{"level":3,"title":".setFromSpherical ( s : Spherical ) : this","slug":"setfromspherical-s-spherical-this","link":"#setfromspherical-s-spherical-this","children":[]},{"level":3,"title":".setFromSphericalCoords ( radius : Float, phi : Float, theta : Float ) : this","slug":"setfromsphericalcoords-radius-float-phi-float-theta-float-this","link":"#setfromsphericalcoords-radius-float-phi-float-theta-float-this","children":[]},{"level":3,"title":".setLength ( l : Float ) : this","slug":"setlength-l-float-this","link":"#setlength-l-float-this","children":[]},{"level":3,"title":".setScalar ( scalar : Float ) : this","slug":"setscalar-scalar-float-this","link":"#setscalar-scalar-float-this","children":[]},{"level":3,"title":".setX ( x : Float ) : this","slug":"setx-x-float-this","link":"#setx-x-float-this","children":[]},{"level":3,"title":".setY ( y : Float ) : this","slug":"sety-y-float-this","link":"#sety-y-float-this","children":[]},{"level":3,"title":".setZ ( z : Float ) : this","slug":"setz-z-float-this","link":"#setz-z-float-this","children":[]},{"level":3,"title":".sub ( v : Vector3 ) : this","slug":"sub-v-vector3-this","link":"#sub-v-vector3-this","children":[]},{"level":3,"title":".subScalar ( s : Float ) : this","slug":"subscalar-s-float-this","link":"#subscalar-s-float-this","children":[]},{"level":3,"title":".subVectors ( a : Vector3, b : Vector3 ) : this","slug":"subvectors-a-vector3-b-vector3-this","link":"#subvectors-a-vector3-b-vector3-this","children":[]},{"level":3,"title":".toArray ( array : Array, offset : Integer ) : Array","slug":"toarray-array-array-offset-integer-array","link":"#toarray-array-array-offset-integer-array","children":[]},{"level":3,"title":".transformDirection ( m : Matrix4 ) : this","slug":"transformdirection-m-matrix4-this","link":"#transformdirection-m-matrix4-this","children":[]},{"level":3,"title":".unproject ( camera : Camera ) : this","slug":"unproject-camera-camera-this","link":"#unproject-camera-camera-this","children":[]},{"level":3,"title":".random () : this","slug":"random-this","link":"#random-this","children":[]}]}],"git":{"createdTime":1678004336000,"updatedTime":1678004336000,"contributors":[{"name":"unknown","email":"374688995@qq.com","commits":1}]},"readingTime":{"minutes":15.75,"words":4724},"filePathRelative":"APIdocs/math/Vector3.md","localizedDate":"2023年3月5日","autoDesc":true}');export{t as data};
