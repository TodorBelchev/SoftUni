function solve(input) {
    const heroes = {};
    for (const line of input) {
        if (line === 'End') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'Enroll') {
            if (!heroes.hasOwnProperty(tokens[1])) {
                heroes[tokens[1]] = [];
            } else {
                console.log(`${tokens[1]} is already enrolled.`);
            }
        } else if (command === 'Learn') {
            if (heroes.hasOwnProperty(tokens[1])) {
                if (heroes[tokens[1]].includes(tokens[2])) {
                    console.log(`${tokens[1]} has already learnt ${tokens[2]}.`);
                } else {
                    heroes[tokens[1]].push(tokens[2]);
                }
            } else {
                console.log(`${tokens[1]} doesn't exist.`);
            }
        } else if (command === 'Unlearn') {
            if (heroes.hasOwnProperty(tokens[1])) {
                if (heroes[tokens[1]].includes(tokens[2])) {
                    const index = heroes[tokens[1]].indexOf(tokens[2]);
                    heroes[tokens[1]].splice(index, 1);
                } else {
                    console.log(`${tokens[1]} doesn't know ${tokens[2]}.`);
                }
            } else {
                console.log(`${tokens[1]} doesn't exist.`);
            }
        }
    }
    console.log('Heroes:');
    Object.keys(heroes)
        .sort((a, b) => heroes[b].length - heroes[a].length || a.localeCompare(b))
        .forEach(x => console.log(`== ${x}: ${heroes[x].join(', ')}`))
}

solve(
    [
        'Enroll Stefan',
        'Enroll Pesho',
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stamat ItShouldNotWork',
        'Unlearn Gosho Dispel',
        'Unlearn Stefan ItShouldWork',
        'End',
    ]
)

solve(
    [
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan ItShouldWork',
        'Unlearn Stefan NotFound',
        'End',
    ]
)