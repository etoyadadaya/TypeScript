interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

/*
     execution order:
                     [LOG]: "setUsersDF init"
                     [LOG]: "logD init"
                     [LOG]: "logD run"
                     [LOG]: "setUsersDF run"
                     [LOG]: 1000
*/

// @nullUsersDF
@setUsersDF(150)
@logDF()
// @threeUsersAdvancedDF
// @setUsersAdvancedDF(150)
class DFUserService implements IUserService {
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
function nullUsersDF(target: Function) {
    target.prototype.users = 0;
}

// factory modifying class prototype
function setUsersDF(users: number) {
    console.log('setUsersDF init');
    return (target: Function) => {
        console.log('setUsersDF init');
        target.prototype.users = users;
    }
}

function logDF() {
    console.log('logD init');
    return (target: Function) => {
        console.log('logD run');
    }
}

// factory changing class behavior
function setUsersAdvancedDF(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = 150;
        }
    }
}

// changing class behavior
function threeUsersAdvancedDF<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

// create new instance of class and use method to get number of users in db
console.log(new DFUserService().getUserInDatabase()); // 150
