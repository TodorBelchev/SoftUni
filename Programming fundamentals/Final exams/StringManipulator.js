function solve(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === 'End') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'Translate') {
            while (text.includes(tokens[1])) {
                text = text.replace(tokens[1], tokens[2]);
            }
            console.log(text);
        } else if (command === 'Includes') {
            text.includes(tokens[1]) ? console.log('True') : console.log('False');
        } else if (command === 'Start') {
            const start = text.substring(0, tokens[1].length);
            start === tokens[1] ? console.log('True') : console.log('False');
        } else if (command === 'Lowercase') {
            text = text.toLowerCase();
            console.log(text);
        } else if (command === 'FindIndex') {
            const index = text.lastIndexOf(tokens[1]);
            console.log(index);
        } else if (command === 'Remove') {
            const subString = text.substring(tokens[1], tokens[1] + tokens[2]);
            text = text.replace(subString, '');
            console.log(text);
        }
    }
}

solve(
    [
        '//Thi5 I5 MY 5trING!//',
        'Translate 5 s',
        'Includes string',
        'Start //This',
        'Lowercase',
        'FindIndex i',
        'Remove 0 10',
        'End',
    ]
)