
/*
* 函数型接口，就是定义了一个函数【调用签名】:只有参数列表和返回值类型的函数定义
*/
interface SearchFunction {
    (source: string, substring: string): boolean  //参数列表里的每个参数都需要名字和类型
}

let search: SearchFunction;
search = function (src, subStr) { //1.函数的参数名不需要与接口里定义的名字相匹配，TS会按位置检查，要求对应位置上的参数类型兼容 2.可以不指定类型，TS会推断类型
    return src.search(subStr) > -1
};

console.log(search('hello world!', 'll')); //true
console.log(search('hello world!', 'aa')); //false

console.log(search('hello world!', 123)); //Argument of type '123' is not assignable to parameter of type 'string'.

