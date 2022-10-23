enum Method_PaymentStatus {
    Hold,
    Processed,
    Reversed
}

class Method_Payment {
    id: number;
    status: Method_PaymentStatus = Method_PaymentStatus.Hold;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unHoldPayment(): void {
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
