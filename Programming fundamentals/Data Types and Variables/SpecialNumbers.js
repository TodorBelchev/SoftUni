function solve(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let current = i.toString();
        for (let j = 0; j < current.length; j++) {
            sum += Number(current[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}