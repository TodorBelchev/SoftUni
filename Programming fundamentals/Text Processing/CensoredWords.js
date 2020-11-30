function solve(input, word) {
    let replacement = '';
    word.split('').forEach(char => replacement += '*');
    while (input.includes(word)) {
        input = input.replace(word, replacement);
    }
    console.log(input);
}

solve(
    "A small sentence with some words", "small"
)