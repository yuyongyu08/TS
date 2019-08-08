/*
*  任意值：ts要求声明的所有变量要指定类型，如果实在不知道，可以用Any
* */

//1、普通类型在赋值过程中不允许改变类型
let username: string = 'yuyy';
// username = 10; //error TS2322: Type '10' is not assignable to type 'string'
console.log(username);

//2、声明为Any类型，相当于对类型不做限制
let foo: any = 'foo';
foo = 11;
console.log(foo);


//3、声明为any和声明为Object的区别：声明为Object类型的变量，可以给它赋任意值，但即便是确定的方法也不能随意调用
let notSure: any = 4;
notSure.abc = 123;
notSure.ifItExists();

let prettySure: Object = {};
// prettySure.toFixs(); //error TS2339: Property 'toFixs' does not exist on type 'Object'
