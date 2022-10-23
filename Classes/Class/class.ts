class Class_User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const class_user = new Class_User("Johan");
class_user.name = "John";

class Class_Admin {
    role: number;
}

const class_admin = new Class_Admin();
class_admin.role = 1;
