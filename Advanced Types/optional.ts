interface _User {
    login: string;
    password?: string;
}

const UsEr: _User = {
    login: "a"
}

function multiply (first: number, second?: number): number {
    if (first && second) return first * second;
    return first * first;
}

multiply(5);

interface UsErPro {
    login: string;
    password?: {
        type: "primary" | "secondary";
    };
}

function testPass(user: UsErPro) {
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiply(5);
}
