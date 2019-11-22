"use strict";
/*
* 元组：主要用于表达一个"类型固定，元素（个数）已知"的数组
* */
var x;
//1、赋值必须严格遵循声明：类型和长度都要和声明一致
x = ['hello', 18];
// x = [18, 18]; //error TS2322: Type 'number' is not assignable to type 'string'
//不允许直接扩充元组，但可以通过push追加
// x[2] = 'world'; //error TS2322: Type '"world"' is not assignable to type 'undefined'.
x.push('world');
console.log(x);
//# sourceMappingURL=1_Tuple.js.map