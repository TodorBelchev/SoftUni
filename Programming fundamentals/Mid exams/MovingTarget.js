function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) {
            return true;
        }
        return false
    }

    const targets = input.shift().split(' ').map(Number);
    for (const line of input) {

        if (line === 'End') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        const index = Number(tokens[1]);
        const value = Number(tokens[2]);

        if (command === 'Shoot') {

            if (isValidIndex(index, targets)) {
                if (targets[index] > value) {
                    targets[index] -= value;
                } else {
                    targets.splice(index, 1);
                }
            }

        } else if (command === 'Add') {

            if (isValidIndex(index, targets)) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {
            const start = index - value;
            const end = index + value;

            if (isValidIndex(index, targets) && start >= 0 && end < targets.length) {
                targets.splice(start, end - start + 1);
            } else {
                console.log('Strike missed!');
            }
        }

    }
    
    console.log(targets.join('|'));
}

solve(
    [
        '47 55 85 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
    ]
)