"use strict";
var search;
search = function (src, subStr) {
    return src.search(subStr) > -1;
};
console.log(search('hello world!', 'll')); //true
console.log(search('hello world!', 'aa')); //false
// console.log(search('hello world!', 123)); //Argument of type '123' is not assignable to parameter of type 'string'.
