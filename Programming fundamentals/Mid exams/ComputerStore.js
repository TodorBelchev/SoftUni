function solve(input) {
    let price = 0;
    let taxes = 0;

    for (const line of input) {

        if (line === 'special' || line === 'regular') {
            break;
        }

        const currentPrice = Number(line);

        if (currentPrice < 0) {
            console.log('Invalid price!');
            continue;
        }

        price += currentPrice;
        taxes += currentPrice * 0.2;
    }

    let total = price + taxes;

    if (input[input.length - 1] === 'special') {
        total *= 0.9;
    }

    if (price === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${price.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${total.toFixed(2)}$`);
    }
}

solve(
    [
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
    ]
)