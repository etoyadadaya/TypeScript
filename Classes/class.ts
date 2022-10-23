class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const class_user = new User("Johan");
class_user.name = "John";

class Admin {
    role: number;
}

const class_admin = new Admin();
class_admin.role = 1;
