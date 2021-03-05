function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.find(x => x.title === title)) {
                throw new Error('This event is already added!');
            }

            this.events.push({ title });
            return 'Event is added.';
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            const output = [];
            output.push(`${this.name} hall - ${this.capacity}`);

            if (this.events.length > 0) {
                let eventsArr = [];
                this.events.forEach(x => eventsArr.push(x.title));
                output.push(`Events: ${eventsArr.join(', ')}`);
            }

            return output.join('\n');
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;

        }

        close() {
            return super.close() + 'Аll screenings are over.';
        }

        toString() {
            return super.toString() + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
        }

        hallEvent(title, performers) {
            if (this.events.find(x => x.title === title)) {
                throw new Error('This event is already added!');
            }

            this.events.push({ title, performers });
            return 'Event is added.';
        }

        close() {
            return super.close() + 'Аll performances are over.';
        }

        toString() {
            let output = super.toString();

            if (this.events.length > 0) {
                const performersArr = [];
                this.events.forEach(x => {
                    x.performers.forEach(p => performersArr.push(p));
                });
                output += `\nPerformers: ${performersArr.join(', ')}.`
            }

            return output;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}
