const CTa: number = Math.random() > 0.5 ? 1 : 0;

interface CTHTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
}

const CTSuccess: CTHTTPResponse<'success'> = {
    code: 200,
    data: 'done',
};

const CTError: CTHTTPResponse<'failed'> = {
    code: 200,
    data: new Error(),
};


class CTUser {
    id: number;
    name: string;
}

class CTUUserPersistent extends CTUser{
    dbId: string;
}

function CTGetUser(id: number): CTUser;
function CTGetUser(dbId: string): CTUUserPersistent;
function CTGetUser(dbIdOrId: string | number): CTUser | CTUUserPersistent {
    if (typeof dbIdOrId === "number") {
        return new CTUser();
    } else {
        return new CTUUserPersistent();
    }
}

type UserOrUserPersistent<T extends string | number> = T extends number ? CTUser : CTUUserPersistent;

function CTGetUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
    if (typeof id === "number") {
        return new CTUser() as UserOrUserPersistent<T>;
    } else {
        return new CTUUserPersistent();
    }
}

const CTres1 = CTGetUser2(1);
const CTres2 = CTGetUser2('Johan');
