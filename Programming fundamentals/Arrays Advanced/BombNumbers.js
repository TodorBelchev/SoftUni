function solve(arr, arr2) {
    let [number, power] = [...arr2];
    let sum = 0;
    while (arr.includes(number)) {
        let index = arr.indexOf(number);
        let upperEnd = index + power;
        let lowerEnd = index - power;
        if (lowerEnd < 0) {
            lowerEnd = 0;
        }
        if (upperEnd > arr.length - 1) {
            upperEnd = arr.length - 1;
        }
        let range = upperEnd - lowerEnd;
        arr.splice(lowerEnd, range + 1);
    }
    arr.forEach(num => sum += num);
    console.log(sum);
}