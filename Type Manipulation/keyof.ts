interface ITMUser {
    name: string;
    age: number;
}

type keysOfUser = keyof ITMUser;

const TMkey: keysOfUser = 'age';


// <K> extends keyof <T>. We get keys from <T> generic and give it to generic <K>.
// And because of that, we can use only name and age for our func.
function getValueTM<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const tmuser: ITMUser = {
    name: "john",
    age: 30
};

const tmuserName = getValueTM(tmuser, "name");

console.log(tmuserName);
