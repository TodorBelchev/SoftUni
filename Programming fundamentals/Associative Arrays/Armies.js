function solve(input) {
    let armies = {};
    let leaderArr;
    for (const line of input) {

        if (line.includes('arrives')) {
            leaderArr = line.split(' ');
            leaderArr.pop();
            armies[leaderArr.join(' ')] = [];
        }

        if (line.includes('defeated')) {
            leaderArr = line.split(' ');
            leaderArr.pop();
            delete armies[leaderArr.join(' ')];
        }

        if (line.includes(':')) {
            const [leader, army] = line.split(': ');
            const [armyName, armyCount] = army.split(', ');

            if (armies[leader]) {
                const current = { armyName, armyCount: Number(armyCount) };
                armies[leader].push(current);
            }

        }

        if (line.includes('+')) {
            const [armyName, armyCount] = line.split(' + ');
            Object.entries(armies).forEach(kvp => {
                kvp[1].forEach(o => {
                    if (o.armyName === armyName) {
                        o.armyCount += Number(armyCount);
                    }
                })

            });
        }

    }

    Object.entries(armies).forEach(c => {
        armies[c[0]] = c[1].sort((a, b) => b.armyCount - a.armyCount);
    });

    const sorted = Object.entries(armies).sort((a, b) => {
        let aSum = a[1].reduce((acc, curr) => acc + curr.armyCount, 0);
        let bSum = b[1].reduce((acc, curr) => acc + curr.armyCount, 0);
        return bSum - aSum;
    });

    sorted.forEach(l => {
        let sum = l[1].reduce((acc, curr) => acc + curr.armyCount, 0);
        console.log(`${l[0]}: ${sum}`);
        l[1].forEach(o => console.log(`>>> ${o.armyName} - ${o.armyCount}`));
    });
}

solve(
    [
        'Rick Burr arrives',
        'Fergus: Wexamp, 30245',
        'Rick Burr: Juard, 50000',
        'Findlay arrives',
        'Findlay: Britox, 34540',
        'Wexamp + 6000',
        'Juard + 1350',
        'Britox + 4500',
        'Porter arrives',
        'Porter: Legion, 55000',
        'Legion + 302',
        'Rick Burr defeated',
        'Porter: Retix, 3205'
    ]
)