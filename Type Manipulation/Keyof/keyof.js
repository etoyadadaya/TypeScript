"use strict";
const TMkey = 'age';
function getValueTM(obj, key) {
    return obj[key];
}
const tmuser = {
    name: "john",
    age: 30
};
const tmuserName = getValueTM(tmuser, "name");
console.log(tmuserName);
