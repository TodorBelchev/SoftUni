function solve(num) {
    let sum = 0;
    let isSame = true;
    const numAsString = num.toString();
    for (let i = 0; i < numAsString.length - 1; i++) {
        const current = numAsString[i];
        const next = numAsString[i + 1];
        if (current !== next) {
            isSame = false;
        }
        sum += Number(current);
    }
    sum += Number(numAsString[numAsString.length - 1]);
    console.log(isSame);
    console.log(sum);
}

solve(
    1234
)