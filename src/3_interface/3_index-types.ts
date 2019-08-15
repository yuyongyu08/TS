
/*
* 索引型接口，定义一个【索引签名】：描述了对象索引的类型，还有相应的索引返回值类型
*/

interface StringArray {
    [index: number]: string
}

let myStringArray: StringArray;
myStringArray = ['foo', 'bar'];

let first: string = myStringArray[0];


/*
* 共有2种索引签名：字符型和数字型
* 两者可共用，但是【数字型索引】的返回值必须是【字符型索引】返回值类型的【子类型】
*/

class Animal {
    name: string = ''
}

class Dog extends Animal{
    breed: string = ''
}

interface AnimalSet {
    [index: string]: Animal;
    [index: number]: Dog
}

// interface AnimalSet2 {
//     [index: string]: Dog;
//     [index: number]: Animal //Numeric index type 'Animal' is not assignable to string index type 'Dog'
// }


/*
* 可以给索引签名设为只读，防止给索引赋值
*/
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myReadonlyStringArray: ReadonlyStringArray = ['foo', 'bar'];

// myReadonlyStringArray[1] = 'baz'; //Index signature in type 'ReadonlyStringArray' only permits reading






