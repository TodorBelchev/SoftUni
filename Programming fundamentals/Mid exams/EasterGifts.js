function solve(input) {
    const gifts = input.shift().split(' ');

    for (const line of input) {

        if (line === 'No Money') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        const gift = tokens[1];
        let index;

        switch (command) {
            case 'OutOfStock':

                while (gifts.includes(gift)) {
                    index = gifts.indexOf(gift);
                    gifts[index] = 'None';
                }

                break;
            case 'Required':
                index = Number(tokens[2]);

                if (index >= 0 && index < gifts.length) {
                    gifts.splice(index, 1, gift);
                }

                break;
            case 'JustInCase':
                gifts[gifts.length - 1] = gift;
                break;
        }

    }

    console.log(gifts.filter(x => x !== 'None').join(' '));
}

solve(
    [
        'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
        'OutOfStock Eggs',
        'Required Spoon 2',
        'JustInCase ChocolateEgg',
        'No Money'
    ]
)