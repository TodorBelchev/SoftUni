function solve(arr) {
    let output = [];
    while (arr.length > 0) {
        if (arr.length > 0) {
            let max = Math.max(...arr);
            output.push(max);
            arr.splice(arr.indexOf(max), 1);
        }
        if (arr.length > 0) {
            let min = Math.min(...arr);
            output.push(min);
            arr.splice(arr.indexOf(min), 1);
        }
    }
    console.log(output.join(` `));
}