function solve(arr, rotations) {
    rotations = rotations % arr.length;
    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(` `));
}