function solve(input) {
    const charArr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let counter = 0;
    let charCounter = 0;

    for (let i = 0; i < input; i++) {
        if (counter === 0) {
            console.log(`**${charArr[charCounter]}${charArr[charCounter + 1]}**`);
        }
        if (counter === 1) {
            console.log(`*${charArr[charCounter]}--${charArr[charCounter + 1]}*`);
        }
        if (counter === 2) {
            console.log(`${charArr[charCounter]}----${charArr[charCounter + 1]}`);
        }
        if (counter === 3) {
            console.log(`*${charArr[charCounter]}--${charArr[charCounter + 1]}*`);
        }
        charCounter += 2;
        counter++;
        if (counter === 4) { counter = 0 };
        if (charCounter >= charArr.length) { charCounter = 0 };
    }
}

solve(10)