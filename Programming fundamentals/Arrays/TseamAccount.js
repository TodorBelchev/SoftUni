function solve(input) {
    const games = input.shift().split(' ');

    for (const line of input) {
        const [command, game] = line.split(' ');
        let index;

        if (command === 'Install' && !games.includes(game)) {
            games.push(game);
        } else if (command === 'Uninstall' && games.includes(game)) {
            index = games.indexOf(game);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(game)) {
            index = games.indexOf(game);
            games.push(games.splice(index, 1));
        } else if (command === 'Expansion') {
            const [update, exp] = game.split('-');

            if (games.includes(update)) {
                index = games.indexOf(update);
                games.splice(index + 1, 0, `${update}:${exp}`);
            }
            
        }

    }

    return games.join(' ')
}

console.log(solve(
    [
        'CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!'
    ]
))