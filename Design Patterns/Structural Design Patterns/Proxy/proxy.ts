interface IPaymentAPI {
    getPaymentDetails(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
    id: number;
    sum: number;
}

// real payment api interface
class PaymentAPI implements IPaymentAPI {
    // imagine database instead of this
    private data = [{ id: 1, sum: 10000 }];

    // method for get payment details by id
    getPaymentDetails(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id === id);
    }
}

// implemented proxy payment api
class PaymentAccessProxy implements IPaymentAPI {
    constructor(private api: PaymentAPI, private userID: number) { }

    // method for get payment details by id with extended business logic and using proxy by api
    getPaymentDetails(id: number): IPaymentDetail | undefined {
        if (this.userID === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log('trying to get payment details!');
        return undefined;
    }
}

// user with access
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(1)); // [LOG]: { "id": 1, "sum": 10000 }

// user without access
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy.getPaymentDetails(2)); // [LOG]: undefined
