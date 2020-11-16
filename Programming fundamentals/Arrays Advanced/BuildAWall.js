function solve(arr) {
    arr = arr.map(Number);
    let total = [];
    while (arr.length > 0) {
        let day = 0;
        arr = arr.filter(el => el !== 30);
        for (const index in arr) {
            day += 195;
            arr[index] = arr[index] + 1;
        }
        if (arr.length > 0) {
            total.push(day);
        }
    }
    console.log(total.join(`, `));
    let sum = 0;
    total.forEach(el => sum += Number(el));
    console.log(`${sum * 1900} pesos`);
}