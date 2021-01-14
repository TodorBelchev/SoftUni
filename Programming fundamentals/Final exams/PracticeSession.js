function solve(input) {
    const roads = {};
    for (const line of input) {
        const tokens = line.split('->');
        const command = tokens[0];
        const road = tokens[1];
        if (command === 'Add') {
            if (!roads.hasOwnProperty(road)) {
                roads[road] = [];
            }
            roads[road].push(tokens[2]);
        } else if (command === 'Move') {
            if (roads[road].includes(tokens[2])) {
                const index = roads[road].indexOf(tokens[2]);
                roads[road].splice(index, 1);
                roads[tokens[3]].push(tokens[2]);
            }
        } else if (command === 'Close') {
            delete roads[road];
        }
    }
    console.log('Practice sessions:');
    Object.keys(roads).sort((a, b) => roads[b].length - roads[a].length || a.localeCompare(b)).forEach(x => {
        console.log(x);
        roads[x].forEach(r => console.log(`++${r}`))
    });
}

solve(
    [
        'Add->Glencrutchery Road->Giacomo Agostini',
        'Add->Braddan->Geoff Duke',
        'Add->Peel road->Mike Hailwood',
        'Add->Glencrutchery Road->Guy Martin',
        'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
        'Close->Braddan',
        'END',
    ]
)

solve(
    [
        'Add->Glen Vine->Steve Hislop',
        'Add->Ramsey road->John McGuinness ',
        'Add->Glen Vine->Ian Hutchinson',
        'Add->Ramsey road->Dave Molyneux',
        'Move->Ramsey road->Hugh Earnsson->Glen Vine',
        'Add->A18 Snaefell mountain road->Mike Hailwood',
        'Add->Braddan->Geoff Duke',
        'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
        'Move->Braddan->John McGuinness->Glen Vine',
        'Close->A18 Snaefell mountain road',
        'END',
    ]
)