function solve(arr) {
    let sum = 0;
    arr.map(d => Number(d)).forEach(d => d % 2 === 0 ? sum += d : sum += 0);
    console.log(sum);
}