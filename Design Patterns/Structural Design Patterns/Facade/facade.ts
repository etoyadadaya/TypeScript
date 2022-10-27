// class for sending notify for user
class Notify {
    send(template: string, to: string) {
        console.log(`sending ${template}: ${to}`);
    }
}

// class for logging user notify
class Log {
    log(message: string) {
        console.log(message);
    }
}

// class for template message
class Template {
    private templates = [
        { name: 'other', template: '<h1>template!</h1>'}
    ];

    getByName(name: string) {
        return this.templates.find(t => t.name === name);
    }
}

// A facade is an external object that provides a single entry point for subsystem services
class NotificationFacade {
    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }

    send(to: string, templateName: string) {
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
