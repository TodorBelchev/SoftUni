function solve(input) {
    const keys = input.shift().split(' ').map(Number);
    for (const line of input) {
        let index = 0;
        if (line === 'find') { break }
        let decrypted = '';
        for (const char of line) {
            const code = char.charCodeAt();
            decrypted += String.fromCharCode(code - keys[index]);
            index++;
            if (index >= keys.length) {
                index = 0;
            }
        }
        const typeArr = decrypted.split('&');
        const coordinatesArr = decrypted.split('<');

        console.log(`Found ${typeArr[1]} at ${coordinatesArr[1].substring(0, coordinatesArr[1].length - 1)}`);
    }
}

solve(
    [
        '1 2 1 3',
        "ikegfp'jpne)bv=41P83X@",
        "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
        'find'
    ]
)