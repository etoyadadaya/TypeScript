interface UserGuard {
    name: string;
    email: string;
    login: string;
}

interface AdminGuard {
    name: string;
    role: number;
}

const UserGuard: UserGuard = {
    name: "Apollo",
    email: "apollo@gmail.com",
    login: "apollo"
}

function logIdGuard(id: string | number) {
    if (isStringGuard(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

// type guard
function isStringGuard(x: string | number): x is string {
    return typeof x === "string";
}

// type guard
function isAdmin(user: UserGuard | AdminGuard): user is AdminGuard {
    return "role" in user;
}

// type guard with casting and checking role
function isAdminAlternative(user: UserGuard | AdminGuard): user is AdminGuard {
    return (user as AdminGuard).role !== undefined;
}

function setRoleGuard(user: UserGuard | AdminGuard) {
    if (isAdmin(user)) {
        user.role = 1;
    } else {
        throw new Error("user is not admin");
    }
}
