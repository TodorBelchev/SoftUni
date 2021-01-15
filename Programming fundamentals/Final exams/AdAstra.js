function solve(input) {
    const pattern = /([|#])(?<product>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let match = input[0].match(pattern);
    let product;
    let date;
    let calories;
    let total = 0;
    if (match) {
        for (const m of match) {
            const tokens = m.split(m[0]);
            product = tokens[1];
            date = tokens[2];
            calories = Number(tokens[3]);
            total += calories;
        }
    }
    const days = Math.floor(total / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    if (match) {
        for (const m of match) {
            const tokens = m.split(m[0]);
            product = tokens[1];
            date = tokens[2];
            calories = Number(tokens[3]);
            console.log(`Item: ${product}, Best before: ${date}, Nutrition: ${calories}`);
        }
    }
}

solve(
    [
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
)