"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaymentDetails(id) {
        return this.data.find(d => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userID) {
        this.api = api;
        this.userID = userID;
    }
    getPaymentDetails(id) {
        if (this.userID === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log('trying to get payment details!');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(1));
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy.getPaymentDetails(2));
