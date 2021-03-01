function printDeckOfCards(cards) {
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
                    value = undefined;
                }

                this._value = value;
            }

            set suit(suit) {
                const validSuits = [{ S: '\u2660' }, { H: '\u2665' }, { D: '\u2666' }, { C: '\u2663' }];
                let validSuitObj = validSuits.find(x => x.hasOwnProperty(suit));

                if (!validSuitObj) {
                    validSuitObj = {};
                    validSuitObj[suit] = undefined;
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

    let result = [];

    for (const card of cards) {
        const suit = card[card.length - 1];
        const value = card.substring(0, card.length - 1);
        const current = solve(value, suit);
        if (current._suit === undefined || current._value === undefined) {
            result = [];
            result.push(`Invalid card: ${card}`);
            break;
        } else {
            result.push(current.toString());
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);