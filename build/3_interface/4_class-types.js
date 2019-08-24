"use strict";
//实现接口
var Clock = /** @class */ (function () {
    function Clock(h, m, s) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var clock = new Clock(12, 0, 0);
