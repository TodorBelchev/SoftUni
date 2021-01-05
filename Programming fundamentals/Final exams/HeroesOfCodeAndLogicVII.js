function solve(input) {
    const n = Number(input.shift());
    const heroes = {};
    for (let i = 0; i < n; i++) {
        const [hero, hp, mp] = input.shift().split(' ');
        if (!heroes.hasOwnProperty(hero)) {
            heroes[hero] = { hp: Number(hp), mp: Number(mp) };
        }
    }
    for (const line of input) {
        if (line === 'End') { break }
        const tokens = line.split(' - ');
        const command = tokens[0];
        const hero = tokens[1];
        if (command === 'CastSpell') {
            if (heroes[hero].mp >= Number(tokens[2])) {
                heroes[hero].mp -= Number(tokens[2]);
                console.log(`${hero} has successfully cast ${tokens[3]} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${tokens[3]}!`);
            }
        } else if (command === 'TakeDamage') {
            heroes[hero].hp -= Number(tokens[2]);
            if (heroes[hero].hp > 0) {
                console.log(`${hero} was hit for ${Number(tokens[2])} HP by ${tokens[3]} and now has ${heroes[hero].hp} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${tokens[3]}!`);
                delete heroes[hero];
            }
        } else if (command === 'Recharge') {
            let recharge = Number(tokens[2]);
            if (recharge + heroes[hero].mp >= 200) {
                recharge = 200 - heroes[hero].mp;
            }
            heroes[hero].mp += recharge;
            console.log(`${hero} recharged for ${recharge} MP!`);
        } else if (command === 'Heal') {
            let heal = Number(tokens[2]);
            if (heal + heroes[hero].hp >= 100) {
                heal = 100 - heroes[hero].hp;
            }
            heroes[hero].hp += heal;
            console.log(`${hero} healed for ${heal} HP!`);
        }
    }
    Object.keys(heroes)
        .sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b))
        .forEach(x => {
            console.log(x);
            console.log(`  HP: ${heroes[x].hp}`);
            console.log(`  MP: ${heroes[x].mp}`);
        });
}

solve(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
    ]
)