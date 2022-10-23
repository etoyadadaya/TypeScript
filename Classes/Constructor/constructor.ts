class Constructor_User {
    name: string;
    age: number;

    // constructor overloading
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(AgeOrName?: string | number, age?: number) { // implementation constructor
        if (typeof AgeOrName === "string"){
            this.name = AgeOrName;
        } else if (typeof AgeOrName === "number") {
            this.age = AgeOrName;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
}

const constructor_user1 = new Constructor_User();
const constructor_user2 = new Constructor_User("Johan");
const constructor_user3 = new Constructor_User(20);
const constructor_user4 = new Constructor_User("John", 20);
