export function sortById<T extends { id: number }>(value: Array<T>, dir: 'asc' | 'desc' = 'asc'): Array<T> {
    return value.sort(function (a, b) {
        if (dir == 'asc') {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    });
}

