function solve(input) {

    function isValidIndex(matrix, x, y) {
        let isValid = true;

        if (x < 0 || y < 0 || x > matrix.length - 1 || y > matrix[0].length - 1) {
            isValid = false;
        }

        return isValid;
    }

    const coordinates = input.pop().split(' ');
    const matrix = [];
    let result = 0;
    let counter = 0;

    for (const line of input) {
        matrix.push(line.split(' ').map(Number));
    }

    for (const bomb of coordinates) {
        const [x, y] = bomb.split(',').map(Number);

        if (matrix[x][y] === 0) {
            continue;
        }

        result += matrix[x][y];
        counter++;

        if (isValidIndex(matrix, x - 1, y - 1)) {
            matrix[x - 1][y - 1] -= matrix[x][y];
            matrix[x - 1][y - 1] < 0 ? matrix[x - 1][y - 1] = 0 : '';
        }
        if (isValidIndex(matrix, x - 1, y)) {
            matrix[x - 1][y] -= matrix[x][y];
            matrix[x - 1][y] < 0 ? matrix[x - 1][y] = 0 : '';
        }
        if (isValidIndex(matrix, x - 1, y + 1)) {
            matrix[x - 1][y + 1] -= matrix[x][y];
            matrix[x - 1][y + 1] < 0 ? matrix[x - 1][y + 1] = 0 : '';
        }
        if (isValidIndex(matrix, x, y - 1)) {
            matrix[x][y - 1] -= matrix[x][y];
            matrix[x][y - 1] < 0 ? matrix[x][y - 1] = 0 : '';
        }
        if (isValidIndex(matrix, x, y + 1)) {
            matrix[x][y + 1] -= matrix[x][y];
            matrix[x][y + 1] < 0 ? matrix[x][y + 1] = 0 : '';
        }
        if (isValidIndex(matrix, x + 1, y - 1)) {
            matrix[x + 1][y - 1] -= matrix[x][y];
            matrix[x + 1][y - 1] < 0 ? matrix[x + 1][y - 1] = 0 : '';
        }
        if (isValidIndex(matrix, x + 1, y)) {
            matrix[x + 1][y] -= matrix[x][y];
            matrix[x + 1][y] < 0 ? matrix[x + 1][y] = 0 : '';
        }
        if (isValidIndex(matrix, x + 1, y + 1)) {
            matrix[x + 1][y + 1] -= matrix[x][y];
            matrix[x + 1][y + 1] < 0 ? matrix[x + 1][y + 1] = 0 : '';
        }

        matrix[x][y] = 0;
    }

    for (const line of matrix) {
        result += line.reduce((acc, curr) => {
            if (curr !== 0) { counter++ };
            return acc + curr;
        }, 0);
    }
    
    console.log(result);
    console.log(counter);
}

solve(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'
    ]
)