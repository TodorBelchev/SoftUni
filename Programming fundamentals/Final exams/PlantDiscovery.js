function solve(input) {
    function getAverageRating(obj, plant) {
        let avg = 0;
        if (obj[plant].rating.length > 0) {
            avg = obj[plant].rating.reduce((acc, curr) => acc + curr) / obj[plant].rating.length;
        }
        return avg;
    }
    const n = Number(input.shift());
    const plants = {};
    for (let i = 0; i < n; i++) {
        const [plant, rarity] = input.shift().split('<->');
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = { rating: [], rarity }
        }
        plants[plant].rarity = rarity;
    }
    for (const line of input) {
        if (line === 'Exhibition') { break }
        const tokens = line.split(': ');
        const command = tokens[0];
        const [plant, r] = tokens[1].split(' - ');
        if (plants.hasOwnProperty(plant)) {
            if (command === 'Rate') {
                plants[plant].rating.push(Number(r));
            } else if (command === 'Update') {
                plants[plant].rarity = r;
            } else if (command === 'Reset') {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        } else {
            console.log('error');
        }
    }
    console.log('Plants for the exhibition:');
    Object.keys(plants)
        .sort((a, b) => {
            let result = plants[b].rarity - plants[a].rarity;
            if (result === 0) {
                let avgA = getAverageRating(plants, a);
                let avgB = getAverageRating(plants, b);
                result = avgB - avgA;
            }
            return result;
        })
        .forEach(x => console.log(`- ${x}; Rarity: ${plants[x].rarity}; Rating: ${getAverageRating(plants, x).toFixed(2)}`));
}

solve(
    [
        '3',
        'Arnoldii<->4',
        'Woodii<->7',
        'Welwitschia<->2',
        'Rate: Woodii - 10',
        'Rate: Welwitschia - 7',
        'Rate: Arnoldii - 3',
        'Rate: Woodii - 5',
        'Update: Woodii - 5',
        'Reset: Arnoldii',
        'Exhibition'
    ]
)