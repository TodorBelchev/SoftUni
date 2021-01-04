function solve(input) {
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        const current = input[i];
        const pattern = /^@#+(?=[A-Z])(?<barcode>[A-Za-z0-9]{6,})(?<=[A-Z])@#+$/g;
        const match = current.match(pattern);
        if (match) {
            let group;
            const digitsPattern = /\d/g;
            const digitsMatch = current.match(digitsPattern);
            if (digitsMatch) {
                group = digitsMatch.join('');
            } else {
                group = '00';
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

solve(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ]
)