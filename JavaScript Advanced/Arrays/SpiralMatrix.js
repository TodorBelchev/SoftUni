function solve(width, height) {
    const matrix = [];
    let counter = 1;
    let startCol = 0;
    let endCol = width - 1;
    let startRow = 0;
    let endRow = height - 1;

    for (let i = 0; i < height; i++) {
        const line = [];
        for (let j = 0; j < width; j++) {
            line.push(' ');
        }
        matrix.push(line);
    }

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            matrix[j][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let k = endCol; k >= startCol; k--) {
            matrix[endRow][k] = counter;
            counter++;
        }
        endRow--;
        for (let l = endRow; l >= startRow; l--) {
            matrix[l][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}

solve(
    5, 5
)