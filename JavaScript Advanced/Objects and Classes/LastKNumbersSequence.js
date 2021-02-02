function solve(n, k) {
    let numbers = [1];
    for (let i = 1; i < n; i++) {
        let current = 0;
        let start = 0;
        if (i - k > 0) {
            start = i - k;
        }
        for (let j = start; j < i; j++) {
            current += numbers[j];
        }
        numbers.push(current);
    }
    return numbers;
}

solve(
    8, 2
)