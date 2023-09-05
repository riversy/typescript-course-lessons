export function sortById<T extends { id: number }>(data: Array<T>, dir: 'asc' | 'desc' = 'asc'): Array<T> {
    return data.sort(function (a, b) {
        if (dir == 'asc') {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    });
}

