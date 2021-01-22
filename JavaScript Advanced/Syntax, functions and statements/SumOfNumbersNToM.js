function solve(a, b) {
    let sum = 0;
    const N = Number(a);
    const M = Number(b);
    for (let i = N; i <= M; i++) {
        sum += i;
    }
    console.log(sum);
}

solve(
    '1', '5'
)