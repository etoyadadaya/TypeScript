"use strict";
class mList {
    constructor(items) {
        this.items = items;
    }
}
class mAccordion {
}
class ExtendedListClass extends mList {
    first() {
        this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const mlist = ExtendedList(mList);
const mres = new mlist(["first", "second"]);
console.log(mres.first());
function ExtendedListM(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
const aclist = ExtendedListM(AccordionList);
const acres = new aclist(["first", "second"]);
console.log(acres.first());
