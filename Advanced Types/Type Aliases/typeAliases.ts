// type Alias
type htppMethod = "post" | "get";

function fetchWithAuthA(url: string, method: htppMethod): 1 | -1 {
    return 1;
}

fetchWithAuthA("https://localhost:8080", "post");

let methodPost = "post";

fetchWithAuthA("https://localhost:8080", methodPost as "post"); // type casting



type UserType = {
    name: string,
    age: number,
    skills: string[]
}

type RoleType = {
    name: string, // if intersect then name in role and name in user override
    id: number;
}

type UserWithRoleType = UserType & RoleType; // Intersection

// better for not override
type UserWithRole1 = {
    user: UserType,
    role: RoleType
}

let user1: UserType = {
    name: "john",
    age: 20,
    skills: ["1", "2"]
};

let user2: UserWithRoleType = {
    name: "john",
    age: 20,
    skills: ["1", "2"],
    id: 1
};
