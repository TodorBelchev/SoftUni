function solve(input) {
    const countries = {};
    input.forEach(line => {
        const [country, town, price] = line.split(' > ');
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = price;
        } else if (countries[country].hasOwnProperty(town) && price < countries[country][town]) {
            countries[country][town] = price;
        }
    });
    Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0])).forEach(kvp => {
        const obj = kvp[1];
        const currentCountry = kvp[0];
        let output = `${currentCountry} ->`;
        Object.entries(obj).sort((a, b) => a[1] - b[1]).forEach(town => output += ` ${town[0]} -> ${town[1]}`);
        console.log(output);
    });
}

solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
)