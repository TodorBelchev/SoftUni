function solve(input) {
    const rotations = Number(input.pop());

    if (Number.isNaN(rotations)) { return 'Empty' }

    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

console.log(solve(
    ['remove', 'remove', 'remove']
))