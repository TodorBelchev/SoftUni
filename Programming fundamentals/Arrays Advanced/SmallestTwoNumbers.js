function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[0] + ` ` + sortedArr[1]);
}