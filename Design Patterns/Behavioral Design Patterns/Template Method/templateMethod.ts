class Form {
    constructor(public name: string) { }
}

// template for form saver
abstract class SaveForm<T> {
    public save(form: Form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }

    protected abstract fill(form: Form): T;
    protected log(data: T): void {
        console.log(data);
    };
    protected abstract send(data: T): void;
}

// second API with string sending
class FirstAPI extends SaveForm<string> {
    protected fill(form: Form): string {
        return form.name;
    }

    protected send(data: string): void {
        console.log(`sending ${data}`);
    }
}

// second API with object interface
class SecondAPI extends SaveForm<{ FIO: string }> {
    protected fill(form: Form): { FIO: string } {
        return { FIO: form.name };
    }

    protected send(data: { FIO: string }): void {
        console.log(`sending ${data}`);
    }
}

// creating first form
const form1 = new FirstAPI();
// saving in first form
form1.save(new Form('John'));

// creating second form
const form2 = new SecondAPI();
// saving in second form
form2.save(new Form('Johan'));

/*
     [LOG]: "John"
     [LOG]: "sending John"
     [LOG]: {
        "FIO": "Johan"
     }
     [LOG]: "sending [object Object]"
*/
