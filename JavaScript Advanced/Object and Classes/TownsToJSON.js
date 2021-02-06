function solve(input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        const tokens = input[i].split(/\s*\|\s*/g);
        const town = tokens[1];
        const latitude = Number(tokens[2]).toFixed(2);
        const longitude = Number(tokens[3]).toFixed(2);
        const current = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        towns.push(current);
    }

    console.log(JSON.stringify(towns));
}

solve(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
)