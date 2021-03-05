class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(x => x.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.findCustomer(personalId);

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        customer.totalMoney += amount;
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.findCustomer(personalId);

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        customer.totalMoney -= amount;
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.findCustomer(personalId);
        let output = [];
        output.push(`Bank name: ${this._bankName}`);
        output.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        output.push(`Customer ID: ${customer.personalId}`);
        output.push(`Total Money: ${customer.totalMoney}$`);
        output.push('Transactions:');

        for (let i = customer.transactions.length - 1; i >= 0; i--) {
            output.push(`${i + 1}. ${customer.transactions[i]}`)
        }

        return output.join('\n');
    }

    findCustomer(id) {
        const current = this.allCustomers.find(x => x.personalId === id);

        if (!current) {
            throw new Error('We have no customer with this ID!');
        }

        return current;
    }
}
