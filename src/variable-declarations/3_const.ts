
/*
* 除了声明必须赋值且不允许修改外，其他规则和let相同，可以把const看作let的子集
**/

//1、const声明的引用类型变量，引用不可修改，但引用对用的值是可以修改的

const myArray: number[] = [1,2,3];

// myArray = [4,5,6]; //error TS2588: Cannot assign to 'myArray' because it is a constant.

myArray.push(4);

console.log(myArray.length); //4