"use strict";
const AA = {};
assertUser(AA);
AA.name = "Johan";
function assertUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("Not user");
}
