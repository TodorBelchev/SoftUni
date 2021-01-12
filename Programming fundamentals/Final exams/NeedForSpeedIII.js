function solve(input) {
    const n = Number(input.shift());
    const cars = {};
    for (let i = 0; i < n; i++) {
        const [car, mileage, fuel] = input.shift().split('|');
        if (!cars.hasOwnProperty(car)) {
            cars[car] = { mileage: 0, fuel: 0 };
        }
        cars[car].mileage += Number(mileage);
        cars[car].fuel += Number(fuel);
    }
    for (const line of input) {
        if (line === 'Stop') { break }
        const tokens = line.split(' : ');
        const command = tokens[0];
        const car = tokens[1];
        let fuel;
        let distance;
        if (command === 'Drive') {
            fuel = Number(tokens[3]);
            distance = Number(tokens[2]);
            if (cars[car].fuel > fuel) {
                cars[car].fuel -= fuel;
                cars[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[car].mileage > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }
        } else if (command === 'Refuel') {
            fuel = Number(tokens[2]);
            if (cars[car].fuel + fuel >= 75) {
                fuel = 75 - cars[car].fuel;
            }
            cars[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        } else if (command === 'Revert') {
            distance = Number(tokens[2]);
            cars[car].mileage -= distance;
            if (cars[car].mileage >= 10000) {
                console.log(`${car} mileage decreased by ${distance} kilometers`);
            } else {
                cars[car].mileage = 10000;
            }
        }
    }
    Object.keys(cars)
        .sort((a, b) => cars[b].mileage - cars[a].mileage || a.localeCompare(b))
        .forEach(x => console.log(`${x} -> Mileage: ${cars[x].mileage} kms, Fuel in the tank: ${cars[x].fuel} lt.`));
}

solve(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
)