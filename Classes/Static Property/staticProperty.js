"use strict";
class UserService {
    constructor(id) { }
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = "postgresql";
})();
UserService.getUser(1);
const inst = new UserService(1);
inst.create();
