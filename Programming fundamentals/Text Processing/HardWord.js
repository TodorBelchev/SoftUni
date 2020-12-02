function solve(arr) {
    const sentenceArr = arr[0].split(' ');
    const output = [];
    for (const word of sentenceArr) {
        if (word.charAt(0) === '_') {
            for (const w of arr[1]) {
                if (word.length === w.length) {
                    output.push(w);
                    break;
                }
            }
        } else {
            output.push(word);
        }
    }
    console.log(output.join(' '));
}

solve(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)