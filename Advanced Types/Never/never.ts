function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) {}
}

function rec(): never {
    return rec();
}

type PaymentAction = "refund" | "checkout" | "reject";

function processAction(action: PaymentAction) {
    switch (action) {
        case "refund":
            //...
            break;
        case "checkout":
            //...
            break;
        case "reject":
            //...
            break;
        default:
            const _: never = action;
            throw new Error("no such action");
    }
}

function isString(x: string | number): boolean {
    if (typeof x === "string") {
        return true;
    } else if (typeof x === "number") {
        return false;
    }
    generateError("aboba");
}
