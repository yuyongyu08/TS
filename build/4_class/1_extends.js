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
var Extends;
(function (Extends) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.sayName = function () {
            console.log("I am " + this.name);
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, school) {
            var _this = _super.call(this, name) || this;
            _this.school = school;
            return _this;
        }
        Student.prototype.sayName = function () {
            _super.prototype.sayName.call(this);
        };
        Student.prototype.sayHello = function () {
            _super.prototype.sayName.call(this);
            console.log("My school is " + this.school);
        };
        return Student;
    }(Person));
    var s = new Student('yuyy', 'Yanshan University');
    s.sayName();
    s.sayHello();
})(Extends || (Extends = {}));
