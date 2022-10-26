interface PADIUserService {
    getUsersInDatabasePD(): number;
}

/*
 @Positive() doing nothing, but returning index of param
 */

class PADUserService implements PADIUserService {
    private _users: number;

    getUsersInDatabasePD(): number {
        return this._users;
    }

    setUsersInDatabasePD(@Positive() num: number, @Positive() _: number,): void {
        this._users = num;
    }
}


function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        console.log(target);            // PADUserService: {}, same
        console.log(propertyKey);       // "setUsersInDatabasePD", same
        console.log(parameterIndex);    // 1, 0 <- the first one returns the last parameter
    }
}


// create new instance of class
const userServicePAD = new PADUserService();
