"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 3;
input = ["a", "b"];
function run(i) {
    if (typeof i == "number") {
        i++; // number
    }
    else if (typeof i == "string") {
        i.toUpperCase(); // string
    }
    i; // still unknown
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("https://localhost:8080");
        }
        catch (err) {
            if (err instanceof Error)
                console.log(err.message);
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("https://localhost:8080");
        }
        catch (err) {
            const e = err;
            console.log(e.message);
        }
    });
}
