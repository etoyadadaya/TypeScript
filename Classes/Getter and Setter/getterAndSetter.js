"use strict";
class gAs_User {
    set login(l) {
        this._login = `user-${l}`;
    }
    get login() {
        return this._login;
    }
}
const gAs_user = new gAs_User();
gAs_user.login = "myLogin";
