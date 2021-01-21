function solve(a, b) {
    let small = Math.min(a, b);
    let large = Math.max(a, b);
    let remainder = 1;
    while (remainder !== 0) {
        remainder = large % small;
        large = small;
        small = remainder;
    }
    console.log(large);
}

solve(
    2154, 458
)