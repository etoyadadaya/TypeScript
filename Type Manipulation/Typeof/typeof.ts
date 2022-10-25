let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = "str";
}

if (typeof strOrNum === "string") {
    console.log(strOrNum);
} else {
    console.log(strOrNum);
}

let str2OrNum: typeof strOrNum;

const TUser = {
    name: "Johan"
};

type keyOfUser = keyof typeof TUser; // type: "name"

enum TDirection {
    up,
    down
}

type d = keyof typeof TDirection; // type: "up" | "down"
