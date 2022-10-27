"use strict";
class TelegramProvider {
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('disconnected TG');
    }
    sendMessage(message) {
        console.log(message);
    }
}
class WhatsAppProvider {
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('disconnected WA');
    }
    sendMessage(message) {
        console.log(message);
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() { }
}
const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new DelayNotificationSender(new WhatsAppProvider());
sender2.sendDelayed();
