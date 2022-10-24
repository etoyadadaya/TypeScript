type Features_PaymentStatus = "new" | "paid";

class Features_Payment {
    id: number;
    status: Features_PaymentStatus = "new";

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = "paid";
    }
}

class Features_PersistedPayment extends Features_Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random(); // work, because we don`t use Payment property, just create and use new variable;
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

new Features_PersistedPayment();

class Features_User {
    name: string = "user";

    constructor() {
        console.log(this.name);
    }
}

class Features_Admin extends Features_User {
    override name: string = "admin";

    constructor() {
        super();
        console.log(this.name); // work, only after super
    }
}

new Features_Admin();

// new Error("");

class Features_HttpError extends Error {
    code: number;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}
