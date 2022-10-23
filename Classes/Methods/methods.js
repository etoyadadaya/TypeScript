"use strict";
var Method_PaymentStatus;
(function (Method_PaymentStatus) {
    Method_PaymentStatus[Method_PaymentStatus["Hold"] = 0] = "Hold";
    Method_PaymentStatus[Method_PaymentStatus["Processed"] = 1] = "Processed";
    Method_PaymentStatus[Method_PaymentStatus["Reversed"] = 2] = "Reversed";
})(Method_PaymentStatus || (Method_PaymentStatus = {}));
class Method_Payment {
    constructor(id) {
        this.status = Method_PaymentStatus.Hold;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unHoldPayment() {
        if (this.status === Method_PaymentStatus.Processed) {
            throw new Error("Payment cannot be returned");
        }
        this.status = Method_PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const method_payment = new Method_Payment(1);
method_payment.unHoldPayment();
console.log(method_payment);
const method_time = method_payment.getPaymentLifeTime();
console.log(method_time);
