class RPCUser {
    constructor(public id: number, public name: string) { }
}

function RPCGetData(id: number): RPCUser {
    return new RPCUser(id, "Johan");
}


/*
    Obtain the return type of function type
    RPCUser
*/
type RT = ReturnType<typeof RPCGetData>;


/*
    Obtain the parameters of a function type in a tuple
    [number]
*/
type PT = Parameters<typeof RPCGetData>; // [number]
type PT1 = Parameters<typeof RPCGetData>[0]; // the same as below
type first = PT[0]; // set first parameter of PT is equal to number


/*
     Obtain the parameters of a constructor function type in a tuple
     [number, string]
*/
type CP = ConstructorParameters<typeof RPCUser>; // [number, string]
