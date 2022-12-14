abstract class AController {
    abstract handle(req: any): void;

    handleWithLogs(req: any) {
        console.log("start");
        this.handle(req);
        console.log("end");
    }
}

class UserController extends AController {
    handle(req: any) {
        console.log(req);
    }
}

// new Controller - error
const CC = new UserController();
CC.handleWithLogs('request');
