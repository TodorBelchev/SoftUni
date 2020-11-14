function solve(input) {
    let train = input.shift().split(` `).map(Number);
    let capacity = Number(input.shift());
    for (const line of input) {
        let tokens = line.split(` `);
        let command = tokens[0];
        if (command === `Add`) {
            train.push(Number(tokens[1]));
        } else {
            for (const wagon in train) {
                if (train[wagon] + Number(tokens[0]) <= capacity) {
                    train[wagon] += Number(tokens[0]);
                    break;
                }
            }
        }
    }
    console.log(train.join(` `));
}