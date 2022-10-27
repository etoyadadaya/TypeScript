"use strict";
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observersIndex = this.observers.indexOf(observer);
        if (observersIndex == -1) {
            return;
        }
        this.observers.splice(observersIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log('Notification Service get notification');
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log('Lead Service get notification');
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('John', '0000');
const s1 = new NotificationService();
const s2 = new LeadService();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
