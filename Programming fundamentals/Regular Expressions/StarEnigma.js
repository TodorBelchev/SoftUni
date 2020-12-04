function solve(input) {
    const messagesCount = input.shift();
    const attackedPlanets = [];
    const destroyedPlanets = [];
    for (const line of input) {
        let key = 0;
        let decoded = '';
        const keys = ['s', 't', 'a', 'r'];
        line.split('').forEach(char => {
            if (keys.includes(char.toLowerCase())) {
                key++;
            }
        });
        line.split('').forEach(char => {
            const decodedChar = String.fromCharCode(char.charCodeAt(0) - key);
            decoded += decodedChar;
        });
        const match = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/g.exec(decoded);
        if (match) {
            const name = match.groups.planet;
            const type = match.groups.type;
            if (type === 'A') {
                attackedPlanets.push(name);
            } else if (type === 'D') {
                destroyedPlanets.push(name);
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
}

solve(
    [
        '3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
)