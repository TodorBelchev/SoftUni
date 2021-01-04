function solve(input) {
    const coolEmojis = [];
    let counter = 0;
    const emojiPattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    const digitsPattern = /\d/g;
    const digitsMatch = input[0].match(digitsPattern);
    const threshold = digitsMatch.reduce((acc, curr) => acc * curr);
    console.log(`Cool threshold: ${threshold}`);
    let emojiMatch = emojiPattern.exec(input[0]);
    while (emojiMatch) {
        counter++;
        let current = 0;
        for (const char of emojiMatch.groups.emoji) {
            current += char.charCodeAt();
        }
        if (current > threshold) {
            coolEmojis.push(emojiMatch[0])
        }
        emojiMatch = emojiPattern.exec(input[0]);
    }
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    if (coolEmojis.length > 0) {
        console.log(coolEmojis.join('\r\n'));
    }
}

solve(
    [
        '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
    ]
)