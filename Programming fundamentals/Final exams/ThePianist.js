function solve(input) {
    const pieces = {};
    const n = input.shift();
    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split('|');
        if (!pieces.hasOwnProperty()) {
            pieces[piece] = { composer, key };
        }
    }
    for (const line of input) {
        if (line === 'Stop') { break }
        const tokens = line.split('|');
        const command = tokens[0];
        if (command === 'Add') {
            if (pieces.hasOwnProperty(tokens[1])) {
                console.log(`${tokens[1]} is already in the collection!`);
            } else {
                pieces[tokens[1]] = { composer: tokens[2], key: tokens[3] };
                console.log(`${tokens[1]} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(tokens[1])) {
                delete pieces[tokens[1]];
                console.log(`Successfully removed ${tokens[1]}!`);
            } else {
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (pieces.hasOwnProperty(tokens[1])) {
                pieces[tokens[1]].key = tokens[2];
                console.log(`Changed the key of ${tokens[1]} to ${tokens[2]}!`);
            } else {
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
            }
        }
    }
    Object.keys(pieces)
        .sort((a, b) => a.localeCompare(b) || pieces[a].composer.localeCompare(pieces[b].composer))
        .forEach(x => console.log(`${x} -> Composer: ${pieces[x].composer}, Key: ${pieces[x].key}`));
}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)