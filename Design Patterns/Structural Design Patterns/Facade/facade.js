"use strict";
class Notify {
    send(template, to) {
        console.log(`sending ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: 'other', template: '<h1>template!</h1>' }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('template not found!');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('template send!');
    }
}
const s = new NotificationFacade();
s.send('a@a.ru', 'other');
