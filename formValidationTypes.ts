interface IUserForm {
    name: string;
    password: string;
}

const form: IUserForm = {
    name: 'John Doe',
    password: '123',
}

console.log(form);

type IFormValidationMapping<T> = {
    [Property in keyof T]:
        | {isValid: true}
        | {isValid: false, errorMessage: string}
}

type IUserFormValidation = IFormValidationMapping<IUserForm>

const formValidation: IUserFormValidation = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'must be longer than 5 chars'}
}

console.log(formValidation);
