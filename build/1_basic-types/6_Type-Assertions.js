"use strict";
/*
* 类型断言：需要在还不确定类型的时候就访问其中一个类型的属性或方法
* */
// function getLength(something: string | number): number{
//     return something.length;
// }
// function getLength(something: string | number): number{
//     if(something.length){
//         return something.length;
//     }else {
//         return something.toString().length;
//     }
// }
function getLength(something) {
    return something.length;
}
console.log(getLength('hello'));
console.log(getLength(123));
var something = 'this is something';
//语法1：<>
var strLength = something.length;
//语法2：as
var strLength1 = something.length;
//注意：JSX中只能用as
//# sourceMappingURL=6_Type-Assertions.js.map