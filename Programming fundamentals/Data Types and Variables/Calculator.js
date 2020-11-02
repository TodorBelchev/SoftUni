function solve(num, operator, num2) {
    let result = 0;
    switch (operator) {
        case `+`:
            result = num + num2;
            break;
        case `-`:
            result = num - num2;
            break;
        case `*`:
            result = num * num2;
            break;
        case `/`:
            result = num / num2;
            break;
        case `%`:
            result = num % num2;
            break;
    }
    console.log(result.toFixed(2));
}