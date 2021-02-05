function solve(input) {
    const heroes = [];

    for (const line of input) {
        const tokens = line.split(' / ');
        const name = tokens[0];
        const level = Number(tokens[1]);
        const items = tokens[2] ? tokens[2].split(', ') : [];
        const hero = {
            name,
            level,
            items
        }
        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

solve(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)