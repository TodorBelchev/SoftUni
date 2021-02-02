function solve(input) {
    let start = 0;
    let end = input[0].length - 1;
    let leftSum = 0;
    let rightSum = 0;
    for (const line of input) {
        leftSum += line[start];
        rightSum += line[end];
        start++;
        end--;
    }
    console.log(`${leftSum} ${rightSum}`);
}

solve(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
)