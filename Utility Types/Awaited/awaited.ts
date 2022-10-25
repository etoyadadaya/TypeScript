type AA = Awaited<Promise<string>>;
type AA2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{ name: 'analytics', url: 'http://' }];
}

type R = Awaited<ReturnType<typeof getMenu>>;


// new way
async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x];
}


// old way
async function getArray2<T>(x: T): Promise<T[]> {
    return [await x];
}
