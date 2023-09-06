interface IUser {
    name: string
    age: number;
}

type KeysOfUser = keyof IUser;

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: IUser = {
    name: "Vasya",
    age: 30
}

const userName = getValue<IUser, KeysOfUser>(user, 'name');
const userAge = getValue<IUser, KeysOfUser>(user, 'age');

console.log(userName);
console.log(userAge);
