"use strict";
const AA = {};
// Easy Way
assertUser(AA);
AA.name = "Johan";
function assertUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("Not user");
}
// Hard Way
// if (assertUser(AA)) AA.name = "Johan";
//
// function assertUser(obj: unknown): obj is UserAssert {
//     return typeof obj === "object" && !!obj && "name" in obj;
// }
