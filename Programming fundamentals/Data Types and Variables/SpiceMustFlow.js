function solve(startingYield) {
    let gathered = 0;
    let daysCount = 0;
    while (startingYield >= 100) {
        gathered += startingYield;
        if (gathered < 26) {
            gathered = 0;
        } else {
            gathered -= 26;
        }
        daysCount++;
        startingYield -= 10;
    }
    if (gathered < 26) {
        gathered = 0;
    } else {
        gathered -= 26;
    }
    console.log(daysCount);
    console.log(gathered);
}