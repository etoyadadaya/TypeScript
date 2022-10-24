"use strict";
var RequestTypeWrong;
(function (RequestTypeWrong) {
    RequestTypeWrong["GET"] = "get";
    RequestTypeWrong["POST"] = "post";
})(RequestTypeWrong || (RequestTypeWrong = {}));
function fetchWithAuthWrong(url, method) {
}
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth("https://localhost:8080", "post");
let method = "post";
fetchWithAuth("https://localhost:8080", method);
