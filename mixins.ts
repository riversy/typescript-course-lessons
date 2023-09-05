type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]) {
    }
}

type AccordionType = GConstructor<Accordion>

class Accordion {
    isOpened: boolean;
}

type ListType = GConstructor<List>

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean = false;
    constructor(public items: string[]) {
    }
}

const ExList = ExtendedList(AccordionList);
const list = new ExList(['12', '20']);
console.log(list);
console.log(list.first());
console.log(list.isOpened);
