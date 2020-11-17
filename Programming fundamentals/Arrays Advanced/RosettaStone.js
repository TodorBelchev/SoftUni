function solve(input) {
    const n = Number(input.shift());
    const template = [];
    const matrix = [];

    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(' ').map(Number);

        if (i < n) {
            template.push(line);
        } else {
            matrix.push(line);
        }
    }

    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[j].length; k++) {
            matrix[j][k] += template[j % template.length][k % template[0].length];
            matrix[j][k] %= 27;

            if (matrix[j][k] === 0) {
                matrix[j][k] = ' ';
            } else {
                matrix[j][k] = String.fromCharCode(64 + matrix[j][k]);
            }

        }
    }

    let output = '';

    for (const line of matrix) {
        for (const char of line) {
            output += char;
        }
    }

    console.log(output);
}


solve(
    [
        '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22'
    ]
)