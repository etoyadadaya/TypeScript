"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        console.log(`${this.item.text} was send on site`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log('document deleted');
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    delete() {
        console.log('deleted');
        this.item.setState(new DraftDocumentItemState());
    }
    publish() {
        console.log('cannot upload uploaded document');
    }
}
const item = new DocumentItem();
item.text = 'My post!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
