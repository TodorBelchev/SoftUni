function solve(arr1, arr2) {
    let isEqual = true;
    let sum = 0;
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let first = Number(arr1[i]);
        let second = Number(arr2[i]);
        if (first !== second) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
        sum += first;
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}