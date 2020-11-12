function solve(input) {
    let result = 0;

    for (const line of input) {
        if (line === 'soap') {
            result += 10;
        } else if (line === 'water') {
            result *= 1.2;
        } else if (line === 'vacuum cleaner') {
            result *= 1.25;
        } else if (line === 'mud') {
            result *= 0.9;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

solve(
    ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
)