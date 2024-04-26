import React from 'react';

// Function containing the provided code
const executeTask1 = () => {
    // Place the provided code here
    class Vector {
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

    const v1 = new Vector(1, 2, 3);
    const v2 = new Vector(4, 5, 6);

    console.log("Vector v1:", v1.toString());
    console.log("Vector v2:", v2.toString());
    console.log("Sum:", v1.plus(v2).toString());
    console.log("Scalar:", v1.scalar(v2));
    console.log("Length of v1:", v1.length);

    class Task {
        constructor(title, description, startDate, endDate) {
            this.title = title;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
            this.subtasks = [];
        }

        addSubtask(subtask) {
            this.subtasks.push(subtask);
        }

        removeSubtask(index) {
            this.subtasks.splice(index, 1);
        }
    }

    class ActiveTask extends Task {
        constructor(title, description, startDate, endDate, progress = 0) {
            super(title, description, startDate, endDate);
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

    const mainTask = new Task("Project", "Complete the project", "2023-01-01", "2023-01-31");
    const subTask = new Task("Sub Project", "Complete the sub-project", "2023-01-05", "2023-01-15");
    mainTask.addSubtask(subTask);

    const activeTask = new ActiveTask("Project", "Complete the project", "2023-01-01", "2023-01-31");
    activeTask.updateProgress(50);

    console.log(mainTask);
    console.log(activeTask);
};

const Task1Button = () => {
    return (
        <button onClick={executeTask1}>Execute Task 1</button>
    );
};

export default Task1Button;
