interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class DPUserService implements IUserService {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}


// simple decorator pattern for null users property
function nullUser(obj: IUserService) {
    obj.users = 0;
    return obj;
}

// simple decorator pattern for log users count
function logUsers(obj: IUserService) {
    console.log('users ' + obj.users);
    return obj;
}

// create new instance of class and use method to get number of users in db
console.log(new DPUserService().getUserInDatabase()); // 1000

// wrap class in decorator
console.log(nullUser(new DPUserService()).getUserInDatabase()); // 0

// combine decorators
console.log(logUsers(nullUser(new DPUserService())).getUserInDatabase()); // users 0
