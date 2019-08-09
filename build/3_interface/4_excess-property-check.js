"use strict";
function createMySquare(squareConfig) {
    var newSquare = {
        color: '',
        area: 0
    };
    newSquare.color = squareConfig.color || '';
    newSquare.area = (squareConfig.width && squareConfig.width > 0 ? squareConfig.width * squareConfig.width : 0);
    return newSquare;
}
/*
* 修复方法2：
**/ 
