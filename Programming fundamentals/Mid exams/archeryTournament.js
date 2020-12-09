function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) { return true; }
        return false;
    }

    const field = input.shift().split('|').map(Number);
    let score = 0;

    for (const line of input) {

        if (line === 'Game over') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];

        if (command === 'Shoot') {
            const shootTokens = tokens[1].split('@');
            let direction = shootTokens[0];
            let index = Number(shootTokens[1]);
            let length = Number(shootTokens[2]);

            if (!isValidIndex(index, field)) {
                continue;
            }

            let targetIndex = index - length;

            if (direction === 'Left') {

                while (targetIndex < 0) {
                    targetIndex = field.length + targetIndex;
                }

            }

            if (direction === 'Right') {

                targetIndex = index + length;

                while (targetIndex >= field.length) {
                    targetIndex = targetIndex - field.length;
                }

            }

            if (field[targetIndex] >= 5) {
                score += 5;
                field[targetIndex] -= 5;
            } else {
                score += field[targetIndex];
                field[targetIndex] = 0;
            }

        } else if (command === 'Reverse') {
            field.reverse();
        }
    }

    console.log(field.join(' - '));
    console.log(`Iskren finished the archery tournament with ${score} points!`);
}
