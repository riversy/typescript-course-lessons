import {IStudent, KeyOfIStudent, groupByKey} from "./groupUsingKeyof";

it('should group students by group', () => {

    const data: IStudent[] = [
        {group: 1, name: 'a'},
        {group: 1, name: 'b'},
        {group: 2, name: 'c'},
    ];

    const expectedResult:{
        [key: number]: IStudent[];
    }  = {
        '1': [{group: 1, name: 'a'}, {group: 1, name: 'b'}],
        '2': [{group: 2, name: 'c'}]
    }

    const actualResult = groupByKey<IStudent, KeyOfIStudent>(data, 'group');
    expect(actualResult).toMatchObject(expectedResult);
});
