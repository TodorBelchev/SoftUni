function solve(input) {
    let budget = Number(input[0]);
    const priceFlour = Number(input[1]);
    const priceEggs = priceFlour * 0.75;
    const priceMilk = (priceFlour * 1.25) / 4;
    const priceCozonac = priceFlour + priceEggs + priceMilk;
    let cozonacCount = 0;
    let eggsCount = 0;

    while (budget >= priceCozonac) {
        cozonacCount++;
        eggsCount += 3;

        if (cozonacCount % 3 === 0) {
            eggsCount -= cozonacCount - 2;
        }

        budget -= priceCozonac;

    }

    console.log(`You made ${cozonacCount} cozonacs! Now you have ${eggsCount} eggs and ${budget.toFixed(2)}BGN left.`);

}

solve(
    ['20.50', '1.25']
)