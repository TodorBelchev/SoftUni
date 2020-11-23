function solve(input) {
    let products = new Map();
    input.forEach(line => {
        const [product, quantity] = line.split(` `);
        if (!products.has(product)) {
            products.set(product, 0);
        }
        products.set(product, (products.get(product) + Number(quantity)));
    })
    for (const kvp of products) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve(
    [
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ]
)