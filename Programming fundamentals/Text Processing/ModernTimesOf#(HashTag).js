function solve(input) {
    const words = input.split(' ');
    for (const word of words) {
        if (word.charAt(0) === '#' && word.length > 1) {
            let isValid = true;
            const wordArr = word.substring(1).split('');
            for (const char of wordArr) {
                if (/[^a-zA-Z]/.test(char)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(word.substring(1));
            }
        }
    }
}

solve(
    'Nowadays everyone uses # to tag a #speci1al word in #socialMedia'
)