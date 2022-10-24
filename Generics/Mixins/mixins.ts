type Constructor = new (...args: any[]) => [];
type GConstructor<T = {}> = new (...args: any[]) => T;

class mList {
    constructor(public items: string[]) { }
}

class mAccordion {
    isOpened: boolean;
}

type ListType = GConstructor<mList>;
type AccordionType = GConstructor<mAccordion>;


// inheritance
class ExtendedListClass extends mList {
    first() {
        this.items[0];
    }
}


//mixin *func*
function ExtendedList<TBase extends ListType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

const mlist = ExtendedList(mList);
const mres = new mlist(["first", "second"]);
console.log(mres.first());


// what pros of using mixin?
// we mix together 2 types
function ExtendedListM<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean;
    constructor(public items: string[]) { }
}

const aclist = ExtendedListM(AccordionList);
const acres = new aclist(["first", "second"]);
console.log(acres.first());
