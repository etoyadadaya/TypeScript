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
function isStringGuard(x) {
    return typeof x === "string";
}
function isAdmin(user) {
    return "role" in user;
}
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
