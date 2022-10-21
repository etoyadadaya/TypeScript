"use strict";
const user = {
    firstName: "Johan",
    secondName: "Lie",
    city: "Moscow",
    age: 20,
    skills: {
        dev: true,
        devOps: true
    }
};
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.secondName} ${userEntity.skills}`;
}
console.log(getFullName(user));
