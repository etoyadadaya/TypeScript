"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case "refund":
            break;
        case "checkout":
            break;
        case "reject":
            break;
        default:
            const _ = action;
            throw new Error("no such action");
    }
}
function isString(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    generateError("aboba");
}
