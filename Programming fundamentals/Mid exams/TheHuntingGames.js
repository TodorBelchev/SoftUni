function solve(input) {
    const days = Number(input.shift());
    const playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    const water = Number(input.shift());
    const food = Number(input.shift());;
    let totalWater = days * playersCount * water;
    let totalFood = days * playersCount * food;

    for (let i = 1; i <= input.length; i++) {
        const currentEnergy = Number(input[i - 1]);
        groupEnergy -= currentEnergy;

        if (groupEnergy <= 0) {
            break;
        }

        if (i % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }

        if (i % 3 === 0) {
            totalFood -= totalFood / playersCount;
            groupEnergy *= 1.1;
        }

    }

    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}

solve(
    [
        '12', '6', '4430',
        '9.8', '5.5', '620.3',
        '840.2', '960.1', '220',
        '340', '674', '365',
        '345.5', '212', '412.12',
        '258', '496', ''
    ]
)