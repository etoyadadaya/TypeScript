"use strict";
class DPUserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('users ' + obj.users);
    return obj;
}
console.log(new DPUserService().getUserInDatabase());
console.log(nullUser(new DPUserService()).getUserInDatabase());
console.log(logUsers(nullUser(new DPUserService())).getUserInDatabase());
