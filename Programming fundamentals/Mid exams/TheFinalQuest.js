function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) { return true }
        return false;
    }

    const words = input.shift().split(' ');

    for (const line of input) {

        if (line === 'Stop') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        let index;
        let word1;
        let word2

        switch (command) {
            case 'Delete':
                index = Number(tokens[1]);

                if (isValidIndex(index, words)) {
                    words.splice(index + 1, 1);
                }

                break;
            case 'Swap':
                word1 = tokens[1];
                word2 = tokens[2];

                if (words.includes(word1) && words.includes(word2)) {
                    const firstIndex = words.indexOf(word1);
                    const secondIndex = words.indexOf(word2);
                    const temp = words[firstIndex];
                    words[firstIndex] = words[secondIndex];
                    words[secondIndex] = temp;
                }

                break;
            case 'Put':
                word1 = tokens[1];
                index = Number(tokens[2]) - 1;

                if (index >= 0 && index <= words.length) {
                    words.splice(index, 0, word1);
                }

                break;
            case 'Sort':
                words.sort((a, b) => b.localeCompare(a));
                break;
            case 'Replace':
                word1 = tokens[1];
                word2 = tokens[2];

                if (words.includes(word2)) {
                    index = words.indexOf(word2);
                    words[index] = word1;
                }

                break;
        }
    }

    console.log(words.join(' '));
}

solve(
    [
        'Congratulations! You last also through the have challenge!',
        'Swap have last',
        'Replace made have',
        'Delete 2',
        'Put it 4',
        'Stop',
        ''
    ]
)