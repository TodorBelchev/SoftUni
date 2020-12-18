function solve(input) {
    let hours = 1;
    const total = Number(input.shift()) + Number(input.shift()) + Number(input.shift());
    let students = input.shift();
    while (students > 0) {
        if (hours % 4 === 0) {
            hours++;
            continue;
        }
        hours++;
        students -= total;
    }
    console.log(`Time needed: ${hours - 1}h.`);
}

solve(
    ['5', '6', '4', '20']
)