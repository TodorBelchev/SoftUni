function solve(input) {
    return input.sort((a, b) => a - b).slice(input.length / 2);
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));