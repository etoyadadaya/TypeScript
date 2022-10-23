"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    // type guard
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const resU = new UserBuilder();
const resA = new UserBuilder();
resU.setName("U");
resA.setName("A");
let this_user = new UserBuilder();
if (this_user.isAdmin()) {
    console.log(this_user); // UserBuilder
}
else {
    console.log(this_user); // AdminBuilder
}
