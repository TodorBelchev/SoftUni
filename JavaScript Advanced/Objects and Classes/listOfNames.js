function solve(input) {
    return input.sort().map((x, index) => x = `${index + 1}.${x}`).join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));