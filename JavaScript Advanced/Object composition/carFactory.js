function solve({ model, power, color, carriage, wheelsize}) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }
    let engine;
    if (power <= 90) {
        engine = engines.small;
    } else if (power <= 120) {
        engine = engines.normal;
    } else {
        engine = engines.monster;
    }
    let size = wheelsize;
    if (wheelsize % 2 === 0) {
        size--;
    }
    
    const car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: [size, size, size, size]
    }

    return car;
}
