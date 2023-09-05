import {sortById} from "./sortById";

it('should sort using numeric id', () => {

    const expectedValue: Array<{id: number, name: string}> = [
        {
            id: 1,
            name: "One"
        },
        {
            id: 2,
            name: "Two"
        },
        {
            id: 3,
            name: "Three"
        },
    ]

    const value: Array<{id: number, name: string}> = [
        {
            id: 1,
            name: "One"
        },
        {
            id: 2,
            name: "Two"
        },
        {
            id: 3,
            name: "Three"
        },
    ]

    expect(sortById<{id: number, name: string}>(value)).toEqual(expectedValue);
});
