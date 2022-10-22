interface IPayment1 {
    "sum": string;
    "from": number;
    "to": number;
}

enum PaymentStatus1 {
    Success = "success",
    Failed = "failed"
}

interface IDataSuccess1 extends IPayment1{
    "databaseId": number;
}

interface IDataFailed1 {
    "errorMessage": string;
    "errorCode": number;
}

interface IPaymentRequest1 extends IPayment1 {}

interface IResponseSuccess1 {
    status: PaymentStatus1.Success;
    "data": IDataSuccess1;
}

interface IResponseFailed1 {
    status: PaymentStatus1.Failed;
    "data": IDataFailed1;
}
