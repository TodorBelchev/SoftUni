function solve(input) {
    const days = Number(input[0]);
    const budget = Number(input[1]);
    const pplCount = Number(input[2]);
    const priceFuelPerKm = Number(input[3]);
    const foodPerPerson = Number(input[4]);
    let hotelPerPerson = Number(input[5]);

    if (pplCount > 10) {
        hotelPerPerson *= 0.75;
    }

    let currentExpenses = (hotelPerPerson + foodPerPerson) * pplCount * days;
    const distances = input.slice(6);

    for (let i = 1; i <= days; i++) {
        const distance = Number(distances[i - 1]);
        currentExpenses += distance * priceFuelPerKm;

        if (i % 3 === 0 || i % 5 === 0) {
            currentExpenses *= 1.4;
        }

        if (i % 7 === 0) {
            currentExpenses -= currentExpenses / pplCount;
        }

        if (currentExpenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
            return;
        }

    }

    console.log(`You have reached the destination. You have ${(budget - currentExpenses).toFixed(2)}$ budget left.`);
}

solve(
    [
        '7', '12000', '5',
        '1.5', '10', '20',
        '512', '318', '202',
        '154', '222', '108',
        '123'
    ]
)