function solve(sentence, searchedWord) {
    const arr = sentence.split(' ');
    let counter = 0;

    for (const word of arr) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

solve(
    "This is a word and it also is a sentence",
    "is"
)