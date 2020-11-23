function solve(input) {
    let hoodsPopulation = {};
    const hoods = input.shift().split(`, `).forEach(hood => hoodsPopulation[hood] = []);
    for (const line of input) {
        const [currentHood, name] = line.split(` - `);
        if (hoodsPopulation[currentHood]) {
            hoodsPopulation[currentHood].push(name);
        }
    }
    const sorted = Object.entries(hoodsPopulation).sort((a, b) => b[1].length - a[1].length);
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (const man of kvp[1]) {
            console.log(`--${man}`);
        }
    }
}

solve(
    [
        'Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy'
    ]
)