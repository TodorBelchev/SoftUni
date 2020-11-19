function solve(input) {
    let movies = [];
    for (const line of input) {
        const tokens = line.split(` `);
        const addIndex = tokens.indexOf(`addMovie`);
        const directedByIndex = tokens.indexOf(`directedBy`);
        const onDateIndex = tokens.indexOf(`onDate`)

        if (addIndex > -1) {
            const name = tokens.slice(addIndex + 1).join(` `);
            movies.push({ name })
        }

        if (directedByIndex > -1) {
            const name = tokens.slice(0, directedByIndex).join(` `);
            const director = tokens.slice(directedByIndex + 1).join(` `);
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        }

        if (onDateIndex > -1) {
            const name = tokens.slice(0, onDateIndex).join(` `);
            const date = tokens.slice(onDateIndex + 1).join(` `);
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    }
    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)