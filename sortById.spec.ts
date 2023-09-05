import {sortById} from "./sortById";

it('should sort using numeric id asc', () => {

    const expectedValue: Array<{ id: number, name: string }> = [
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

    const value: Array<{ id: number, name: string }> = [
        {
            id: 1,
            name: "One"
        },
        {
            id: 3,
            name: "Three"
        },
        {
            id: 2,
            name: "Two"
        },
    ]

    expect(sortById<{ id: number, name: string }>(value)).toEqual(expectedValue);
});


it('should sort using numeric id with defined asc', () => {

    const expectedValue: Array<{ id: number, name: string }> = [
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

    const value: Array<{ id: number, name: string }> = [
        {
            id: 1,
            name: "One"
        },
        {
            id: 3,
            name: "Three"
        },
        {
            id: 2,
            name: "Two"
        },
    ]

    expect(sortById<{ id: number, name: string }>(value, 'asc')).toEqual(expectedValue);
});


it('should sort using numeric id with defined desc', () => {

    const expectedValue: Array<{ id: number, name: string }> = [
        {
            id: 3,
            name: "Three"
        },
        {
            id: 2,
            name: "Two"
        },
        {
            id: 1,
            name: "One"
        },
    ]

    const value: Array<{ id: number, name: string }> = [
        {
            id: 1,
            name: "One"
        },
        {
            id: 3,
            name: "Three"
        },
        {
            id: 2,
            name: "Two"
        },
    ]

    expect(sortById<{ id: number, name: string }>(value, 'desc')).toEqual(expectedValue);
});
