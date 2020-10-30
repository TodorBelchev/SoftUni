function solve(year, month, day) {
    let thisDay = new Date(year, month -= 1, day += 1);
    console.log(`${thisDay.getFullYear()}-${thisDay.getMonth() + 1}-${thisDay.getDate()}`);
}