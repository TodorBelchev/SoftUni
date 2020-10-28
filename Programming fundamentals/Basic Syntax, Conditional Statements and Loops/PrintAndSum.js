function solve(start, end) {
    let sum = 0;
    let line = ``;
    for (let i = start; i <= end; i++) {
        line += i + ` `;
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}