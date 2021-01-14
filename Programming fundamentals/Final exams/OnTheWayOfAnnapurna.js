function solve(input) {
    const store = {};
    for (const line of input) {
        let [command, name, items] = line.split('->');
        if (command === 'Add') {
            items = items.split(',');
            if (!store.hasOwnProperty(name)) {
                store[name] = [];
            }
            items.forEach(i => store[name].push(i));
        } else if (command === 'Remove') {
            delete store[name];
        }
    }
    console.log('Stores list:');
    Object.keys(store)
        .sort((a, b) => store[b].length - store[a].length || b.localeCompare(a)).forEach(x => {
            console.log(x);
            store[x].forEach(el => console.log(`<<${el}>>`));
        });
}

solve(
    [
        'Add->PeakSports->Map,Navigation,Compass',
        'Add->Paragon->Sunscreen',
        'Add->Groceries->Dried-fruit,Nuts',
        'Add->Groceries->Nuts',
        'Add->Paragon->Tent',
        'Remove->Paragon',
        'Add->Pharmacy->Pain-killers',
        'END'
    ]
)

solve(
    [
        'Add->Peak->Waterproof,Umbrella',
        'Add->Groceries->Water,Juice,Food',
        'Add->Peak->Tent',
        'Add->Peak->Sleeping-Bag',
        'Add->Peak->Jacket',
        'Add->Groceries->Lighter',
        'Remove->Groceries',
        'Remove->Store',
        'END'
    ]
)