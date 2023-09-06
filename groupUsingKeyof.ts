export interface IStudent {
    group: number,
    name: string
}

export type KeyOfIStudent = keyof IStudent;

interface IGroup<T> {
    [key: string]: T[];
}

export function groupByKey<T extends Record<string, any>, K extends keyof T>(data: T[], field: K): Record<string, T[]> {
    return data.reduce<IGroup<T>>((result: IGroup<T>, item: T) => {
        const groupingValue = String(item[field]);
        if (!Array.isArray(result[groupingValue])) {
            result[groupingValue] = new Array<T>();
        }
        result[groupingValue].push(item);

        return result;
    }, {});
}
