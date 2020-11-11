function solve(a, b) {
    function getFactorial(num) {
        if (num === 0) {
            return 1;
        }
        return num * getFactorial(num - 1);
    }
    let first = getFactorial(a);
    let second = getFactorial(b);
    console.log((first / second).toFixed(2));
}