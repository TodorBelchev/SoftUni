function solve(input) {
    const cards = input.shift().split(':');
    const deck = [];

    for (const line of input) {

        if (line === 'Ready') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        let cardName;
        let index;

        switch (command) {
            case 'Add':
                cardName = tokens[1];

                if (cards.includes(cardName)) {
                    deck.push(cardName);
                } else {
                    console.log('Card not found.');
                }

                break;
            case 'Insert':
                cardName = tokens[1];
                index = Number(tokens[2]);

                if (index >= 0 && index < deck.length && cards.includes(cardName)) {
                    deck.splice(index, 0, cardName);
                } else {
                    console.log('Error!');
                }

                break;
            case 'Remove':
                cardName = tokens[1];

                if (deck.includes(cardName)) {
                    index = deck.indexOf(cardName);
                    deck.splice(index, 1);
                } else {
                    console.log('Card not found.');
                }

                break;
            case 'Swap':
                cardName = tokens[1];
                const cardName2 = tokens[2];
                const firstIndex = deck.indexOf(cardName);
                const secondIndex = deck.indexOf(cardName2);
                const temp = deck[firstIndex];
                deck[firstIndex] = deck[secondIndex];
                deck[secondIndex] = temp;
                break;
            case 'Shuffle':
                deck.reverse();
                break;
        }
    }

    console.log(deck.join(' '));
}

solve(
    [
        'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
        'Remove Pounce',
        'Add Pounce',
        'Remove Pounce',
        'Add Wrath',
        'Ready'
    ]
)