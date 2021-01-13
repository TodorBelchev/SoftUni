function solve(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === 'For Azeroth') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'GladiatorStance') {
            text = text.toLocaleUpperCase();
            console.log(text);
        } else if (command === 'DefensiveStance') {
            text = text.toLocaleLowerCase();
            console.log(text);
        } else if (command === 'Dispel') {
            const index = Number(tokens[1]);
            if (index >= 0 && index < text.length) {
                const first = text.substring(0, index);
                const second = text.substring(index + 1);
                text = first + tokens[2] + second;
                console.log('Success!');
            } else {
                console.log('Dispel too weak.');
            }
        } else if (command === 'Target' && tokens[1] === 'Change') {
            text = text.replace(tokens[2], tokens[3]);
            console.log(text);
        } else if (command === 'Target' && tokens[1] === 'Remove') {
            text = text.replace(tokens[2], '');
            console.log(text);
        } else {
            console.log('Command doesn\'t exist!');
        }
    }
}

solve(
    [
        'fr1c710n',
        'GladiatorStance',
        'Dispel 2 I',
        'Dispel 4 T',
        'Dispel 6 O',
        'Dispel 5 I',
        'Dispel 10 I',
        'Target Change RICTION riction',
        'For Azeroth',
    ]
)

solve(
    [
        'DYN4MICNIC',
        'Target Remove NIC',
        'Dispel 3 A',
        'DefensiveStance',
        'Target Change d D',
        'target change D d',
        'For Azeroth',
    ]
)