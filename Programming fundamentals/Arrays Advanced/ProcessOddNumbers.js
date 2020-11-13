function solve(arr) {
    let output = [];
    for (const index in arr) {
        if (index % 2 !== 0) {
            output.push(arr[index] * 2);
        }
    }
    console.log(output.reverse().join(` `));
}