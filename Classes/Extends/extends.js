"use strict";
class Extends_Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends Extends_Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // save in db
    }
    pay(date) {
        super.pay();
        if (date)
            this.paidAt = date;
    }
}
new PersistedPayment();
