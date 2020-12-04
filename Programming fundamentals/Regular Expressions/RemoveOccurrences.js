function solve(word, sentence) {
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '');
    }
    console.log(sentence);
}

solve(
    'ice',
    'kicegiciceeb'
)