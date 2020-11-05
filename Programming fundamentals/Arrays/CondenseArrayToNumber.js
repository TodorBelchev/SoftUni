function solve(arr) {
    while (arr.length > 1) {
        let condensed = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = arr[i] + arr[i + 1]
        }
        arr = condensed;
    }
    console.log(arr[0]);
}