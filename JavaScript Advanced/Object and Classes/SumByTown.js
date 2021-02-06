function solve(input) {
    const towns = {};

    for (let i = 0; i < input.length; i += 2) {
        const town = input[i];
        const income = Number(input[i + 1]);

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += income;
    }

    console.log(JSON.stringify(towns));
}

solve(
    ['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']
)