function solve(input) {
    const [first, second, third] = input[0].split('|');
    const pattern = /([#%$*&])(?<chars>[A-Z]+)\1/g;
    const match = pattern.exec(first);
    const chars = match.groups.chars.split('');
    const digitsPattern = /(?<char>[\d]{2}):(?<length>[\d]{2})/g;
    const obj = {};
    const digits = second.match(digitsPattern);
    for (let entry of digits) {
        let [char, length]  = entry.split(':');
        char = String.fromCharCode(char);
        console.log();
        if (!obj.hasOwnProperty(char)) {
            obj[char] = Number(length) + 1;
        }
    }
    const wordsPattern = /[A-z][^\s]+/g;
    const secondMatch = third.match(wordsPattern);
    for (const curr of chars) {
        let length = 0;
        if (obj.hasOwnProperty(curr)) {
            length = obj[curr];
        }
        for (const word of secondMatch) {
            if (word[0] === curr && length === word.length) {
                console.log(word);
            }
        }
    }
}



solve(
    [
        'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
    ]
)