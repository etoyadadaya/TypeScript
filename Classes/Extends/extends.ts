type Extends_PaymentStatus = "new" | "paid";

class Extends_Payment {
    id: number;
    status: Extends_PaymentStatus = "new";

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = "paid";
    }
}

class PersistedPayment extends Extends_Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // save in db
    }

    override pay(date?: Date) {
        super.pay();
        if (date) this.paidAt = date;
    }
}

new PersistedPayment();
