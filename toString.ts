function toString<T>(value: T): string | undefined {
    switch (typeof value){
        case "string":
        case "number":
            return value.toString();
        case "object":
            return JSON.stringify(value);
        default:
            return undefined
    }
}

console.log(toString('1111'));
console.log(toString(123));
console.log(toString({test: 'me'}));
console.log(toString([1, 2, 3]));
console.log(toString(null));
console.log(toString(undefined));

