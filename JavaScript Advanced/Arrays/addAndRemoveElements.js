function solve(input) {
    const output = [];
    for (const index in input) {
        const cmd = input[index];
        if (cmd === 'add') {
            output.push(Number(index) + 1);
        } else {
            output.pop();
        }
    }
    output.length !== 0 ? console.log(output.join('\r\n')) : console.log('Empty');
}
