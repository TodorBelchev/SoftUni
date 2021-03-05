class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = budget;
    }

    get budget() {
        return this._budget;
    }

    shopping(product) {
        if (this.budget < product[1]) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product[0]);
        this.budget -= product[1];
        return `You have successfully bought ${product[0]}!`
    }

    recipes({ recipeName, productsList }) {
        let canCook = true;
        productsList.forEach(x => this.products.includes(x) ? 'pass' : canCook = false);
        if (canCook) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        Object.entries(this.guests).forEach(([name, dish]) => {
            const recipe = this.dishes.find(x => x.recipeName === dish);
            result.push(`${name} will eat ${recipe.recipeName}, which consists of ${recipe.productsList.join(', ')}`)
        });
        return result.join('\n');
    }
}
