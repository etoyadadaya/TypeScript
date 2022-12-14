// Narrowing with Types Union
function logId(id: string | number | boolean) {
    if (typeof id === "string") { // narrow to string
        console.log(id.toLowerCase());
    } else if (typeof id === "number") { // narrow to number
        console.log(id);
    } else { // narrow to boolean
        console.log(id);
    }
}

// Union with Types
function LogError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err); // narrow to string[]
    } else {
        console.log(err); // narrow to string
    }
}

// Narrowing with object Type
function logObject(obj: { a: number } | { b: number }) {
    if ("a" in obj) {
        console.log(obj.a); // narrow to a.property
    } else {
        console.log(obj.b); // narrow to b.property
    }
}

// Crossing types
function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        // narrow to string, cause found crossing string type
    } else {
        console.log(a); // still string or number
    }
}

logId("hello");
logId(5);
logId(true);
