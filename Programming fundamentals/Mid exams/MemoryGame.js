function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) { return true; }
        return false;
    }

    const field = input.shift().split(' ');
    for (const index in input) {

        const line = input[index];

        if (line === 'end') {
            break;
        }

        const tokens = line.split(' ').map(Number);
        const firstIndex = tokens[0];
        const secondIndex = tokens[1];


        if (isValidIndex(firstIndex, field) && isValidIndex(secondIndex, field)) {
            if (field[firstIndex] === field[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${field[firstIndex]}!`);
                const firstToRemove = Math.max(firstIndex, secondIndex);
                const secondToRemove = Math.min(firstIndex, secondIndex);
                field.splice(firstToRemove, 1);
                field.splice(secondToRemove, 1);
            } else {
                console.log('Try again!');
            }
        } else {
            console.log('Invalid input! Adding additional elements to the board');
            field.splice(field.length / 2, 0, `-${Number(index) + 1}a`);
            field.splice(field.length / 2, 0, `-${Number(index) + 1}a`);
        }

        if (field.length === 0) {
            console.log(`You have won in ${Number(index) + 1} turns!`);
            return;
        }

    }

    if (field.length > 0) {
        console.log(`Sorry you lose :(
            ${field.join(' ')}`);
    }
}

solve(
    [
        "a 2 4 a 2 4",
        "4 0",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ]
)