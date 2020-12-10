function solve(input) {
    const days = Number(input[0]);
    const expectedPlunder = Number(input[2]);
    let collected = 0;

    for (let i = 1; i <= days; i++) {
        let dailyPlunder = Number(input[1]);

        if (i % 3 === 0) {
            dailyPlunder *= 1.5;
        }

        collected += dailyPlunder;

        if (i % 5 === 0) {
            collected *= 0.7;
        }

    }

    const percentage = (collected / expectedPlunder) * 100;

    if (collected >= expectedPlunder) {
        console.log(`Ahoy! ${collected.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
    
}

solve(
    ['10', '20', '380']
)