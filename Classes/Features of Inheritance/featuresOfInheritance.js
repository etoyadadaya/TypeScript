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
        const id = Math.random(); // work, because we don`t use Payment property, just create and use new variable;
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
        console.log(this.name); // work, only after super
    }
}
new Features_Admin();
// new Error("");
class Features_HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
