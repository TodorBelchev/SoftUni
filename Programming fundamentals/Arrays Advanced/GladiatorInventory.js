function solve(arr) {
    let equipment = arr.shift().split(` `);
    for (const line of arr) {
        let [command, item] = line.split(` `);
        switch (command) {
            case `Buy`:
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case `Trash`:
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index, 1);
                }
                break;
            case `Repair`:
                if (equipment.includes(item)) {
                    equipment.splice(equipment.indexOf(item), 1);
                    equipment.push(item);
                }
                break;
            case `Upgrade`:
                let tokens = item.split(`-`);
                if (equipment.includes(tokens[0])) {
                    let toInsert = `${tokens[0]}:${tokens[1]}`
                    equipment.splice(equipment.indexOf(tokens[0]) + 1, 0, toInsert);
                }
                break;
        }
    }
    console.log(equipment.join(` `));
}