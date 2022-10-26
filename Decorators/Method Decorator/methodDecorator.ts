interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class MDUserService implements IUserService {
    users: number = 1000;

    @LogMD
    getUserInDatabase(): number {
        throw new Error('error!');
    }
}


function LogMD(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    console.log(target);        // MDUserService: {} - our class
    console.log(propertyKey);   // "getUserInDatabase" - method name
    console.log(descriptor);    // "writable": true, "enumerable": false, "configurable": true - properties

/*
        - in this case:
        - getUserInDatabase() does not throw an error,
        - prints "no error" to the console instead
*/

    descriptor.value = () => {
        console.log('no error!');
    }
}


// create new instance of class and use method to get number of users in db
console.log(new MDUserService().getUserInDatabase());
