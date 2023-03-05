const t=JSON.parse('{"key":"v-1873521b","path":"/APIdocs/math/Matrix3.html","title":"三维矩阵（Matrix3）","lang":"zh-CN","frontmatter":{"description":"一个表示3X3矩阵matrix (https://en.wikipedia.org/wiki/Matrix_(mathematics)).的类。 代码示例 ```js const m = new Matrix3(); ``` 注意行优先列优先的顺序。 set()方法参数采用行优先row-major (https://en.wikipedia.org/w...","head":[["meta",{"property":"og:url","content":"https://projectDemo/projectDemo/APIdocs/math/Matrix3.html"}],["meta",{"property":"og:site_name","content":"API文档--three.js封装"}],["meta",{"property":"og:title","content":"三维矩阵（Matrix3）"}],["meta",{"property":"og:description","content":"一个表示3X3矩阵matrix (https://en.wikipedia.org/wiki/Matrix_(mathematics)).的类。 代码示例 ```js const m = new Matrix3(); ``` 注意行优先列优先的顺序。 set()方法参数采用行优先row-major (https://en.wikipedia.org/w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-05T08:18:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-05T08:18:56.000Z"}]]},"headers":[{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"注意行优先列优先的顺序。","slug":"注意行优先列优先的顺序。","link":"#注意行优先列优先的顺序。","children":[]},{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[{"level":3,"title":"Matrix3()","slug":"matrix3","link":"#matrix3","children":[]}]},{"level":2,"title":"属性（Properties）","slug":"属性-properties","link":"#属性-properties","children":[{"level":3,"title":".elements : Array","slug":"elements-array","link":"#elements-array","children":[]}]},{"level":2,"title":"方法（Methods）","slug":"方法-methods","link":"#方法-methods","children":[{"level":3,"title":".clone () : Matrix3","slug":"clone-matrix3","link":"#clone-matrix3","children":[]},{"level":3,"title":".copy ( m : Matrix3 ) : this","slug":"copy-m-matrix3-this","link":"#copy-m-matrix3-this","children":[]},{"level":3,"title":".determinant () : Float","slug":"determinant-float","link":"#determinant-float","children":[]},{"level":3,"title":".equals ( m : Matrix3 ) : Boolean","slug":"equals-m-matrix3-boolean","link":"#equals-m-matrix3-boolean","children":[]},{"level":3,"title":".extractBasis ( xAxis : Vector3, yAxis : Vector3, zAxis : Vector3 ) : this","slug":"extractbasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this","link":"#extractbasis-xaxis-vector3-yaxis-vector3-zaxis-vector3-this","children":[]},{"level":3,"title":".fromArray ( array : Array, offset : Integer ) : this","slug":"fromarray-array-array-offset-integer-this","link":"#fromarray-array-array-offset-integer-this","children":[]},{"level":3,"title":".invert () : this","slug":"invert-this","link":"#invert-this","children":[]},{"level":3,"title":".getNormalMatrix ( m : Matrix4 ) : this","slug":"getnormalmatrix-m-matrix4-this","link":"#getnormalmatrix-m-matrix4-this","children":[]},{"level":3,"title":".identity () : this","slug":"identity-this","link":"#identity-this","children":[]},{"level":3,"title":".makeRotation ( theta : Float ) : this","slug":"makerotation-theta-float-this","link":"#makerotation-theta-float-this","children":[]},{"level":3,"title":".makeScale ( x : Float, y : Float ) : this","slug":"makescale-x-float-y-float-this","link":"#makescale-x-float-y-float-this","children":[]},{"level":3,"title":".makeTranslation ( x : Float, y : Float ) : this","slug":"maketranslation-x-float-y-float-this","link":"#maketranslation-x-float-y-float-this","children":[]},{"level":3,"title":".multiply ( m : Matrix3 ) : this","slug":"multiply-m-matrix3-this","link":"#multiply-m-matrix3-this","children":[]},{"level":3,"title":".multiplyMatrices ( a : Matrix3, b : Matrix3 ) : this","slug":"multiplymatrices-a-matrix3-b-matrix3-this","link":"#multiplymatrices-a-matrix3-b-matrix3-this","children":[]},{"level":3,"title":".multiplyScalar ( s : Float ) : this","slug":"multiplyscalar-s-float-this","link":"#multiplyscalar-s-float-this","children":[]},{"level":3,"title":".set ( n11 : Float, n12 : Float, n13 : Float, n21 : Float, n22 : Float, n23 : Float, n31 : Float, n32 : Float, n33 : Float ) : this","slug":"set-n11-float-n12-float-n13-float-n21-float-n22-float-n23-float-n31-float-n32-float-n33-float-this","link":"#set-n11-float-n12-float-n13-float-n21-float-n22-float-n23-float-n31-float-n32-float-n33-float-this","children":[]},{"level":3,"title":".premultiply ( m : Matrix3 ) : this","slug":"premultiply-m-matrix3-this","link":"#premultiply-m-matrix3-this","children":[]},{"level":3,"title":".setFromMatrix4 ( m : Matrix4 ) : this","slug":"setfrommatrix4-m-matrix4-this","link":"#setfrommatrix4-m-matrix4-this","children":[]},{"level":3,"title":".setUvTransform ( tx : Float, ty : Float, sx : Float, sy : Float, rotation : Float, cx : Float, cy : Float ) : this","slug":"setuvtransform-tx-float-ty-float-sx-float-sy-float-rotation-float-cx-float-cy-float-this","link":"#setuvtransform-tx-float-ty-float-sx-float-sy-float-rotation-float-cx-float-cy-float-this","children":[]},{"level":3,"title":".toArray ( array : Array, offset : Integer ) : Array","slug":"toarray-array-array-offset-integer-array","link":"#toarray-array-array-offset-integer-array","children":[]},{"level":3,"title":".transpose () : this","slug":"transpose-this","link":"#transpose-this","children":[]},{"level":3,"title":".transposeIntoArray ( array : Array ) : this","slug":"transposeintoarray-array-array-this","link":"#transposeintoarray-array-array-this","children":[]}]}],"git":{"createdTime":1678004336000,"updatedTime":1678004336000,"contributors":[{"name":"unknown","email":"374688995@qq.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1645},"filePathRelative":"APIdocs/math/Matrix3.md","localizedDate":"2023年3月5日","autoDesc":true}');export{t as data};
