"use strict";
class VS_User {
    constructor(name) {
        this.name = name;
    }
}
class VS_Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const vs_users = new VS_Users();
vs_users.push(new VS_User("A"));
vs_users.push(new VS_User("B"));
console.log(vs_users.toString());
class VS_UserList {
    push(u) {
        this.users.push(u);
    }
}
class VS_Payment {
}
class VS_UserWithPayment extends VS_Payment {
}
class VS_UserWithPayment2 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
