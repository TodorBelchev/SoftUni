function solve(input) {
    const inputArr = input.split('');
    const output = [];
    for (const index in inputArr) {
        if (inputArr[index] !== inputArr[Number(index) + 1]) {
            output.push(inputArr[index]);
        }
    }
    console.log(output.join(''));
}

solve(
    'aaaaabbbbbcdddeeeedssaa'
)