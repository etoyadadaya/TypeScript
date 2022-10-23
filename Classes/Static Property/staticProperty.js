"use strict";
class UserService {
    // we can`t use constructor in static. this is existed only in instance.
    constructor(id) { }
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
//initialize static class
(() => {
    UserService.db = "postgresql";
})();
UserService.getUser(1); // without new (instance); for singleton *for example*
const inst = new UserService(1); // with instancing we can`t access static properties.
inst.create();
