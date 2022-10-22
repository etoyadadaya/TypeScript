// 1 - Success
// 2 - In process
// 3 - Declined

// enum with nums
enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

// 's' - Success
// 'p' - In process
// 'd' - Declined

// enum with chars
enum StatusCodeChar {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'd'
}

function compute() {
    return 3;
}

// enum with function
enum Roles {
    ADMIN = 1,
    SUPER_ADMIN = ADMIN * 2,
    USER = compute()
}

// const enum
const enum RolesConst {
    ADMIN = 1,
    USER = 2
}

const res = {
    message: "Payment Success!",
    statusCode: StatusCode.SUCCESS
};

// res2 with const
const res2 = RolesConst.ADMIN;

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);
