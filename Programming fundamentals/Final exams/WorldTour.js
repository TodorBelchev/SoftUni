function solve(input) {
    function isValid(string, index) {
        return index >= 0 && index < string.length;
    }

    let text = input.shift();
    for (const line of input) {
        if (line === 'Travel') { break }
        const tokens = line.split(':');
        const command = tokens[0];
        let index;
        if (command === 'Add Stop') {
            index = Number(tokens[1]);
            if (isValid(text, index)) {
                text = text.substring(0, index) + tokens[2] + text.substring(index);
            }
            console.log(text);
        } else if (command === 'Remove Stop') {
            index = Number(tokens[1]);
            const secondIndex = Number(tokens[2]);
            if (isValid(text, index) && isValid(text, secondIndex)) {
                const sub = text.substring(index, secondIndex + 1);
                text = text.replace(sub, '');
            }
            console.log(text);
        } else if (command === 'Switch') {
            text = text.replace(new RegExp(tokens[1], 'g'), tokens[2]);
            console.log(text);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
}

solve(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
)