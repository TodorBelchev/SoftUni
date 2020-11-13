function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        if (k > arr.length) {
            for (let j = 0; j < arr.length; j++) {
                let current = arr[j];
                sum += current;
            }
        } else {
            for (let j = i - k; j < arr.length; j++) {
                let current = arr[j];
                sum += current;
            }
        }
        arr.push(sum);
    }
    console.log(arr.join(` `));
}