"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DFUserService = class DFUserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
};
DFUserService = __decorate([
    setUsersDF(150),
    logDF()
], DFUserService);
function nullUsersDF(target) {
    target.prototype.users = 0;
}
function setUsersDF(users) {
    console.log('setUsersDF init');
    return (target) => {
        console.log('setUsersDF init');
        target.prototype.users = users;
    };
}
function logDF() {
    console.log('logD init');
    return (target) => {
        console.log('logD run');
    };
}
function setUsersAdvancedDF(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = 150;
            }
        };
    };
}
function threeUsersAdvancedDF(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
console.log(new DFUserService().getUserInDatabase());
