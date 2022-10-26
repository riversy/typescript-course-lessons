interface User {
    name: string,
    password?: {
        type: 'pri' | 'sec'
    }
}


let user1: User = {
    name: "Ihar"
}

let user2: User = {
    name: "John",
    password: {
        type: 'sec'
    }
}

function testPass(user: User) {
    console.log(user.password?.type);
}

testPass(user1);
testPass(user2);
