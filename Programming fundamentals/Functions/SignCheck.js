function solve(num, num2, num3) {
    let counter = 0;
    if (num < 0) {
        counter++;
    }
    if (num2 < 0) {
        counter++;
    }
    if (num3 < 0) {
        counter++;
    }
    if (counter % 2 === 0 || num === 0 || num2 === 0 || num3 === 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}
