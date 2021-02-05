function solve(input) {
    const juices = {};
    const bottles = {};
    for (const line of input) {
        const [juice, quantity] = line.split(' => ');
        let current = {};

        if (!Object.values(juices).map(x => x.juice).includes(juice)) {
            current = {
                juice,
                quantity: Number(quantity)
            }
            juices[juice] = current;
        } else {
            current = juices[juice];
            current.quantity += Number(quantity);
        }

        let currentBottles = 0;

        while (current.quantity >= 1000) {
            currentBottles++;
            current.quantity -= 1000;
        }

        if (!Object.values(bottles).map(x => x.juice).includes(juice) && currentBottles !== 0) {
            current = {
                juice,
                bottles: currentBottles
            }
            bottles[juice] = current;
        } else if (Object.values(bottles).map(x => x.juice).includes(juice)) {
            current = bottles[juice];
            current.bottles += currentBottles;
        }
        
    }

    for (const juice of Object.entries(bottles)) {
        console.log(`${juice[0]} => ${juice[1].bottles}`);
    }

}

solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
)