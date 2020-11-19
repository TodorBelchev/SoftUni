function solve(arr1, arr2) {

    let store = {};
    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let quantity = Number(arr1[i + 1]);
        store[product] = quantity;
    }
    for (let j = 0; j < arr2.length; j += 2) {
        let name = arr2[j];
        let quantity = Number(arr2[j + 1]);
        if (store[name] === undefined) {
            store[name] = 0;
        }
        store[name] += quantity;
    }
    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)