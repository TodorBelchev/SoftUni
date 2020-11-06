function solve(arr) {
    let longest = []

    let current = [arr[0]];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            current.push(arr[i])
            if (current.length > longest.length) {
                longest = current;
            }
        } else {
            current = [];
            current.push(arr[i + 1]);
        }
    }
    console.log(longest.join(` `));
}