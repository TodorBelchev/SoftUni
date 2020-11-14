function solve(input) {
    let arr = input.shift().split(` `).map(Number);
    while (input.length > 0) {
        let tokens = input.shift().split(` `);
        let command = tokens[0];
        let number = 0;
        let index;

        switch (command) {
            case `Add`:
                number = Number(tokens[1]);
                arr.push(number);
                break;
            case `Remove`:
                number = Number(tokens[1]);
                arr = arr.filter(el => el !== number);
                break;
            case `RemoveAt`:
                index = Number(tokens[1]);
                arr.splice(index, 1);
                break;
            case `Insert`:
                index = Number(tokens[2]);
                number = Number(tokens[1]);
                arr.splice(index, 0, number)
                break;
        }
    }
    console.log(arr.join(` `));
}