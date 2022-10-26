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

let responses: (IResponseSuccess | IResponseFailed)[] = [
    request(req),
    request2(req)
];

responses.forEach(function (res) {
    if (res.status === PaymentStatus.FAILED) {
        console.error(res.data);
    } else {
        console.log(res.data);
    }
});
