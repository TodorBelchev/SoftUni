function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            const current = { id, taskName, priority };
            if (priority === 'high') {
                this.tasks.unshift(current);
            } else {
                this.tasks.push(current);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            const done = this.tasks.shift();
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            return done.taskName;
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            return `Tasks, that need to be completed:\n${this.tasks.map(x => x = `${x.id}: ${x.taskName} - ${x.priority}`).join('\n')}`;
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.experience = experience;
        }

        learn(years) {
            this.experience += years;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {
            const current = this.tasks.find(x => x.id === taskId);
            const index = this.tasks.indexOf(current);
            this.tasks.splice(index, 1);

            if (current.priority === 'high') {
                current.priority = 'low';
                this.tasks.push(current);
            } else {
                current.priority = 'high';
                this.tasks.unshift(current);
            }

            return current;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}
