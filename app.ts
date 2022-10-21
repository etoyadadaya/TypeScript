const user = {
    firstName: "Johan",
    secondName: "Lie",
    city: "Moscow",
    age: 20,
    skills: {
        dev: true,
        devOps: true
    }
}

function getFullName(userEntity: { firstName: string, secondName: string }): string {
    return `${userEntity.firstName} ${userEntity.secondName}`;
}

console.log(getFullName(user));
