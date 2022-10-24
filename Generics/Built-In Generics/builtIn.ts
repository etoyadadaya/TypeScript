const array: Array<number> = [1,2,3];

// Promise generic
async function testpr() {
    const pr = await new Promise<number>((resolve, reject) => {
        resolve(1);
    });
}

// Generic Record<key type, value type>
const check: Record<string, boolean> = {
    drive: true,
    kpp: false
};
