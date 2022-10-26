interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class T2UserService implements IUserService {
    users: number = 1000;

    @Catch({ rethrow: true })
    getUserInDatabase(): number {
        throw new Error('error!');
    }
}


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

// create new instance of class and use method to get number of users in db
console.log(new T2UserService().getUserInDatabase());
