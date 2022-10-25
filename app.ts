enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const res: {
    message: string,
    statusCode: number
} = {
    message: 'Payment is successful',
    statusCode: StatusCode.SUCCESS
}


function action(status: StatusCode) {

}

action(StatusCode.IN_PROCESS);

