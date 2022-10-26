interface T2IUserService {
    users: number;
    throwError(): number;
}

class T2UserService implements T2IUserService {
    users: number = 1000;

    @Catch({ rethrow: true })
    throwError(): number {
        throw new Error('error!');
    }
}


/*
     if rethrow = false => print error message
     if rethrow = true => throw error
*/

// Decorator for catching errors and process them
function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value;
        descriptor.value = (...args: any[]) => {
            try {
                return method?.apply(target, args);
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        }
    }
}

// create new instance of class and use method to throw error
console.log(new T2UserService().throwError());
