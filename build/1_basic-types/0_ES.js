"use strict";
/*
* 1. Boolean
**/
var isDone = true;
/*
* 2. String
**/
var color = 'blue';
//单引号、双引号都可以
color = "red";
//支持字符串模版
var myName = "yuyongyu";
var myAge = 18;
var msg = "I am " + myName + ", " + myAge + " years old this year";
console.log(msg);
/*
* 3. Array
**/
//方式1：
var numList = [1, 2, 3];
//方式2：
var roles = ['admin', 'user'];
/*
* 4. Null、Undefined
**/
//null和undefined除了对自身声明，没有太大用处
//TODO null和undefined是所有类型的子类，可以将他们赋值给其他类型。试了，不行，待验证
//  let pageNo: number = null; //error TS2322: Type 'null' is not assignable to type 'number'.
//配置文件中strictNullChecks要求null和undefined只能赋值给any和他们各自的类型，推荐开启此配置项
var nullVar = null;
var nullVar_1 = null;
createObj({ prop: 0 });
createObj(null);
//不包含原始类型（number、string、boolean等）
// createObj(42);
// createObj('abc');
// createObj(undefined);
