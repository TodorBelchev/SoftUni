function solve(input) {
    const friendsList = input.shift().split(', ');
    for (const line of input) {

        if (line === 'Report') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        let index;

        switch (command) {
            case 'Blacklist':
                const name = tokens[1];

                if (friendsList.includes(name)) {
                    const index = friendsList.indexOf(name);
                    friendsList[index] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                } else {
                    console.log(`${name} was not found.`);
                }

                break;
            case 'Error':
                index = Number(tokens[1]);

                if (friendsList[index] !== 'Blacklisted' && friendsList[index] !== 'Lost') {
                    console.log(`${friendsList[index]} was lost due to an error.`);
                    friendsList[index] = 'Lost';
                }

                break;
            case 'Change':
                index = Number(tokens[1]);
                const newName = tokens[2];

                if (index >= 0 && index < friendsList.length) {
                    console.log(`${friendsList[index]} changed his username to ${newName}.`);
                    friendsList[index] = newName;
                }

                break;
        }

    }

    let blacklistedCounter = 0;
    let lostCounter = 0;

    for (const name of friendsList) {
        if (name === 'Blacklisted') {
            blacklistedCounter++;
        }
        if (name === 'Lost') {
            lostCounter++;
        }
    }

    console.log(`Blacklisted names: ${blacklistedCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(friendsList.join(' '));
}

solve(
    [
        'Mike, John, Eddie, William',
        'Blacklist Mike',
        'Error 1',
        'Blacklist Eddie',
        'Error 3',
        'Report'
    ]
)