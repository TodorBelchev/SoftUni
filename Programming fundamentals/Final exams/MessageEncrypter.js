function solve(input) {
    const n = input.shift();
    for (let i = 0; i < n; i++) {
        const match = input[i].match(/([*|@])(?<name>[A-Z][a-z]{2,})\1: \[(?<first>[A-Za-z])\]\|\[(?<second>[A-Za-z])\]\|\[(?<third>[A-Za-z])\]\|$/);
        if (match) {
            console.log(`${match.groups.name}: ${match.groups.first.charCodeAt()} ${match.groups.second.charCodeAt()} ${match.groups.third.charCodeAt()}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

solve(
    [
        '3',
        '*Request*: [I]|[s]|[i]|',
        '*Taggy@: [73]|[73]|[73]|',
        'Should be valid @Taggy@: [v]|[a]|[l]|',
    ]
)

solve(
    [
        '3',
        '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid',
        '*tAGged*: [i][i][i]|',
        'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|',
    ]
)