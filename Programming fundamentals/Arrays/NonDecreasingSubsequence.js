function solve(input) {
    return input.filter((x, i) => x >= input[i - 1] || input[i - 1] === undefined).join(' ');
}

console.log(solve(
    [1, 3, 8, 4, 10, 12, 3, 2, 24]
))