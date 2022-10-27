class User {
    constructor(public userID: number) { }
}

// commands history
class CommandHistory {
    public commands: Command[] = [];

    // add
    push(command: Command) {
        this.commands.push(command);
    }

    // delete
    remove(command: Command) {
        this.commands = this.commands.filter(c => c.commandID !== command.commandID);
    }
}

// interface to the family of classes generated by it
abstract class Command {
    public commandID: number;

    abstract execute(): void;

    constructor(public history: CommandHistory) {
        this.commandID = Math.random();
    }
}

// add user piece of logic
class AddUserCommand extends Command {
    constructor(
       private user: User,
       private receiver: UserService,
       history: CommandHistory
    ) {
        super(history);
    }

    execute(): void {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }

    undo() {
        this.receiver.deleteUser(this.user.userID);
        this.history.remove(this);
    }
}

// service for manipulations with users
class UserService {
    saveUser(user: User) {
        console.log(`saving user with id ${user.userID}`);
    }

    deleteUser(userID: number) {
        console.log(`deleting user with id ${userID}`);
    }
}

// where is all magic happens
class CController {
    receiver: UserService;
    history: CommandHistory = new CommandHistory();

    addReceiver(receiver: UserService) {
        this.receiver = receiver;
    }

    // all logic runner
    run() {
        const addUserCommand = new AddUserCommand(
            new User(1),
            this.receiver,
            this.history
        );

        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}

// creating controller
const ccontroller = new CController();

// adding receiver to controller
ccontroller.addReceiver(new UserService());

// start controller
ccontroller.run();

/*
     saving user with id 1
     <ref *1> CommandHistory {
     commands: [
         AddUserCommand {
             history: [Circular *1],
             commandID: 0.9525196052273304,
             user: [User],
             receiver: UserService {}
         }]
     }
     deleting user with id 1
     CommandHistory { commands: [] }
*/
