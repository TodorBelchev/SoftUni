function solve(arr) {
    let guests = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(` `);
        let name = tokens[0];
        let command = tokens[2];
        if (command === `going!` && !guests.includes(name)) {
            guests.push(name);
        } else if (command === `going!` && guests.includes(name)) {
            console.log(`${name} is already in the list!`);
        } else if (command === `not` && guests.includes(name)) {
            let index = guests.indexOf(name);
            guests.splice(index, 1)
        } else if (command === `not` && !guests.includes(name)) {
            console.log(`${name} is not in the list!`);
        }
    }
    console.log(guests.join(`\r\n`));
}