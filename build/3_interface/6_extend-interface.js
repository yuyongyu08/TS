"use strict";
var ExtendInterface;
(function (ExtendInterface) {
    /*
* 接口可以多接口继承，本质：从一个接口复制到另一个接口
*/
    var square = {};
    square.color = 'red';
    square.width = 10;
    square.sideLength = 10;
})(ExtendInterface || (ExtendInterface = {}));
//# sourceMappingURL=6_extend-interface.js.map