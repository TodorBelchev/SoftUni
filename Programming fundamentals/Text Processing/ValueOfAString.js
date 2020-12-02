function solve(input) {
    const text = input[0];
    const type = input[1];
    let sum = 0;

    for (const char of text) {
        const code = char.charCodeAt(0);

        if (type === 'LOWERCASE' && (code > 96 && code < 123)) {
            sum += code;
        } else if (type === 'UPPERCASE' && (code > 64 && code < 91)) {
            sum += code;
        }
    }

    console.log(`The total sum is: ${sum}`);
}

solve(
    ['HelloFromMyAwesomePROGRAM', 'LOWERCASE', '']
)