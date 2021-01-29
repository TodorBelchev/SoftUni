function solve(input) {
    const output = [];
    let start = input.length - 1;
    if (input.length % 2 !== 0) {
        start -= 1;
    }
    for (let i = start; i >= 0; i -= 2) {
        output.push(input[i] * 2);
    }
    console.log(output.join(' '));
}

solve(
    [3, 0, 10, 4, 7, 3]
)