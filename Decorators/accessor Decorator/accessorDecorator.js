"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class ADUserService {
    get users() {
        return this._users;
    }
    set users(num) {
        this._users = num;
    }
    getUsersInDatabasePD() {
        throw new Error('error');
    }
}
__decorate([
    LogAD(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ADUserService.prototype, "users", null);
function LogAD() {
    return (target, propertyKey, descriptor) => {
        const set = descriptor.set;
        descriptor.set = (...args) => {
            console.log(args);
            set === null || set === void 0 ? void 0 : set.apply(target, args);
        };
    };
}
const userServiceAD = new ADUserService();
userServiceAD.users = 1;
console.log(userServiceAD.users);
