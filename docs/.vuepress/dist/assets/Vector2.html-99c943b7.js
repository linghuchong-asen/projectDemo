const t=JSON.parse('{"key":"v-5dcbcd04","path":"/APIdocs/math/Vector2.html","title":"二维向量（Vector2）","lang":"zh-CN","frontmatter":{"description":"表示2D vector (https://en.wikipedia.org/wiki/Vector_space)（二维向量）的类。 一个二维向量是一对有顺序的数字（标记为x和y），可用来表示很多事物，例如：\\r一个位于二维空间中的点（例如一个在平面上的点）。; \\r一个在平面上的方向与长度的定义。在three.js中，长度总是从(0, 0)到(x, y)的...","head":[["meta",{"property":"og:url","content":"https://threeForGisDocs/APIdocs/math/Vector2.html"}],["meta",{"property":"og:site_name","content":"API文档--three.js封装"}],["meta",{"property":"og:title","content":"二维向量（Vector2）"}],["meta",{"property":"og:description","content":"表示2D vector (https://en.wikipedia.org/wiki/Vector_space)（二维向量）的类。 一个二维向量是一对有顺序的数字（标记为x和y），可用来表示很多事物，例如：\\r一个位于二维空间中的点（例如一个在平面上的点）。; \\r一个在平面上的方向与长度的定义。在three.js中，长度总是从(0, 0)到(x, y)的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-05T08:18:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-05T08:18:56.000Z"}]]},"headers":[{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[{"level":3,"title":"Vector2( x : number, y : number)","slug":"vector2-x-number-y-number","link":"#vector2-x-number-y-number","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".height : Float","slug":"height-float","link":"#height-float","children":[]},{"level":3,"title":".isVector2 : Boolean","slug":"isvector2-boolean","link":"#isvector2-boolean","children":[]},{"level":3,"title":".width : Float","slug":"width-float","link":"#width-float","children":[]},{"level":3,"title":".x : Float","slug":"x-float","link":"#x-float","children":[]},{"level":3,"title":".y : Float","slug":"y-float","link":"#y-float","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":".addScalar ( s : Float ) : this","slug":"addscalar-s-float-this","link":"#addscalar-s-float-this","children":[]},{"level":3,"title":".addScaledVector ( v : Vector2, s : Float ) : this","slug":"addscaledvector-v-vector2-s-float-this","link":"#addscaledvector-v-vector2-s-float-this","children":[]},{"level":3,"title":".addVectors ( a : Vector2, b : Vector2 ) : this","slug":"addvectors-a-vector2-b-vector2-this","link":"#addvectors-a-vector2-b-vector2-this","children":[]},{"level":3,"title":".angle () : Float","slug":"angle-float","link":"#angle-float","children":[]},{"level":3,"title":".applyMatrix3 ( m : Matrix3 ) : this","slug":"applymatrix3-m-matrix3-this","link":"#applymatrix3-m-matrix3-this","children":[]},{"level":3,"title":".ceil () : this","slug":"ceil-this","link":"#ceil-this","children":[]},{"level":3,"title":".clamp ( min : Vector2, max : Vector2 ) : this","slug":"clamp-min-vector2-max-vector2-this","link":"#clamp-min-vector2-max-vector2-this","children":[]},{"level":3,"title":".clampLength ( min : Float, max : Float ) : this","slug":"clamplength-min-float-max-float-this","link":"#clamplength-min-float-max-float-this","children":[]},{"level":3,"title":".clampScalar ( min : Float, max : Float ) : this","slug":"clampscalar-min-float-max-float-this","link":"#clampscalar-min-float-max-float-this","children":[]},{"level":3,"title":".clone () : Vector2","slug":"clone-vector2","link":"#clone-vector2","children":[]},{"level":3,"title":".copy ( v : Vector2 ) : this","slug":"copy-v-vector2-this","link":"#copy-v-vector2-this","children":[]},{"level":3,"title":".distanceTo ( v : Vector2 ) : Float","slug":"distanceto-v-vector2-float","link":"#distanceto-v-vector2-float","children":[]},{"level":3,"title":".manhattanDistanceTo ( v : Vector2 ) : Float","slug":"manhattandistanceto-v-vector2-float","link":"#manhattandistanceto-v-vector2-float","children":[]},{"level":3,"title":".distanceToSquared ( v : Vector2 ) : Float","slug":"distancetosquared-v-vector2-float","link":"#distancetosquared-v-vector2-float","children":[]},{"level":3,"title":".divide ( v : Vector2 ) : this","slug":"divide-v-vector2-this","link":"#divide-v-vector2-this","children":[]},{"level":3,"title":".divideScalar ( s : Float ) : this","slug":"dividescalar-s-float-this","link":"#dividescalar-s-float-this","children":[]},{"level":3,"title":".dot ( v : Vector2 ) : Float","slug":"dot-v-vector2-float","link":"#dot-v-vector2-float","children":[]},{"level":3,"title":".cross ( v : Vector2 ) : Float","slug":"cross-v-vector2-float","link":"#cross-v-vector2-float","children":[]},{"level":3,"title":".equals ( v : Vector2 ) : Boolean","slug":"equals-v-vector2-boolean","link":"#equals-v-vector2-boolean","children":[]},{"level":3,"title":".floor () : this","slug":"floor-this","link":"#floor-this","children":[]},{"level":3,"title":".fromArray ( array : Array, offset : Integer ) : this","slug":"fromarray-array-array-offset-integer-this","link":"#fromarray-array-array-offset-integer-this","children":[]},{"level":3,"title":".fromBufferAttribute ( attribute : BufferAttribute, index : Integer ) : this","slug":"frombufferattribute-attribute-bufferattribute-index-integer-this","link":"#frombufferattribute-attribute-bufferattribute-index-integer-this","children":[]},{"level":3,"title":".getComponent ( index : Integer ) : Float","slug":"getcomponent-index-integer-float","link":"#getcomponent-index-integer-float","children":[]},{"level":3,"title":".length () : Float","slug":"length-float","link":"#length-float","children":[]},{"level":3,"title":".manhattanLength () : Float","slug":"manhattanlength-float","link":"#manhattanlength-float","children":[]},{"level":3,"title":".lengthSq () : Float","slug":"lengthsq-float","link":"#lengthsq-float","children":[]},{"level":3,"title":".lerp ( v : Vector2, alpha : Float ) : this","slug":"lerp-v-vector2-alpha-float-this","link":"#lerp-v-vector2-alpha-float-this","children":[]},{"level":3,"title":".lerpVectors ( v1 : Vector2, v2 : Vector2, alpha : Float ) : this","slug":"lerpvectors-v1-vector2-v2-vector2-alpha-float-this","link":"#lerpvectors-v1-vector2-v2-vector2-alpha-float-this","children":[]},{"level":3,"title":".negate () : this","slug":"negate-this","link":"#negate-this","children":[]},{"level":3,"title":".normalize () : this","slug":"normalize-this","link":"#normalize-this","children":[]},{"level":3,"title":".max ( v : Vector2 ) : this","slug":"max-v-vector2-this","link":"#max-v-vector2-this","children":[]},{"level":3,"title":".min ( v : Vector2 ) : this","slug":"min-v-vector2-this","link":"#min-v-vector2-this","children":[]},{"level":3,"title":".multiply ( v : Vector2 ) : this","slug":"multiply-v-vector2-this","link":"#multiply-v-vector2-this","children":[]},{"level":3,"title":".multiplyScalar ( s : Float ) : this","slug":"multiplyscalar-s-float-this","link":"#multiplyscalar-s-float-this","children":[]},{"level":3,"title":".rotateAround ( center : Vector2, angle : Float ) : this","slug":"rotatearound-center-vector2-angle-float-this","link":"#rotatearound-center-vector2-angle-float-this","children":[]},{"level":3,"title":".round () : this","slug":"round-this","link":"#round-this","children":[]},{"level":3,"title":".roundToZero () : this","slug":"roundtozero-this","link":"#roundtozero-this","children":[]},{"level":3,"title":".set ( x : Float, y : Float ) : this","slug":"set-x-float-y-float-this","link":"#set-x-float-y-float-this","children":[]},{"level":3,"title":".setComponent ( index : Integer, value : Float ) : this","slug":"setcomponent-index-integer-value-float-this","link":"#setcomponent-index-integer-value-float-this","children":[]},{"level":3,"title":".setLength ( l : Float ) : this","slug":"setlength-l-float-this","link":"#setlength-l-float-this","children":[]},{"level":3,"title":".setScalar ( scalar : Float ) : this","slug":"setscalar-scalar-float-this","link":"#setscalar-scalar-float-this","children":[]},{"level":3,"title":".setX ( x : Float ) : this","slug":"setx-x-float-this","link":"#setx-x-float-this","children":[]},{"level":3,"title":".setY ( y : Float ) : this","slug":"sety-y-float-this","link":"#sety-y-float-this","children":[]},{"level":3,"title":".sub ( v : Vector2 ) : this","slug":"sub-v-vector2-this","link":"#sub-v-vector2-this","children":[]},{"level":3,"title":".subScalar ( s : Float ) : this","slug":"subscalar-s-float-this","link":"#subscalar-s-float-this","children":[]},{"level":3,"title":".subVectors ( a : Vector2, b : Vector2 ) : this","slug":"subvectors-a-vector2-b-vector2-this","link":"#subvectors-a-vector2-b-vector2-this","children":[]},{"level":3,"title":".toArray ( array : Array, offset : Integer ) : Array","slug":"toarray-array-array-offset-integer-array","link":"#toarray-array-array-offset-integer-array","children":[]},{"level":3,"title":".random () : this","slug":"random-this","link":"#random-this","children":[]}]}],"git":{"createdTime":1678004336000,"updatedTime":1678004336000,"contributors":[{"name":"unknown","email":"374688995@qq.com","commits":1}]},"readingTime":{"minutes":10.67,"words":3202},"filePathRelative":"APIdocs/math/Vector2.md","localizedDate":"2023年3月5日","autoDesc":true}');export{t as data};
