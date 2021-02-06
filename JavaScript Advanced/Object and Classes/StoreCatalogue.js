function solve(input) {
    const catalogue = {};
    
    for (const line of input) {
        const [product, price] = line.split(' : ');
        catalogue[product] = Number(price);
    }

    let current = '';
    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(x => {
            if (current !== x[0]) {
                current = x[0];
                console.log(current);
            }
            console.log(`  ${x}: ${catalogue[x]}`);
        })
}

solve(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)