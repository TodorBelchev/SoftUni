function solve(input) {
    let heroes = [];
    for (const line of input) {
        const tokens = line.split(` / `);
        const name = tokens[0];
        const level = tokens[1];
        const items = tokens[2].split(`, `).sort((a, b) => a.localeCompare(b));
        heroes.push({
            Hero: name,
            level,
            items
        })
    }
    let sorted = heroes.sort((a, b) => a.level - b.level);
    sorted.forEach(h => {
        const name = h.Hero;
        const level = h.level;
        const items = h.items;

        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items.join(`, `)}`);
    });
}

solve(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)