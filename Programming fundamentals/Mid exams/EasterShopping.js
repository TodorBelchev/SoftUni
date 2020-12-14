function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) { return true }
        return false;
    }

    const shops = input.shift().split(' ');
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const tokens = input[i].split(' ');
        const command = tokens[0];
        let shop;
        let index;

        switch (command) {
            case 'Include':
                shop = tokens[1];
                shops.push(shop);
                break;
            case 'Visit':
                const direction = tokens[1];
                const shopsCount = Number(tokens[2]);

                if (shopsCount <= shops.length) {

                    if (direction === 'first') {
                        shops.splice(0, shopsCount);
                    } else {
                        shops.splice(-shopsCount);
                    }
                }

                break;
            case 'Prefer':
                index = Number(tokens[1]);
                const secondIndex = Number(tokens[2]);

                if (isValidIndex(index, shops) && isValidIndex(secondIndex, shops)) {
                    const temp = shops[index];
                    shops[index] = shops[secondIndex];
                    shops[secondIndex] = temp;
                }

                break;
            case 'Place':
                shop = tokens[1];
                index = Number(tokens[2]);

                if (isValidIndex(index, shops)) {
                    shops.splice(index + 1, 0, shop);
                }

                break;
        }

    }

    console.log('Shops left:');
    console.log(shops.join(' '));
}

solve(
    [
        'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
        '5',
        'Include HM',
        'Visit first 2',
        'Visit last 1',
        'Prefer 3 1',
        'Place Library 2'
    ]
)