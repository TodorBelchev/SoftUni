function solve(input) {
    const experience = Number(input.shift());
    const battlesCount = Number(input.shift());
    let currentExp = 0;
    let counter = 0;

    for (let i = 1; i <= battlesCount; i++) {

        if (currentExp >= experience) {
            break;
        }

        counter++;

        let current = Number(input[i - 1]);

        if (i % 3 === 0) {
            current *= 1.15;
        }

        if (i % 5 === 0) {
            current *= 0.9;
        }

        currentExp += current;
    }

    if (currentExp >= experience) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(experience - currentExp).toFixed(2)} more needed.`);
    }
}

solve(
    [
        '400', '5',
        '50', '100',
        '200', '100',
        '20'
    ]
)