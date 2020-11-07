function solve(input) {
    let result = [];
    for (let i = 1; i <= input.length; i++) {
        const command = input[i - 1];
        if (command === 'add') {
            result.push(i);
        } else {
            result.pop();
        }
    }
    console.log(result.join(' ') || 'Empty');
}

solve(
    ['add', 'add', 'remove', 'add', 'add']
)