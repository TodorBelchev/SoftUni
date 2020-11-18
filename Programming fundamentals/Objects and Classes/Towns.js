function solve(input) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = Number(latitude);
            this.longitude = Number(longitude);
        }
    }
    let towns = [];
    for (const line of input) {
        let [name, latitude, longitude] = line.split(` | `)
        towns.push(new Town(name, latitude, longitude));
    }
    towns.forEach((t) => console.log(`{ town: '${t.name}', latitude: '${t.latitude.toFixed(2)}', longitude: '${t.longitude.toFixed(2)}' }`));
}

solve(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
)