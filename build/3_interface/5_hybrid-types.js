"use strict";
function getCounter() {
    var counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () {
        console.log(this.interval);
    };
    return counter;
}
var counter = getCounter();
counter(10);
counter.interval = 234;
counter.reset();
//# sourceMappingURL=5_hybrid-types.js.map