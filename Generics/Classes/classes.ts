class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}

const resC = new Resp<string, number>("data", 0);

class HTTPResp<F> extends Resp<string, number> {
    code: F;

    setCodeC(code: F) {
        this.code = code;
    }
}

const res2C = new HTTPResp<number>();
res2C.setCodeC(1);
