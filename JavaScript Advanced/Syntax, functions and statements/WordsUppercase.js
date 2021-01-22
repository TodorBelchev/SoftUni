function solve(input) {
    const arr = [];
    const pattern = /\w+/g;
    while (valid = pattern.exec(input)) {
        arr.push(valid[0].toUpperCase());
    }
    console.log(arr.join(', '));
}

solve(
    'Hi, how are you?'
)