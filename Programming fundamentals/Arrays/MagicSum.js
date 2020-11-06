function solve(arr, num) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (num === arr[i] + arr[j]) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}