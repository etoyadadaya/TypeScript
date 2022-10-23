class gAs_User {
    _login: string;
    _password: string;

    set login(l: string | number) {
        this._login = `user-${l}`
    }

    get login() {
        return this._login;
    }
}

const gAs_user = new gAs_User();
gAs_user.login = "myLogin";

