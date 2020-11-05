function solve(arr) {
    let line = ``;
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (current <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            line += current + ` `;
        }
    }
    line += arr[arr.length - 1];
    console.log(line);
}