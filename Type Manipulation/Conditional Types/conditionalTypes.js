"use strict";
const CTa = Math.random() > 0.5 ? 1 : 0;
const CTSuccess = {
    code: 200,
    data: 'done',
};
const CTError = {
    code: 200,
    data: new Error(),
};
class CTUser {
}
class CTUserPersistend extends CTUser {
}
function CTGetUser(dbIdOrId) {
    if (typeof dbIdOrId === "number") {
        return new CTUser();
    }
    else {
        return new CTUserPersistend();
    }
}
function CTGetUser2(id) {
    if (typeof id === "number") {
        return new CTUser();
    }
    else {
        return new CTUserPersistend();
    }
}
const CTres1 = CTGetUser2(1);
const CTres2 = CTGetUser2('Johan');
