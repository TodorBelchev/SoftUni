function solve(input) {
    const shelves = {};

    for (const line of input) {

        if (line.includes(' -> ')) {
            const [id, genre] = line.split(' -> ');

            if (!shelves.hasOwnProperty(id)) {
                shelves[id] = { [genre]: [] };
            }
        }

        if (line.includes(': ')) {
            const [title, rest] = line.split(': ')
            const [author, genre] = rest.split(', ');

            const kvp = Object.entries(shelves);
            kvp.forEach(x => {
                if (x[1].hasOwnProperty(genre)) {
                    shelves[x[0]][genre].push(`${title}: ${author}`)
                }
            });
        }
    }

    Object.entries(shelves)
        .sort((a, b) => Object.values(b[1])[0].length - Object.values(a[1])[0].length)
        .forEach(x => {
            console.log(`${x[0]} ${Object.keys(x[1])[0]}: ${Object.values(x[1])[0].length}`);
            Object.entries(x[1]).forEach(e => {
                e[1].sort((a, b) => a.localeCompare(b))
                    .forEach(el => {
                        const [name, author] = el.split(': ');
                        console.log(`--> ${name}: ${author}`);
                    });
            });
        });
}

solve(
    [
        '1 -> history',
        '1 -> action',
        'Death in Time: Criss Bell, mystery',
        '2 -> mystery',
        '3 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Hurting Secrets: Dustin Bolt, action',
        'Future of Dawn: Aiden Rose, sci-fi',
        'Lions and Rats: Gabe Roads, history',
        '2 -> romance',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi',
        'Pilots of Stone: Brook Jay, history'
    ]
)