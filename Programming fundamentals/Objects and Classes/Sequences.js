function solve(input) {
    const numbers = [];
    const result = [];
    for (const line of input) {
        const current = JSON.parse(line).sort((a, b) => b - a);
        const check = current.join(', ');
        if (!numbers.includes(check)) {
            numbers.push(check);
            result.push(current);
        }

    }
    result.sort((a, b) => a.length - b.length).forEach(x => console.log(`[${x.join(', ')}]`));
}

solve(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
)