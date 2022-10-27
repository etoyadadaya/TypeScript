"use strict";
class sUserService {
    constructor(id) { }
    static getUser(id) {
        return sUserService.db.findById(id);
    }
    create() {
        sUserService.db;
    }
}
(() => {
    sUserService.db = "postgresql";
})();
sUserService.getUser(1);
const inst = new sUserService(1);
inst.create();
