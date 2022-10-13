function getFullName(user: {firstname: string, lastname: string}): string {
    return `${user.firstname} ${user.lastname}`;
}


const user = {
    firstname: 'Ihar',
    lastname: 'Haltsou',
    city: 'Mogilev',
    age: 38,
}


console.log(getFullName(user));



