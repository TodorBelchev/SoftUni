function solve(input) {
    const garages = new Map();

    for (const line of input) {
        const [garage, car] = line.split(' - ');

        if (!garages.has(garage)) {
            garages.set(garage, []);
        }

        garages.get(garage).push(car);
    }

    let output = ''
    for (let [currGarage, currCarKeyValue] of Array.from(garages.entries())) {
        output += `Garage № ${currGarage}\n`
 
        for (let currCarProperties of currCarKeyValue) {
 
            for (let everySymbol of currCarProperties) {
                currCarProperties = currCarProperties.replace(': ', ' - ')
            }
 
            output += `--- ${currCarProperties}\n`
        }
    }
    console.log(output);
}

solve(
    [
        '1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ]
)