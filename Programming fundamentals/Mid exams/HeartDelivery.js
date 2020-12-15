function solve(input) {
    let houses = input.shift().split(`@`).map(Number);
    let cupidIndex = 0;
    for (const line of input) {
        const tokens = line.split(` `);
        const command = tokens[0];
        if (command === `Love!`) {
            break;
        }
        const jump = Number(tokens[1]);
        cupidIndex += jump;
        if (cupidIndex > houses.length - 1) {
            cupidIndex = 0;
        }
        if (houses[cupidIndex] !== 0) {
            houses[cupidIndex] -= 2;
            if (houses[cupidIndex] === 0) {
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        }
    }
    console.log(`Cupid's last position was ${cupidIndex}.`);
    let failedCount = 0;
    for (const house of houses) {
        if (house > 0) {
            failedCount++;
        }
    }
    if (failedCount > 0) {
        console.log(`Cupid has failed ${failedCount} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

solve(
    [
        '2@4@2', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]

)