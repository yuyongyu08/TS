interface Point{
    readonly x: number,
    readonly y: number
}

let p: Point = {x: 10, y:-10};

// p.x = 5; // Cannot assign to 'x' because it is a read-only property.



let arr1: number[] = [1, 2, 3];

/*
* 只读数组的写法：ReadonlyArray<T>和Array<T>相同，只是把操作方法都移除了
**/
let arr2: ReadonlyArray<number> = [4, 5, 6];

// arr2.push(8); //Property 'push' does not exist on type 'readonly number[]'.

/*
* 只读数组不能直接赋给普通数组，可以通过【类型断言】重写
**/
// arr1 = arr2; //The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

arr1 = arr2 as number[];
arr1.push(8);
console.log(arr1);

/*
* readonly VS const
* 【属性】使用readonly
* 【变量】使用const
**/