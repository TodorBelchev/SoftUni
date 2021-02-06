function solve(input) {
    const products = {};

    for (const line of input) {
        const [town, product, price] = line.split(' | ');

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        if (!products[product].hasOwnProperty(town)) {
            products[product][town] = Number.MAX_SAFE_INTEGER;
        } else {
            products[product][town] = Number(price);
        }

        const oldPrice = Object.values(products[product])[0];

        if (oldPrice >= Number(price)) {
            products[product][town] = Number(price);
        }

    }

    Object.keys(products).forEach(x => {
        const sorted = Object.entries(products[x]).sort((a, b) => a[1] - b[1]);
        const city = sorted[0][0];
        const price = sorted[0][1];
        console.log(`${x} -> ${price} (${city})`);
    });
}

solve(
    [
        'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'
    ]
)