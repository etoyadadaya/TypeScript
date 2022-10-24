/*
    func toString(), with <T> and return string type if not -> undefined
 */

function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString();
    }

    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}

console.log(toString(3));
console.log(toString(true));
console.log(toString([1, 2]));
console.log(toString({a: 1}));
