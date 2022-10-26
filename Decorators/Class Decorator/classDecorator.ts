interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

// @nullUsers
@threeUsersAdvanced
class CDUserService implements IUserService {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}


/*
        target and constructor are the same, but in / nullUsers / it`s like Function
        and in / threeUsersAdvanced / it`s like constructive class
*/

// modifying class prototype
function nullUsers(target: Function) {
    target.prototype.users = 0;
}

// change class behavior
function threeUsersAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

// create new instance of class and use method to get number of users in db
console.log(new CDUserService().getUserInDatabase()); // 3
