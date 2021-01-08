function solve(input) {
    let username = input.shift();
    for (const line of input) {
        if (line === 'Sign up') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'Case') {
            if (tokens[1] === 'lower') {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();
            }
            console.log(username);
        } else if (command === 'Reverse') {
            const start = Number(tokens[1]);
            const end = Number(tokens[2]);
            if (start >= 0 && end < username.length) {
                const sub = username.substring(start, end + 1).split('').reverse().join('');
                console.log(sub);
            }
        } else if (command === 'Cut') {
            if (username.includes(tokens[1])) {
                username = username.replace(tokens[1], '');
                console.log(username);
            } else {
                console.log(`The word ${username} doesn't contain ${tokens[1]}.`);
            }
        } else if (command === 'Replace') {
            while (username.includes(tokens[1])) {
                username = username.replace(tokens[1], '*');
            }
            console.log(username);
        } else if (command === 'Check') {
            if (username.includes(tokens[1])) {
                console.log('Valid');
            } else {
                console.log(`Your username must contain ${tokens[1]}.`);
            }
        }
    } 
}

solve(
    [
        'Pesho',
        'Case lower',
        'Cut ES',
        'Check @',
        'Sign up',
    ]
)

solve(
    [
        'ThisIsMyString',
        'Reverse 1 4',
        'Replace i',
        'Cut My',
        'Sign up',
    ]
)