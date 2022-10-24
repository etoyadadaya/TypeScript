// for start, we work with number then we add string, and after we need something else.
// In this case, we delete our union (:number | string) and type (:any). But, we can use generics (<?>):
function logMiddleWare(data: number | string): number | string {
    console.log(data);
    return data;
}

const ress1 = logMiddleWare(10);
const ress2 = logMiddleWare("10");


// this func in universal for every data types:
// we can log: strings, numbers, object, etc...
function logMiddleWareG<T>(data: T): T {
    console.log(data);
    return data;
}

const ress3 = logMiddleWareG<number>(10);
const ress4 = logMiddleWareG<string>("10");


function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitedHalf<number>([1,2,3,4,5,6]);
getSplitedHalf<string>(["1", "2", "3", "4", "5", "6"]);
