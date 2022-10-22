"use strict";
const UsEr = {
    login: "a"
};
function multiply(first, second) {
    if (first && second)
        return first * second;
    return first * first;
}
multiply(5);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
