
/*
* 类类型接口：明确的强制一个类去符合某种契约，接口描述了类的公共部分
*/
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

//实现接口
class Clock implements ClockInterface{
    currentTime: Date = new Date();
    setTime(d: Date) : void{
        this.currentTime = d;
    }

    constructor(h: number, m: number, s: number){

    }
}

let clock = new Clock(12, 0, 0)