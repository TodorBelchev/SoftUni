function solve(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === 'Done') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'Change') {
            while (text.includes(tokens[1])) {
                text = text.replace(tokens[1], tokens[2]);
            }
            console.log(text);
        } else if (command === 'Includes') {
            text.includes(tokens[1]) ? console.log('True') : console.log('False');
        } else if (command === 'End') {
            const sub = text.substring(text.length - 1 - tokens[1].length);
            sub === tokens[1] ? console.log('True') : console.log('False');
        } else if (command === 'Uppercase') {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === 'FindIndex') {
            const index = text.indexOf(tokens[1]);
            console.log(index);
        } else if (command === 'Cut') {
            text = text.substring(tokens[1] , Number(tokens[1]) + Number(tokens[2]));
            console.log(text);
        }
    }
}

solve(
    [
        '//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done',
    ]
)