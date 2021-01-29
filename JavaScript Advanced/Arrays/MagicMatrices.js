function solve(input) {
    let itsMagic = true;
    let sum = 0;
    input[0].forEach(n => sum += Number(n));

    for (let i = 0; i < input.length; i++) {
        let rowSum = 0;
        input[i].forEach(n => rowSum += n);
        let columnSum = 0;

        for (let j = 0; j < input.length; j++) {
            columnSum += input[j][i];
        }
        
        if (rowSum !== columnSum || sum !== rowSum || sum !== columnSum) {
            itsMagic = false;
            break;
        }
    }
    console.log(itsMagic);
}

solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
)