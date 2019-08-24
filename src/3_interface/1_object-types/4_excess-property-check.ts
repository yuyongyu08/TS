namespace Interface{
    interface MySquareConfig {
        color?: string,
        width?: number
    }

    interface MySquare {
        color: string,
        area: number
    }

    function createMySquare(squareConfig: MySquareConfig): MySquare{
        let newSquare: MySquare = {
            color: '',
            area: 0
        };

        newSquare.color = squareConfig.color || '' ;
        newSquare.area = (squareConfig.width && squareConfig.width > 0 ? squareConfig.width * squareConfig.width : 0);

        return newSquare;
    }

    /*
    * 额外属性检查：如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
    */
// let mySquare = createMySquare({colour: 'red', width: 10}); //err 'colour' does not exist in type 'MySquareConfig'

    /*
    * 修复方法1：增加索引标示
    **/

// interface MySquareConfig {
//     color?: string,
//     width?: number,
//     [propName: string]: any
// }

    /*
    * 修复方法2：将这个对象赋值给一个另一个变量： 因为squareOptions不会经过额外属性检查 TODO 为什么？
    **/

    let squareOptions = {colour: 'red', width: 10};
    let mySquare = createMySquare(squareOptions);
}

