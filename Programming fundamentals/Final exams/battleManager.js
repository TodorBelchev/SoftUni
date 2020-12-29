function solve(input) {
    let manager = {};
    for (const line of input) {
        if (line === 'Results') { break }
        const tokens = line.split(':');
        const command = tokens[0];
        if (command === 'Add') {
            if (!manager.hasOwnProperty(tokens[1])) {
                manager[tokens[1]] = { health: 0, energy: Number(tokens[3]) };
            }
            manager[tokens[1]].health += Number(tokens[2]);
        } else if (command === 'Attack') {
            if (manager.hasOwnProperty(tokens[1]) && manager.hasOwnProperty(tokens[2])) {
                manager[tokens[2]].health -= Number(tokens[3]);
                manager[tokens[1]].energy--;
                if (manager[tokens[2]].health <= 0) {
                    console.log(`${tokens[2]} was disqualified!`);
                    delete manager[tokens[2]];
                }
                if (manager[tokens[1]].energy <= 0) {
                    console.log(`${tokens[1]} was disqualified!`);
                    delete manager[tokens[1]];
                }
            }
        } else if (command === 'Delete') {
            if (tokens[1] === 'All') {
                manager = {};
            } else {
                delete manager[tokens[1]];
            }
        }
    }
    const keys = Object.keys(manager);
    console.log(`People count: ${keys.length}`);
    keys
        .sort((a, b) => manager[b].health - manager[a].health || a.localeCompare(b))
        .forEach(x => console.log(`${x} - ${manager[x].health} - ${manager[x].energy}`));
}
