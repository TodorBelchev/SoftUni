function solve(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === 'Reveal') { break }
        const tokens = line.split(':|:');
        const command = tokens[0];
        if (command === 'InsertSpace') {
            text = text.substring(0, tokens[1]) + ' ' + text.substring(Number(tokens[1]));
            console.log(text);
        } else if (command === 'Reverse') {
            if (text.includes(tokens[1])) {
                const reversed = tokens[1].split('').reverse().join('');
                text = text.replace(tokens[1], '');
                text += reversed;
                console.log(text);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            text = text.replace(new RegExp(tokens[1], 'g'), tokens[2]);
            console.log(text);
        }
    }
    console.log(`You have a new text message: ${text}`);
}

solve(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
)