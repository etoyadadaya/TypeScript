interface UserInterface {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

interface RoleInterface {
    roleId: number;
}

interface UserWithRoleInterface extends UserInterface, RoleInterface {
    createdAt: Date;
}

type User2 = {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

let user: UserWithRoleInterface = {
    name: "Johan",
    age: 20,
    skills: ["1","2"],
    roleId: 1,
    createdAt: new Date(),

    log() {
        return '';
    }
};

interface UserDictionaryInterface {
    [index: number]: UserInterface
}

type UserDictionaryType = {
    [index: number]: UserInterface
}
