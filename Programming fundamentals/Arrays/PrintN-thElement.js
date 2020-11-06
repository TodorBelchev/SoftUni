function solve(input) {
    const step = Number(input.pop());
    let result = '';
    for (let i = 0; i < input.length; i += step) {
        result += input[i] + ' ';
    }
    console.log(result);
}

solve(
    ['5', '20', '31', '4', '20', '2']
)