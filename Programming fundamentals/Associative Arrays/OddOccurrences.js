function solve(input) {
    let wordsMap = new Map();
    input.toLowerCase().split(' ').forEach(word => {
        if (!wordsMap.get(word)) {
            wordsMap.set(word, 0);
        }
        wordsMap.set(word, wordsMap.get(word) + 1);
    });

    let output = '';

    Array.from(wordsMap.entries()).forEach(kvp => {
        if (kvp[1] % 2 !== 0) {
            output += kvp[0] + ' ';
        }
    });

    console.log(output);
}

solve(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)