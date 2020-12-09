function solve(input) {
    const numbers = input.shift().split(' ').map(Number);
    for (const line of input) {

        if (line === 'end') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        const index = Number(tokens[1]);
        const secondIndex = Number(tokens[2]);

        if (command === 'swap') {
            const temp = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = temp;
        } else if (command === 'multiply') {
            numbers[index] *= numbers[secondIndex];
        } else if (command === 'decrease') {
            numbers.forEach((n, i) => numbers[i] -= 1);
        }

    }

    console.log(numbers.join(', '));
}

solve(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
)