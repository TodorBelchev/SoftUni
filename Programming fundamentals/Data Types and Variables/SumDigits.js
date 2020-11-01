function solve(num) {
    let arr = num.toString().split(``);
    let sum = 0;
    for (const num of arr) {
        sum += Number(num);
    }
    console.log(sum);
}