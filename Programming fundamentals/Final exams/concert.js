function solve(input) {
    const bands = {};
    const playTime = {};
    for (const line of input) {
        if (line === 'start of concert') { break }
        const [command, name, rest] = line.split('; ');
        if (command === 'Play') {
            if (!playTime.hasOwnProperty(name)) {
                playTime[name] = 0;
            }
            playTime[name] += Number(rest);
        } else if (command === 'Add') {
            const names = rest.split(', ');
            if (!bands.hasOwnProperty(name)) {
                bands[name] = [];
            }
            names.forEach(n => bands[name].includes(n) ? 'none' : bands[name].push(n));
        }
    }
    console.log(`Total time: ${Object.values(playTime).reduce((acc, curr) => acc + curr)}`);
    Object.keys(playTime).sort((a, b) => playTime[b] - playTime[a]).forEach(x => console.log(`${x} -> ${playTime[x]}`));
    const finalCommand = input[input.length - 1];
    console.log(`${finalCommand}`);
    bands[finalCommand].forEach(x => console.log(`=> ${x}`));
}

solve(
    [
        'Play; The Beatles; 2584',
        'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
        'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
        'Play; Eagles; 1869',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
        'Play; The Rolling Stones; 4239',
        'start of concert',
        'The Rolling Stones',
    ]
)

solve(
    [
        'Add; The Beatles; John Lennon, Paul McCartney',
        'Add; The Beatles; Paul McCartney, George Harrison',
        'Add; The Beatles; George Harrison, Ringo Starr',
        'Play; The Beatles; 3698',
        'Play; The Beatles; 3828',
        'start of concert',
        'The Beatles',
    ]
)