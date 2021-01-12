function solve(input) {
    const pattern = /([=/])(?<word>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(input);
    let travelPoints = 0;
    const destinations = []
    while(match) {
        const destination = match.groups.word;
        destinations.push(destination);
        travelPoints += destination.length;

        match = pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve(
    '=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='
)