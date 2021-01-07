function solve(input) {
    const guests = {};
    let count = 0;
    for (const line of input) {
        const [command, guest, meal] = line.split('-');
        if (command === 'Like') {
            if (!guests.hasOwnProperty(guest)) {
                guests[guest] = [];
            }
            if (!guests[guest].includes(meal)) {
                guests[guest].push(meal);
            }
        } else if (command === 'Unlike') {
            if (!guests.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (!guests[guest].includes(meal)) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                } else {
                    count++;
                    const index = guests[guest].indexOf(meal);
                    guests[guest].splice(index, 1);
                    console.log(`${guest} doesn't like the ${meal}.`);
                }
            }
        }
    }
    Object.keys(guests)
        .sort((a, b) => guests[b].length - guests[a].length || a.localeCompare(b))
        .forEach(x => console.log(`${x}: ${guests[x].join(', ')}`));
    console.log(`Unliked meals: ${count}`);
}

solve(
    [
        'Like-Krisi-shrimps',
        'Like-Krisi-soup',
        'Like-Misho-salad',
        'Like-Pena-dessert',
        'Stop',
    ]
)

solve(
    [
        'Like-Krisi-shrimps',
        'Unlike-Vili-carp',
        'Unlike-Krisi-salad',
        'Unlike-Krisi-shrimps',
        'Stop',
    ]
)