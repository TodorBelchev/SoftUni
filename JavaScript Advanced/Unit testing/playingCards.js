function solve(value, suit) {
    class Card {
        constructor(value, suit) {
            this.value = value;
            this.suit = suit;
        }

        set value(value) {
            const validValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            const indexValue = validValues.indexOf(value);

            if (indexValue === -1) {
                throw new Error('Error');
            }

            this._value = value;
        }

        set suit(suit) {
            const validSuits = [{ S: '\u2660' }, { H: '\u2665' }, { D: '\u2666' }, { C: '\u2663' }];
            const validSuitObj = validSuits.find(x => x.hasOwnProperty(suit));

            if (!validSuitObj) {
                throw new Error('Error');
            }

            this._suit = validSuitObj[suit];
        }

        toString() {
            return `${this._value}${this._suit}`;
        }
    }   

    const currentCard = new Card(value, suit);
    return currentCard;
}

const result = solve('1', 'C');

console.log(result.toString());