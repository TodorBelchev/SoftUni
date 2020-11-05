function solve(arr1, arr2) {
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        for (let j = 0; j < Math.min(arr1.length, arr2.length); j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}