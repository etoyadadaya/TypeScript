class MyMap {
    private static instance: MyMap;

    map: Map<number, string> = new Map();

    private constructor() { };

    // cleaning map
    clean() {
        this.map = new Map();
    }

    public static get(): MyMap {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}

// adding value in map by key
class Service1 {
    addMap(key: number, value: string) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}

// getting keys from map by key
class Service2 {
    getKeys(key: number) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}

new Service1().addMap(1, 'working'); // working
new Service2().getKeys(1); // undefined
