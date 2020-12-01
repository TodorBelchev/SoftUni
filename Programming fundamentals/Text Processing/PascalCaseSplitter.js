function solve(input) {
    const inputArr = input.split('');
    let word = '';
    const output = [];
    for (const char of inputArr) {
        if (char === char.toUpperCase()) {
            output.push(word);
            word = '';
            word += char;
        } else {
            word += char;
        }
    }
    output.push(word);
    output.shift();
    console.log(output.join(', '));
}

solve(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
)