"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const resC = new Resp("data", 0);
class HTTPResp extends Resp {
    setCodeC(code) {
        this.code = code;
    }
}
const res2C = new HTTPResp();
res2C.setCodeC(1);
