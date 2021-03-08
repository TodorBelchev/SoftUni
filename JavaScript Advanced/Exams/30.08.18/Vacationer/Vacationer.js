class Vacationer {
    constructor(fullNameArr, creditDetails) {
        this._fullName = fullNameArr;
        this._idNumber = this.generateIDNumber();
        this._creditCard = creditDetails;
        this.wishList = [];
    }

    set _creditCard(input) {

        if (!input) {
            this.creditCard = { cardNumber: 1111, expirationDate: '', securityNumber: 111 };
        } else {
            const [cardNumber, expirationDate, securityNumber] = input;

            if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
                throw new Error('Invalid credit card details');
            }

            this.creditCard = { cardNumber, expirationDate, securityNumber };
        }
    }

    get _fullName() {
        return this._fullName;
    }

    set _fullName(fullNameArr) {
        const [firstName, middleName, lastName] = fullNameArr;

        if (!firstName || !middleName || !lastName) {
            throw new Error('Name must include first name, middle name and last name');
        }

        const pattern = /^[A-Z][a-z]+$/g;

        if (!firstName.match(pattern) || !middleName.match(pattern) || !lastName.match(pattern)) {
            throw new Error('Invalid full name');
        }

        this.fullName = { firstName, middleName, lastName };
    }

    generateIDNumber() {
        const firstLetterCode = this.fullName.firstName[0].charCodeAt();
        let result = 231 * firstLetterCode + 139 * this.fullName.middleName.length;
        const vowels = ["a", "e", "o", "i", "u"];

        if (vowels.includes(this.fullName.lastName[this.fullName.lastName.length - 1])) {
            result += '8';
        } else {
            result += '7';
        }

        this.idNumber = result;
    }

    addCreditCardInfo(input) {
        const [cardNumber, expirationDate, securityNumber] = input;

        if (!cardNumber || !expirationDate || !securityNumber) {
            throw new Error('Missing credit card information');
        }

        if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
            throw new Error('Invalid credit card details');
        }

        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }

    addDestinationToWishList(destination) {

        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }

        const current = this.wishList;
        current.push(destination);
        current.sort((a, b) => a.length - b.length);
        this.wishList = current;
    }

    getVacationerInfo() {
        let output = [];
        output.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
        output.push(`ID Number: ${this.idNumber}\nWishlist:`);

        if (this.wishList.length === 0) {
            output.push('empty')
        } else {
            output.push(`${this.wishList.join(', ')}`);
        }

        output.push(`Credit Card:\nCard Number: ${this.creditCard.cardNumber}`);
        output.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        output.push(`Security Number: ${this.creditCard.securityNumber}`);

        return output.join('\n');
    }
}
