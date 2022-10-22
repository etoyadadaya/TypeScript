"use strict";
var PaymentStatus2;
(function (PaymentStatus2) {
    PaymentStatus2["Success"] = "success";
    PaymentStatus2["Failed"] = "failed";
})(PaymentStatus2 || (PaymentStatus2 = {}));
function isSuccess(res) {
    return res.status === PaymentStatus2.Success;
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
