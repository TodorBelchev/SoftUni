function solve(input) {
    const pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        const current = input.shift();
        const match = pattern.exec(current);
        if (match) {
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${match.groups.name.length}`);
            console.log(`>> Armour: ${match.groups.title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

solve(
    [
        '3',
        '|GEORGI|:#Lead architect#',
        '|Hristo|:#High Overseer#',
        '|STEFAN|:#Assistant Game Developer#',
    ]
)

solve(
    [
        '3',
        '|PETER|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#',
    ]
)