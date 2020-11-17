function solve(input) {
    const current = [];
    let result;

    for (const index in input) {

        if (Number.isInteger(input[index])) {
            current.push(input[index]);
            continue;
        }

        if (input[index] === '+') {
            if (current.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            result = current[current.length - 2] + current[current.length - 1];
            current[current.length - 2] = result;
            current.length -= 1;
        } else if (input[index] === '-') {
            if (current.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            result = current[current.length - 2] - current[current.length - 1];
            current[current.length - 2] = result;
            current.length -= 1;
        } else if (input[index] === '*') {
            if (current.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            result = current[current.length - 2] * current[current.length - 1];
            current[current.length - 2] = result;
            current.length -= 1;
        } else if (input[index] === '/') {
            if (current.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            result = current[current.length - 2] / current[current.length - 1];
            current[current.length - 2] = result;
            current.length -= 1;
        }
    }
    if (current.length === 1) {
        console.log(current[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

solve(
    [5, 3, 4, '*', '-']
)