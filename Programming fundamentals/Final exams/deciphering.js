function solve(input) {
    const match = input[0].match(/^[d-z{}|#]+$/g);
    if (match) {
        let decrypted = '';
        for (const char of input[0]) {
            const code = char.charCodeAt() - 3;
            decrypted += String.fromCharCode(code);
        }
        const [first, second] = input[1].split(' ');
        while (decrypted.includes(first)) {
            decrypted = decrypted.replace(first, second);
        }
        console.log(decrypted);
    } else {
        console.log('This is not the book you are looking for.');
    }
}

solve(
    [
        'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
        'ec an'
    ]
)

solve(
    [
        'arx#vkdww#qrw#sdvv',
        't l'
    ]
)