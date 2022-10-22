let input: unknown;

input = 3;
input = ["a", "b"];

function run(i: unknown) {
    if (typeof i == "number") {
        i++; // number
    } else if (typeof i == "string") {
        i.toUpperCase(); // string
    }
    i; // still unknown
}

run(input);

async function getData() {
    try {
        await fetch("https://localhost:8080");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
    }
}

async function getDataForce() {
    try {
        await fetch("https://localhost:8080");
    } catch (err) {
        const e = err as Error;
        console.log(e.message);
    }
}

type U1 = unknown | null; // no matter what in union with unknown - it is unknown!

type I1 = unknown & string; // I1 = string
