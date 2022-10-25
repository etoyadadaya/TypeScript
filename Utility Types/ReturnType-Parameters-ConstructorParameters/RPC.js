"use strict";
class RPCUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function RPCGetData(id) {
    return new RPCUser(id, "Johan");
}
