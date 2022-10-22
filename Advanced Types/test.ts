interface IPayment {
    "sum": string;
    "from": number;
    "to": number;
}

enum PaymentStatus {
    Success = "success",
    Failed = "failed"
}

interface IDataSuccess extends IPayment{
    "databaseId": number;
}

interface IDataFailed {
    "errorMessage": string;
    "errorCode": number;
}

interface IPaymentRequest extends IPayment {}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    "data": IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    "data": IDataFailed;
}
