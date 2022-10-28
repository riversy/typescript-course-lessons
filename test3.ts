interface IPaymentRequest {
    "sum": number,
    "from": number,
    "to": number
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed',
}

interface IDataSuccess extends IPaymentRequest {
    databaseId: number
}

interface IDataFailed {
    "errorMessage": string,
    "errorCode": number
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: IDataSuccess,
}

interface IResponseFailed {
    status: PaymentStatus.FAILED,
    data: IDataFailed,
}

function request(req: IPaymentRequest): IResponseSuccess | IResponseFailed {
    return {
        "status": PaymentStatus.FAILED,
        "data": {
            "errorMessage": "Недостаточно средств",
            "errorCode": 4
        }
    };
}

function request2(req: IPaymentRequest): IResponseSuccess | IResponseFailed {
    return {
        "status": PaymentStatus.SUCCESS,
        "data": {
            "databaseId": 567,
            "sum": 10000,
            "from": 2,
            "to": 4
        }
    };
}

const req: IPaymentRequest = {
    from: 1,
    sum: 100,
    to: 10,
}

type Res = IResponseSuccess | IResponseFailed;

let responses: (Res)[] = [
    request(req),
    request2(req)
];

function isResponseSuccess(res: Res): res is IResponseSuccess {
    return res.status === PaymentStatus.SUCCESS;
}

responses.forEach(function (res) {
    if (isResponseSuccess(res)) {
        console.log(res.data);
    } else {
        console.error(res.data);
    }
});

function getIdFromDatabase(res: Res): number {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}
