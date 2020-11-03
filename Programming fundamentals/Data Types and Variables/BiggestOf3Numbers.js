function solve(a, b, c) {
    let arr = [a, b, c];
    let max = arr.reduce((a, b) => Math.max(a, b));
    console.log(max);
}