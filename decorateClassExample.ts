interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}


@setUsersAdvanced(5)
@setUsersAdvanced(10)
class UserService implements IUserService {
    users: number;

    getUsersInDatabase(): number {
        return this.users;
    }
}


function logUsers(obj: IUserService): IUserService {
    console.log(obj.users);
    return obj;
}

function nullUsers<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 0;
    }
}

function threeUsers<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    }
}

function setUsersAdvanced(users: number) {
    console.log('setUsersAdvanced init', users);
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        console.log('setUsersAdvanced run', users);
        return class extends constructor {
            users = users;
        }
    }
}

console.log(new UserService());
console.log(new UserService().getUsersInDatabase());
