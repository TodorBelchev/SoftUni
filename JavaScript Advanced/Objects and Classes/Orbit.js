function solve(input) {
    const width = input[0];
    const height = input[1];
    const x = input[2];
    const y = input[3];
    const matrix = [];
    for (let i = 0; i < height; i++) {
        const line = [];
        for (let j = 0; j < width; j++) {
            line.push('false');
        }
        matrix.push(line);
    }
    for (let k = 0; k < width; k++) {
        for (let l = 0; l < height; l++) {
            matrix[k][l] = Math.max(Math.abs(k - x), Math.abs(l - y)) + 1;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}

solve(
    [4, 4, 0, 0]
)