
/*
* 混合型接口：一个对象可以描述同时具有多种类型
*/
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void
}

function getCounter(): Counter{
    let counter = (function (start: number) {}) as Counter;
    counter.interval = 123;
    counter.reset = function () {
        console.log(this.interval);
    };

    return counter
}

let counter = getCounter();
counter(10);
counter.interval = 234;
counter.reset();