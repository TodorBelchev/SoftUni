function solve(input) {
    let items = input.shift().split(`, `);
    for (const line of input) {
        const tokens = line.split(` - `);
        const command = tokens[0];
        const item = tokens[1];
        if (command === `Craft`) {
            break;
        }
        switch (command) {
            case `Collect`:
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;
            case `Drop`:
                if (items.includes(item)) {
                    items.splice(items.indexOf(item), 1);
                }
                break;
            case `Combine Items`:
                const twoItemsSplit = item.split(`:`);
                const oldItem = twoItemsSplit[0];
                const newItem = twoItemsSplit[1];
                if (items.includes(oldItem)) {
                    items.splice(items.indexOf(oldItem) + 1, 0, newItem);
                }
                break;
            case `Renew`:
                if (items.includes(item)) {
                    items.splice(items.indexOf(item), 1);
                    items.push(item);
                }
                break;
        }
    }
    console.log(items.join(`, `));
}

solve(
    [
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
)