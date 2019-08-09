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

//额外属性检查！！！
// let mySquare = createMySquare({colour: 'red', width: 10}); //err 'colour' does not exist in type 'MySquareConfig'

/*
* 修复方法1：增加索引标示
**/

interface MySquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any
}

/*
* 修复方法2：
**/