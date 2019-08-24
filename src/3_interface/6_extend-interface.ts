namespace ExtendInterface{
    /*
* 接口可以多接口继承，本质：从一个接口复制到另一个接口
*/

    interface Shape {
        color: string
    }

    interface Rectangle {
        width: number
    }

    interface MySquare extends Shape, Rectangle{
        sideLength: number
    }

    let square =  <MySquare> {};

    square.color = 'red';
    square.width = 10;
    square.sideLength = 10;
}

