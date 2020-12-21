function solve(input) {
    let list = input.shift().split(`!`);
    for (const line of input) {
        const tokens = line.split(` `);
        const command = tokens[0];
        const item = tokens[1];
        switch (command) {
            case `Urgent`:
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case `Unnecessary`:
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                }
                break;
            case `Correct`:
                const newItem = tokens[2];
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1, newItem);
                }
                break;
            case `Rearrange`:
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                    list.push(item);
                }
                break;
        }
    }
    console.log(list.join(`, `));
}

solve(
    [
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
    ]
)