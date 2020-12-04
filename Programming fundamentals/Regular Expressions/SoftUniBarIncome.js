function solve(input) {
    let total = 0;
    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        const pattern = /%(?<name>[A-Z][a-z]+)%[^\|$%\.]*?<(?<product>\w+)>[^\|$%\.]*?\|(?<quantity>\d+)\|[^\|$%\.]*?(?<price>\d+\.?\d+)\$/g;
        if (match = pattern.exec(line)) {
            const price = Number(match.groups.quantity) * Number(match.groups.price);
            total += price;
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

solve(
    [
        '%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
)