function solve(input) {
    let students = input.pop();
    const processedPerHour = input.map(Number).reduce((acc, curr) => acc += curr);
    let hours = 0;

    while (students > 0) {
        students -= processedPerHour;
        hours++;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

solve(
    ['3', '2', '5', '40']
)