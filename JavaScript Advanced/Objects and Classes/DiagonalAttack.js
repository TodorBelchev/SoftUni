function solve(input) {
    const matrix = [];
    for (const line of input) {
        matrix.push(line.split(' ').map(Number));
    }
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        leftSum += matrix[i][i];
        rightSum += matrix[matrix[i].length - 1 - i][matrix[i].length - 1 - i];
    }
    if (leftSum === rightSum) {
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (j !== i && j !== matrix[i].length - 1 - i) {
                    matrix[i][j] = leftSum;
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}

solve(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
)