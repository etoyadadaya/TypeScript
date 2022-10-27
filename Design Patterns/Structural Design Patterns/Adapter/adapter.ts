// KV database class *default*
class KVDataBase {
    private db: Map<string, string> = new Map();

    // saving in db (key, value) -> strings
    save(key: string, value: string) {
        this.db.set(key, value);
    }
}

// Persistent database class
class PersistentDB {
    // saving in db (data) -> object
    savePersistent(data: Object) {
        console.log(data);
    }
}

/*
        Adapter for Persistent database which expands KVDataBase class:
        - receiving class under which we adapt
        - overriding save method to implement the logic of working with an object instead of strings
*/
class PersistentDBAdapter extends KVDataBase {
    constructor(public database: PersistentDB) {
        super();
    }

    // override save method to add new logic for working with objects instead of strings
    override save(key: string, value: string): void {
        this.database.savePersistent({ key, value });
    }
}

// some function which saving in db (key, value) -> strings
function execute(base: KVDataBase) {
    base.save('key', 'my value');
}

// executing the launch function using the adapter for the database
execute(new PersistentDBAdapter(new PersistentDB));
