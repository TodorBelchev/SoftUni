function solve(input) {
    const text = input[0];
    const chars = {};
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!chars.hasOwnProperty(char)) {
            chars[char] = [];
        }
        chars[char].push(i);
    }
    Object.keys(chars).forEach(x => console.log(`${x}:${chars[x].join('/')}`));
}

solve(
    [ 'abababa', '' ]
)