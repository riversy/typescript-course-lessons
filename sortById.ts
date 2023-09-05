
export function sortById<T extends {id: number}>(value: Array<T>): Array<T> {
    return value.sort(function (a, b) {
        return a.id - b.id;
    });
}

