function solve(input) {
    const cities = {};
    let current = input.shift();
    while (current !== 'Sail') {
        const [city, population, gold] = current.split('||');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = { population: 0, gold: 0 };
        }
        cities[city].population += Number(population);
        cities[city].gold += Number(gold);

        current = input.shift();
    }
    current = input.shift();
    while (current !== 'End') {
        const tokens = current.split('=>');
        const command = tokens[0];
        if (command === 'Plunder') {
            console.log(`${tokens[1]} plundered! ${tokens[3]} gold stolen, ${tokens[2]} citizens killed.`);
            cities[tokens[1]].population -= Number(tokens[2]);
            cities[tokens[1]].gold -= Number(tokens[3]);
            if (cities[tokens[1]].population <= 0 || cities[tokens[1]].gold <= 0) {
                console.log(`${tokens[1]} has been wiped off the map!`);
                delete cities[tokens[1]];
            }
        } else if (command === 'Prosper') {
            if (tokens[2] < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                cities[tokens[1]].gold += Number(tokens[2]);
                console.log(`${tokens[2]} gold added to the city treasury. ${tokens[1]} now has ${cities[tokens[1]].gold} gold.`);
            }
        }
        current = input.shift();
    }
    const keys = Object.keys(cities);
    if (keys.length > 0) {
        console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`);
        keys
            .sort((a, b) => cities[b].gold - cities[a].gold || a.localeCompare(b))
            .forEach(x => console.log(`${x} -> Population: ${cities[x].population} citizens, Gold: ${cities[x].gold} kg`));
    }
}

solve(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
    ]
)