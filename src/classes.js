export class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    scalar(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    toString() {
        return `Vector(${this.x}, ${this.y}, ${this.z})`;
    }

    valueOf() {
        return this.length;
    }
}

export class Task {
    constructor(title, description, startDate, endDate, subtasks = []) {
        this.title = title;
        this.description = description;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.subtasks = subtasks;
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }

    removeSubtask(index) {
        this.subtasks.splice(index, 1);
    }
}

export class ActiveTask extends Task {
    constructor(title, description, startDate, endDate, subtasks, progress = 0) {
        super(title, description, startDate, endDate, subtasks);
        this.progress = progress;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
    }

    updateProgress(value) {
        this.progress = value;
        if (this.progress >= 100) {
            this.markCompleted();
        }
    }
}

export class StudentRecord {
    constructor(specialty, group, fullName, grades) {
        this.specialty = specialty;
        this.group = group;
        this.fullName = fullName;
        this.grades = grades;
        this.average = grades.reduce((acc, val) => acc + val, 0) / grades.length;
    }

    static sortStudents(records) {
        return records.sort((a, b) => b.average - a.average);
    }

    static sortStudentsWithinGroup(records, group) {
        return records.filter(record => record.group === group).sort((a, b) => b.average - a.average);
    }

    static listSuccessfulStudents(records) {
        return records.filter(record => record.grades.every(grade => grade >= 3));
    }

    static findStudentByFullName(records, fullName) {
        return records.find(record => record.fullName === fullName);
    }
}

function testVectors() {
    let v1 = new Vector(1, 2, 3);
    let v2 = new Vector(4, 5, 6);
    console.log('Vector v1:', v1.toString());
    console.log('Vector v2:', v2.toString());
    console.log('Plus:', v1.plus(v2).toString());
    console.log('Scalar:', v1.scalar(v2));
    console.log('Length of v1:', v1.length);
}

function testTasks() {
    let mainTask = new Task("Project", "Complete the project", "2023-01-01", "2023-01-31");
    let subTask = new Task("Sub Project", "Complete the sub-project", "2023-01-05", "2023-01-15");
    mainTask.addSubtask(subTask);
    console.log(mainTask);
}

function testStudentRecords() {
    let students = [
        new StudentRecord("Computer Science", "CS101", "Alice Johnson", [4, 4, 5, 3]),
        new StudentRecord("Biology", "BIO111", "Bob Smith", [2, 3, 3, 4]),
        new StudentRecord("Computer Science", "CS101", "Charlie Brown", [5, 5, 5, 5])
    ];

    console.log("All students sorted by average:", StudentRecord.sortStudents(students));
    console.log("Students in CS101 sorted by average:", StudentRecord.sortStudentsWithinGroup(students, "CS101"));
    console.log("Successful students:", StudentRecord.listSuccessfulStudents(students));
    console.log("Search for Alice Johnson:", StudentRecord.findStudentByFullName(students, "Alice Johnson"));
}

// Examples for testing
testVectors();
testTasks();
testStudentRecords();
// At the bottom of the file where functions are defined
export { testVectors, testTasks, testStudentRecords };
