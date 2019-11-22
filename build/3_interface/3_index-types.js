"use strict";
/*
* 索引型接口，定义一个【索引签名】：描述了对象索引的类型，还有相应的索引返回值类型
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStringArray;
myStringArray = ['foo', 'bar'];
var first = myStringArray[0];
/*
* 共有2种索引签名：字符型和数字型
* 两者可共用，但是【数字型索引】的返回值必须是【字符型索引】返回值类型的【子类型】
*/
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breed = '';
        return _this;
    }
    return Dog;
}(Animal));
var myReadonlyStringArray = ['foo', 'bar'];
// myReadonlyStringArray[1] = 'baz'; //Index signature in type 'ReadonlyStringArray' only permits reading
//# sourceMappingURL=3_index-types.js.map