function solve(input) {
    const n = Number(input.shift());
    const pattern = /(U\$)(?<user>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}\d+)\3/g;
    let count = 0;
    for (let i = 0; i < n; i++) {
        const current = input.shift();
        const match = pattern.exec(current);
        if (match) {
            count++;
            console.log('Registration was successful');
            console.log(`Username: ${match.groups.user}, Password: ${match.groups.pass}`);
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${count}`);
}

solve(
    [
        '3',
        'U$MichaelU$P@$asdqwe123P@$',
        'U$NameU$P@$PasswordP@$',
        'U$UserU$P@$ad2P@$',
    ]
)

solve(
    [
        '2',
        'U$TommyU$P@$asdqwe123P@$',
        'Sara 1232412',
    ]
)