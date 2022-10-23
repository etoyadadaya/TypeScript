interface Implements_ILogger {
    log(...args): void;
    error(...args): void;
}

class Implements_Logger implements Implements_ILogger {
    async error(...args): Promise<void> {
        console.log(...args);
    }

    log(...args): void {
        console.log(...args);
    }
}

interface Implements_IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface Implements_IDeletable {
    delete(): void;
}

class ImplementsUser implements Implements_IPayable, Implements_IDeletable {
    pay(paymentId: number | string): void {

    }

    delete(): void {

    }
}
