function solve(input) {
    const caloriesObj = {};
    for (let i = 0; i < input.length; i += 2) {
        const name = input[i];
        const calories = Number(input[i + 1]);
        caloriesObj[name] = calories;
    }
    console.log(caloriesObj);
}