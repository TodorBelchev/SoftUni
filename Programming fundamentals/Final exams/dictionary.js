function solve(input) {
    const words = input[0].split(' | ');
    const dictionary = {};
    for (const line of words) {
        const [word, definition] = line.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    }
    const checkFor = input[1].split(' | ');
    for (const check of checkFor) {
        if (dictionary.hasOwnProperty(check)) {
            console.log(check);
            dictionary[check]
                .sort((a, b) => b.length - a.length)
                .forEach(x => console.log(x));
        }
    }
    const endCommand = input[2];
    if (endCommand === 'End') {
        return;
    } else if (endCommand === 'List') {
        console.log(Object.keys(dictionary).sort((a, b) => a.localeCompare(b)).join(' '));
    }
}

solve(
    [
        'programmer: an animal, which turns coffee into code | developer: a magician',
        'Pesho | Gosho',
        'List'
    ]
)

solve(
    [
        'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
        'bit | code | tackle',
        'End'
    ]
)