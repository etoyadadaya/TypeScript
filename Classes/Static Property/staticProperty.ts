class UserService {
    private static db: any;

    static getUser(id: number) {
        return UserService.db.findById(id);
    }

    // we can`t use constructor in static. this is existed only in instance.
    constructor(id: number) {}

    create() {
        UserService.db;
    }

    //initialize static class
    static {
        UserService.db = "postgresql";
    }
}

UserService.getUser(1); // without new (instance); for singleton *for example*
const inst = new UserService(1); // with instancing we can`t access static properties.
inst.create();
