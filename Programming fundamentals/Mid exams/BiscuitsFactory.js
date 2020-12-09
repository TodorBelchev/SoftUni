function solve(input) {
    const countPerWorker = Number(input[0]);
    const workersCount = Number(input[1]);
    const competeFactory = Number(input[2]);

    let production = 0;

    for (let i = 1; i <= 30; i++) {
        let productionPerDay = countPerWorker * workersCount;

        if (i % 3 === 0) {
            productionPerDay = Math.floor(productionPerDay * 0.75);
        }

        production += productionPerDay;
    }

    const percent = (Math.abs(competeFactory - production) / competeFactory) * 100;

    console.log(`You have produced ${production} biscuits for the past month.`);

    if (production > competeFactory) {
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }
    
}

solve(
    ['65', '12', '26000']
)