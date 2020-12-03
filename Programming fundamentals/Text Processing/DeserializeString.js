function solve(input) {
    const word = [];
    for (const line of input) {
        if (line === 'end') { break }
        const [letter, indexes] = line.split(':');
        const indexArr = indexes.split('/');
        for (const index of indexArr) {
            word[index] = letter;
        }
    }
    console.log(word.join(''));
}

solve(
    [ 'a:0/2/4/6', 'b:1/3/5', 'end' ]
)