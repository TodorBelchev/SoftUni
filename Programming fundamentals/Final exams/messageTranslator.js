function solve(input) {
    const n = Number(input.shift());
    const pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
    for (let i = 0; i < n; i++) {
        const current = input.shift();
        const match = pattern.exec(current);
        if (match) {
            const charCodes = [];
            for (const char of match.groups.message) {
                charCodes.push(char.charCodeAt());
            }
            console.log(`${match.groups.command}: ${charCodes.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

solve(
    [
        '2',
        '!Send!:[IvanisHere]',
        '*Time@:[Itis5amAlready]',
    ]
)

solve(
    [
        '3',
        'go:[outside]',
        '!drive!:YourCarToACarWash',
        '!Watch!:[LordofTheRings]',
    ]
)