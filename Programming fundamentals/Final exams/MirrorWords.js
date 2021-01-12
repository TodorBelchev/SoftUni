function solve(input) {
    const regex = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let match = regex.exec(input[0]);
    let counter = 0;
    const mirrors = [];
    while (match) {
        counter++;
        const first = match.groups.first;
        const second = match.groups.second.split('').reverse().join('');
        if (first === second) {
            mirrors.push(`${first} <=> ${match.groups.second}`);
        }
        match = regex.exec(input[0]);
    }

    if (counter > 0) {
        console.log(`${counter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if (mirrors.length > 0) {
        console.log('The mirror words are:');
        console.log(`${mirrors.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }
}

solve(
    ['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
)