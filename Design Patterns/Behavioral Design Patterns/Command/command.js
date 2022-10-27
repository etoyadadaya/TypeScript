"use strict";
class User {
    constructor(userID) {
        this.userID = userID;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandID !== command.commandID);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandID = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userID);
        this.history.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`saving user with id ${user.userID}`);
    }
    deleteUser(userID) {
        console.log(`deleting user with id ${userID}`);
    }
}
class CController {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const ccontroller = new CController();
ccontroller.addReceiver(new UserService());
ccontroller.run();
