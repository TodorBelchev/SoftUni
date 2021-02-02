function solve(input) {
    let max = Number.MIN_SAFE_INTEGER;
    for (const line of input) {
        const current = Math.max(...line);
        if (current > max) {
            max = current;
        }
    }
    return max;
}

solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
)