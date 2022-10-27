class Task {
    constructor(public priority: number) { }
}

// task list implementation
class TaskList {
    private tasks: Task[] = [];

    // sorting by priority
    public sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1;
            } else if (a.priority === b.priority) {
                return 0;
            } else {
                return -1;
            }
        });
    }

    // add task
    public addTask(task: Task) {
        this.tasks.push(task);
    }

    // get task
    public getTask() {
        return this.tasks;
    }

    // get count of tasks
    public count() {
        return this.tasks.length;
    }

    // create new priority task iterator
    public getIterator() {
        return new PriorityTaskIterator(this);
    }
}

interface IIterator<T> {
    current(): T | undefined;
    next(): T | undefined;
    prev(): T | undefined;
    index(): number
}

// iterator for priority task
class PriorityTaskIterator implements IIterator<Task> {
    private position: number = 0;
    private taskList: TaskList;

    // sort by priority task list and set
    constructor(taskList: TaskList) {
        taskList.sortByPriority();
        this.taskList = taskList;
    }

    // get current elem index
    current(): Task | undefined {
        return this.taskList.getTask()[this.position];
    }

    // get next elem index
    next(): Task | undefined {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }

    // get previous elem index
    prev(): Task | undefined {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }

    // get elem index
    index(): number {
        return this.position;
    }
}

// creating task list
const taskList = new TaskList();

// adding task with priority(8)
taskList.addTask(new Task(8));
// adding task with priority(1)
taskList.addTask(new Task(1));
// adding task with priority(3)
taskList.addTask(new Task(3));

// creating an iterator to iterate through the taskList by priority
const iterator = taskList.getIterator();
// iterate to current element and get current
console.log(iterator.current()); // 1
// iterate to next task in taskList by priority and get next
console.log(iterator.next()); // 3
// iterate to next task in taskList by priority and get next
console.log(iterator.next()); // 8
// iterate to previous task in taskList by priority and get previous
console.log(iterator.prev()); // 3
// iterate to index task and get index
console.log(iterator.index()); // 1, because we are on elem (3)

/*
     [LOG]: Task: {
         "priority": 1
     }
     [LOG]: Task: {
        "priority": 3
     }
     [LOG]: Task: {
        "priority": 8
     }
     [LOG]: Task: {
        "priority": 3
     }
     [LOG]: 1
*/
