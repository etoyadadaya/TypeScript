"use strict";
function logMiddleWare(data) {
    console.log(data);
    return data;
}
const ress1 = logMiddleWare(10);
const ress2 = logMiddleWare("10");
function logMiddleWareG(data) {
    console.log(data);
    return data;
}
const ress3 = logMiddleWareG(10);
const ress4 = logMiddleWareG("10");
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 2, 3, 4, 5, 6]);
getSplitedHalf(["1", "2", "3", "4", "5", "6"]);
