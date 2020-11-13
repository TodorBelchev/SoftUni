function solve(arr) {
    let output = [];
    while (arr.length > 0) {
        let current = arr.shift();
        if (current >= 0) {
            output.push(current);
        } else {
            output.unshift(current);
        }
    }
    output.forEach(num => console.log(num));
}