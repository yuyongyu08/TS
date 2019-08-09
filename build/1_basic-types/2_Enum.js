"use strict";
/*
* 枚举：名字更友好的数据集合
* */
//1、数字型枚举：成员的值自增长
//默认从0开始
var ENV;
(function (ENV) {
    ENV[ENV["dev"] = 0] = "dev";
    ENV[ENV["test"] = 1] = "test";
    ENV[ENV["gray"] = 2] = "gray";
    ENV[ENV["prod"] = 3] = "prod";
})(ENV || (ENV = {}));
var env = ENV.prod;
console.log(env); // 3
//可以显示指定开始值
var ENV_1;
(function (ENV_1) {
    ENV_1[ENV_1["dev"] = 1] = "dev";
    ENV_1[ENV_1["test"] = 2] = "test";
    ENV_1[ENV_1["gray"] = 3] = "gray";
    ENV_1[ENV_1["prod"] = 4] = "prod";
})(ENV_1 || (ENV_1 = {}));
var currentStage_1 = ENV_1.prod;
console.log(currentStage_1); //4
//可以无序全量指定
var ENV_2;
(function (ENV_2) {
    ENV_2[ENV_2["dev"] = 1] = "dev";
    ENV_2[ENV_2["test"] = 3] = "test";
    ENV_2[ENV_2["gray"] = 5] = "gray";
    ENV_2[ENV_2["prod"] = 7] = "prod";
})(ENV_2 || (ENV_2 = {}));
var currentStage_2 = ENV_2.prod;
console.log(currentStage_2); //7
//2、字符串型枚举
var Color;
(function (Color) {
    Color["red"] = "r";
    Color["blue"] = "b";
    Color["green"] = "g";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c); //b
//3、常量型枚举(用处不大)
//问题：对象也可以实现此功能，为什么还要增加枚举？
// 枚举类型的属性值都是【只读】的，不会被中途篡改，相比于object更加安全
// ENV.dev = 1; //error TS2540: Cannot assign to 'dev' because it is a read-only property.
//总结：【数字型枚举】是ts本意，最常用
//枚举类型的value只能是number或string，不能是其他
// enum Status {
//     success = {code: 1, desc: 'err'}
// }
