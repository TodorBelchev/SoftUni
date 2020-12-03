function solve(input) {
    const pattern = /\b[A-Z][a-z]+\b \b[A-Z][a-z]+\b/g;
    const names = [];
    while ((valid = pattern.exec(input))) {
        names.push(valid);
    }
    console.log(names.join(' '));
}
