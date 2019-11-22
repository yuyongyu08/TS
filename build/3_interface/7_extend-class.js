"use strict";
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
var ExtendClass;
(function (ExtendClass) {
    /*
    * 接口继承类，会继承类的成员但不包括其实现，就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
    */
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.select = function () {
        };
        return Button;
    }(Control));
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBox.prototype.select = function () {
        };
        return TextBox;
    }(Control));
    /*
    * 接口同样会继承到类的private和protected成员，【当接口继承了拥有私有或受保护的成员的类时，这个接口只能被这个类或其子类所实现】
    */
    // class Image implements SelectableControl { //Property 'state' is missing in type 'Image' but required in type 'SelectableControl'.
    //     private state: any = 0;
    //
    //     select() {
    //     }
    // }
})(ExtendClass || (ExtendClass = {}));
//# sourceMappingURL=7_extend-class.js.map