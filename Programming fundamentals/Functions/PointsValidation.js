function solve(input) {
    function findDistance(x, y, z, w) {
        return Math.sqrt(Math.pow(x - (z || 0), 2) + Math.pow(y - (w || 0), 2))
    }

    const x1 = input[0];
    const y1 = input[1];
    const x2 = input[2];
    const y2 = input[3];
    const firstDistance = findDistance(x1, y1);
    const secondDistance = findDistance(x2, y2);
    const thirdDistance = findDistance(x1, y1, x2, y2);

    if (Number.isInteger(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

solve(
    [2, 1, 1, 1]
)