function solve(input) {
    const output = [];
    for (const data of input) {
        if (data < 0) {
            output.unshift(data);
        } else {
            output.push(data);
        }
    }
    console.log(output.join('\r\n'));
}

solve(
    [3, -2, 0, -1]
)