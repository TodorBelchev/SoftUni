class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.filledCount = 0;
    }

    addCar(carModel, carNumber) {
        if (this.capacity === this.filledCount) {
            throw new Error('Not enough parking space.');
        }
        this.filledCount++;
        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const current = this.findCurrentCar(carNumber);

        if (!current) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (current.payed === false) {
            throw new Error(`${current.carNumber} needs to pay before leaving the parking lot.`);
        }

        this.filledCount--;
        const index = this.vehicles.indexOf(current);
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        const current = this.findCurrentCar(carNumber);

        if (!current) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if (current.payed === 'true') {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        current.payed = 'true';
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = [];
        let payment = '';
        if (!carNumber) {
            result.push(`The Parking Lot has ${this.capacity - this.filledCount} empty spots left.`);
            const sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (const car of sorted) {
                car.payed === 'true' ? payment = 'Has payed' : payment = 'Not payed';
                result.push(`${car.carModel} == ${car.carNumber} - ${payment}`);
            }
        } else {
            const current = this.findCurrentCar(carNumber);
            current.payed === 'true' ? payment = 'Has payed' : payment = 'Not payed';
            result.push(`${current.carModel} == ${current.carNumber} - ${payment}`)
        }

        return result.join('\n');
    }

    findCurrentCar(carNumber) {
        return this.vehicles.find(x => x.carNumber === carNumber);
    }
}
