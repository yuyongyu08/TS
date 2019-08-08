
/*
* 解构赋值
**/

//常见应用1：变量交换
let firstVar:string = 'hello';
let secondVar:string = 'world';

[firstVar, secondVar] = [secondVar, firstVar];

console.log(firstVar, secondVar); //world hello


//常见应用2：函数参数
type Param = {f: string, s?:string};
function sayHi({f, s}: Param): void{
  console.log(f, s);
}

sayHi({f: secondVar, s: firstVar}); //hello world
sayHi({f: secondVar}); //hello undefined


//常见应用3：默认值
let {weight, height = 10}: {weight: number, height?: number} = {weight: 100};
console.log(`weight:${weight},height:${height}`); //weight:100,height:10

//常见应用4：展开运算符(...)


//常见应用5：按需获取
interface Person {
    name: string,
    age: number
}

let person: Person = {
    name: 'yuyy',
    age: 18
};

let {name: personName} = person;
console.log(personName);
