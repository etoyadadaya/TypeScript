"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const class_user = new User("Johan");
class_user.name = "John";
class Admin {
}
const class_admin = new Admin();
class_admin.role = 1;
