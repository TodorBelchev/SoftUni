function solve(a, b, c) {
    let result = a + b + c;
    if (Number.isInteger(result)) {
        console.log(`${result} - Integer`);
    } else {
        console.log(`${result} - Float`);
    }
}