"use strict";
/*
* never：永远不会发生的类型
* */
//应用1：声明不会有返回值的函数
function infiniteLoop() {
    while (true) {
        console.log('危险！死循环！');
    }
}
//应用2：总是抛出错误的函数
function error(msg) {
    throw Error(msg);
}
error('something wrong!');
