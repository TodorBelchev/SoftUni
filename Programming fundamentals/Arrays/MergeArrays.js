function solve(arr1, arr2) {
    let final = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i % 2 === 0) {
            final.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            final.push(arr1[i] + arr2[i]);
        }
    }
    console.log(final.join(` - `));
}