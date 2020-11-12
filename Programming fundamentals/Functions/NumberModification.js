function solve(input) {
    function isGreaterThanFive(num) {
        const numAsString = num + '';
        let sum = 0;

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        if (sum / numAsString.length > 5) { return true }
        return false;
    }

    while (!isGreaterThanFive(input)) {
        input += '' + 9;
    }

    console.log(input);
}

solve(5835)