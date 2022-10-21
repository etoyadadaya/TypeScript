"use strict";
// 1 - Success
// 2 - In process
// 3 - Declined
// enum with nums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
// 's' - Success
// 'p' - In process
// 'd' - Declined
// enum with chars
var StatusCodeChar;
(function (StatusCodeChar) {
    StatusCodeChar["SUCCESS"] = "s";
    StatusCodeChar["IN_PROCESS"] = "p";
    StatusCodeChar["FAILED"] = "d";
})(StatusCodeChar || (StatusCodeChar = {}));
function compute() {
    return 3;
}
// enum with function
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
const res = {
    message: "Payment Success!",
    statusCode: StatusCode.SUCCESS
};
// res2 with const
const res2 = 1 /* RolesConst.ADMIN */;
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
