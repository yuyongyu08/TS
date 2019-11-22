"use strict";
/*
* 暂时性死区（TDZ，temporal dead zone）：
* 块级作用域变量始终“存在(present)”于它们的作用域里，但在直到声明它的代码之前的区域都属于暂时性死区。
*
* 块状作用域变量在声明之前无法被读写
*
**/
//1、在块状作用域变量声明前是可以被获取（capture）
function captureBlockScopeVar() {
    return blockScopeVar;
}
console.log('call:', captureBlockScopeVar());
var blockScopeVar;
//2、块状作用域变量不允许重新声明，但可以被函数作用域变量声明
function f(condition, x) {
    if (condition) {
        var x_1 = 20;
        return x_1;
    }
    return x;
}
//3、块状作用域会形成屏蔽（shadowing，在多个内嵌作用域中引入相同的变量名），不建议使用
//# sourceMappingURL=2_let.js.map