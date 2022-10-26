interface IPrototype<T> {
    clone(): T;
}

class UserHistory implements IPrototype<UserHistory>{
    createdAt: Date;

    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    // cloning by creating new instance with same fields
    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

// create new user
let pUser = new UserHistory('a@a.ru', 'John');
console.log(pUser);         // UserHistory: { "email": 'a@a.ru', "name": 'John', "createdAt": same };

// clone user
let pUser2 = pUser.clone(); // UserHistory: { "email": 'a@a.ru', "name": 'John', "createdAt": same };

// change properties
pUser2.email = 'b@b.ru';
pUser2.name = "Johan";
console.log(pUser2);        // UserHistory: { "email": 'b@b.ru', "name": 'Johan', "createdAt": same };
