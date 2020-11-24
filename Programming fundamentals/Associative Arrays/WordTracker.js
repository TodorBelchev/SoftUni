function solve(input) {
    let searchedWords = {};
    input.shift().split(` `).forEach(word => searchedWords[word] = 0);
    input.forEach(word => {
        if (searchedWords.hasOwnProperty(word)) {
            searchedWords[word]++;
        }
    })
    const sorted = Object.entries(searchedWords).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(kvp => console.log(`${kvp[0]} - ${kvp[1]}`))
}

solve(
    [
        'this sentence', 'In', 'this', 'sentence', 'you',
        'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
        'words', 'this', 'and', 'sentence', 'because',
        'this', 'is', 'your', 'task'
    ]
)