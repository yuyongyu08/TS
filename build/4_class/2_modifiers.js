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
var Modifiers;
(function (Modifiers) {
    var Person = /** @class */ (function () {
        function Person(name, ID, phoneNumber) {
            this.gender = 'male'; //readonly 必须在声明时或构造函数里被初始化
            this.name = name;
            this.ID = ID;
            this.phoneNumber = phoneNumber;
        }
        Person.prototype.sayHello = function () {
            console.log("I am " + this.name + ", my ID is " + this.ID + ", my phoneNumber is " + this.phoneNumber);
        };
        return Person;
    }());
    var p = new Person('yuyy', '123456', '15100120012');
    console.log(p.name); //yuyy
    console.log(p.ID); // error TS2341: Property 'ID' is private and only accessible within class 'Person'
    console.log(p.phoneNumber); //error TS2445: Property 'phoneNumber' is protected and only accessible within class 'Person' and its subclasses.
    console.log(p.gender); //male
    p.sayHello(); //I am yuyy, my ID is 123456, my phoneNumber is 15100120012
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, ID, phoneNumber, school) {
            var _this = _super.call(this, name, ID, phoneNumber) || this;
            _this.school = school;
            return _this;
        }
        Student.prototype.sayHello = function () {
            _super.prototype.sayHello.call(this);
            console.log("ID: " + this.ID); //private 只能在声明它的类被访问
            console.log("phoneNumber: " + this.phoneNumber); //protected 可以在子类中被访问
        };
        return Student;
    }(Person));
    var Programmer = /** @class */ (function (_super) {
        __extends(Programmer, _super);
        function Programmer(name, ID, phoneNumber, job) {
            var _this = _super.call(this, name, ID, phoneNumber) || this;
            _this.job = job;
            return _this;
        }
        Programmer.prototype.getInstance = function () {
            return new Programmer('yuyy', '123456', '15100120012', 'FE'); //构造函数为protected，可以在本类中被实例化
        };
        return Programmer;
    }(Person));
    var programmer = new Programmer('yuyy', '123456', '15100120012', 'FE'); // 构造函数为protected，不可以在类外被实例化
    /*
    * 参数属性：【修饰符】和【属性声明】结合
    */
    var NewPerson = /** @class */ (function () {
        function NewPerson(name, ID, phoneNumber, gender) {
            if (gender === void 0) { gender = 'male'; }
            this.name = name;
            this.ID = ID;
            this.phoneNumber = phoneNumber;
            this.gender = gender;
        }
        NewPerson.prototype.sayHello = function () {
            console.log("I am " + this.name + ", my ID is " + this.ID + ", my phoneNumber is " + this.phoneNumber);
        };
        return NewPerson;
    }());
})(Modifiers || (Modifiers = {}));
