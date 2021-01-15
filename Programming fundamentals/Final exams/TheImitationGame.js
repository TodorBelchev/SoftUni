function solve(input) {
    let text = input.shift();
    for (const line of input) {
        if (line === 'Decode') { break }
        const tokens = line.split('|');
        const command = tokens[0];
        if (command === 'Move') {
            const sub = text.substring(0, Number(tokens[1]));
            text = text.replace(sub, '') + sub;
        } else if (command === 'Insert') {
            text = text.substring(0, Number(tokens[1])) + tokens[2] + text.substring(Number(tokens[1]));
        } else if (command === 'ChangeAll') {
            while(text.includes(tokens[1])) {
                text = text.replace(tokens[1], tokens[2]);
            }
        }
    }
    console.log(`The decrypted message is: ${text}`);
}

solve(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode'
    ]
)