function solve(age) {
    let ageType = ``;
    if (age >= 66) {
        ageType = `elder`;
    } else if (age >= 20) {
        ageType = `adult`;
    } else if (age >= 14) {
        ageType = `teenager`;
    } else if (age >= 3) {
        ageType = `child`;
    } else if (age >= 0) {
        ageType = `baby`;
    } else {
        ageType = `out of bounds`;
    }
    console.log(ageType);
}