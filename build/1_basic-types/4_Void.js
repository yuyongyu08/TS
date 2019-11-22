"use strict";
/*
* 空值：主要用于没有任何返回值的函数
* */
function sayHello() {
    console.log('hello ts!');
}
sayHello();
//对于已经声明空值的函数，如果返回值，编译报错
function sleep() {
    console.log('bay!');
    // return 123 //error TS2322: Type '123' is not assignable to type 'void'
}
//给变量声明为void，只能赋值为undefined。一般不这么做，没有意义
var voidVar;
voidVar = undefined;
// voidVar = null; //null也不行了？官网上说可以的...
// voidVar = 123; //error TS2322: Type '123' is not assignable to type 'void'
// voidVar = 'abc'; //error TS2322: Type '"abc"' is not assignable to type 'void'
//# sourceMappingURL=4_Void.js.map