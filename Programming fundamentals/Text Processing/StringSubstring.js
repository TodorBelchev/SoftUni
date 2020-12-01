function solve(word, sentence) {
    const sentenceArr = sentence.toLowerCase().split(' ');
    word = word.toLowerCase();
    let isFound = false;
    for (const w of sentenceArr) {
        if (w === word) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve(
    'javascript',
    'JavaScript is the best programming language'
)