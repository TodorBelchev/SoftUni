function solve(num) {
    let counter = num / 10;
    let bar = `[`;
    for (let i = 0; i < 10; i++) {
        if (counter > 0) {
            bar += `%`;
        } else {
            bar += `.`
        }
        counter--;
    }
    bar += `]`;
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(bar);
    } else {
        console.log(`${num}% ` + bar);
        console.log(`Still loading...`);
    }
}