function solve(input) {
    input.sort((a, b) => a - b).length = 2;
    console.log(input.join(' '));
}

solve(
    [30, 15, 50, 5]
)