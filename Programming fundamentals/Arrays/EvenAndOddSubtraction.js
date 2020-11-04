function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    arr.map(d => Number(d)).forEach(d => d % 2 === 0 ? sumEven += d : sumOdd += d);
    console.log(sumEven - sumOdd);
}