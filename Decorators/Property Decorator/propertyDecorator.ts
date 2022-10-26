interface PDIUserService {
    users: number;
    getUsersInDatabasePD(): number;
}

/*
     @Max() set upper bound to new values in users property
*/

class PDUserService implements PDIUserService {
    @Max(100)
    users: number;

    getUsersInDatabasePD(): number {
        return 0;
    }
}

// Decorator for redeclare getter and setter, editing class property
function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol
    ) => {
        let value: number;

        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log(`value greater ${max}`);
            } else {
                value = newValue;
            }
        }

        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}


// create new instance of class
const userServicePD = new PDUserService();

// set users value = 1
userServicePD.users = 1;

console.log(userServicePD.users); // 1

// set users value = 1000
userServicePD.users = 1000; // "value greater 100"

console.log(userServicePD.users); // 1
