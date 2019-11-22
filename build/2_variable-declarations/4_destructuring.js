"use strict";
/*
* 解构赋值
**/
var _a;
//常见应用1：变量交换
var firstVar = 'hello';
var secondVar = 'world';
_a = [secondVar, firstVar], firstVar = _a[0], secondVar = _a[1];
console.log(firstVar, secondVar); //world hello
function sayHi(_a) {
    var f = _a.f, s = _a.s;
    console.log(f, s);
}
sayHi({ f: secondVar, s: firstVar }); //hello world
sayHi({ f: secondVar }); //hello undefined
//常见应用3：默认值
var _b = { weight: 100 }, weight = _b.weight, _c = _b.height, height = _c === void 0 ? 10 : _c;
console.log("weight:" + weight + ",height:" + height); //weight:100,height:10
var person = {
    name: 'yuyy',
    age: 18
};
var personName = person.name;
console.log(personName);
//# sourceMappingURL=4_destructuring.js.map