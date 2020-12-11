function solve(input) {
    let energy = input.shift();
    let winCounter = 0;

    for (const line of input) {

        if (line === 'End of battle') {
            return `Won battles: ${winCounter}. Energy left: ${energy}`
        }

        const distance = Number(line);

        if (energy < distance) {
            return `Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`
        }

        energy -= distance;
        winCounter++;

        if (winCounter % 3 === 0) {
            energy += winCounter;
        }

    }
}

console.log(solve(
    ['200', '54', '14', '28', '13', 'End of battle']
));