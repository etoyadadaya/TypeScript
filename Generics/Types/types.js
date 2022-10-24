"use strict";
function logMiddleWareT(data) {
    console.log(data);
    return data;
}
const ress1Types = logMiddleWareT(10);
const ress2Types = logMiddleWareT("10");
function logMiddleWareTypes(data) {
    console.log(data);
    return data;
}
const ress3Types = logMiddleWareTypes(10);
const ress4Types = logMiddleWareTypes("10");
function getSplitedHalfTypes(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalfTypes([1, 2, 3, 4, 5, 6]);
getSplitedHalfTypes(["1", "2", "3", "4", "5", "6"]);
const split = getSplitedHalfTypes;
const split2 = getSplitedHalfTypes;
const logLineI = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
const logLineType = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
