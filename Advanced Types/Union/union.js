"use strict";
function logId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function LogError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
logId("hello");
logId(5);
logId(true);
