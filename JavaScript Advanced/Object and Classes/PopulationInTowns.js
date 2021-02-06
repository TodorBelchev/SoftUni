function solve(input) {
    const towns = {};

    for (const line of input) {
        const [town, population] = line.split(' <-> ');

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += Number(population);
    }

    for (const key of Object.keys(towns)) {
        console.log(`${key} : ${towns[key]}`);
    }
    
}

solve(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
)