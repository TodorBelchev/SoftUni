function solve(input) {
    let total = 0;
    const furniture = [];
    for (let line of input) {
        let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
        if (line === 'Purchase') {
            break;
        }

        let match = pattern.exec(line);

        if (match) {
            const product = match.groups['name'];
            const price = match.groups['price'];
            const quantity = match.groups['quantity'];
            furniture.push(product);
            total += price * quantity;
        }
    }
    console.log('Bought furniture:');
    if (furniture.length > 0) {
        console.log(furniture.join('\r\n'));
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

solve(
    ['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
)