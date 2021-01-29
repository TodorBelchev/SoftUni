function solve(input) {

    function checkForWin(arr) {
        let itsWin = ['false'];
        const row = arr[0].join('');
        const row2 = arr[1].join('');
        const row3 = arr[2].join('');
        const column = arr[0][0] + arr[1][0] + arr[2][0];
        const column2 = arr[0][1] + arr[1][1] + arr[2][1];
        const column3 = arr[0][2] + arr[1][2] + arr[2][2];
        const diagonal = arr[0][0] + arr[1][1] + arr[2][2];
        const diagonal2 = arr[0][2] + arr[1][1] + arr[2][0];
        if (row === 'OOO' || row2 === 'OOO' || row3 === 'OOO' || diagonal === 'OOO' || diagonal2 === 'OOO' || column === 'OOO' || column2 === 'OOO' || column3 === 'OOO') {
            itsWin = ['true', 'O'];
        }
        if (row === 'XXX' || row2 === 'XXX' || row3 === 'XXX' || diagonal === 'XXX' || diagonal2 === 'XXX' || column === 'XXX' || column2 === 'XXX' || column3 === 'XXX') {
            itsWin = ['true', 'X'];
        }
        return itsWin;
    }

    let matrix = [
        ['false', 'false', 'false'],
        ['false', 'false', 'false'],
        ['false', 'false', 'false']
    ];

    let currentPlayer = 'X';
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        const [x, y] = input[i].split(' ').map(Number);
        if (matrix[x][y] === 'false') {
            if (currentPlayer === 'X') {
                matrix[x][y] = 'X';
                currentPlayer = 'O';
            } else {
                matrix[x][y] = 'O';
                currentPlayer = 'X';
            }
            counter++;
        } else {
            console.log('This place is already taken. Please choose another!');
        }
        const check = checkForWin(matrix);
        if (check[0] === 'true') {
            console.log(`Player ${check[1]} wins!`);
            matrix.forEach(row => console.log(row.join('\t')));
            break;
        }
        if (counter === 9) {
            break;
        }
    }
    if (checkForWin(matrix)[0] === 'false') {
        console.log('The game ended! Nobody wins :(');
        matrix.forEach(row => console.log(row.join('\t')));
    }
}

solve(
    ["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]
)