function solve(input) {
    counter = 0;

    for (let i = 0; i < input.length; i++) {
        const current = input[i];
        const next = input[i + 1] || [];

        for (let j = 0; j < current.length; j++) {
            if (current[j] === current[j + 1]) {
                counter++;
            }
            if (current[j] === next[j]) {
                counter++;
            }
        }
    }
    return counter;
}

solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
)