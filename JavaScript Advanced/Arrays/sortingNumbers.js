function solve(input) {
    const output = [];
    input.sort((a, b) => a - b);
    while(input.length > 0) {
        output.push(input.shift());
        output.push(input.pop());
    }
    output[output.length - 1] === undefined ? output.pop() : 'pass';
    return output;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]));