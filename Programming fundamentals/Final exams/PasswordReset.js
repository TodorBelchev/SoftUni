function solve(input) {
    let password = input.shift();
    for (const line of input) {
        if (line === 'Done') { break }
        const tokens = line.split(' ');
        const command = tokens[0];
        if (command === 'TakeOdd') {
            let current = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    current += password[i];
                }
            }
            password = current;
            console.log(password);
        } else if (command === 'Cut') {
            const sub = password.substring(tokens[1], Number(tokens[1]) + Number(tokens[2]));
            password = password.replace(sub, '');
            console.log(password);
        } else if (command === 'Substitute') {
            if (password.includes(tokens[1])) {
                password = password.replace(new RegExp(tokens[1], 'g'), tokens[2]);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

solve(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
      ]
)