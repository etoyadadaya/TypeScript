interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;
    handle(request: any): any;
}

// abstract class interface
abstract class AbstractMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware;

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid;
        return mid;
    }

    handle(request: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}

// Authorization logic
class AuthMiddleware extends AbstractMiddleware {
    override handle(request: any): any {
        console.log('AuthMiddleware');
        if (request.userID === 1) {
            return super.handle(request);
        }
        return { error: 'Not authorized user' };
    }
}

// validation logic
class ValidateMiddleware extends AbstractMiddleware {
    override handle(request: any): any {
        console.log('ValidateMiddleware');
        if (request.userID === 1) {
            return super.handle(request);
        }
        return { error: 'No body' };
    }
}

// controller logic
class Controller extends AbstractMiddleware {
    override handle(request: any): any {
        console.log('Controller');
        return { success: request };
    }
}

// initialization
const auth = new AuthMiddleware();
const validate = new ValidateMiddleware();
const controller = new Controller();

// chain of commands which we can combine
auth.next(validate).next(controller);

// handle log for valid user. It can be not if you forget about userID or body
console.log(auth.handle({
    userID: 1,
    body: 'I am valid user'
}));

/*
 [LOG]: "AuthMiddleware"
 [LOG]: "ValidateMiddleware"
 [LOG]: "Controller"
 [LOG]: {
     "success": {
     "userID": 1,
     "body": "I am user1"
    }
  }
*/
