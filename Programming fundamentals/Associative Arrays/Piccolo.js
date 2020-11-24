function solve(input) {
    const parkingLot = [];
    input.forEach(line => {
        const [command, number] = line.split(', ');

        if (!parkingLot.includes(number) && command === 'IN') {
            parkingLot.push(number);
        } else if (parkingLot.includes(number) && command === 'OUT') {
            parkingLot.splice(parkingLot.indexOf(number), 1);
        }

    })
    parkingLot.sort((a, b) => a.localeCompare(b)).forEach(car => console.log(car));
}

solve(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
)