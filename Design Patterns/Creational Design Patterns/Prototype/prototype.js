"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let pUser = new UserHistory('a@a.ru', 'John');
console.log(pUser);
let pUser2 = pUser.clone();
pUser2.email = 'b@b.ru';
pUser2.name = "Johan";
console.log(pUser2);
