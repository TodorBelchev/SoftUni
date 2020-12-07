function solve(input) {
    const demonsInput = input[0].split(/,\s*/).sort((a, b) => a.localeCompare(b));
    const demons = [];
    for (let demon of demonsInput) {
        const namePattern = /[^0-9+\-\*\/\.]/g;
        const dmgPattern = /[\-+]?\d+\.?\d*/g;
        let health = 0;
        let dmg = 0;
        demon = demon.trim();
        while (match = namePattern.exec(demon)) {
            health += match[0].charCodeAt(0);
        }
        while (dmgMatch = dmgPattern.exec(demon)) {
            dmg += Number(dmgMatch[0]);
        }
        demon.split('').forEach(char => {
            if (char === '*') {
                dmg *= 2;
            } else if (char === '/') {
                dmg /= 2;
            }
        })
        const obj = {
            name: demon,
            health,
            dmg
        }
        demons.push(obj);
    }
    demons.forEach(demon => {
        console.log(`${demon.name} - ${demon.health} health, ${demon.dmg.toFixed(2)} damage`)
    })
}

solve(
    ['M3ph1st0**, Azazel']
)