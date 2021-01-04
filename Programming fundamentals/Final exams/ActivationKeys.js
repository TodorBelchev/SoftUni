function solve(input) {
    let key = input.shift();
    for (const line of input) {
        if (line === 'Generate') { break }
        const tokens = line.split('>>>');
        const command = tokens[0];
        if (command === 'Contains') {
            if (key.includes(tokens[1])) {
                console.log(`${key} contains ${tokens[1]}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            const sub = key.substring(tokens[2], tokens[3]);
            let replacement;
            if (tokens[1] === 'Upper') {
                replacement = sub.toUpperCase();
            } else {
                replacement = sub.toLowerCase();
            }
            key = key.replace(sub, replacement);
            console.log(key);
        } else if (command === 'Slice') {
            const sub = key.substring(tokens[1], tokens[2]);
            key = key.replace(sub, '');
            console.log(key);
        }
    }
    console.log(`Your activation key is: ${key}`);
}

solve(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
    ]
)