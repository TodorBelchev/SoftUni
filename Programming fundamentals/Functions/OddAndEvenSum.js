function solve(num) {
    let numAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let current = Number(numAsString[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}