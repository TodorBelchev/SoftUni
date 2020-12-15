function solve(input) {

    function isValidPrice(price, item) {
        if ((item === 'Clothes' && price <= 50) ||
            (item === 'Shoes' && price <= 35) ||
            (item === 'Accessories' && price <= 20.5)) {
            return true;
        }
        return false;
    }

    const items = input.shift().split('|');
    let budget = Number(input[0]);
    const boughtItems = [];
    let profit = 0;
    let total = 0;

    for (const item of items) {
        const tokens = item.split('->');
        const currentItem = tokens[0];
        const price = Number(tokens[1]);

        if (isValidPrice(price, currentItem) && budget >= price) {
            profit += price * 0.4;
            boughtItems.push((price * 1.4).toFixed(2));
            budget -= price;
            total += price * 1.4;
        }
    }

    console.log(boughtItems.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (total + budget >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
    
}

solve(
    ['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', '120']
)