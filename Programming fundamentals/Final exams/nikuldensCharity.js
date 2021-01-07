function solve(input) {
    let text = input.shift();
    let start;
    let end;
    for (const line of input) {
        if (line === 'Finish') { break }
        const [command, a, b] = line.split(' ');
        if (command === 'Replace') {
            while (text.includes(a)) {
                text = text.replace(a, b);
            }
            console.log(text);
        } else if (command === 'Cut') {
            start = Number(a);
            end = Number(b);
            if (start >= 0 && end < text.length) {
                text = text.substring(0, start) + text.substring(end + 1);
                console.log(text);
            } else {
                console.log('Invalid indexes!');
            }
        } else if (command === 'Make') {
            if (a === 'Upper') {
                text = text.toLocaleUpperCase();
            } else {
                text = text.toLocaleLowerCase();
            }
            console.log(text);
        } else if (command === 'Check') {
            if (text.includes(a)) {
                console.log(`Message contains ${a}`);
            } else {
                console.log(`Message doesn't contain ${a}`);
            }
        } else if (command === 'Sum') {
            start = Number(a);
            end = Number(b);
            if (start >= 0 && end < text.length) {
                let sum = 0;
                const sub = text.substring(start, end + 1);
                for (const char of sub) {
                    sum += char.charCodeAt();
                }
                console.log(sum);
            } else {
                console.log('Invalid indexes!');
            }
        }
    }
}

solve(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish',
    ]
)

solve(
    [
        'HappyNameDay',
        'Replace p r',
        'Make Lower',
        'Cut 2 23',
        'Sum -2 2',
        'Finish',
    ]
)