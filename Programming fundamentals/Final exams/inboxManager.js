function solve(input) {
    const users = {};
    for (const line of input) {
        if (line === 'Statistics') { break }
        const [command, username, email] = line.split('->');
        if (command === 'Add') {
            if (users.hasOwnProperty(username)) {
                console.log(`${username} is already registered`);
            } else {
                users[username] = [];
            }
        } else if (command === 'Send') {
            users[username].push(email);
        } else if (command === 'Delete') {
            if (!users.hasOwnProperty(username)) {
                console.log(`${username} not found!`);
            } else {
                delete users[username];
            }
        }
    }
    const keys = Object.keys(users);
    console.log(`Users count: ${keys.length}`);
    keys
        .sort((a, b) => users[b].length - users[a].length || a.localeCompare(b))
        .forEach(x => {
            console.log(x);
            users[x].forEach(e => console.log(` - ${e}`));
        });
}

solve(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Some random test mail',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Send->George->It would be a pleasure',
        'Send->Mike->Another random test mail',
        'Statistics',
    ]
)

solve(
    [
        'Add->Mike',
        'Add->George',
        'Send->George->Hello World',
        'Send->George->Your loan is overdue',
        'Add->Mike',
        'Send->Mike->Hello, do you want to meet up tomorrow?',
        'Delete->Peter',
        'Send->George->I\'m busy',
        'Send->Mike->Another random test mail',
        'Delete->George',
        'Statistics',
    ]
)