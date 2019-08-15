"use strict";
/*
* TypeScript的核心原则之一是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名
**/
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myLabel = { size: 10, label: 'size 10 object' };
printLabel(myLabel);
/*
* 接口的类型检查对属性顺序没有要求，只要属性是否存在已经属性的类型有要求
**/
var labelObject;
