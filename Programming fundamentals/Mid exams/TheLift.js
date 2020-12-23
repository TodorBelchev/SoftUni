function solve(input) {
    let pplCount = Number(input.shift());
    const wagons = input[0].split(' ').map(Number);
    const pplStart = pplCount + wagons.reduce((acc, curr) => acc += curr);
    const maxPpl = wagons.length * 4;

    for (const index in wagons) {
        const currentFree = 4 - wagons[index];

        if (currentFree > 0 && pplCount > 3) {
            wagons[index] += currentFree;
            pplCount -= currentFree;
        } else if (currentFree > 0 && pplCount > 0) {
            wagons[index] += pplCount;
            pplCount = 0;
        }
    }

    if (maxPpl < pplStart) {
        console.log(`There isn't enough space! ${pplCount} people in a queue!
        ${wagons.join(' ')}`);
    } else if (maxPpl > pplStart) {
        console.log(`The lift has empty spots!
        ${wagons.join(' ')}`);
    } else {
        console.log(wagons.join(' '));
    }
}

solve(
    [
        "20",
        "0 2 0"
    ]
)