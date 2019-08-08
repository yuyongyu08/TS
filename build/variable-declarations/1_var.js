"use strict";
/*
* 作用域：
* 1、全局作用域
* 2、函数作用域
* 3、块状作用域（let、const）
**/
//var的特点
//1、同名变量可以重复声明
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2], [3, 4]])); //3
//2、作用域
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
//3、变量提升
// a++;
var a;
