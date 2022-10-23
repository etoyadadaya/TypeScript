class UserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    // type guard
    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const resU = new UserBuilder();
const resA = new UserBuilder();
resU.setName("U");
resA.setName("A");

let this_user: UserBuilder | AdminBuilder = new UserBuilder();

if (this_user.isAdmin()) {
    console.log(this_user); // UserBuilder
} else {
    console.log(this_user); // AdminBuilder
}
