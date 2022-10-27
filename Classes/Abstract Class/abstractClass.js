"use strict";
class AController {
    handleWithLogs(req) {
        console.log("start");
        this.handle(req);
        console.log("end");
    }
}
class UserController extends AController {
    handle(req) {
        console.log(req);
    }
}
const CC = new UserController();
CC.handleWithLogs('request');
