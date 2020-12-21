function solve(input) {
    const targets = input.shift().split(' ').map(Number);
    let counter = 0;

    for (const line of input) {

        if (line === 'End') {
            break;
        }

        const index = Number(line);

        if (index >= 0 && index < targets.length) {

            if (targets[index] !== -1) {
                counter++;
                const changeNumber = targets[index];

                targets.forEach((t, i) => {
                    if (t > changeNumber && t !== -1) {
                        targets[i] -= changeNumber;
                    } else if (t <= changeNumber && t !== -1) {
                        targets[i] += changeNumber;
                    }
                })
                targets[index] = -1;
            }
        }
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}

solve(
    ['30 30 12 60 54 66', '5', '2', '4', '0', 'End']
);