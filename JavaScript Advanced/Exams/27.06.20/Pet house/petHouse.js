function solve() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw new Error('This comment is already added!');
            }

            this.comments.push(comment);
            return 'Comment is added.';
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            const output = [];
            output.push(`Here is ${this.owner}'s pet ${this.name}.`);

            if (this.comments.length > 0) {
                output.push(`Special requirements: ${this.comments.join(', ')}`);
            }

            return output.join('\n');
        }
    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return super.feed() + ', happy and purring.';
        }

        toString() {
            let output = super.toString();
            output += `\nMain information:\n${this.name} is a cat with ${this.insideHabits}`;

            if (this.scratching) {
                output += ', but beware of scratches.';
            }

            return output;
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return super.feed() + ', happy and wagging tail.';
        }

        toString() {
            let output = super.toString();
            output += `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
            return output;
        }
    }

    return {
        Pet,
        Cat,
        Dog
    }
}
