// for start, we work with number then we add string, and after we need something else.
// In this case, we delete our union (:number | string) and type (:any). But, we can use generics (<?>):
function logMiddleWareT(data: number | string): number | string {
    console.log(data);
    return data;
}

const ress1Types = logMiddleWareT(10);
const ress2Types = logMiddleWareT("10");


// this func in universal for every data types:
// we can log: strings, numbers, object, etc...
function logMiddleWareTypes<T>(data: T): T {
    console.log(data);
    return data;
}

const ress3Types = logMiddleWareTypes<number>(10);
const ress4Types = logMiddleWareTypes<string>("10");


function getSplitedHalfTypes<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitedHalfTypes<number>([1,2,3,4,5,6]);
getSplitedHalfTypes<string>(["1", "2", "3", "4", "5", "6"]);


// generic is universal <T> === <Y> === <saddlebag>
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalfTypes;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalfTypes;


// how to typo:

interface ILogLine<T> {
    timeStamp: Date,
    data: T
}

const logLineI: ILogLine<{ a :number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};


type LogLineType<T> = {
    timeStamp: Date;
    data: T;
}

const logLineType: LogLineType<{ a :number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
