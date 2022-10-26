/*
    Декоратор, который добавляет свойство
    createdAt в класс, фиксируя дату создания
*/

interface TIUserService {
    users: number;
    getUsersInDatabase(): number;
}

@CreatedAtAdvanced
class TUserService implements TIUserService {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function CreatedAtAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

/*
        This is the way to get access to 'createdAt' property by:
        - creating type with property we need,
        - and using 'as' - keyword with TIUserService & CreatedAt.
*/

type CreatedAt = {
    createdAt: Date;
}

console.log((new TUserService() as TIUserService & CreatedAt).createdAt);
