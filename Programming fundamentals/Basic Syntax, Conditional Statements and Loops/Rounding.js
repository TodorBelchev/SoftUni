function solve(num, rounding) {
    if (rounding > 15) {
        rounding = 15;
    }
    console.log(parseFloat(num.toFixed(rounding)));
}