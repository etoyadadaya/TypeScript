interface IPayment2 {
    "sum": string;
    "from": number;
    "to": number;
}

enum PaymentStatus2 {
    Success = "success",
    Failed = "failed"
}

interface IDataSuccess2 extends IPayment2{
    "databaseId": number;
}

interface IDataFailed2 {
    "errorMessage": string;
    "errorCode": number;
}

interface IPaymentRequest2 extends IPayment2 {}

interface IResponseSuccess2 {
    status: PaymentStatus2.Success;
    "data": IDataSuccess2;
}

interface IResponseFailed2 {
    status: PaymentStatus2.Failed;
    "data": IDataFailed2;
}

type f = (res: IResponseFailed2 | IResponseSuccess2) => number;

type Res = IResponseFailed2 | IResponseSuccess2;

function isSuccess(res: Res): res is IResponseSuccess2 {
    return res.status === PaymentStatus2.Success;
}

function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}
