function solve(input) {
    let manager = {};
    const capacity = Number(input.shift());
    for (const line of input) {
        if (line === 'Statistics') { break }
        const tokens = line.split('=');
        const command = tokens[0];
        if (command === 'Add' && manager.hasOwnProperty(tokens[1]) === false) {
            manager[tokens[1]] = { sent: Number(tokens[2]), received: Number(tokens[3]) };
        } else if (command === 'Message') {
            if (manager.hasOwnProperty(tokens[1]) && manager.hasOwnProperty(tokens[2])) {
                manager[tokens[1]].sent++;
                manager[tokens[2]].received++;
            }
            if ((manager[tokens[1]].sent + manager[tokens[1]].received) >= capacity) {
                console.log(`${tokens[1]} reached the capacity!`);
                delete manager[tokens[1]];
            }
            if ((manager[tokens[2]].sent + manager[tokens[2]].received) >= capacity) {
                console.log(`${tokens[2]} reached the capacity!`);
                delete manager[tokens[2]];
            }
        } else if (command === 'Empty') {
            if (tokens[1] === 'All') {
                manager = {};
            } else {
                delete manager[tokens[1]]
            }
        }
    }
    const keys = Object.keys(manager);
    console.log(`Users count: ${keys.length}`);
    keys
        .sort((a, b) => manager[b].received - manager[a].received || a.localeCompare(b))
        .forEach(x => console.log(`${x} - ${manager[x].received + manager[x].sent}`));
}

solve(
    [
        '10',
        'Add=Mark=5=4',
        'Add=Clark=3=5',
        'Add=Berg=9=0',
        'Add=Kevin=0=0',
        'Message=Berg=Kevin',
        'Statistics',
    ]
)

solve(
    [
        '20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        'Add=Michael=3=9',
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        'Message=Michael=Amy',
        'Statistics',
    ]
)

solve(
    [
        '12',
        'Add=Bonnie=3=5',
        'Add=Johny=4=4',
        'Empty=All',
        'Add=Bonnie=3=3',
        'Statistics',
    ]
)