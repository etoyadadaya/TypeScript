interface ADIUserService {
    getUsersInDatabasePD(): number;
}

/*
 @LodAD() for accessors adding only once, because its working for all accessors
 */

class ADUserService implements ADIUserService {
    private _users: number;

    @LogAD()
    get users() {
        return this._users;
    }

    set users(num: number) {
        this._users = num;
    }

    getUsersInDatabasePD(): number {
        throw new Error('error');
    }
}

function LogAD() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const set = descriptor.set;
        descriptor.set = (...args: any) => {
            console.log(args);
            set?.apply(target, args);
        }
    }
}


// create new instance of class
const userServiceAD = new ADUserService();
userServiceAD.users = 1;
console.log(userServiceAD.users);
