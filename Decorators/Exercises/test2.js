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
class T2UserService {
    constructor() {
        this.users = 1000;
    }
    throwError() {
        throw new Error('error!');
    }
}
__decorate([
    Catch({ rethrow: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], T2UserService.prototype, "throwError", null);
function Catch({ rethrow } = { rethrow: false }) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = (...args) => {
            try {
                return method === null || method === void 0 ? void 0 : method.apply(target, args);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        };
    };
}
console.log(new T2UserService().throwError());
