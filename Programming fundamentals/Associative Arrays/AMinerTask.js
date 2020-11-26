function solve(input) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = Number(input[i + 1]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }
    Object.keys(resources).forEach(key => console.log(`${key} -> ${resources[key]}`));
}

solve(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
)