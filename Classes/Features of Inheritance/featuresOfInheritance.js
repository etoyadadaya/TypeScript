"use strict";
class Features_Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class Features_PersistedPayment extends Features_Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date)
            this.paidAt = date;
    }
}
new Features_PersistedPayment();
class Features_User {
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
class Features_Admin extends Features_User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
new Features_Admin();
class Features_HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
