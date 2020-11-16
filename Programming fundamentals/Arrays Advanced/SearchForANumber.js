function solve(arr, arr2) {
    let [numbersCount, deleteCount, searchedNum] = [...arr2];
    arr.splice(numbersCount);
    arr.splice(0, deleteCount);
    let counter = 0;
    for (const num of arr) {
        if (num === searchedNum) {
            counter++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}