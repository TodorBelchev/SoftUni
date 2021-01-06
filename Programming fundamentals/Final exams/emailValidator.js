function solve(input) {
    let email = input.shift();
    for (const line of input) {
        if (line === 'Complete') { break }
        const [command, a] = line.split(' ');
        if (command === 'Make') {
            if (a === 'Upper') {
                email = email.toLocaleUpperCase();
            } else {
                email = email.toLocaleLowerCase();
            }
            console.log(email);
        } else if (command === 'GetDomain') {
            console.log(email.substring(email.length - Number(a)));
        } else if (command === 'GetUsername') {
            const index = email.indexOf('@');
            if (index === -1) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                console.log(email.substring(0, index));
            }
        } else if (command === 'Replace') {
            while (email.includes(a)) {
                email = email.replace(a, '-');
            }
            console.log(email);
        } else if (command === 'Encrypt') {
            const symbolsASCII = [];
            for (const char of email) {
                symbolsASCII.push(char.charCodeAt());
            }
            console.log(symbolsASCII.join(' '));
        }
    }
}

solve(
    [
        'Mike123@somemail.com',
        'Make Upper',
        'GetDomain 3',
        'GetUsername',
        'Encrypt',
        'Complete',
    ]
)

solve(
    [
        'AnotherMail.com',
        'Make Lower',
        'GetUsername',
        'Replace a',
        'Complete',
    ]
)