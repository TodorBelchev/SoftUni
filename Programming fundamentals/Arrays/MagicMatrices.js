function solve(input) {
    const sum = input[0].reduce((acc, curr) => acc += curr);
    let itsMagic = true;

    for (let i = 0; i < input.length; i++) {
        const currRow = input[i].reduce((acc, curr) => acc += curr);
        const currCol = input.reduce((acc, curr) => acc += curr[i], 0);

        if (sum !== currRow || sum !== currCol) {
            itsMagic = false;
            break;
        }

    }

    return itsMagic;

}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))