function solve(words, sentence) {
    const wordsArr = words.split(', ');
    const sentenceArr = sentence.split(' ');
    for (const word of wordsArr) {
        for (const index in sentenceArr) {
            if (sentenceArr[index].charAt(0) === '*' && sentenceArr[index].length === word.length) {
                sentenceArr[index] = word;
            }
        }
    }
    console.log(sentenceArr.join(' '));
}

solve(
    'great',
    'softuni is ***** place for learning new programming languages'
)