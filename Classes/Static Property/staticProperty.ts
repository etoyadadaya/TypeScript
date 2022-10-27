class sUserService {
    private static db: any;

    static getUser(id: number) {
        return sUserService.db.findById(id);
    }

    // we can`t use constructor in static. this is existed only in instance.
    constructor(id: number) {}

    create() {
        sUserService.db;
    }

    //initialize static class
    static {
        sUserService.db = "postgresql";
    }
}

sUserService.getUser(1); // without new (instance); for singleton *for example*
const inst = new sUserService(1); // with instancing we can`t access static properties.
inst.create();
