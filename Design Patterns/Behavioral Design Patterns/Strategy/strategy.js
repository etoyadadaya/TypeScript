"use strict";
class SUser {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    auth(user) {
        if (user.githubToken) {
            return true;
        }
        return false;
    }
}
const sUser = new SUser();
sUser.jwtToken = 'token';
const sAuth = new Auth(new JWTStrategy());
console.log(sAuth.authUser(sUser));
sAuth.setStrategy(new GithubStrategy());
console.log(sAuth.authUser(sUser));
