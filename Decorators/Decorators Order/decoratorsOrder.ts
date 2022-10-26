function Uni(name: string): any {
    console.log(`initialization ${name}`);
    return function () {
        console.log(`call ${name}`);
    }
}


@Uni('class')
class MyClass {
    @Uni('property')
    props?: any;

    @Uni('static property')
    static prop?: any;

    @Uni('method')
    methods(@Uni('method parameter') _: any) { }

    @Uni('static method')
    static method(@Uni('static method parameter') _: any) { }

    constructor(@Uni('constructor parameter') _: any) { }
}

/*
     call stack:

     [LOG]: "initialization property"
     [LOG]: "call property"
     [LOG]: "initialization method"
     [LOG]: "initialization method parameter"
     [LOG]: "call method parameter"
     [LOG]: "call method"
     [LOG]: "initialization static property"
     [LOG]: "call static property"
     [LOG]: "initialization static method"
     [LOG]: "initialization static method parameter"
     [LOG]: "call static method parameter"
     [LOG]: "call static method"
     [LOG]: "initialization class"
     [LOG]: "initialization constructor parameter"
     [LOG]: "call constructor parameter"
     [LOG]: "call class"
*/
