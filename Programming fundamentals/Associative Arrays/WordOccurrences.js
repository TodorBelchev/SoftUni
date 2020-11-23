function solve(input) {
    let words = {};
    for (const word of input) {
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    const sorted = Object.entries(words)
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .forEach(x => console.log(`${x[0]} -> ${x[1]} times`))
}

solve(
    [
        "Here", "is", "the", "first",
        "sentence", "Here", "is",
        "another", "sentence", "And",
        "finally", "the", "third", "sentence"
    ]
)