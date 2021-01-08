function solve(input) {
    const followers = {};
    for (const line of input) {
        if (line === 'Log out') { break }
        const tokens = line.split(': ');
        const command = tokens[0];
        if (command === 'New follower') {
            if (!followers.hasOwnProperty(tokens[1])) {
                followers[tokens[1]] = { likes: 0, comments: 0 };
            }
        } else if (command === 'Like') {
            if (!followers.hasOwnProperty(tokens[1])) {
                followers[tokens[1]] = { likes: Number(tokens[2]), comments: 0 };
            } else {
                followers[tokens[1]].likes += Number(tokens[2]);
            }
        } else if (command === 'Comment') {
            if (!followers.hasOwnProperty(tokens[1])) {
                followers[tokens[1]] = { likes: 0, comments: 1 };
            } else {
                followers[tokens[1]].comments++;
            }
        } else if (command === 'Blocked') {
            if (!followers.hasOwnProperty(tokens[1])) {
                console.log(`${tokens[1]} doesn't exist.`);
            } else {
                delete followers[tokens[1]];
            }
        }
    }
    const keys = Object.keys(followers);
    console.log(`${keys.length} followers`);
    keys.sort((a, b) => (followers[b].comments + followers[b].likes) - (followers[a].comments + followers[a].likes) || a.localeCompare(b))
        .forEach(x => console.log(`${x}: ${followers[x].comments + followers[x].likes}`));
}

solve(
    [
        'New follower: gosho',
        'Like: gosho: 5',
        'Comment: gosho',
        'New follower: gosho',
        'New follower: tosho',
        'Comment: gosho',
        'Comment: tosho',
        'Comment: pesho',
        'Log out',
    ]
)

solve(
    [
        'Like: A: 3',
        'Comment: A',
        'New follower: B',
        'Blocked: A',
        'Comment: B',
        'Like: C: 5',
        'Like: D: 5',
        'Log out',
    ]
)