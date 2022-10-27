// interface for provider
interface IProvider {
    sendMessage(message: string): void;
    connect(config: unknown): void;
    disconnect(): void;
}

// telegram provider
class TelegramProvider implements IProvider{
    connect(config: string): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('disconnected TG');
    }

    sendMessage(message: string): void {
        console.log(message);
    }
}

// whatsapp provider
class WhatsAppProvider implements IProvider{
    connect(config: string): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('disconnected WA');
    }

    sendMessage(message: string): void {
        console.log(message);
    }
}

// notification sender class from which we will expand
class NotificationSender {
    constructor(private provider: IProvider) { }

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

// delay notification sender extended from notification sender with all the logic and new functionality
class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
        super(provider);
    }

    sendDelayed() { }
}

// new instance / notification sender / with telegram provider
const sender = new NotificationSender(new TelegramProvider());
sender.send();

// new instance / delay notification sender / with telegram provider
const sender2 = new DelayNotificationSender(new WhatsAppProvider());
sender2.sendDelayed();
