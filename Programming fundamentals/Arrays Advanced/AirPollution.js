function solve(input, commands) {
    let matrix = [];
    const polluted = [];

    for (const line of input) {
        matrix.push(line.split(' ').map(Number));
    }

    for (const kvp of commands) {
        let [command, value] = kvp.split(' ');
        value = Number(value);

        if (command === 'breeze') {
            matrix[value] = matrix[value].map(x => x - 15 < 0 ? x = 0 : x -= 15);
        } else if (command === 'gale') {
            matrix = matrix.map(x => {
                x[value] -= 20;
                if (x[value] < 0) { x[value] = 0 };
                return x;
            });
        } else if (command === 'smog') {
            matrix = matrix.map(x => {
                x = x.map(e => e += value);
                return x;
            });
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                polluted.push(`[${i}-${j}]`)
            }
        }
    }

    if (polluted.length > 0) {
        console.log(`Polluted areas: ${polluted.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

solve(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    ["breeze 1", "gale 2", "smog 25"]
)