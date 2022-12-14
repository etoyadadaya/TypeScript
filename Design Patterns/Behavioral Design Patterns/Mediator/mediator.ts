interface Mediator {
    notify(sender: string, event: string): void;
}

// interface to the family of classes generated by it
abstract class Mediated {
    mediator: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

// notifications class
class Notifications {
    send() {
        console.log('sending notification...');
    }
}

// log class
class Logging {
    log(message: string) {
        console.log(message);
    }
}

// event handler class
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'new Event');
    }
}

// main business logic -> notification mediator
class NotificationMediator implements Mediator {
    constructor(
        public notifications: Notifications,
        public logger: Logging,
        public handler: EventHandler
    ) { }

    notify(sender: string, event: string): void {
        switch(event) {
            case 'new Event':
                this.notifications.send();
                this.logger.log('send');
                break;
        }
    }
}

// initialization
const handler = new EventHandler();
const logger = new Logging();
const notifications = new Notifications();

// creating mediator
const m = new NotificationMediator(
    notifications,
    logger,
    handler
);

// setting mediator
handler.setMediator(m);

// handler event
handler.myEvent();

/*
    [LOG]: "sending notification..."
    [LOG]: "send"
*/
