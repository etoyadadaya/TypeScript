interface IObserver {
    update(subject: ISubject): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}

class Lead {
    constructor(public name: string, public phone: string) { }
}

class NewLead implements ISubject {
    private observers: IObserver[] = [];
    public state: Lead;

    // attach subscriber
    attach(observer: IObserver): void {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }

    // detach subscriber
    detach(observer: IObserver): void {
        const observersIndex = this.observers.indexOf(observer);
        if (observersIndex == -1) {
            return;
        }
        this.observers.splice(observersIndex, 1);
    }

    // notify subscribers
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

// notification service
class NotificationService implements IObserver {
    update(subject: ISubject): void {
        console.log('Notification Service get notification');
        console.log(subject);
    }
}

// lead service
class LeadService implements IObserver {
    update(subject: ISubject): void {
        console.log('Lead Service get notification');
        console.log(subject);
    }
}

// creating new subject
const subject = new NewLead();
// setting state
subject.state = new Lead('John', '0000');
// creating subscriber 1
const s1 = new NotificationService();
// creating subscriber 2
const s2 = new LeadService();

// attach subscriber 1 to subject
subject.attach(s1);
// attach subscriber 2 to subject
subject.attach(s2);
// notify subscribers
subject.notify();
// detach subscriber 1
subject.detach(s1);
// notify subscribers
subject.notify();

/*
     Notification Service get notification
     NewLead {
         observers: [ NotificationService {}, LeadService {} ],
         state: Lead { name: 'John', phone: '0000' }
     }
     Lead Service get notification
     NewLead {
         observers: [ NotificationService {}, LeadService {} ],
         state: Lead { name: 'John', phone: '0000' }
     }
     Lead Service get notification
     NewLead {
         observers: [ LeadService {} ],
         state: Lead { name: 'John', phone: '0000' }
     }
*/
