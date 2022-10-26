"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    console.log(`initialization ${name}`);
    return function () {
        console.log(`call ${name}`);
    };
}
let MyClass = class MyClass {
    constructor(_) { }
    methods(_) { }
    static method(_) { }
};
__decorate([
    Uni('property')
], MyClass.prototype, "props", void 0);
__decorate([
    Uni('method'),
    __param(0, Uni('method parameter'))
], MyClass.prototype, "methods", null);
__decorate([
    Uni('static property')
], MyClass, "prop", void 0);
__decorate([
    Uni('static method'),
    __param(0, Uni('static method parameter'))
], MyClass, "method", null);
MyClass = __decorate([
    Uni('class'),
    __param(0, Uni('constructor parameter'))
], MyClass);
