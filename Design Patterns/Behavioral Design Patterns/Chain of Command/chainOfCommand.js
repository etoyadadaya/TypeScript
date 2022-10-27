"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('AuthMiddleware');
        if (request.userID === 1) {
            return super.handle(request);
        }
        return { error: 'Not authorized user' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('ValidateMiddleware');
        if (request.userID === 1) {
            return super.handle(request);
        }
        return { error: 'No body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log('Controller');
        return { success: request };
    }
}
const auth = new AuthMiddleware();
const validate = new ValidateMiddleware();
const controller = new Controller();
auth.next(validate).next(controller);
console.log(auth.handle({
    userID: 1,
    body: 'I am valid user'
}));
