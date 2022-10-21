"use strict";
// we don`t need to do every time enums better to do literal types
var RequestTypeWrong;
(function (RequestTypeWrong) {
    RequestTypeWrong["GET"] = "get";
    RequestTypeWrong["POST"] = "post";
})(RequestTypeWrong || (RequestTypeWrong = {}));
function fetchWithAuthWrong(url, method) {
}
// that`s correct
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth("https://localhost:8080", "post");
let method = "post";
fetchWithAuth("https://localhost:8080", method); // type casting
