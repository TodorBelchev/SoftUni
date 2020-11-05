function solve(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }
    }
    let secondSum = 0;
    arr.forEach(d => secondSum += d);
    console.log(arr);
    console.log(sum);
    console.log(secondSum);
}