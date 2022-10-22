"use strict";
const UserGuard = {
    name: "Apollo",
    email: "apollo@gmail.com",
    login: "apollo"
};
function logIdGuard(id) {
    if (isStringGuard(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// type guard
function isStringGuard(x) {
    return typeof x === "string";
}
// type guard
function isAdmin(user) {
    return "role" in user;
}
// type guard with casting and checking role
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleGuard(user) {
    if (isAdmin(user)) {
        user.role = 1;
    }
    else {
        throw new Error("user is not admin");
    }
}
