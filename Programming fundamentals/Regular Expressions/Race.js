function solve(input) {
    const racersArr = input.shift().split(', ');
    const racers = {};
    for (const racer of racersArr) {
        racers[racer] = 0;
    }
    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        const namePattern = /[A-Za-z]+/g;
        const distancePattern = /\d/g;
        let name = '';
        let distance = 0;

        while (match = namePattern.exec(line)) {
            name += match[0];
        }

        while (distanceMatch = distancePattern.exec(line)) {
            distance += Number(distanceMatch[0]);
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }
    }
    const sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    const places = ['1st', '2nd', '3rd']
    for (let i = 0; i < 3; i++) {
        console.log(`${places[i]} place: ${sorted[i][0]}`);
    }
}

solve(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
)