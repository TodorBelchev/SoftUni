class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.soldTickets = 0;
    }

    newScreening(date, hall, description) {
        const current = this.screenings.find(x => x.hall === hall);

        if (current) {
            if (current.date === date) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
            }
        }

        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        const current = this.screenings.find(x => x.hall === hall);

        if (!current) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        if (current.date !== date) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const currentProfit = this.ticketPrice * Number(soldTickets);
        this.totalProfit += currentProfit;
        this.soldTickets += Number(soldTickets);
        const index = this.screenings.indexOf(current);
        this.screenings.splice(index, 1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        const output = [];
        output.push(`${this.movieName} full information:`);
        output.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
        output.push(`Sold Tickets: ${this.soldTickets}`);

        if (this.screenings.length > 0) {
            output.push('Remaining film screenings:');
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(x => output.push(`${x.hall} - ${x.date} - ${x.description}`));
        } else {
            output.push('No more screenings!');
        }

        return output.join('\n');
    }
}
