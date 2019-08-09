"use strict";
function createSquare(config) {
    var square = {
        color: 'red',
        area: 10,
    };
    square.color = config.color || 'red';
    config.width > 0 ? (square.area = config.width * config.width) : '';
    return square;
}
console.log(createSquare({ color: 'blue', width: 15 }));
/*
* 可选参数的好处：
* 1、提前定义可能出现的值
* 2、防止使用不存在的值【Object是做不到的】
**/ 
