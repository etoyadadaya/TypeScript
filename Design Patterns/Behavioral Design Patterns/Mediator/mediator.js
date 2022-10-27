"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('sending notification...');
    }
}
class Logging {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'new Event');
    }
}
class NotificationMediator {
    constructor(notifications, logger, handler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handler = handler;
    }
    notify(sender, event) {
        switch (event) {
            case 'new Event':
                this.notifications.send();
                this.logger.log('send');
                break;
        }
    }
}
const handler = new EventHandler();
const logger = new Logging();
const notifications = new Notifications();
const m = new NotificationMediator(notifications, logger, handler);
handler.setMediator(m);
handler.myEvent();
